---
title: "BlurToonURP"
summary: "A full-featured anime-style toon shader for URP with shade steps, highlights, outlines, rim light, emission, MatCap, light settings and a per-object shadow system, with a custom material inspector."
category: shaders
type: shader
tags: ["toon", "npr", "anime", "outline", "rim-light", "matcap", "per-object-shadow", "character"]
repo: blurfeng/blur-toon-urp
creators:
  - name: "blurfeng"
    url: https://github.com/blurfeng
license:
  spdx: MIT
  url: https://github.com/blurfeng/blur-toon-urp/blob/main/LICENSE
  holder: "Blur"
links:
  project: https://github.com/blurfeng/blur-toon-urp
engine:
  name: unity
  testedVersions: ["2022.3.62f3 LTS"]
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14.0.12" }
implementation: ["shaderlab"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3 LTS with URP enabled"
  - "Use the shader `BlurToonURP/Lit` on a material"
images:
  hero:
    src: ./hero.webp
    alt: "Two views of a pink-haired anime-style character model in the Unity editor, rendered with the toon shader."
    caption: "Header animation from the README; a still frame is shown."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "d3f9234"
  notes: "MIT LICENSE at repository root; README (Chinese, with an English version) also states MIT. Unity and URP versions from the README table."
added: 2026-10-04
---

A toon (NPR) shader project for URP aimed at anime-style characters. The README covers a lot of ground:

- Shade steps and shade-threshold maps
- Normal maps and highlights with mask maps
- **Outline** shader pass
- **Rim light** with Fresnel- or depth-based detection
- Emission with animation, and **MatCap**
- Light settings and a **per-object shadow** system for high-resolution character shadows
- Five passes (ForwardLit, ShadowCaster, DepthOnly, DepthNormals, Outline) and SRP Batcher-compatible property buffers

The project was developed on Unity 2022.3 LTS. The README is written primarily in Chinese.
