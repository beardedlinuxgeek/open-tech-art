// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the Cloudflare Pages environment (or locally) once the
// production domain is known. It is used for canonical URLs and the sitemap.
const site = process.env.SITE_URL || 'https://open-tech-art.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  image: {
    // Catalog imagery is generated at build time into /_astro with hashed names.
    responsiveStyles: false,
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
