---
title: "Sketched Shadows Post Process"
summary: "A Mystery Dungeon–style sketch effect: shadowed regions are expanded with an object-aware Gaussian blur and overlaid with a hand-drawn texture using depth-based world positions and triplanar mapping."
category: rendering
type: post-processing
tags: ["sketch", "hatching", "stylized", "shadows", "triplanar", "post-processing", "depth-normals"]
repo: daniel-ilett/shaders-sketched
creators:
  - name: "Daniel Ilett"
    url: https://danielilett.com
license:
  spdx: MIT
  url: https://github.com/daniel-ilett/shaders-sketched/blob/main/LICENSE
  holder: "Daniel Ilett"
links:
  project: https://github.com/daniel-ilett/shaders-sketched
  docs: https://danielilett.com/2024-09-27-tut7-15-mystery-dungeon-sketch-urp/
  extra:
    - label: "Video tutorial"
      url: https://www.youtube.com/watch?v=h2f05Id8uKc
engine:
  name: unity
  testedVersions: ["2022.3.0f1 LTS"]
  renderPipelines: ["urp"]
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Depth and depth-normals textures (the overlay is reconstructed from them)"
images:
  hero:
    src: ./hero.webp
    alt: "A forest scene with green wooden planks and leaves, with the title text \"Mystery Dungeon Sketch Post Process in Unity URP\"."
    caption: "Project banner supplied by the creator."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "aafcb38"
  notes: "MIT LICENSE at repository root. Unity version and technique description from the README."
added: 2026-10-04
---

A post-processing effect that reproduces the sketchy shadows seen in *Pokémon Mystery Dungeon: Rescue Team DX*.

## How it works (per the README)

1. The shadowed area is expanded with a Gaussian blur that reacts to object boundaries, because the original sketches slightly overshoot the shadow edges.
2. A sketch texture is overlaid on the scene, using world position reconstructed from the depth texture.
3. Triplanar mapping with the depth-normals texture keeps the texture from stretching on different surfaces.

Created with Unity 2022.3 for URP as part of a tutorial; the article and video are linked on this page.
