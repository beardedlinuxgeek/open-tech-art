---
title: Energy Shield Hologram
summary: A modular sci-fi energy shield built as a single Shader Graph — edge and intersection glow, two kinds of scanline, a hexagon overlay and impact ripples, with a VFX Graph spark burst on hit.
category: shaders
type: shader
tags: [hologram, sci-fi, shield, scanlines, intersection, fresnel, ripple, emissive]
repo: daniel-ilett/shaders-stylised-shield
creators:
  - name: Daniel Ilett
    url: https://danielilett.com
license:
  spdx: MIT
  url: https://github.com/daniel-ilett/shaders-stylised-shield/blob/main/LICENSE
  holder: Daniel Ilett
links:
  project: https://github.com/daniel-ilett/shaders-stylised-shield
engine:
  name: unity
  testedVersions: ["2021.3.0f1 LTS"]
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "12.1.6" }
    - { name: Visual Effect Graph, version: "12.1.6" }
implementation: [shader-graph, vfx-graph, csharp]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - Depth Texture enabled on the URP asset (intersection glow samples Scene Depth)
  - Visual Effect Graph package for the optional impact sparks
  - Included `EnergyShield.cs` script to drive ripples from a raycast hit
images:
  hero:
    src: ./hero.webp
    alt: A hexagon-patterned blue energy shield glowing in a dark scene, with the title "Energy Shield in Unity Shader Graph".
    caption: Project banner supplied by the creator.
verification:
  date: 2026-10-04
  revision: 1c12f30c44
  notes: MIT LICENSE file present at repository root. Unity and URP versions read from the README and ProjectSettings. Graph features confirmed by inspecting EnergyShield.shadergraph.
added: 2026-10-04
---

A stylised energy shield implemented as one Shader Graph with **modular, toggleable parts**, so you can keep the full effect or switch features off to make it cheaper.

## What's in the graph

The graph exposes a boolean keyword for each feature:

- **Edge glow** — brightens the silhouette.
- **Intersection glow** — highlights where the shield cuts through other geometry, using Scene Depth.
- **Scanlines** and a separate **big scanline** sweep.
- **Hexagon overlay** — texture-driven cells with animated noise glow.
- **Collision ripples** — a ring that expands from a world-space hit point (`Ripple Origin`, `Ripple Time`), set by the included script.

A second, smaller graph (`SceneIntersections.shadergraph`) isolates the depth-intersection technique on its own, which makes it a useful reference.

## Notes

The repository is a complete Unity project rather than a package: open it in Unity 2021.3, or copy `Assets/Shaders`, `Assets/Scripts` and `Assets/VFX` into your own URP project. The impact sparks use VFX Graph, which needs compute-shader support on the target platform.
