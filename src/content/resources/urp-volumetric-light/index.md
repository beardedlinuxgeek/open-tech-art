---
title: "URP Volumetric Light"
summary: "Volumetric fog and light shafts for URP that support the main light, spot and point lights with shadows and cookies, integrated with the Volume system and working across forward, deferred, Forward+ and Deferred+."
category: lighting
type: render-feature
tags: ["volumetric", "fog", "god-rays", "light-shafts", "volume", "renderer-feature", "unity-6"]
repo: CristianQiu/Unity-URP-Volumetric-Light
creators:
  - name: "Cristian Qiu"
    url: https://github.com/CristianQiu
license:
  spdx: MIT
  url: https://github.com/CristianQiu/Unity-URP-Volumetric-Light/blob/main/LICENSE.md
  holder: "Cristian Qiu"
links:
  project: https://github.com/CristianQiu/Unity-URP-Volumetric-Light
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.3"
  renderPipelines: ["urp"]
implementation: ["render-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3 LTS or later (README: up to Unity 6000.6)"
  - "Post-processing enabled on the camera and the URP renderer"
  - "Add the `VolumetricAdditionalLight` component to spot/point lights that should contribute"
  - "Multipass VR and WebGL are not supported"
images:
  hero:
    src: ./hero.webp
    alt: "A stone tower and a glowing pink crystal in a hazy garden, with soft volumetric light in the air."
    caption: "Animated preview from the README; a still frame is shown."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "354ebc5"
  notes: "MIT LICENSE at repository root. Feature list, requirements and limitations from the README; the creator notes VR support is verified by users, not by the author."
added: 2026-10-04
---

A UPM package that adds volumetric lighting to URP. Fog is controlled by a *Volumetric Fog* Volume override and a renderer feature.

## Highlights

- Main light, spot lights and point lights, with shadows and light cookies
- Realtime and mixed lights; APV support on Unity 2023.1+
- Perspective and orthographic cameras
- Render Graph and Compatibility Mode on Unity 6
- Verified on DirectX 11/12, OpenGLES3, OpenGLCore and Vulkan; user-verified on Steam Deck, Xbox and PS5

Fog and the main/additional light contributions are disabled by default, so tick them on in the Volume override.
