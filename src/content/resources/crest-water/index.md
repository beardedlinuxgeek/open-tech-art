---
title: "Crest Water (Built-in)"
summary: "An advanced ocean and water system with waves, buoyancy and underwater rendering; this open-source repository targets Unity's Built-in renderer, while URP and HDRP versions are sold on the Asset Store."
category: rendering
type: toolkit
tags: ["ocean", "water", "waves", "underwater", "built-in"]
repo: wave-harmonic/crest
creators:
  - name: "Wave Harmonic and contributors"
    url: https://github.com/wave-harmonic
license:
  spdx: MIT
  url: https://github.com/wave-harmonic/crest/blob/master/LICENSE
  holder: "Wave Harmonic and contributors"
  notes: "Only this Built-in repository is MIT. The URP and HDRP Crest versions are separate paid Asset Store products."
links:
  project: https://github.com/wave-harmonic/crest
  docs: https://crest.readthedocs.io/en/latest
  extra:
    - label: "Crest Water 4 URP on the Asset Store (paid)"
      url: https://assetstore.unity.com/packages/slug/141674
    - label: "Crest Water 4 HDRP on the Asset Store (paid)"
      url: https://assetstore.unity.com/packages/slug/164158
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.3.62f3"
  renderPipelines: ["built-in"]
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.3.62f3 or later"
  - "Shader compilation target 4.5 or above"
  - "OpenGL and WebGL backends are not supported"
images:
  hero:
    src: ./hero.webp
    alt: "A collage of ocean scenes: a sunset over water, a boat in a harbour and a wave breaking, with the Crest ocean render logo."
    caption: "Header artwork from the repository."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "db0658ff"
  notes: "MIT LICENSE at repository root. The README states this repository targets the Built-in renderer; URP and HDRP versions are separate Asset Store products and are not covered by this entry."
added: 2026-10-04
---

Crest is a long-running Unity water system covering ocean surfaces, buoyancy and underwater rendering. This open-source repository targets the **Built-in renderer**; versions for URP, HDRP and the newer Crest Water 5 are paid Asset Store products, so don't expect URP support from this repo.

Install by copying `Assets/Crest` into your project (the examples folder is optional). Older Unity versions need the older Crest tags listed in the README (for example 4.22.4 for Unity 2020.3 and 2021.3). The documentation is hosted on Read the Docs.
