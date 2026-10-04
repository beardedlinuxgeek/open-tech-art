Open Tech Art — Shader Discovery Research

«AGENT SCOPE: You are the asset-research agent. Your task is ONLY to research and catalog candidate assets as described in this file.

The repository's root "/plan.md" belongs to another agent that is concurrently building the website. Do not execute "/plan.md". Do not modify the website, application source, configuration, dependencies, or existing catalog entries.

Work only inside "/asset-search/".

Your deliverables are:

- "/asset-search/shader_candidates.csv"
- "/asset-search/SHADER_RESEARCH.md"

You may update "/asset-search/PLAN.md" only if necessary to record research methodology or progress, but do not rewrite the assignment.

Another agent may modify other parts of the repository while you work. Do not revert, overwrite, clean up, reformat, or otherwise interfere with changes outside "/asset-search/".

Do not download shader packages or screenshot collections into the repository. Record URLs and research results in the CSV instead.»

Goal

Research the web and build a large candidate catalog...

Open Tech Art — Unity Shader Discovery

Research the web and build a large candidate catalog of high-quality free/open Unity shaders, prioritizing:

1. URP
2. Shader Graph
3. visually useful production-oriented effects
4. projects with good screenshots
5. permissive/open licenses

This is research for Open Tech Art, an open-source technical-art resource catalog.

Do not build the website and do not download a large image collection.

Your primary deliverable is:

"shader_candidates.csv"

Goal

Find as many genuinely useful Unity shader resources as reasonably possible while maintaining quality.

Look broadly across the web rather than relying primarily on GitHub.

Search sources including:

- GitHub
- itch.io
- personal websites/blogs
- ArtStation
- Unity Asset Store
- Gumroad/creator storefronts
- technical-art blogs
- open-source Unity projects
- other legitimate sources

Actively seek diversity of sources.

Also seek diversity of shader types, including:

- procedural materials
- stylized materials
- toon/cel shading
- outlines
- water
- ocean
- rivers
- foliage
- wind
- grass
- terrain
- snow
- sand
- rock
- brick
- cobblestone
- dissolve
- hologram
- force fields
- portals
- fire
- lava
- ice
- glass
- refraction
- clouds
- fog
- god rays
- vertex animation
- pixelation
- screen-space effects
- post-processing
- decals
- triplanar shaders
- fake interiors
- billboards/impostors
- miscellaneous interesting Shader Graph techniques

These are search directions, not quotas.

Critical licensing rule

Free does not mean open source.

For each candidate, investigate the license.

Strongly prefer explicit licenses such as:

- MIT
- Apache
- BSD
- CC0
- CC-BY
- similarly permissive licenses

Do not claim a license unless you can verify it.

If something looks excellent and is free but licensing is unclear, it may remain in the research CSV, but mark:

"license_status = unclear"

Do not mark it as approved.

Similarly, distinguish between:

- open source
- free download with restrictive terms
- free Asset Store asset
- unclear licensing

We will later decide what can actually appear on Open Tech Art.

Screenshots

Every candidate must have at least one publicly visible screenshot or preview image demonstrating the shader.

Record one representative image URL only.

Do not download the image.

Prefer a stable image associated with the original creator/project rather than Google Images, Pinterest, reposts, thumbnails from unrelated websites, etc.

Also record the page where the image/license evidence came from where useful.

Verification

Do not hallucinate entries.

For every row:

- open the project page
- verify the resource actually exists
- verify that it is free to obtain
- determine URP compatibility if possible
- determine Shader Graph vs HLSL/custom shader if possible
- inspect licensing
- locate a representative screenshot
- verify URLs

Unknown is acceptable.

Guessing is not.

CSV schema

Create:

"shader_candidates.csv"

Use these columns:

title
creator
brief_description
project_url
source_site
image_url
license
license_status
license_url
free
urp
shader_graph
unity_versions
category
tags
notes

Use normalized values where possible.

For:

"free"

use:

yes
no
unknown

For:

"urp"

use:

yes
no
unknown

For:

"shader_graph"

use:

yes
no
mixed
unknown

For:

"license_status"

use:

verified_open
free_restrictive
unclear

Keep "brief_description" concise: normally one sentence.

"category" should contain one useful primary category.

"tags" may contain multiple semicolon-separated tags.

"notes" should record important caveats such as:

- requires renderer feature
- old Unity version
- Built-in only
- HDRP support also available
- screenshot licensing needs review
- repository archived
- unclear redistribution rights
- free Asset Store download but proprietary license

Quality threshold

Do not fill the CSV with trivial tutorial exercises merely to increase the row count.

Prefer shaders that someone might genuinely search for and use in a game.

A smaller collection of 100 strong candidates is preferable to 500 low-quality tutorial fragments.

However, search broadly and aim for a substantial dataset.

Include particularly strong resources even when licensing is unclear, because this is a research candidate list, not the final published catalog. Clearly flag the licensing issue.

Prioritization

Put the strongest candidates near the top of the CSV.

Highest priority:

URP + Shader Graph + high visual quality + explicit open license + good screenshot

Then:

URP + open license + good screenshot

Then useful candidates with uncertainty that require later review.

Additional deliverable

Create a short:

"SHADER_RESEARCH.md"

Summarize:

- number of candidates found
- number with verified open licenses
- number confirmed URP
- number confirmed Shader Graph
- distribution by source website
- distribution by major category
- especially strong candidates you recommend using to seed Open Tech Art
- recurring licensing/problems encountered during research

Do not modify the website architecture or add all these assets to the repository.

The purpose of this task is discovery and structured research so another agent can later review the candidates and turn selected entries into Open Tech Art catalog pages.

Commit only the CSV and research summary unless another file is genuinely necessary for documenting the research.
