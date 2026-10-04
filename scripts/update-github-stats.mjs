#!/usr/bin/env node
/**
 * Refresh GitHub stats (stars, last commit, archived state) for every
 * resource in the library and write them to src/data/github-stats.json.
 *
 *   npm run update:github                     # all resources
 *   npm run update:github -- --only noisy-nodes,Delt06/urp-toon-shader
 *   npm run update:github -- --dry-run        # print, don't write
 *
 * Authentication is optional but recommended (60 → 5,000 requests/hour):
 *   GITHUB_TOKEN=ghp_… npm run update:github
 * (GH_TOKEN works too, as does an authenticated `gh` CLI — the script asks
 * `gh auth token` when no variable is set. GITHUB_API_URL overrides the API
 * base URL.)
 *
 * When the GitHub API can't be reached, the last-commit date is read with a
 * shallow `git clone` instead, and the previous star count is kept.
 *
 * Run it manually whenever you want fresh numbers, then commit the JSON.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const RESOURCES = join(ROOT, 'src/content/resources');
const OUT = join(ROOT, 'src/data/github-stats.json');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const onlyArg = args.find((a) => a.startsWith('--only'));
const only = onlyArg
  ? (onlyArg.includes('=') ? onlyArg.split('=')[1] : args[args.indexOf(onlyArg) + 1] ?? '')
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
  : [];

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  try {
    return execFileSync('gh', ['auth', 'token'], { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return undefined;
  }
}

/** Read `repo: owner/name` from each resource's frontmatter. */
function readResources() {
  const out = [];
  for (const slug of readdirSync(RESOURCES).sort()) {
    const file = join(RESOURCES, slug, 'index.md');
    if (!existsSync(file)) continue;
    const fm = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const repo = fm.match(/^repo:\s*["']?([\w.-]+\/[\w.-]+)["']?\s*$/m)?.[1];
    if (!repo) {
      console.warn(`! ${slug}: no \`repo:\` in frontmatter — skipped`);
      continue;
    }
    out.push({ slug, repo });
  }
  return out;
}

const API = (process.env.GITHUB_API_URL ?? 'https://api.github.com').replace(/\/$/, '');
const TOKEN = token();
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'open-tech-art-stats',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function api(path) {
  const res = await fetch(`${API}${path}`, {
    headers,
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) {
    const remaining = res.headers.get('x-ratelimit-remaining');
    const hint = remaining === '0' ? ' (rate limited — set GITHUB_TOKEN)' : '';
    throw new Error(`GitHub API ${res.status} for ${path}${hint}`);
  }
  return res.json();
}

async function fromApi(repo) {
  const info = await api(`/repos/${repo}`);
  const [commit] = await api(
    `/repos/${repo}/commits?per_page=1&sha=${encodeURIComponent(info.default_branch)}`,
  );
  return {
    canonical: info.full_name,
    stars: info.stargazers_count,
    forks: info.forks_count,
    archived: info.archived,
    defaultBranch: info.default_branch,
    lastCommit: new Date(commit?.commit?.committer?.date ?? info.pushed_at).toISOString(),
  };
}

/** Fallback: shallow, blob-less clone and read the HEAD commit date. */
function fromGit(repo) {
  const dir = mkdtempSync(join(tmpdir(), 'ota-'));
  try {
    execFileSync(
      'git',
      ['clone', '--quiet', '--depth', '1', '--filter=blob:none', '--no-checkout', `https://github.com/${repo}.git`, dir],
      { stdio: ['ignore', 'ignore', 'pipe'], env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } },
    );
    const date = execFileSync('git', ['-C', dir, 'log', '-1', '--format=%cI']).toString().trim();
    const branch = execFileSync('git', ['-C', dir, 'rev-parse', '--abbrev-ref', 'HEAD']).toString().trim();
    return { lastCommit: new Date(date).toISOString(), defaultBranch: branch };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : { repos: {} };
const repos = { ...previous.repos };
const now = new Date().toISOString();
const resources = readResources().filter(
  (r) => only.length === 0 || only.includes(r.slug.toLowerCase()) || only.includes(r.repo.toLowerCase()),
);

console.log(
  `Updating ${resources.length} repositories (${TOKEN ? 'authenticated' : 'unauthenticated'} GitHub API, git fallback)…\n`,
);

const rows = [];
let failures = 0;
for (const { slug, repo } of resources) {
  const prev = previous.repos[repo] ?? {};
  let entry;
  let source;
  try {
    const d = await fromApi(repo);
    if (d.canonical.toLowerCase() !== repo.toLowerCase()) {
      console.warn(`! ${slug}: repository moved to ${d.canonical} — update \`repo:\` in its frontmatter`);
    }
    entry = {
      stars: d.stars,
      forks: d.forks,
      lastCommit: d.lastCommit,
      defaultBranch: d.defaultBranch,
      archived: d.archived,
      starsCheckedAt: now,
      commitCheckedAt: now,
    };
    source = 'api';
  } catch (apiErr) {
    try {
      const d = fromGit(repo);
      entry = {
        stars: prev.stars ?? null,
        forks: prev.forks ?? null,
        lastCommit: d.lastCommit,
        defaultBranch: d.defaultBranch,
        archived: prev.archived ?? false,
        starsCheckedAt: prev.starsCheckedAt ?? null,
        commitCheckedAt: now,
      };
      source = `git (stars kept: ${apiErr.message})`;
    } catch (gitErr) {
      failures++;
      console.error(`✗ ${slug} (${repo}): ${apiErr.message}; git: ${gitErr.message.split('\n')[0]}`);
      continue;
    }
  }
  repos[repo] = entry;
  const delta =
    typeof prev.stars === 'number' && typeof entry.stars === 'number' && entry.stars !== prev.stars
      ? ` (${entry.stars - prev.stars > 0 ? '+' : ''}${entry.stars - prev.stars})`
      : '';
  rows.push({
    resource: slug,
    repo,
    stars: `${entry.stars ?? '—'}${delta}`,
    'last commit': entry.lastCommit.slice(0, 10),
    via: source,
  });
}

console.table(rows);

// Drop stats for repositories no longer referenced by any resource.
if (only.length === 0) {
  const live = new Set(readResources().map((r) => r.repo));
  for (const key of Object.keys(repos)) if (!live.has(key)) delete repos[key];
}

const sorted = Object.fromEntries(Object.entries(repos).sort(([a], [b]) => a.localeCompare(b)));
const output = { updatedAt: now, repos: sorted };

if (dryRun) {
  console.log('\n--dry-run: not writing', OUT);
} else {
  writeFileSync(OUT, JSON.stringify(output, null, 2) + '\n');
  console.log(`\nWrote ${Object.keys(sorted).length} repositories to ${OUT.replace(ROOT + '/', '')}`);
}
if (failures) process.exit(1);
