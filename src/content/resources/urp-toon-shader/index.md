---
title: Toon Shader for URP
summary: A full-featured, hand-written toon shader for URP — ramp lighting, additional lights and shadows, rim and anisotropic specular, SSAO and baked GI — plus a lite variant and an inverted-hull outline renderer feature.
category: shaders
type: shader
tags: [toon, cel-shading, stylized, outline, inverted-hull, ramp, rim-light, mobile]
repo: Delt06/urp-toon-shader
creators:
  - name: Vladislav Kantaev
    url: https://github.com/Delt06
    role: Delt06
license:
  spdx: MIT
  url: https://github.com/Delt06/urp-toon-shader/blob/master/LICENSE.md
  holder: Vladislav Kantaev
links:
  project: https://github.com/Delt06/urp-toon-shader
  docs: https://github.com/Delt06/urp-toon-shader/wiki
  extra:
    - label: Successor project — Toon RP
      url: https://github.com/Delt06/toon-rp
engine:
  name: unity
  testedVersions: ["2021.3.0f1 LTS", "2020.3 LTS"]
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "12.1.6" }
implementation: [hlsl, shaderlab, csharp]
compatibility:
  vr: unknown
  mobile: yes
  notes: The creator lists several released Android games that use the shader. Only the Forward rendering path is supported.
requirements:
  - URP Forward rendering path (Deferred is not supported)
  - Install via the Package Manager git URL given in the project README
images:
  hero:
    src: ./hero.webp
    alt: A cartoon character standing by a campfire in a low-poly forest, rendered with flat two-tone toon shading.
    caption: Forest demo bundled with the project.
  gallery:
    - src: ./city-demo.webp
      alt: A toon-shaded miniature city street with a police officer, a car and shops.
      caption: Toony Tiny City demo.
    - src: ./inverted-hull-outline.webp
      alt: A black cartoon cat and a sphere with thick dark outlines drawn by the inverted-hull renderer feature.
      caption: Inverted-hull outline renderer feature.
    - src: ./warrior.webp
      alt: An armoured warrior character in a T-pose rendered with the toon shader.
      caption: Character shading example.
verification:
  date: 2026-10-04
  revision: 6981f7dc93
  notes: MIT LICENSE.md at repository root. Versions taken from the README ("Developed and verified with Unity 2021.3.0f1 LTS and URP package v12.1.6"). Screenshots are from the repository's Showcase folder.
added: 2026-10-04
---

A toon shader for the Universal Render Pipeline written in HLSL. It covers far more of URP's lighting than most toon shaders: additional lights with shadows, light probes and lightmaps, reflection probes, SSAO and screen-space shadows. It stays **SRP Batcher** and **GPU instancing** compatible.

> The creator notes that the repository is no longer actively maintained. Its techniques continue in [Toon RP](https://github.com/Delt06/toon-rp), a custom render pipeline built for stylised rendering.

## Toon Shader

- 2- or 3-step ramp with configurable thresholds and smoothness, or ramp textures
- Configurable shadow colour, emission, rim lighting and specular, with HDR colours for bloom
- Anisotropic specular (useful for hair)
- Opaque and transparent blending modes, alpha clipping, culling options
- Fog, vertex colour, baked lighting (including the meta pass)

## Toon Shader (Lite)

A cheaper variant with a 2-step ramp, main light only, shadow casting, fog and vertex colour. It is aimed at low-end devices.

## Inverted Hull Outline

A renderer feature that draws outlines for objects on chosen layers using the inverted-hull method. The [Outline wiki page](https://github.com/Delt06/urp-toon-shader/wiki/Outline) has the details.

## Installation

Add the package from a git URL in the Package Manager:

```
https://github.com/Delt06/urp-toon-shader.git?path=Packages/com.deltation.toon-shader
```

To pin to a Unity LTS line, append `#2021.3` or `#2020.3`. Then create a material using `DELTation/Toon Shader`.
