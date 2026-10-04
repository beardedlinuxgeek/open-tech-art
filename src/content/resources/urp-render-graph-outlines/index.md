---
title: Screen-Space Outlines for Render Graph
summary: A screen-space outline renderer feature updated for Unity 6 and URP's Render Graph API, filtered by layer mask and rendering layers, with an option to show outlines through other objects.
category: rendering
type: render-feature
tags: [outline, screen-space, edge-detection, render-graph, renderer-feature, depth-normals, unity-6]
creators:
  - name: Finn Pelzer
    url: https://github.com/Chishikii
    role: Chishikii
license:
  spdx: MIT
  url: https://github.com/Chishikii/URP-Render-Features/blob/main/LICENSE
  holder: Finn Pelzer
  notes: The outline feature adapts Robin Seibold's MIT-licensed Unity-URP-Outlines, itself an implementation of Erik Roystan Ross's outline shader.
links:
  project: https://github.com/Chishikii/URP-Render-Features
  extra:
    - label: Earlier implementation by Robin Seibold
      url: https://github.com/Robinseibold/Unity-URP-Outlines
    - label: Original technique write-up by Erik Roystan Ross
      url: https://roystan.net/articles/outline-shader.html
platforms: [github]
engine:
  name: unity
  testedVersions: ["6000.2.9f1"]
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "17.0.3 (README) / 17.2.0 (project)" }
implementation: [render-graph, shader-graph, csharp]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - Unity 6 with URP 17 (uses the Render Graph API, RendererLists and the Blitter API)
  - Rendering layers or layer masks set up for the objects that should be outlined
images:
  hero:
    src: ./hero.webp
    alt: Coloured primitives in a simple scene; black outlines around the shapes remain visible where one object passes behind another.
    caption: Outlines set to show through occluding geometry.
  gallery:
    - src: ./outlines-hidden.webp
      alt: The same scene with outlines hidden wherever the outlined object is behind other geometry.
      caption: Outlines hidden behind occluders (depth-tested).
verification:
  date: 2026-10-04
  revision: 2590abe282
  notes: MIT LICENSE at repository root. Unity version from ProjectSettings, URP version from Packages/manifest.json. Screenshots from the repository's Documentation folder.
added: 2026-10-04
---

This repository collects several custom renderer features written for **Unity 6** and URP's **Render Graph** API. Its main piece is a screen-space outline feature. Robin Seibold's popular implementation of [Erik Roystan Ross's outline shader](https://roystan.net/articles/outline-shader.html) was adapted to work with the newer URP versions.

## Outline feature

- Choose which objects get outlines with **LayerMasks** and **Rendering Layers**.
- Choose whether outlines are **hidden behind other objects** or **render through** them (see the two screenshots).
- Detection runs on view-space normals and depth, using two Shader Graphs (`S_ViewSpaceNormals`, `S_ScreenSpaceOutlines`) and C# passes built on RendererLists and the Blitter API.

## Also in the repository

- **Desaturation** feature, filtered by layer mask and rendering layers. Per the README, it is not yet ported to Render Graph.
- **Blur** feature adapted from Unity's documentation sample. Per the README, it is not yet ported to Render Graph.

The creator credits [Cyanilux's renderer-features tutorial](https://www.cyanilux.com/tutorials/custom-renderer-features/) and Unity's URP samples as references. That makes the project a compact, readable example of a Render Graph port.
