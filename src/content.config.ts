import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import {
  ENGINES,
  IMPLEMENTATIONS,
  LICENSES,
  PLATFORMS,
  RENDER_PIPELINES,
  RESOURCE_TYPES,
  SUPPORT_VALUES,
  keysOf,
} from './lib/taxonomy';

const support = z.enum(keysOf(SUPPORT_VALUES)).default('unknown');

/** Top-level resource areas. Only categories that contain resources are shown. */
const categories = defineCollection({
  loader: file('src/content/categories.yaml'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(100),
  }),
});

const resources = defineCollection({
  // One directory per resource: src/content/resources/<slug>/index.md
  // The directory name becomes the URL slug.
  loader: glob({
    base: './src/content/resources',
    pattern: '*/index.{md,mdx}',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) => {
    const figure = z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    });

    return z.object({
      title: z.string(),
      /** One or two sentences for cards, meta descriptions and the page lede. */
      summary: z.string().max(280),

      category: reference('categories'),
      type: z.enum(keysOf(RESOURCE_TYPES)),
      tags: z.array(z.string()).default([]),

      /** Original authors. Open Tech Art is never listed here. */
      creators: z
        .array(
          z.object({
            name: z.string(),
            url: z.url().optional(),
            role: z.string().optional(),
          }),
        )
        .min(1),

      license: z.object({
        spdx: z.enum(keysOf(LICENSES)),
        /** Link to the license text in the original project. */
        url: z.url(),
        holder: z.string().optional(),
        notes: z.string().optional(),
      }),

      links: z.object({
        /** The canonical page for the resource. Always shown prominently. */
        project: z.url(),
        /** Where the source/files live, if different from `project`. */
        source: z.url().optional(),
        /** Direct download (release page, package URL, itch page…), if distinct. */
        download: z.url().optional(),
        /** Tutorial, article or documentation written by the creator. */
        docs: z.url().optional(),
        extra: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      }),

      /** Where the project is published, e.g. github, itch. First is primary. */
      platforms: z.array(z.enum(keysOf(PLATFORMS))).min(1),

      /**
       * Engine-specific facts. Everything inside is optional so that
       * non-Unity (or engine-agnostic) resources can omit it entirely.
       */
      engine: z
        .object({
          name: z.enum(keysOf(ENGINES)),
          /** Versions the creator states they developed / tested with. */
          testedVersions: z.array(z.string()).default([]),
          /** Minimum version, only when the creator states one. */
          minVersion: z.string().optional(),
          renderPipelines: z.array(z.enum(keysOf(RENDER_PIPELINES))).default([]),
          /** Package versions the creator states (e.g. URP 12.1.6). */
          packages: z.array(z.object({ name: z.string(), version: z.string() })).default([]),
        })
        .optional(),

      implementation: z.array(z.enum(keysOf(IMPLEMENTATIONS))).default([]),

      /**
       * Only record what the creator states or what is evident from the
       * project. Leave as `unknown` otherwise — never guess.
       */
      compatibility: z
        .object({
          vr: support,
          mobile: support,
          notes: z.string().optional(),
        })
        .default({ vr: 'unknown', mobile: 'unknown' }),

      requirements: z.array(z.string()).default([]),

      images: z.object({
        /** Optional showcase image. Used as the catalog image when present. */
        hero: figure.optional(),
        /** The effect under simple, honest conditions (future standard). */
        reference: figure.optional(),
        /** The input without the effect (future standard). */
        raw: figure.optional(),
        gallery: z.array(figure).default([]),
        /**
         * `creator`: screenshots supplied by the original creator (seed entries).
         * `standard`: Raw/Reference captures made to the submission standard.
         */
        provenance: z.enum(['creator', 'standard']).default('creator'),
      }),

      /** Record of how the entry was checked. */
      verification: z.object({
        date: z.coerce.date(),
        /** Revision (commit, release, page version) that was checked. */
        revision: z.string().optional(),
        notes: z.string().optional(),
      }),

      added: z.coerce.date(),
      updated: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    });
  },
});

export const collections = { categories, resources };
