#!/usr/bin/env node
/**
 * Image budget check.
 *  - Source images in src/content must be WebP/AVIF/JPEG/PNG, ≤ 2560 px wide and ≤ 400 KB.
 *  - Built images in dist/_astro must each be ≤ 350 KB.
 * Also reports the heaviest built page (HTML + images it references).
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, extname } from 'node:path';
import sharp from 'sharp';

const SRC = resolve('src/content');
const DIST = resolve('dist');
const SRC_MAX_BYTES = 400 * 1024;
const SRC_MAX_WIDTH = 2560;
const OUT_MAX_BYTES = 350 * 1024;
const IMG = new Set(['.webp', '.avif', '.jpg', '.jpeg', '.png', '.gif']);

async function walk(dir, filter) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, filter)));
    else if (filter(p)) out.push(p);
  }
  return out;
}

const problems = [];
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const sources = await walk(SRC, (p) => IMG.has(extname(p).toLowerCase()));
let srcTotal = 0;
for (const f of sources) {
  const { size } = await stat(f);
  srcTotal += size;
  const meta = await sharp(f).metadata();
  if (extname(f).toLowerCase() === '.gif') problems.push(`${f}: use a still WebP instead of GIF`);
  if (size > SRC_MAX_BYTES) problems.push(`${f}: ${kb(size)} exceeds ${kb(SRC_MAX_BYTES)}`);
  if ((meta.width ?? 0) > SRC_MAX_WIDTH) problems.push(`${f}: ${meta.width}px wide exceeds ${SRC_MAX_WIDTH}px`);
}
console.log(`Source images: ${sources.length} files, ${kb(srcTotal)} total.`);

const built = await walk(join(DIST, '_astro'), (p) => IMG.has(extname(p).toLowerCase()));
const builtSizes = new Map();
for (const f of built) {
  const { size } = await stat(f);
  builtSizes.set('/_astro/' + f.split('/_astro/')[1], size);
  if (size > OUT_MAX_BYTES) problems.push(`${f}: built image ${kb(size)} exceeds ${kb(OUT_MAX_BYTES)}`);
}
console.log(`Built images: ${built.length} files.`);

// Heaviest page if a browser downloaded every <img> candidate's *largest* variant (worst case).
const pages = await walk(DIST, (p) => p.endsWith('.html'));
let worst = { page: '', bytes: 0 };
for (const p of pages) {
  const html = await readFile(p, 'utf8');
  const imgs = [...html.matchAll(/<img[^>]*?\ssrc="([^"]+)"/g)].map((m) => m[1]);
  const bytes = (await stat(p)).size + imgs.reduce((n, u) => n + (builtSizes.get(u) ?? 0), 0);
  if (bytes > worst.bytes) worst = { page: p.replace(DIST, ''), bytes };
}
console.log(`Heaviest page (HTML + default <img> src): ${worst.page} ≈ ${kb(worst.bytes)}`);

if (problems.length) {
  console.error(`\n${problems.length} image problem(s):`);
  problems.forEach((p) => console.error('  ✗ ' + p));
  process.exit(1);
}
console.log('Image budget OK.');
