---
title: "Volumetric Clouds for URP"
summary: "A port of HDRP's volumetric clouds to URP: ray-marched global clouds driven through a Volume override, with local clouds and a physically based sky available as optional extras."
category: rendering
type: render-feature
tags: ["clouds", "volumetric", "sky", "ray-marching", "renderer-feature", "hdrp-port"]
repo: jiaozi158/UnityVolumetricCloudsURP
creators:
  - name: "jiaozi158"
    url: https://github.com/jiaozi158
license:
  spdx: MIT
  url: https://github.com/jiaozi158/UnityVolumetricCloudsURP/blob/main/LICENSE
  holder: "jiaozi158"
links:
  project: https://github.com/jiaozi158/UnityVolumetricCloudsURP
  docs: https://github.com/jiaozi158/UnityVolumetricCloudsURP/blob/main/Documentation/Setup.md
  extra:
    - label: "Companion: Physically Based Sky for URP"
      url: https://github.com/jiaozi158/UnityPhysicallyBasedSkyURP
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.2"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14 or above" }
implementation: []
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.2 and URP 14 or later"
  - "Shader model 3.5 or above (OpenGL ES 3.0 or equivalent)"
  - "Orthographic cameras are not supported"
  - "Cloud shadows override the main directional light's cookie"
images:
  hero:
    src: ./hero.webp
    alt: "A wide panoramic view of a blue sky with scattered white volumetric clouds and a bright sun."
    caption: "Global volumetric clouds from the sample scene."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "26c59bd"
  notes: "MIT LICENSE at repository root; README says MIT. Requirements are as listed in the README."
added: 2026-10-04
---

Volumetric clouds for URP whose rendering is ported from HDRP. The README points to Unity's HDRP Volumetric Clouds documentation for the property descriptions.

## Notes

- Some settings are still marked work-in-progress in the README, such as the custom cloud map overrides.
- To change the planet radius and centre, install the companion **Physically Based Sky** package.
- Local (non-global) clouds exist in the sample scene but are listed as not included in the screenshots.
