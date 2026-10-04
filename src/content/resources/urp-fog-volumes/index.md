---
title: "URP Fog Volumes"
summary: "Ray-marched volumetric fog volumes for URP with light shafts, animated 3D noise, four volume shapes, shadows and cookies from realtime lights, and optional temporal reprojection."
category: rendering
type: render-feature
tags: ["fog", "volumetric", "god-rays", "light-shafts", "ray-marching", "renderer-feature"]
repo: sinnwrig/URP-Fog-Volumes
creators:
  - name: "sinnwrig"
    url: https://github.com/sinnwrig
license:
  spdx: MIT
  url: https://github.com/sinnwrig/URP-Fog-Volumes/blob/main/LICENSE.md
  notes: "The LICENSE.md file contains the MIT permission text but no copyright line, so no holder is named."
links:
  project: https://github.com/sinnwrig/URP-Fog-Volumes
engine:
  name: unity
  testedVersions: ["2022.3"]
  renderPipelines: ["urp"]
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Fog Volume Render Feature added to the URP renderers"
  - "Up to 32 lights per volume"
  - "No DirectX 9 / DX11 9.x support (dynamic loops)"
  - "Temporal reprojection only works in play mode"
images:
  hero:
    src: ./hero.webp
    alt: "A forest scene with sunlight streaming through trees past a torii gate, with fog in the air."
    caption: "Terrain scene with fog volumes enabled."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "e926baa"
  notes: "MIT permission text in LICENSE.md. The file contains no copyright-holder line, so no holder is recorded. Features and limits taken from the README; 2022.3 is the version it was tested with."
added: 2026-10-04
---

Single-bounce ray-marched volumetric fog for URP. Place fog volumes in the scene as components, assign a profile, and tune scale and settings.

## Features (per the README)

- Half- and quarter-resolution rendering with depth-aware upsampling
- Temporal rendering with reprojection (described as semi-complete)
- Animated, scrolling 3D noise
- Cube, capsule, sphere and cylinder volumes with non-uniform scale and rotation
- All realtime lights, shadows and cookies, up to 32 lights per volume
- APV global-illumination support on Unity 2023.1+
- Importable samples for a gas station, a forest and an office building

Lighting is artistic rather than physically based, and fog does not self-shadow.
