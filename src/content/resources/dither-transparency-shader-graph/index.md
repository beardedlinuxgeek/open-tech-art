---
title: "Dither Transparency (Shader Graph)"
summary: "A dithered-transparency Shader Graph: pixels are written as opaque but alpha-clipped with a Bayer matrix, avoiding blending and sorting problems and enabling depth writes."
category: shaders
type: shader
tags: ["dither", "transparency", "alpha-clip", "bayer", "fade", "shader-graph"]
repo: daniel-ilett/shaders-dither-transparency
creators:
  - name: "Daniel Ilett"
    url: https://danielilett.com
license:
  spdx: MIT
  url: https://github.com/daniel-ilett/shaders-dither-transparency/blob/main/LICENSE
  holder: "Daniel Ilett"
links:
  project: https://github.com/daniel-ilett/shaders-dither-transparency
  extra:
    - label: "Video tutorial"
      url: https://www.youtube.com/watch?v=NHd1PeJfyzE
engine:
  name: unity
  testedVersions: ["2022.3.0f1 LTS"]
  renderPipelines: []
implementation: ["shader-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Profile on mobile GPUs: the README warns alpha clip can be more expensive there"
images:
  hero:
    src: ./hero.webp
    alt: "A character wearing a dark hood whose body dissolves into a dot pattern, with the text \"Dithered Transparency in Shader Graph — technically opaque\"."
    caption: "Project banner supplied by the creator."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "99c9d78"
  notes: "MIT LICENSE at repository root; README gives the Unity version and release date (2 April 2024). The README does not name a render pipeline, so none is recorded."
added: 2026-10-04
---

Dither transparency draws every pixel with opaque techniques — including writing to the depth buffer so hidden objects can still be culled — and uses alpha clipping against a Bayer matrix so the object appears transparent at a high enough resolution.

Compared with alpha blending you avoid many sorting artefacts and can gain performance, but the author warns it can cost more on mobile GPUs, so check the Profiler. There is an older URP version of the same idea by the same creator; this one targets Unity 2022.3.
