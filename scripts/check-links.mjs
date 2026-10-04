#!/usr/bin/env node
/**
 * Link checker for the built site (run after `npm run build`).
 *
 *   node scripts/check-links.mjs             internal links, anchors, assets
 *   node scripts/check-links.mjs --external  also request every external URL
 *
 * Exits non-zero when an internal link is broken. External failures are
 * reported; pass --strict to make them fatal too.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, resolve, posix } from 'node:path';

const DIST = resolve('dist');
const args = new Set(process.argv.slice(2));
const checkExternal = args.has('--external');
const strict = args.has('--strict');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const exists = async (p) => stat(p).then(() => true, () => false);

async function resolveInternal(pathname) {
  const clean = decodeURIComponent(pathname.split('?')[0]);
  const target = join(DIST, clean);
  if (clean.endsWith('/')) return (await exists(join(target, 'index.html'))) ? join(target, 'index.html') : null;
  if (await exists(target)) return target;
  if (await exists(target + '.html')) return target + '.html';
  return null;
}

const attr = /\s(?:href|src)="([^"]+)"|\ssrcset="([^"]+)"/g;
const idAttr = /\sid="([^"]+)"/g;

try {
  await stat(DIST);
} catch {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(2);
}

const files = await walk(DIST);
const indexHtml = await readFile(join(DIST, 'index.html'), 'utf8').catch(() => '');
const siteOrigin = indexHtml.match(/<link rel="canonical" href="(https?:\/\/[^/"]+)/)?.[1];
const ids = new Map();
for (const f of files) {
  const html = await readFile(f, 'utf8');
  ids.set(f, new Set([...html.matchAll(idAttr)].map((m) => m[1])));
}

const broken = [];
const external = new Map();
let internalCount = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const pagePath = '/' + posix.join(...relative(DIST, file).split(/[\\/]/)).replace(/index\.html$/, '');
  const urls = [];
  for (const m of html.matchAll(attr)) {
    if (m[1]) urls.push(m[1]);
    if (m[2]) urls.push(...m[2].split(',').map((s) => s.trim().split(/\s+/)[0]));
  }
  for (const raw of urls) {
    const url = raw.replaceAll('&amp;', '&');
    if (/^(mailto:|tel:|data:|javascript:)/.test(url)) continue;
    if (/^https?:\/\//.test(url)) {
      // Canonical/og URLs point at the deployed site itself; those are covered internally.
      if (siteOrigin && url.startsWith(siteOrigin)) continue;
      if (!external.has(url)) external.set(url, new Set());
      external.get(url).add(pagePath);
      continue;
    }
    internalCount++;
    const abs = new URL(url, 'http://local' + pagePath);
    const target = await resolveInternal(abs.pathname);
    if (!target) {
      broken.push(`${pagePath} → ${url} (missing)`);
      continue;
    }
    if (abs.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(abs.hash.slice(1));
      if (!ids.get(target)?.has(id)) broken.push(`${pagePath} → ${url} (missing #${id})`);
    }
  }
}

console.log(`Checked ${internalCount} internal references across ${files.length} pages.`);
if (broken.length) {
  console.error(`\n${broken.length} broken internal link(s):`);
  for (const b of broken) console.error('  ✗ ' + b);
}

let externalFailures = 0;
if (checkExternal) {
  console.log(`\nChecking ${external.size} external URLs…`);
  const entries = [...external];
  const results = [];
  const worker = async () => {
    while (entries.length) {
      const [url, pages] = entries.shift();
      let status;
      try {
        let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(15000) });
        if (res.status === 405 || res.status === 403 || res.status === 404) {
          res = await fetch(url, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
        }
        status = res.status;
      } catch (e) {
        status = e.cause?.code ?? e.name ?? 'ERROR';
      }
      results.push({ url, status, pages: [...pages] });
    }
  };
  await Promise.all(Array.from({ length: 8 }, worker));
  for (const r of results.sort((a, b) => a.url.localeCompare(b.url))) {
    const ok = typeof r.status === 'number' && r.status >= 200 && r.status < 400;
    if (!ok) externalFailures++;
    console.log(`  ${ok ? '✓' : '✗'} ${r.status} ${r.url}${ok ? '' : `  (on ${r.pages.slice(0, 2).join(', ')})`}`);
  }
  console.log(`${results.length - externalFailures}/${results.length} external URLs OK.`);
} else {
  console.log(`${external.size} unique external URLs (run with --external to check them).`);
}

if (broken.length || (strict && externalFailures)) process.exit(1);
