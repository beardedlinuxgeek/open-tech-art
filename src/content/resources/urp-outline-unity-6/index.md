---
title: "URP Outline (Unity 6)"
summary: "A simple outline renderer feature for Unity 6 URP using rendering layers and a Volume override, with up to four separately styled outline groups."
category: rendering
type: render-feature
tags: ["outline", "renderer-feature", "rendering-layers", "volume", "unity-6", "render-graph"]
repo: CristianQiu/Unity-URP-Outline
creators:
  - name: "Cristian Qiu"
    url: https://github.com/CristianQiu
license:
  spdx: MIT
  url: https://github.com/CristianQiu/Unity-URP-Outline/blob/main/LICENSE.md
  holder: "Cristian Qiu"
links:
  project: https://github.com/CristianQiu/Unity-URP-Outline
engine:
  name: unity
  testedVersions: []
  minVersion: "6000.3.0"
  renderPipelines: ["urp"]
implementation: ["render-graph", "csharp"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 6000.3.0 or above"
  - "Four rendering layers named Outline_1 to Outline_4"
  - "Post-processing enabled on the camera and URP renderer"
  - "No per-object widths, alpha clip or vertex-animated shaders"
images:
  hero:
    src: ./hero.webp
    alt: "An arched stone hall with hanging banners; some banners and ornaments are traced with bright green, yellow and white outlines."
    caption: "Preview image from the README."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "f7e75b2"
  notes: "MIT LICENSE at repository root. Requirements and limitations from the README."
added: 2026-10-04
---

A prototyping-friendly outline for URP: add the renderer feature, add the *Custom / Outline* Volume override, and put an object on one of four named rendering layers to outline it. Each layer has its own colour and parameters; the border width is shared for performance reasons.

Limitations listed by the author: no per-object outline widths, no alpha clip, and no vertex-animated outlines. A static `ForceCullPass` flag lets you skip the passes entirely when nothing is outlined.
