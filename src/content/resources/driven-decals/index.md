---
title: "Driven Decals"
summary: "A mesh-based PBR decal system for URP forward rendering: decal meshes behave like ordinary scene meshes, are customisable in Shader Graph and are cheap enough for XR, though best for static cracks and graffiti."
category: rendering
type: toolkit
tags: ["decals", "mesh-decals", "pbr", "shader-graph", "xr", "urp"]
repo: Anatta336/driven-decals
creators:
  - name: "Sam Driver"
    url: https://github.com/Anatta336
license:
  spdx: MIT
  url: https://github.com/Anatta336/driven-decals/blob/master/LICENSE.txt
  holder: "Sam Driver"
  notes: "Source code is MIT. The README states the included example assets are CC BY 4.0, so keep the attribution if you reuse them."
links:
  project: https://github.com/Anatta336/driven-decals
  docs: https://samdriver.xyz/articles/decalsIntro.htm
  extra:
    - label: "60-second introduction video"
      url: https://www.youtube.com/watch?v=zFEtdRrD2D4
engine:
  name: unity
  testedVersions: []
  minVersion: "2019.3.0f6"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "7.2.1 or later" }
implementation: ["shader-graph", "csharp"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2019.3.0f6 or later, URP 7.2.1 or later (forward renderer)"
  - "Not for animated/skinned meshes; decal generation is slow, so not suited to dynamic bullet holes"
images:
  hero:
    src: ./hero.webp
    alt: "A white cup in a softly lit scene with dark grunge-style decals and small pink marks applied to its surface."
    caption: "Example screenshot from the README."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "4a70ad7"
  notes: "MIT LICENSE.txt at repository root (the README links it). README status says last updated 2024-06-09 and calls the package a preview."
added: 2026-10-04
---

A decal system that generates real meshes, which makes the decals work like any other mesh in the scene and easy to combine with other features. They are cheap to render and compatible with URP's forward renderer, which suits XR.

## When to use it

- **Good for:** static decals placed during level design — cracks, graffiti, stains.
- **Not for:** dynamic decals such as bullet holes (generation is slow; use URP's decal feature) or skinned meshes that distort at runtime.

The package carries a *preview* version number, and the author notes there are known missing features and likely bugs.
