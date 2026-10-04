---
title: Stylized Vegetation
summary: A small URP project of stylised trees, bushes and grass with Shader Graph wind sway, gradient colouring and Cyanilux-style custom toon lighting, with shader LODs aimed at mobile.
category: shaders
type: shader
tags: [foliage, wind, vertex-animation, grass, trees, stylized, toon, lod, mobile]
repo: ProblematicToucan/stylized-vegetation
creators:
  - name: Gamal Abdul Aziz
    url: https://github.com/ProblematicToucan
    role: ProblematicToucan
license:
  spdx: MIT
  url: https://github.com/ProblematicToucan/stylized-vegetation/blob/main/LICENSE
  holder: Gamal Abdul Aziz
links:
  project: https://github.com/ProblematicToucan/stylized-vegetation
  extra:
    - label: Custom lighting sub-graphs by Cyanilux
      url: https://github.com/Cyanilux/URP_ShaderGraphCustomLighting
engine:
  name: unity
  testedVersions: ["2020.3.36f1 LTS"]
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "10.9.0" }
implementation: [shader-graph, hlsl]
compatibility:
  vr: unknown
  mobile: yes
  notes: The creator states the project "works for mobile and desktop" and provides lower-cost LOD1 shader variants.
requirements:
  - Vertex colours on the foliage meshes mask the wind motion (as in the included models)
images:
  hero:
    src: ./hero.webp
    alt: A grassy hill with stylised round-canopy trees and bushes under a blue sky.
    caption: Demo scene from the project.
verification:
  date: 2026-10-04
  revision: e327e9b314
  notes: MIT LICENSE at repository root and stated in the README. Unity version from ProjectSettings, URP version from the manifest. Wind properties (WindDirection, WindSpeed, WindStrenght, WiggleOffset) confirmed in Grass_URP_LOD0.shadergraph.
added: 2026-10-04
---

A compact Unity project with stylised vegetation assets and their Shader Graphs. Each of the **tree leaves, bushes and grass** has two shader levels of detail (`LOD0` and a cheaper `LOD1`).

## Techniques

- **Wind sway** — vertex offset driven by `Time` and noise, masked by vertex colour, with direction, speed, strength and wiggle controls exposed as material properties.
- **Gradient colouring** — top/bottom colour blend for grass.
- **Custom toon lighting** — main-light and ambient sub-graphs based on [Cyanilux's custom lighting](https://github.com/Cyanilux/URP_ShaderGraphCustomLighting), with main-light shadow keywords.

## Usage

Open the `Stylized Vegetation` folder as a Unity project and look at the `Demo` scene, or export the `GarammStudio/Stylized` folder into your own URP project.
