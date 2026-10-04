import type { APIRoute } from 'astro';
import { getActiveCategories, getResources, toIndexRecord } from '../lib/resources';
import { SITE } from '../data/site';

/** Machine-readable catalog, generated at build time. */
export const GET: APIRoute = async ({ site }) => {
  const resources = await getResources();
  const categories = await getActiveCategories(resources);
  const body = {
    name: SITE.name,
    site: site?.toString(),
    generated: new Date().toISOString(),
    license: 'Catalog metadata: CC0-1.0. Linked resources and images remain under their own licenses.',
    categories: categories.map((c) => ({ id: c.id, title: c.data.title, count: c.count })),
    resources: resources.map((r) => ({
      ...toIndexRecord(r),
      url: new URL(`/resources/${r.id}/`, site).toString(),
    })),
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
