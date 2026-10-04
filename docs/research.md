# Phase 1 — Research & architecture notes

> **Policy update (Oct 2026): GitHub only.** The library now lists only resources hosted in public
> GitHub repositories. itch.io, ArtStation, Gumroad and asset-store distribution is out of scope.
> Each entry records `repo: owner/name`, and `npm run update:github` tracks its stars and last
> commit (see the README). References to other platforms below describe the original Phase 1
> research.

These notes record what informed the first version of Open Tech Art: the
patterns taken from existing resource libraries, the technology choices, and
the seed-content research log (including what was **excluded** and why).

## 1. Patterns from existing libraries

The libraries reviewed were Poly Haven, ambientCG, FreeStylized,
Sketchfab's CC0 collection and Kenney. The goal was to take interaction
patterns from them, not visual identity. These sites were not reachable from
the build environment, so this summary draws on established familiarity with
them rather than fresh captures. Revalidate it against the live sites before
any major redesign.

| Area | Pattern observed | What Open Tech Art does |
| --- | --- | --- |
| Catalog grid | Image-first cards in a dense, even grid; the image *is* the card. Text is short: title plus one line of metadata. | 16:10 image-led cards with title, creator and a few technology badges. No overlays on the image. |
| Navigation | A persistent category sidebar on desktop (Poly Haven, ambientCG). Categories double as filters. | Sticky filter sidebar on desktop. Category landing pages (`/category/<id>/`) for linkable, crawlable entry points. |
| Filtering | Facets combine: OR within a facet, AND across facets. Counts next to each option. URL reflects state, so results are shareable. | Same model. Counts update live to show "results if you tick this", and empty options dim. State lives in the query string. |
| Search | Instant, client-side search over titles and tags for small and medium catalogs. | Pre-rendered cards carry a lowercased search string. A ~6 KB script filters the cards in place, with no search backend. |
| Mobile | Filters collapse into a drawer or sheet with a clear "show N results" action. A single-column grid with large images. | Off-canvas filter drawer with backdrop, Escape to close, focus return, and a "Show N results" button. |
| Asset cards | Badges for format or technology. **No** prices, ratings or "trending". | Type badge (accent) plus implementation and pipeline badges. No popularity signals at all. |
| Detail page | Large primary image. A side panel with the main action and license up front. Specs in a key/value table. Gallery below. Author credit is prominent. | Primary image with credit and license caption. Sticky summary panel: creator, summary, **View original project** button, license, engine. Compatibility, requirements, license, links and a catalog record live in side boxes. |
| Image presentation | Consistent aspect ratios in grids; full aspect on detail pages; a lightbox for galleries. | `object-fit: cover` in grids, `contain` on the detail hero, and a `<dialog>` lightbox with keyboard navigation. |
| Taxonomy | A small number of top-level categories plus free tags. Type and format are separate from category. | Categories are **data** (`categories.yaml`). Type, implementation, pipeline and license are controlled vocabularies. Tags are free-form. |

Things deliberately **not** copied: download-count sorting, sponsor and
patron banners, account features, and any marketplace language.

## 2. Technology

**Astro 7 (static output)** was chosen as planned. Nothing argued for anything
else:

- Content Collections with the `glob()` loader and Zod schemas give
  type-checked, build-validated frontmatter. That is the "GitHub as
  database" model.
- The `image()` schema helper resolves images that sit next to each entry's
  Markdown. `astro:assets` generates responsive WebP variants with `srcset`
  at build time.
- Zero JavaScript by default. The site ships about 2.4 KB of JS on most pages
  (theme toggle) and about 6.5 KB on catalog pages (filtering).
- Output is plain static files in `dist/`. That deploys to Cloudflare Pages
  with no adapter. `@astrojs/cloudflare` is only needed for on-demand
  rendering, which this site doesn't use.

Notes from the current Astro docs (v6 and v7 upgrade guides) that shaped the code:

- Legacy content collections are gone. Collections are defined in
  `src/content.config.ts` with loaders.
- Import `z` from `astro/zod` (Zod 4), not from `astro:content`.
- Astro 7's Rust compiler rejects unclosed and invalid HTML, so markup is
  kept strictly well-formed.
- Node 22.12+ is required, so `.node-version` pins 22.

**Cloudflare:** Cloudflare now recommends Workers static assets for new
projects, but Pages remains fully supported and is what this project
targets. A `public/_headers` file sets long-lived immutable caching for
`/_astro/*` and basic security headers. `wrangler.toml` declares
`pages_build_output_dir` for direct uploads.

## 3. Content model decisions

- **One folder per resource** (`src/content/resources/<slug>/index.md` plus
  images). The folder name is the URL slug. Images sit next to the entry, so
  a PR touches exactly one directory.
- **Markdown with structured frontmatter** rather than JSON. Structured fields
  drive the catalog, and the Markdown body holds arbitrary documentation
  (tables, code, notes) without schema churn.
- **Engine-specific facts are nested** under an optional `engine` object
  (`name`, `testedVersions`, `minVersion`, `renderPipelines`, `packages`).
  A Blender or engine-agnostic resource omits it entirely, and an Unreal
  entry reuses the same shape.
