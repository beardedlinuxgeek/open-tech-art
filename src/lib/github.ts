/**
 * GitHub stats for library resources, written by `npm run update:github`
 * (scripts/update-github-stats.mjs) to src/data/github-stats.json.
 */
import data from '../data/github-stats.json';

export interface RepoStats {
  stars: number | null;
  forks: number | null;
  lastCommit: Date;
  defaultBranch?: string;
  archived: boolean;
  starsCheckedAt: Date | null;
  commitCheckedAt: Date;
}

type RawStats = {
  stars: number | null;
  forks?: number | null;
  lastCommit: string;
  defaultBranch?: string;
  archived?: boolean;
  starsCheckedAt?: string | null;
  commitCheckedAt: string;
};

const raw = (data as { updatedAt: string; repos: Record<string, RawStats> }).repos;
const byLowerName = new Map(Object.entries(raw).map(([k, v]) => [k.toLowerCase(), v]));

/** When the stats were last refreshed. Used as "now" so builds are reproducible. */
export const statsUpdatedAt = new Date((data as { updatedAt: string }).updatedAt);

export function repoStats(repo: string): RepoStats | undefined {
  const s = byLowerName.get(repo.toLowerCase());
  if (!s) return undefined;
  return {
    stars: s.stars ?? null,
    forks: s.forks ?? null,
    lastCommit: new Date(s.lastCommit),
    defaultBranch: s.defaultBranch,
    archived: s.archived ?? false,
    starsCheckedAt: s.starsCheckedAt ? new Date(s.starsCheckedAt) : null,
    commitCheckedAt: new Date(s.commitCheckedAt),
  };
}

const YEAR_MS = 365.25 * 24 * 3600 * 1000;
/** Recency halves every this many years since the last commit. */
const RECENCY_HALF_LIFE_YEARS = 2;
/** Share of the score that never decays, so long-lived classics aren't buried. */
const RECENCY_FLOOR = 0.25;

/**
 * Featured score: popularity (log of stars) weighted by how recently the
 * repository was updated.
 *
 *   score = log10(stars + 1) × (0.25 + 0.75 × 0.5^(yearsSinceLastCommit / 2))
 *
 * A repo with 700 stars updated this year scores ≈ 2.4; the same repo
 * untouched for six years ≈ 1.0; a 20-star repo updated last month ≈ 1.3.
 * Archived repositories score half.
 */
export function featuredScore(stats: RepoStats | undefined): number {
  if (!stats) return 0;
  const popularity = Math.log10((stats.stars ?? 0) + 1);
  const ageYears = Math.max(0, (statsUpdatedAt.getTime() - stats.lastCommit.getTime()) / YEAR_MS);
  const recency = RECENCY_FLOOR + (1 - RECENCY_FLOOR) * 0.5 ** (ageYears / RECENCY_HALF_LIFE_YEARS);
  return popularity * recency * (stats.archived ? 0.5 : 1);
}

export const formatStars = (n: number) =>
  n >= 10000 ? `${Math.round(n / 1000)}k` : n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n);

export const formatMonth = (d: Date) =>
  d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export const formatDay = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
