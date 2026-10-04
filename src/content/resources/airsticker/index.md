---
title: "AirSticker"
summary: "A mesh-generation decal system for Unity that complements URP's projected decals: it supports skinned meshes and custom shaders without modification, at the cost of slower decal creation."
category: rendering
type: toolkit
tags: ["decals", "mesh-decals", "skinned-mesh", "urp", "toolkit"]
repo: CyberAgentGameEntertainment/AirSticker
creators:
  - name: "CyberAgent, Inc."
    url: https://github.com/CyberAgentGameEntertainment
license:
  spdx: MIT
  url: https://github.com/CyberAgentGameEntertainment/AirSticker/blob/main/LICENSE.md
  holder: "CyberAgent, Inc."
links:
  project: https://github.com/CyberAgentGameEntertainment/AirSticker
engine:
  name: unity
  testedVersions: []
  minVersion: "6000.0"
  renderPipelines: ["urp"]
implementation: ["csharp"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Air Sticker 2.x requires Unity 6 or higher; Air Sticker 1.x supports Unity 2020.3 or higher"
images:
  hero:
    src: ./hero.webp
    alt: "A blonde anime-style character viewed from behind with the AirSticker logo in the corner."
    caption: "Animated demo from the README; a still frame is shown."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "698cead"
  notes: "MIT LICENSE at repository root (CyberAgent, Inc., 2023). Version requirements from the README."
added: 2026-10-04
---

Decals generated as meshes at runtime, in the way many games do it, so they follow the receiver's shape and can be used with **custom shaders** and **fully skinned animation**. URP's own decals are projected (DBuffer or screen-space), which is fast to apply and avoids z-fighting but is harder to use with skinning and custom shaders.

The README shows how to combine the two: use URP decals while the receiver moves or while mesh generation is still running, then swap to the Air Sticker mesh. Trade-offs listed: decal mesh generation takes time, and z-fighting can happen.
