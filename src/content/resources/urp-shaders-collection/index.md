---
title: URP Shaders Collection
summary: A grab-bag of ready-to-use URP Shader Graphs — cartoon water, toon shading, force field, hex and plasma VFX, bubble, diamond, toxic, wireframe and vertical fog.
category: shaders
type: shader-collection
tags: [water, toon, force-field, hologram, sci-fi, fog, wireframe, collection, stylized]
repo: TinyPlay/URPShadersCollection
creators:
  - name: TinyPlay
    url: https://github.com/TinyPlay
license:
  spdx: MIT
  url: https://github.com/TinyPlay/URPShadersCollection/blob/main/LICENSE
  holder: TinyPlay
links:
  project: https://github.com/TinyPlay/URPShadersCollection
engine:
  name: unity
  renderPipelines: [urp]
implementation: [shader-graph, shaderlab, hlsl]
compatibility:
  vr: unknown
  mobile: partial
  notes: The creator warns that some shaders "can be expensive for mobile GPU". No Unity version is stated.
requirements:
  - Depth Texture enabled on the URP asset for water foam and other depth-based effects
images:
  hero:
    src: ./hero.webp
    alt: A row of spheres on a checkerboard floor, each showing a different shader — water, bubble, plasma, hex and toon materials.
    caption: Collection preview supplied by the creator.
verification:
  date: 2026-10-04
  revision: 6e663fffcc
  notes: MIT LICENSE at repository root; the README calls the collection "open-source and can be used in your projects for free". Shader list confirmed against the Shaders folder.
added: 2026-10-04
---

A collection of shaders and Shader Graphs for the Universal Render Pipeline. It is free and open source on GitHub.

## Included

| Group | Shaders |
| --- | --- |
| Environment | Diamond, Toxic, Vertical Fog *(HLSL)* |
| Surface | Stylized Cartoon Water |
| Toon shading | Basic Toon, Specular Toon, Specular Toon with Rim / Emissive |
| VFX | Bubble, Animated Camo, Force Field, Sci-Fi, Hex, Plasma |
| Other | Background Gradient, Wireframe *(HLSL)* |

## Notes

- Water foam and similar effects need **Depth Texture** enabled on the URP asset.
- According to the creator, some of these shaders can be expensive on mobile GPUs. Profile them on your target devices.
- The project is open to shader requests through GitHub Issues.
