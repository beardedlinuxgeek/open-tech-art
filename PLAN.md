Open Tech Art

Build the first production-ready version of Open Tech Art, an open-source catalog of free technical-art resources.

The initial focus is Unity URP shaders, especially Shader Graph, but the architecture and branding must support future resources such as VFX, lighting setups, volumetric effects, impostors, fake shadows, reference scenes, rendering techniques, and potentially other engines.

The finished repository must be ready to deploy directly to Cloudflare Pages.

Core concept

Think of Open Tech Art as something analogous to Poly Haven for technical art.

It is not an asset marketplace and should not look like one. It is a curated open resource library.

Initially, many entries will point to resources hosted elsewhere. Open Tech Art provides discovery, consistent metadata, screenshots, categorization, compatibility information, descriptions, and links back to the original project/download.

Eventually contributors should be able to add resources simply by submitting a GitHub PR containing an asset directory and metadata/content file. Do not build accounts, authentication, a database, upload forms, comments, ratings, or other unnecessary backend infrastructure.

---

Phase 1 — Research and architecture

Before implementation, investigate existing free asset-library sites such as Poly Haven, ambientCG, FreeStylized, and similar high-quality resource catalogs.

Study:

- catalog/grid design
- navigation
- filtering
- search
- asset cards
- asset detail pages
- responsive behavior
- image presentation
- category/tag systems

Do not clone any site's visual identity. Extract useful interaction/design patterns.

Also investigate current Astro and Cloudflare Pages best practices.

Technology

Astro is the preferred framework unless research reveals a compelling reason not to use it.

Favor:

- static generation
- minimal client-side JavaScript
- fast page loads
- responsive images
- accessible semantic HTML
- straightforward Cloudflare Pages deployment
- GitHub as the content database

No runtime database should be required.

Content architecture

Experiment with several representative entries before finalizing the content model.

The likely architecture is approximately:

src/content/resources/
  procedural-cobblestones/
    index.md
    reference.webp
    raw.webp
    hero.webp

Use Astro Content Collections or the current equivalent, with schema validation.

Markdown/MDX + structured frontmatter is preferred over standalone JSON if it provides a clean combination of structured metadata and arbitrary documentation.

However, make the architectural decision based on implementation quality rather than blindly following this example.

The content model must eventually support resources much more complicated than simple shaders.

Examples include:

- Shader Graph material
- HLSL shader
- shader requiring special mesh attributes
- shader + custom renderer feature
- post-processing effect
- VFX Graph
- lighting/reference scene
- impostor system
- editor utility

Do not over-engineer all of those now. Avoid designing the schema so narrowly that supporting them later requires replacing it.

---

Phase 2 — Content system and design

Implement the content architecture and site design.

Resource metadata

Determine a sensible schema supporting at least:

- title
- slug
- author/creator
- short description
- longer Markdown description/documentation
- original project URL
- download URL, if distinct
- license
- resource type
- Unity compatibility, where known
- render pipeline
- Shader Graph/HLSL/other implementation
- categories
- tags
- VR compatibility: yes/no/unknown
- Quest/mobile compatibility: yes/no/unknown
- requirements/dependencies
- source/original website
- images

Unknown information must be representable as unknown rather than guessed.

Do not force Unity-specific fields onto future non-Unity resources in a way that makes extension difficult.

Images

Our eventual submission standard will normally have:

- "raw" — underlying geometry/input without the contributed shader/material/effect
- "reference" — the effect demonstrated under simple, honest conditions
- "hero" — optional attractive showcase image
- additional gallery images — optional

If no hero exists, use the reference image as the catalog image.

However, prototype entries collected from the internet are exempt from Raw/Reference requirements, because we are not opening them in Unity ourselves. Use creator-provided screenshots.

Do not manufacture missing screenshots.

The architecture should nevertheless support the future Raw/Reference system.

Site structure

Create a polished catalog-oriented UI.

Desktop should probably have persistent category/filter navigation and a visual resource grid. Mobile should adapt appropriately rather than simply shrinking the desktop layout.

Categories should be data-driven rather than hardcoded around the initial assets.

Initial content will be mostly shaders, but future top-level resource areas may include:

- Shaders
- VFX
- Lighting
- Rendering
- Tools
- Reference Scenes

