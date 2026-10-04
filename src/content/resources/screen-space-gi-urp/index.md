---
title: "Screen Space Global Illumination for URP"
summary: "A screen-space global illumination renderer feature for URP with a Volume override, including a sample scene with a before/after comparison."
category: lighting
type: render-feature
tags: ["ssgi", "global-illumination", "screen-space", "renderer-feature", "volume"]
repo: jiaozi158/UnitySSGIURP
creators:
  - name: "jiaozi158"
    url: https://github.com/jiaozi158
license:
  spdx: MIT
  url: https://github.com/jiaozi158/UnitySSGIURP/blob/main/LICENSE.md
  holder: "jiaozi158"
links:
  project: https://github.com/jiaozi158/UnitySSGIURP
  docs: https://github.com/jiaozi158/UnitySSGIURP/blob/main/Documentation~/Documentation.md
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.3.35f1"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14 or above" }
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3.35f1 (URP 14) or above — older patches may ghost because of motion vectors"
  - "Shader model 3.5 or above"
  - "OpenGL APIs need extra setup steps described in the author's related repository"
images:
  hero:
    src: ./hero.webp
    alt: "A softly lit room corner with a wooden slatted wall, a window and a bean bag, rendered with screen-space global illumination."
    caption: "The \"Relaxing Corner\" sample scene with SSGI at full resolution."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "8450297"
  notes: "MIT LICENSE at repository root. Requirements and caveats from the README."
added: 2026-10-04
---

Screen Space Global Illumination for URP, packaged for the Package Manager. It adds a renderer feature and a *Lighting / Screen Space Global Illumination (URP)* Volume override.

## Caveats from the README

- It is described as an initial release, so some unresolved issues are expected.
- VR support is planned but not yet available.
- Documentation is still in progress.
- Motion vectors in older URP patch versions can cause severe ghosting; the author recommends a recent 2022.3 patch.
