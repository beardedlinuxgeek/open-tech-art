import { getCollection, type CollectionEntry } from 'astro:content';
import { featuredScore, repoStats } from './github';
import {
  IMPLEMENTATIONS,
  LICENSES,
  RENDER_PIPELINES,
  RESOURCE_TYPES,
  ENGINES,
  label,
} from './taxonomy';

export type Resource = CollectionEntry<'resources'>;
export type Category = CollectionEntry<'categories'>;

export async function getResources(): Promise<Resource[]> {
  const all = await getCollection('resources', ({ data }) => !data.draft);
  // Astro only warns about dangling references; make them fail the build.
  const categoryIds = new Set((await getCollection('categories')).map((c) => c.id));
  for (const r of all) {
    if (!categoryIds.has(r.data.category.id)) {
      throw new Error(
        `Resource "${r.id}" uses unknown category "${r.data.category.id}". ` +
          `Add it to src/content/categories.yaml or use one of: ${[...categoryIds].join(', ')}.`,
      );
    }
  }
  // Default order is "featured": recent, well-starred repositories first.
  return all.sort(
    (a, b) =>
      scoreOf(b) - scoreOf(a) ||
      b.data.added.getTime() - a.data.added.getTime() ||
      a.data.title.localeCompare(b.data.title),
  );
}

/** Categories that actually contain resources, in display order, with counts. */
export async function getActiveCategories(resources?: Resource[]) {
  const list = resources ?? (await getResources());
  const cats = await getCollection('categories');
  return cats
    .map((c) => ({ ...c, count: list.filter((r) => r.data.category.id === c.id).length }))
    .filter((c) => c.count > 0)
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const statsOf = (r: Resource) => repoStats(r.data.repo);
export const scoreOf = (r: Resource) => featuredScore(statsOf(r));
export const repoUrl = (r: Resource) => `https://github.com/${r.data.repo}`;
/** Canonical project page: explicit `links.project`, else the repository. */
export const projectUrl = (r: Resource) => r.data.links.project ?? repoUrl(r);

/** Catalog image: hero → reference → first gallery image. */
export function coverImage(r: Resource) {
  const { hero, reference, gallery } = r.data.images;
  return hero ?? reference ?? gallery[0];
}

export const resourceUrl = (r: Resource | string) =>
  `/resources/${typeof r === 'string' ? r : r.id}/`;
export const categoryUrl = (id: string) => `/category/${id}/`;

export const creatorNames = (r: Resource) => r.data.creators.map((c) => c.name);

export function licenseInfo(r: Resource) {
  const l = LICENSES[r.data.license.spdx];
  return { spdx: r.data.license.spdx, name: l.name, about: l.url, url: r.data.license.url };
}

export const typeLabel = (r: Resource) => label(RESOURCE_TYPES, r.data.type);
export const pipelineLabels = (r: Resource) =>
  (r.data.engine?.renderPipelines ?? []).map((p) => label(RENDER_PIPELINES, p));
export const implementationLabels = (r: Resource) =>
  r.data.implementation.map((i) => label(IMPLEMENTATIONS, i));
export const engineLabel = (r: Resource) =>
  r.data.engine ? label(ENGINES, r.data.engine.name) : undefined;

/** Short "Shader Graph · URP" style technology badges for cards. */
export function techBadges(r: Resource): string[] {
  return [...implementationLabels(r).slice(0, 2), ...pipelineLabels(r)];
}

export function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** Plain-object representation used by the client-side catalog and JSON feed. */
export function toIndexRecord(r: Resource) {
  return {
    id: r.id,
    title: r.data.title,
    summary: r.data.summary,
    url: resourceUrl(r),
    category: r.data.category.id,
    type: r.data.type,
    implementation: r.data.implementation,
    engine: r.data.engine?.name ?? null,
    renderPipelines: r.data.engine?.renderPipelines ?? [],
    tags: r.data.tags,
    creators: creatorNames(r),
    license: r.data.license.spdx,
    repo: r.data.repo,
    github: (() => {
      const s = statsOf(r);
      return s
        ? { stars: s.stars, lastCommit: s.lastCommit.toISOString(), archived: s.archived }
        : null;
    })(),
    compatibility: { vr: r.data.compatibility.vr, mobile: r.data.compatibility.mobile },
    links: { ...r.data.links, project: projectUrl(r) },
    added: r.data.added.toISOString().slice(0, 10),
  };
}

export function countBy<T extends string>(values: T[][]): Map<T, number> {
  const m = new Map<T, number>();
  for (const vs of values) for (const v of new Set(vs)) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
}