- **`type` and `implementation` are separate.** A renderer feature built with
  Shader Graph plus the Render Graph API is `type: render-feature`,
  `implementation: [shader-graph, render-graph, csharp]`. This scales to
  "shader + renderer feature", VFX Graph, impostor systems and editor tools
  without new fields.
- **Unknown is a value.** VR and mobile support are `yes | partial | no |
  unknown` and default to `unknown`. Free-text `notes` cite the creator's
  claim.
- **Images follow the future standard.** `raw`, `reference`, `hero` and
  `gallery` are all optional. The catalog image is `hero → reference →
  gallery[0]`. When both `raw` and `reference` exist, the detail page renders
  a Raw → Reference comparison (side by side, upgraded to a slider with JS).
  `provenance: creator | standard` records whether images came from the
  creator (seed entries) or were captured to the standard.
- **Verification record.** Each entry stores the date, the revision checked,
  and how the license and facts were confirmed. The page shows it so readers
  can judge freshness.

## 4. Seed-content research log

### Environment limitation

The research environment's network policy blocked direct access to itch.io,
ArtStation, Gumroad, the Unity Asset Store, OpenGameArt, Codeberg and most
personal sites. Web search, GitHub (via git) and GitLab were reachable.
Consequences:

- Every included resource was verified against **files in its repository**:
  the LICENSE text, manifests, package.json and graph files, at a recorded
  commit.
- Only screenshots **committed to the repository** (and so covered by its
  license) were used. Images embedded in READMEs from external hosts
  (user-attachments, giphy) were not used.
- Two entries are primarily itch.io projects (VNTG and TinyPlay's
  collection). Their source and license were verified through the linked
  GitHub repository. The itch.io pages were confirmed through search
  results only.

### Included (9)

| Resource | Creator | License | Technique | Primary platform |
| --- | --- | --- | --- | --- |
| Energy Shield Hologram | Daniel Ilett | MIT | Hologram / sci-fi, depth intersection | GitHub (tutorial author, danielilett.com) |
| Toon Shader for URP | Vladislav Kantaev (Delt06) | MIT | Toon/cel shading, inverted-hull outlines | GitHub |
| Screen-Space Outlines for Render Graph | Finn Pelzer (Chishikii) | MIT | Screen-space outlines, renderer feature | GitHub |
| VNTG — PSX & CRT Shader Pack | Colby-O | Unlicense | PSX materials, CRT/VHS post-processing | itch.io + GitHub |
| Stylized Vegetation | Gamal Abdul Aziz | MIT | Foliage wind sway, toon lighting | GitHub |
| Noisy Nodes | Jimmy Cushnie | WTFPL | Procedural noise nodes for Shader Graph | GitHub |
| TAO Vertex Animation | Max Kruf / Tech Art Outsource | MIT | Vertex animation textures, crowds | GitHub |
| URP Shaders Collection | TinyPlay | MIT | Cartoon water, force field, toon, misc | GitHub + itch.io |
| Sairi — Anime Graphic Poster UI | Joshua Jang | MIT | Reference scene: toon, kinetic typography, masking | GitHub (+ WebGL build) |

### Verified but excluded

| Candidate | Reason |
| --- | --- |
| daniel-ilett/dissolve-urp, water-urp, cel-shading-urp, dither-transparency-urp (MIT) | The only committed images are typographic title cards, not depictions of the effect. Revisit with screenshots from the accompanying tutorials once those can be checked. |
| Gaxil/Unity-URP-Spritesheets | MIT LICENSE file, but the README adds "Just don't sell it… please". The conflicting terms make it ambiguous, so it is excluded. |
| unitycoder/unity-urp-outline | The LICENSE names a different copyright holder (copied file), so it is ambiguous. |
| ColinLeung-NiloCat (planar reflections, toon lit example), CristianQiu volumetric light, Cyanilux custom-lighting sub-graphs, Procedural Stochastic Terrain Shader (Apache-2.0), NullTale/OutlineFx | Licenses are fine, but screenshots are hosted outside the repository and couldn't be retrieved and verified from this environment. These are strong candidates for the next batch. |
| stelabouras/planet-shadergraph (GitLab) | The screenshot is hosted on giphy and not in the repository. |
| andydbc/HologramShader | Built-in render pipeline (Post-processing v2), so outside the initial URP focus. |
| GarrettGunnell/Grass | The creator asks people not to use it directly ("reference it as much as you'd like"), and it isn't URP-specific. |
| Frollo24/UnityGrassShader, Rehaan1/UnityDissolveEffect, MirzaBeig progress bar, happy-turtle/foliage-wind | No license file. |
| VOiD1 Gaming free shaders (itch.io), kurokumasoft, dirtycookstudio | itch.io unreachable, so license terms couldn't be verified. Free of charge is not the same as openly licensed. |
| Unity Asset Store "free" packages | The Asset Store EULA is not an open license. |
| Boat Attack / Unity sample projects | Unity Companion License, which is not an open license under our criteria. |
| z4gon water / caustics / shield repositories | The repositories are no longer reachable at their published URLs. |

### Next research targets

Once a network with access to itch.io and personal sites is available: Cyanilux
tutorials and repos, Daniel Ilett tutorial screenshots, Ronja's tutorials
(CC BY 4.0), Minions Art (licensing needs checking), the NiloCat repos above,
Kodrin/URP-PSX, and keijiro's URP and VFX Graph samples (Unlicense).
