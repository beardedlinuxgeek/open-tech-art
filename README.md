# Open Tech Art

**An open library of free technical-art resources.**

Open Tech Art is a curated catalog of free, openly licensed technical-art resources hosted on
**GitHub**: shaders, renderer features, tools and reference scenes. Each entry has consistent metadata, honest
compatibility information, screenshots and a prominent link back to the original creator. Think of
Poly Haven, but for technical art. It is a library, not a marketplace.

The first collection focuses on **Unity URP** (especially Shader Graph). The content model is
designed to grow into VFX, lighting setups, impostors, reference scenes, editor tools and other
engines.

- Static site built with [Astro](https://astro.build), deployed to **Cloudflare Pages**
- Content lives in Git, as one folder per resource with Markdown and frontmatter, validated by a schema
- No database, accounts, backend or tracking
- Client-side search and faceted filtering in about 6 KB of JavaScript

---

## Contents

- [Quick start](#quick-start)
- [Commands](#commands)
- [Project structure](#project-structure)
- [Content model](#content-model)
- [Adding a resource](#adding-a-resource)
- [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)
- [Quality checks](#quality-checks)
- [Licensing](#licensing)

## Quick start

Requirements: **Node.js 22.12 or newer** (pinned in `.node-version`) and npm.

```bash
git clone https://github.com/beardedlinuxgeek/open-tech-art.git
cd open-tech-art
npm ci
npm run dev        # http://localhost:4321
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build to `dist/` (validates all content against the schema) |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check `.astro` and `.ts` files (`astro check`) |
| `npm run check:links` | Verify every internal link, anchor, image and asset in `dist/` |
| `npm run check:links:external` | Also request every external URL (needs network access) |
| `npm run check:images` | Enforce image budgets for source and built images |
| `npm run validate` | `build` + `check:links` + `check:images` |
| `npm run update:github` | Refresh GitHub stars and last-commit dates for every resource (run manually; see below) |

## Project structure

```
.
├── astro.config.mjs          # Site config (static output, sitemap, SITE_URL)
├── public/
│   ├── _headers              # Cloudflare Pages caching & security headers
│   └── favicon.svg
├── src/
│   ├── content.config.ts     # Collection definitions + resource schema
│   ├── content/
│   │   ├── categories.yaml   # Top-level areas (Shaders, Rendering, Tools…)
│   │   └── resources/
│   │       └── <slug>/       # One folder per resource
│   │           ├── index.md  # Frontmatter metadata + Markdown documentation
│   │           └── *.webp    # Images for this entry
│   ├── data/
│   │   ├── github-stats.json # Stars / last commit per repo (written by update:github)
│   │   └── site.ts
│   ├── lib/
│   │   ├── taxonomy.ts       # Controlled vocabularies (types, implementations, licenses…)
│   │   ├── github.ts         # Stats lookup + featured score
│   │   └── resources.ts      # Query helpers
│   ├── components/           # Catalog, ResourceCard, Gallery, Compare (Raw ↔ Reference)…
│   ├── layouts/Base.astro
│   ├── pages/
│   │   ├── index.astro               # Home
│   │   ├── resources/index.astro     # Full catalog with search & filters
│   │   ├── resources/[slug].astro    # Resource detail page
│   │   ├── category/[id].astro       # Category landing pages
│   │   ├── resources.json.ts         # Machine-readable catalog (/resources.json)
│   │   ├── about.astro · contribute.astro · 404.astro · robots.txt.ts
│   └── styles/global.css
├── scripts/                  # update-github-stats.mjs, check-links.mjs, check-images.mjs
├── docs/
│   ├── research.md           # Phase 1 research, architecture decisions, seed-content log
│   └── templates/resource/   # Copy-paste starting point for a new entry
├── SUBMISSION_GUIDELINES.md
└── wrangler.toml             # For `wrangler pages deploy`
```

The `asset-search/` directory is a separate workstream and is not part of the site build.

## Content model

Each resource is `src/content/resources/<slug>/index.md`. The folder name becomes the URL
(`/resources/<slug>/`). The frontmatter is validated by the Zod schema in
`src/content.config.ts`, so a typo or a missing required field fails the build with a clear
message.

| Field | Required | Notes |
| --- | --- | --- |
| `title`, `summary` | ✓ | Summary ≤ 280 characters; used on cards and in meta descriptions |
| `category` | ✓ | An id from `src/content/categories.yaml` |
| `type` | ✓ | What it is: `shader`, `render-feature`, `post-processing`, `vfx-graph`, `toolkit`, `sample-project`, … |
| `tags` | | Free-form, lowercase-kebab |
| `repo` | ✓ | The GitHub repository, `owner/name`. Source of stars and last-commit date |
| `creators[]` | ✓ | `name`, optional `url` and `role`. Always the original authors |
| `license` | ✓ | `spdx` (from an allow-list), `url` to the license text, optional `holder` and `notes` |
| `links` | | Optional `project` (defaults to the repository), `source`, `download`, `docs`, `extra[]` |
| `engine` | | Optional block: `name`, `testedVersions`, `minVersion`, `renderPipelines`, `packages` |
| `implementation` | | How it's built: `shader-graph`, `hlsl`, `vfx-graph`, `csharp`, `render-graph`, `dots`, … |
| `compatibility` | | `vr` and `mobile`: `yes` / `partial` / `no` / `unknown` (default), plus `notes` |
| `requirements` | | List of strings (inline `code` allowed) |
| `images` | ✓ | `hero`, `reference`, `raw`, `gallery[]` (each `src` + `alt` + optional `caption`), `provenance` |
| `verification` | ✓ | `date`, `revision`, `notes`: how the license and facts were checked |
| `added`, `updated`, `draft` | | Housekeeping |

Design choices worth knowing:

- **Unknown is a value.** Compatibility defaults to `unknown`. Never guess.
- **Engine data is optional and nested**, so non-Unity or engine-agnostic resources don't carry
  Unity fields.
- **Type and implementation are separate**, which covers combinations such as "Shader Graph shader
  plus a custom renderer feature" without new fields.
- **Images:** the catalog uses `hero` → `reference` → first `gallery` image. When an entry has
  both `raw` and `reference`, the page shows a **Raw → Reference** comparison: side by side
  without JS, upgraded to an interactive slider with JS.
- **Categories are data.** Add one to `categories.yaml`. Categories with no resources are hidden
  automatically.
- Controlled vocabularies (types, implementations, pipelines, licenses) and their display
  labels live in `src/lib/taxonomy.ts`. Adding a value there makes it valid everywhere.

See [`docs/research.md`](docs/research.md) for the reasoning behind these choices.

## GitHub stats: stars, last update and featured picks

Every resource lives in a public GitHub repository (`repo:` in its frontmatter). Star counts,
last-commit dates and the archived flag are stored in **`src/data/github-stats.json`**, keyed by
repository, so the hand-written Markdown is never rewritten by tooling.

Refresh them whenever you like. It isn't automatic:

```bash
GITHUB_TOKEN=ghp_yourtoken npm run update:github   # token optional, but raises the rate limit
git add src/data/github-stats.json && git commit -m "Update GitHub stats"
```

- The script reads `repo:` from every `src/content/resources/*/index.md`. It asks the GitHub REST API
  for stars, forks, archived state and the default branch, then reads the date of the latest commit
  on that branch.
- Without a token it uses `GH_TOKEN` or `gh auth token` if available. Unauthenticated, it gets 60
  requests per hour, which covers about 30 resources.
- If the API is unreachable or rate-limited, the last-commit date comes from a shallow `git clone`
  instead, and the previous star count is kept.
- It warns when a repository has been renamed or moved. Options: `--only <slug|owner/name,…>` and
  `--dry-run`.
- It prints a table with star changes since the last run.

On the site, cards and resource pages show ★ stars and "Updated <month year>". The catalog can be
sorted by **Featured**, **Most stars**, **Recently updated**, **Newest in library** or **Title**.

**Featured** order (the default catalog sort, and the home page's Featured row) combines both
signals, as implemented in `src/lib/github.ts`:

```
score = log10(stars + 1) × (0.25 + 0.75 × 0.5^(yearsSinceLastCommit / 2))
```

Popularity counts on a log scale. Recency halves every two years but never drops below a quarter,
so well-loved older projects aren't buried. Archived repositories score half. "Now" is the
`updatedAt` time in the stats file, so builds are reproducible.

## Adding a resource

1. Copy `docs/templates/resource/` to `src/content/resources/<your-slug>/`.
2. Fill in `index.md`. Delete optional fields you can't confirm, and leave compatibility as `unknown`.
3. Add images next to it as **WebP**, at most 1920 px wide and ideally under 250 KB each. Reference
   them as `./name.webp`. Astro generates responsive sizes at build time.
4. Run `npm run validate`. Schema, link and image-budget problems all fail loudly.
5. Open a pull request.

The rules for what qualifies (licensing, screenshots, attribution) are in
[SUBMISSION_GUIDELINES.md](SUBMISSION_GUIDELINES.md).

## Deploying to Cloudflare Pages

The site is fully static. No adapter or Functions are needed.

### Git integration (recommended)

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick
   this repository.
2. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** *(leave empty)*
3. Environment variables (Production and Preview):
   - `NODE_VERSION` = `22` *(optional; `.node-version` is also respected)*
   - `SITE_URL` = your production URL, e.g. `https://opentechart.org`. This is used for canonical
     URLs, Open Graph images, `robots.txt` and the sitemap. It defaults to
     `https://open-tech-art.pages.dev`.
4. Save and deploy. Every push to the production branch redeploys, and pull requests get preview
   URLs automatically.

### Direct upload with Wrangler

```bash
npm run build
npx wrangler pages deploy        # reads pages_build_output_dir from wrangler.toml
```

### What gets deployed

- `dist/` contains static HTML, hashed CSS/JS in `/_astro/`, and optimized WebP images.
- `public/_headers` sets one-year immutable caching on `/_astro/*` plus basic security headers.
- `404.html` is served by Pages for unknown paths.
- `sitemap-index.xml`, `robots.txt` and `resources.json` are generated at build time.

## Quality checks

Before merging, run:

```bash
npm ci && npm run validate && npm run check
```

What has been verified for this release:

- Clean `npm ci && npm run build` from a fresh clone
- `astro check`: 0 errors, 0 warnings
- Internal links, anchors and assets: all resolve (`check:links`)
- Resource links: every GitHub repository, license file and wiki was confirmed to exist
- axe-core (WCAG 2.1 AA) on every page template in light and dark themes: no violations
- Responsive layouts at 390 px, 820 px and 1440 px with no horizontal overflow; filter drawer on
  mobile
- Initial page weight about 140–300 KB including images, with 2–7 KB of JavaScript

## Licensing

- **Site code:** MIT. See [LICENSE](LICENSE).
- **Catalog metadata and descriptions** written for Open Tech Art: CC0 1.0.
- **Resources and their screenshots** belong to their creators and are shown under each resource's
  own license, which is recorded in its entry and on its page. Open Tech Art does not re-host the
  resources themselves.

Creators who want an entry changed or removed can
[open an issue](https://github.com/beardedlinuxgeek/open-tech-art/issues).
