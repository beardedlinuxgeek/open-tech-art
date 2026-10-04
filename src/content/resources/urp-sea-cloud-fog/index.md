---
title: "URP Sea, Cloud & Atmospheric Fog"
summary: "Height-based and atmospheric fog for URP, offered as a Shader Graph sub-graph and an HLSL function to replace URP's built-in fog mixing, within a larger sea, cloud and sky project."
category: shaders
type: shader
tags: ["fog", "atmosphere", "height-fog", "sky", "sub-graph", "terrain"]
repo: bearworks/URPSeaCloudFog
creators:
  - name: "bearworks"
    url: https://github.com/bearworks
license:
  spdx: MIT
  url: https://github.com/bearworks/URPSeaCloudFog/blob/main/LICENSE
  holder: "bearworks"
  notes: "The project may include modified Unity URP code (the README shows editing TerrainLitPasses.hlsl); Unity's own package license applies to that code."
links:
  project: https://github.com/bearworks/URPSeaCloudFog
  extra:
    - label: "Related: URPSeaCloud"
      url: https://github.com/bearworks/URPSeaCloud
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.3"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14.7 (custom, per README)" }
implementation: ["shader-graph", "hlsl"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3+ (README also mentions a custom URP 14.7)"
  - "Use the AtmosFogNode sub-graph in your Shader Graph, or call `MixAtmosFog(color, worldPos)` instead of URP's `MixFog` in hand-written shaders"
images:
  hero:
    src: ./hero.webp
    alt: "A sunset sky with clouds above a rippled sea, with haze fading toward the horizon."
    caption: "Screenshot from the repository."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "a2f2cbb"
  notes: "MIT LICENSE at repository root. The README is short; usage steps and version range are as stated there."
added: 2026-10-04
---

A project combining sea, cloud and sky rendering with height-based and atmospheric fog for URP. The reusable part is the fog:

- Use the **AtmosFogNode** sub-graph inside a Shader Graph.
- Or, in hand-written shaders, replace `MixFog(color.rgb, fogCoord)` with `MixAtmosFog(color.rgb, worldPos)`; this needs the world position.

The README cites the Decima Engine SIGGRAPH 2017 presentation as a reference. The repository includes an unlit Shader Graph that uses the node on a cube as an example.
