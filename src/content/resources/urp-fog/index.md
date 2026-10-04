---
title: "URPFog — Full Screen Fog"
summary: "Volume-driven full-screen fog for URP with depth, distance and height modes, optional noise and experimental support for transparent objects, built as a Fullscreen Shader Graph plus renderer feature."
category: rendering
type: render-feature
tags: ["fog", "height-fog", "distance-fog", "volume", "renderer-feature", "fullscreen", "unity-6"]
repo: meryuhi/URPFog
creators:
  - name: "Meryuhi"
    url: https://github.com/meryuhi
license:
  spdx: MIT
  url: https://github.com/meryuhi/URPFog/blob/main/LICENSE.md
  holder: "Meryuhi"
links:
  project: https://github.com/meryuhi/URPFog
engine:
  name: unity
  testedVersions: []
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "17 (branch urp14 covers URP 14\u201316)" }
implementation: ["shader-graph", "csharp", "render-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "URP 17 (Unity 6) on the main branch; use the `urp14` branch for URP 14–16"
  - "Transparent-object support needs a camera stack (experimental)"
images:
  hero:
    src: ./hero.webp
    alt: "A pale, hazy scene with simple boxes and a capsule fading into pink-beige fog with distance."
    caption: "Depth-mode fog screenshot from the README."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "f7d4096"
  notes: "MIT LICENSE file at repository root; README also states MIT. Unity/URP compatibility taken from the README's compatibility note."
added: 2026-10-04
---

Fog effects for URP that run as a fullscreen effect. They are controlled through the URP **Volume** framework, so different areas of a scene can blend between fog settings without code.

## Modes

- **Depth** fog
- **Distance** fog
- **Height** fog
- Optional **noise**
- Experimental support for transparent objects via a camera stack

The `FullScreenFog` shader is itself a Fullscreen Shader Graph, so it can also be used directly with Unity's Full Screen Pass Renderer Feature.

## Compatibility

Per the README, Unity 6000.0 to 6000.3 support both the Render Graph and the old Compatibility Mode paths; Unity 6000.4 and later use only Render Graph. Install it through the Package Manager with a git URL.
