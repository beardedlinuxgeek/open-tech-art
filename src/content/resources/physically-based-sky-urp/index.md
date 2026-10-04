---
title: "Physically Based Sky for URP"
summary: "A physically based sky with precomputed atmospheric scattering for URP, including height-based fog, dynamic sky reflection and dynamic ambient lighting, controlled through Volume overrides."
category: rendering
type: render-feature
tags: ["sky", "atmosphere", "scattering", "fog", "volume", "renderer-feature", "hdrp-port"]
repo: jiaozi158/UnityPhysicallyBasedSkyURP
creators:
  - name: "jiaozi158"
    url: https://github.com/jiaozi158
license:
  spdx: MIT
  url: https://github.com/jiaozi158/UnityPhysicallyBasedSkyURP/blob/main/LICENSE.md
  holder: "jiaozi158"
links:
  project: https://github.com/jiaozi158/UnityPhysicallyBasedSkyURP
  docs: https://github.com/jiaozi158/UnityPhysicallyBasedSkyURP/blob/main/Documentation~/Documentation.md
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.3"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14 or higher" }
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3 (URP 14) or higher"
  - "Shader model 3.5 or higher"
  - "Perspective projection camera"
images:
  hero:
    src: ./hero.webp
    alt: "A wide strip of landscape under a golden sky with clouds and the sun low on the horizon."
    caption: "Header image from the repository."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "f8f1f3f"
  notes: "MIT LICENSE at repository root. Features and requirements from the README."
added: 2026-10-04
---

A sky system for URP built from a physically based sky model with precomputed atmospheric scattering.

## Features (per the README)

- Physically based sky
- Atmospheric scattering
- Height-based fog
- Dynamic sky reflection
- Dynamic ambient lighting (Physically Based Sky only)

Setup: install by git URL, add the *Physically Based Sky URP* renderer feature to the active URP renderer, then add the Visual Environment, Physically Based Sky and Fog overrides to a scene Volume. The author suggests starting with Sun Intensity ≈ 3 and Exposure 0. It pairs with the same author's Volumetric Clouds package.
