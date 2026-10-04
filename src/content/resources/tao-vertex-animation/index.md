---
title: TAO Vertex Animation
summary: A vertex-animation-texture (VAT) toolkit — an artist-facing baker that packs skinned animations into Texture2DArrays, Shader Graph sub-graphs to play them back, and a DOTS animation system for crowds of tens of thousands.
category: tools
type: toolkit
tags: [vertex-animation, vat, crowd, baking, gpu-animation, instancing, dots, ecs, lod]
repo: maxartz15/VertexAnimation
creators:
  - name: Max Kruf
    url: https://www.maxartz15.com
  - name: Tech Art Outsource (BUas)
    role: Breda University of Applied Sciences student group
license:
  spdx: MIT
  url: https://github.com/maxartz15/VertexAnimation/blob/master/LICENSE.md
  holder: Tech Art Outsource
  notes: Sample models are by Kenney (CC0) and nonlly (CC BY 4.0), and the vector encoding comes from SideFX Labs. See THIRD PARTY NOTICES.md.
links:
  project: https://github.com/maxartz15/VertexAnimation
  docs: https://github.com/maxartz15/VertexAnimation/blob/master/Documentation~/VertexAnimation.md
  extra:
    - label: Third-party notices
      url: https://github.com/maxartz15/VertexAnimation/blob/master/THIRD%20PARTY%20NOTICES.md
engine:
  name: unity
  minVersion: "2020.2.1f1"
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "10.2.2" }
    - { name: Shader Graph, version: "10.2.2" }
    - { name: Entities, version: "0.16.0-preview.21" }
    - { name: Hybrid Renderer, version: "0.10.0-preview.21" }
implementation: [shader-graph, hlsl, csharp, dots]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - Declares dependencies on early preview DOTS packages (Entities 0.16, Hybrid Renderer 0.10), which have since been superseded
  - A MonoBehaviour example (Example 3) is included for projects that do not use DOTS
images:
  hero:
    src: ./hero.webp
    alt: An overhead view of a battlefield filled with thousands of small animated soldiers in formations.
    caption: Project Castle crowd demo. Still frame from the creator's animation.
  gallery:
    - src: ./sample-assets.webp
      alt: A four-rotor drone robot animated by the vertex animation shader on a dark background.
      caption: Sample asset playing a baked animation (still frame).
    - src: ./shader-graph.webp
      alt: The Shader Graph blackboard and material inspector for the lit vertex animation shader.
      caption: Lit vertex animation shader built in Shader Graph.
    - src: ./model-baker.webp
      alt: The model baker editor window with animation clips, texture size and LOD settings.
      caption: Artist-facing model baker.
verification:
  date: 2026-10-04
  revision: 4499f67f31
  notes: MIT LICENSE.md, and package.json declares the MIT license. Versions and dependencies read from package.json. Last commit 2021-06-24, so expect to update the DOTS dependencies for current Unity versions.
added: 2026-10-04
---

TAO Vertex Animation bakes skinned-mesh animations into textures so the GPU can play them back. This lets you render **tens of thousands of animated characters**, each with its own animation state, without skinned mesh renderers.

## Features

**Model baker**
- Stores multiple animations in one `Texture2DArray`
- Generates LODs, prefabs and animation books

**Shaders**
- Lit vertex animation shader built in Shader Graph, with full sub-graph support
- Interpolation between frames
- Normal encoding and decoding

**DOTS animation system**
- A small API around animation libraries and books
- Sample systems for playing animations and spawning many characters

## Status

The project was built by the Tech Art Outsource group at Breda University of Applied Sciences and last updated in 2021. Its DOTS layer targets the early preview Entities packages. The baker and the Shader Graph playback are still a useful reference for building VAT pipelines today. The creators list ideas for improvement in the README, such as per-bone animation and a separate rotation map.

## Installation

Install it as a package from the git URL in the Package Manager (`https://github.com/maxartz15/VertexAnimation.git`). Samples are importable from the package page.
