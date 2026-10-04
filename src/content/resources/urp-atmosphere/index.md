---
title: "URP Atmosphere"
summary: "Atmospheric scattering for URP, ported from a Shadertoy implementation and extended with baked optical depth, for planet-scale skies and ocean haze."
category: rendering
type: render-feature
tags: ["atmosphere", "scattering", "sky", "planet", "renderer-feature", "compute"]
repo: sinnwrig/URP-Atmosphere
creators:
  - name: "Kai Angulo"
    url: https://github.com/sinnwrig
license:
  spdx: MIT
  url: https://github.com/sinnwrig/URP-Atmosphere/blob/main/LICENSE.md
  holder: "Kai Angulo"
  notes: "Ported from a Shadertoy implementation (https://www.shadertoy.com/view/wlBXWK) — check that shader's own license if you reuse the algorithm."
links:
  project: https://github.com/sinnwrig/URP-Atmosphere
  extra:
    - label: "Original Shadertoy"
      url: https://www.shadertoy.com/view/wlBXWK
engine:
  name: unity
  testedVersions: ["2022"]
  renderPipelines: ["urp"]
implementation: ["hlsl", "compute"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Compute shader support on the target platform"
  - "Orthographic cameras do not work"
  - "Not tested with VR/AR, Mac or mobile"
images:
  hero:
    src: ./hero.webp
    alt: "A bright blue sky with a sun glow above a flat green plain dotted with a few cubes."
    caption: "Default earth-like profile at daytime."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "472e022"
  notes: "MIT LICENSE at repository root. Platform notes from the README. The repository README itself says it is a port of a Shadertoy."
added: 2026-10-04
---

An atmospheric scattering effect for URP, ported from a Shadertoy to HLSL and modified to use baked optical depth, an idea the author credits to Sebastian Lague's atmosphere video.

## Setup (per the README)

Add the Atmosphere render feature to the active renderer, create an *Atmosphere Profile* ScriptableObject, add an *AtmosphereEffect* component to an object and tune the planet and atmosphere scale. If you use a camera stack to extend view distance, an optional Depth Stack feature lets the effect read the far camera's depth.

Each effect currently supports only one main light.