Do not create empty sections merely to imply content that does not exist.

Cards

Cards should emphasize the visual.

Include useful compact information such as:

- title
- author
- resource type
- relevant technology badges such as Shader Graph / URP

Avoid marketplace aesthetics.

No:

- ratings
- fake popularity metrics
- prices
- "BUY NOW" presentation
- advertising-style overlays

Resource detail page

Design a strong resource page containing:

- large primary image
- title
- creator attribution
- license
- tags/technology
- concise description
- gallery where available
- compatibility/requirements
- longer documentation where available
- clear links to original project/source/download

The original creator and original project should always be prominent.

Architect the page so future entries can show Raw and Reference images side-by-side or with an interactive comparison UI.

Search/filtering

Provide useful catalog discovery.

At minimum consider:

- text search
- category
- resource type
- implementation type
- render pipeline
- tags

Do not build an elaborate search backend. This should work from statically generated catalog data/client-side indexing where practical.

---

Phase 3 — Production MVP

Turn the prototype into a polished site that can be deployed as-is.

Seed content

Populate the site with a small but diverse representative collection of genuinely free Unity URP shaders/resources.

Prioritize Shader Graph.

Research these yourself rather than inventing entries.

For every external resource:

1. Verify the project exists.
2. Verify it is actually free.
3. Verify an explicit open license permits our intended use. Prefer MIT, BSD, Apache, CC0, CC-BY, or similarly clear licenses.
4. Verify it has creator-provided screenshots that we can legally include under the applicable license.
5. Record the license accurately.
6. Link prominently to the original project.
7. Do not re-host the actual asset unless there is a compelling reason and its license clearly permits it.
8. Do not imply that Open Tech Art created the resource.
9. Do not fabricate compatibility information.

For this prototype, exclude ambiguous licensing rather than trying to reason around it.

We specifically want diversity of sources. Do not populate the prototype with ten GitHub repositories and call it finished.

Actively investigate resources from places such as:

- GitHub
- itch.io
- personal technical-art websites
- ArtStation
- Unity Asset Store
- Gumroad/other creator pages where genuinely free and openly licensed
- other legitimate technical-art communities

However, free-of-charge is not equivalent to open source. An Asset Store or ArtStation resource without an appropriate license should not be included merely because it costs $0.

Aim for diversity of techniques too. For example:

- procedural material
- toon/cel shading
- outlines
- water
- foliage/wind
- dissolve
- hologram/sci-fi effect
- terrain/environment shader
- screen-space/render feature effect
- vertex animation

Quality is more important than reaching a particular number.

Prototype screenshot exception

Do not install/run Unity merely to generate screenshots.

For the seed catalog, use screenshots supplied by creators only when licensing allows us to redistribute/display them.

Store only the images needed by the actual prototype rather than downloading entire galleries.

Keep images web-optimized.

Repository quality

Before finishing:

- write a useful README
- document local development
- document build commands
- document Cloudflare Pages deployment
- document the content directory structure
- document how a resource entry is added
- add appropriate license information for Open Tech Art itself
- validate internal links
- validate external links where practical
- ensure missing optional metadata does not break pages
- ensure the build succeeds from a clean checkout
- test responsive layouts
- test basic accessibility
- check performance/image sizes

Create a basic "SUBMISSION_GUIDELINES.md", but do not spend significant time developing the final contribution process yet. That will be Phase 5 after we have experience with real entries.

Mention the future philosophy:

Raw → Reference → Showcase

Raw shows what goes in. Reference shows what the technique itself does. Showcase demonstrates what can be achieved with it.

Explain that unusual technical-art techniques may require exceptions; honesty and clarity matter more than rigid standardization.

Definition of done

Do not stop at a wireframe or architectural proposal.

The final repository should contain a polished, populated, responsive Open Tech Art website that:

- builds successfully
- can be deployed directly to Cloudflare Pages
- uses Git-managed structured content
- contains real, verified seed resources
- provides useful browsing/search/filtering
- has functional resource detail pages
- clearly attributes and links to original creators
- has an architecture ready for future GitHub PR contributions
- visually feels like a credible public resource library rather than a developer demo

Make reasonable implementation decisions independently. Prefer completing and testing the site over repeatedly asking for minor design decisions. 
