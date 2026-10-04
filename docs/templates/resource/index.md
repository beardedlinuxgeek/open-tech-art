---
# Copy this folder to src/content/resources/<your-slug>/ and fill it in.
# The folder name becomes the URL: /resources/<your-slug>/
# Delete optional fields you don't know — never guess. See SUBMISSION_GUIDELINES.md.

title: Procedural Cobblestones
summary: One or two sentences (max 280 characters) describing what the resource does.
category: shaders            # an id from src/content/categories.yaml
type: shader                 # see RESOURCE_TYPES in src/lib/taxonomy.ts
tags: [procedural, stone, triplanar]
repo: owner/repo             # the GitHub repository; stars & last commit come from here

creators:
  - name: Original Creator
    url: https://example.com            # optional
    # role: Shader Graph author         # optional

license:
  spdx: MIT                             # see LICENSES in src/lib/taxonomy.ts
  url: https://github.com/owner/repo/blob/main/LICENSE
  # holder: Original Creator            # optional, as written in the license
  # notes: Any third-party notices worth surfacing.

# Optional. `project` defaults to https://github.com/<repo>.
# links:
#   project: https://example.com/canonical-page       # only if not the repository
#   download: https://github.com/owner/repo/releases  # if distinct
#   docs: https://example.com/tutorial                # creator's tutorial or docs
#   extra:
#     - label: Something else useful
#       url: https://example.com

# Omit `engine` entirely for engine-agnostic resources.
engine:
  name: unity
  testedVersions: ["2022.3 LTS"]       # only what the creator states
  # minVersion: "2021.3"
  renderPipelines: [urp]
  # packages:
  #   - { name: Universal RP, version: "14.0.9" }

implementation: [shader-graph]          # shader-graph | vfx-graph | hlsl | shaderlab | compute | csharp | render-graph | dots

compatibility:
  vr: unknown                           # yes | partial | no | unknown
  mobile: unknown                       # Quest / mobile
  # notes: Quote or cite the creator's claim.

requirements:
  - Depth Texture enabled on the URP asset

images:
  # Paths are relative to this file.
  reference:
    src: ./reference.webp
    alt: Describe what the image shows for screen-reader users.
  raw:
    src: ./raw.webp
    alt: The same scene without the effect.
  # hero:
  #   src: ./hero.webp
  #   alt: …
  # gallery:
  #   - src: ./detail-1.webp
  #     alt: …
  #     caption: …
  provenance: standard                  # creator (creator screenshots) | standard (Raw/Reference captures)

verification:
  date: 2026-01-01
  revision: abc1234                     # commit / release / version checked
  notes: How the license and facts were confirmed.

added: 2026-01-01
# draft: true                           # hides the entry from the site
---

Longer documentation in Markdown: what the technique does, how it works, how to install and use it,
and any caveats. Credit the creator and link to their own documentation where possible.
