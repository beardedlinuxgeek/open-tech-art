---
title: "URP Underwater Effects"
summary: "A modular underwater rendering stack for URP with volumetric sun shafts, caustics, fog, refraction and water-line refraction, built on Render Graph with a Volume-driven workflow."
category: rendering
type: render-feature
tags: ["underwater", "caustics", "fog", "refraction", "god-rays", "volume", "render-graph"]
repo: End3r6/URPUnderwaterEffects
creators:
  - name: "End3r6"
    url: https://github.com/End3r6
license:
  spdx: MIT
  url: https://github.com/End3r6/URPUnderwaterEffects/blob/master/License
  holder: "End3r6"
links:
  project: https://github.com/End3r6/URPUnderwaterEffects
  docs: https://github.com/End3r6/URPUnderwaterEffects/wiki/Setup-Guide
engine:
  name: unity
  testedVersions: []
  renderPipelines: ["urp"]
implementation: ["render-graph", "csharp"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Follow the setup guide on the repository wiki"
  - "Transparent objects join underwater fog through a `TransparentDepthSettings` component"
images:
  hero:
    src: ./hero.webp
    alt: "A dark teal body of water with a bright sun reflection streaking across it and trees along the far shore."
    caption: "Animated water-line demo from the repository; a still frame is shown."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "c041330"
  notes: "MIT license file (named \"License\") at repository root. Features from the README; no Unity version is stated there, so none is recorded."
added: 2026-10-04
---

An underwater effect framework for URP that started as a fog effect and grew into a shared stack.

## Effects

- Volumetric sun shafts
- Caustics
- Fog
- Refraction and water-line refraction
- Colour changes driven by the main light and ambient colour

## Framework

Version 4.0 is a full Render Graph rewrite with shared resources and masks, downsampling, blue-noise sampling, bilateral blurs and an effect-ordering system, so you can add your own effects. Transparent objects such as glass domes can take part in the fog with a per-object thickness and opacity. A bubble particle prefab is included.
