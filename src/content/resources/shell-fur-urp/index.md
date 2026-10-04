---
title: "Shell Fur for URP"
summary: "A shell-based fur shader for URP with both geometry-shader and multi-pass variants, plus five demo scenes covering high-fidelity, performant, baked-lighting and physical-hair setups."
category: shaders
type: shader
tags: ["fur", "hair", "shell", "multi-pass", "stylized", "character"]
repo: jiaozi158/ShellFurURP
creators:
  - name: "jiaozi158"
    url: https://github.com/jiaozi158
license:
  spdx: MIT
  url: https://github.com/jiaozi158/ShellFurURP/blob/main/LICENSE
  holder: "jiaozi158"
  notes: "Builds on hecomi's UnityFurURP (MIT, 2021) and includes a hair specular function from maajor/Marschner-Hair-Unity (MIT, 2019) and a noise texture from ChiliMilk (MIT). Demo models are CC0 (blendswap). The repository LICENSE lists all of them."
links:
  project: https://github.com/jiaozi158/ShellFurURP
  docs: https://github.com/jiaozi158/ShellFurURP/blob/main/Documentation/Documentation.md
  extra:
    - label: "Based on hecomi's UnityFurURP"
      url: https://github.com/hecomi/UnityFurURP
engine:
  name: unity
  testedVersions: []
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "12.1 or above" }
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "URP 12.1 or above"
  - "A geometry-shader-capable GPU for the geometry shader fur; multi-pass fur works on common GPUs"
images:
  hero:
    src: ./hero.webp
    alt: "A fluffy plush dragon toy with white-and-blue fur casting a soft shadow on a pink floor."
    caption: "High Fidelity demo scene."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "a63ee40"
  notes: "MIT LICENSE at repository root, followed by third-party notices (hecomi's UnityFurURP, maajor's Marschner-Hair-Unity, ChiliMilk's noise texture, CC0 plush toy and stage models)."
added: 2026-10-04
---

A fur shader for URP based on hecomi's UnityFurURP. The shell technique stacks layers of the mesh to build up strands. This version adds a **multi-pass** mode so it also works on GPUs without geometry-shader support.

## Demo scenes

High Fidelity, Performant, BakedLighting, Multi-Pass Fur and Physical Hair (which uses HDRP's physical hair lighting model). Switch the project quality from *HighFidelity* to *Performant* when opening the Performant scene.

The screenshot's anti-aliasing was captured with 16× supersampling, which the README says was used because URP lacked an effective AA method at the time.
