---
title: "URP Outline Post-Process (Sobel)"
summary: "A Sobel edge-detection post-process shader for URP that finds outlines from the depth and normal textures, with colour, depth threshold, normal threshold and thickness controls."
category: rendering
type: post-processing
tags: ["outline", "sobel", "edge-detection", "depth-normals", "post-processing"]
repo: tantaneity/unity-urp-outline-postprocess
creators:
  - name: "tantaneity"
    url: https://github.com/tantaneity
license:
  spdx: MIT
  url: https://github.com/tantaneity/unity-urp-outline-postprocess/blob/main/LICENSE
  notes: "The LICENSE file's copyright line is \"2026\" with no holder named."
links:
  project: https://github.com/tantaneity/unity-urp-outline-postprocess
engine:
  name: unity
  testedVersions: []
  renderPipelines: ["urp"]
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Depth and normal textures enabled in the URP renderer settings"
  - "You write a small custom renderer feature to run the shader's material"
images:
  hero:
    src: ./hero.webp
    alt: "A grey room scene in which a cartoon creature and the door and walls are drawn with thin black outlines."
    caption: "Example output from the repository."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "5badac5"
  notes: "MIT permission text in LICENSE; the copyright line has no holder name. Setup and parameters from the README."
added: 2026-10-04
---

A single post-process shader that draws outlines wherever depth or surface normals change sharply, using a Sobel filter with anti-aliasing. You set it up with your own small renderer feature.

## Parameters

- **Outline Color** (alpha controls blend strength)
- **Depth Threshold** — lower catches more edges; scales with distance
- **Normal Threshold** — lower is more sensitive to surface angle
- **Outline Thickness** — affects sampling radius

The README suggests starting values of 1.5 for depth, 0.1 for normals and 0.6 thickness. It is a very small project; compare it with the larger outline features in the library.
