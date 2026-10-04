---
title: "Per-Object Motion Blur (URP)"
summary: "A simple per-object motion blur for URP built as a Fullscreen Shader Graph used through the Full Screen Pass Renderer Feature, with controls for sample count, amplitude and target frame rate."
category: rendering
type: post-processing
tags: ["motion-blur", "fullscreen", "post-processing", "motion-vectors", "shader-graph"]
repo: Estradel/URP-Simple-Per-Object-Motion-Blur
creators:
  - name: "Antoine L."
    url: https://github.com/Estradel
license:
  spdx: MIT
  url: https://github.com/Estradel/URP-Simple-Per-Object-Motion-Blur/blob/main/LICENSE.md
  holder: "Antoine L."
links:
  project: https://github.com/Estradel/URP-Simple-Per-Object-Motion-Blur
  extra:
    - label: "Technique reference (John Chapman)"
      url: http://john-chapman-graphics.blogspot.com/2013/01/per-object-motion-blur.html
engine:
  name: unity
  testedVersions: []
  minVersion: "2022.2"
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "14.0.5 or later" }
implementation: ["shader-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Unity 2022.2 or later with URP 14.0.5 or later"
  - "Full Screen Pass Renderer Feature with the *Color* and *Motion* requirements"
  - "The effect can disturb the Scene view; disable it while editing"
images:
  hero:
    src: ./hero.webp
    alt: "Two side-by-side views of falling cubes labelled Motion Blur Off and Motion Blur On, the right one showing streaked cubes."
    caption: "Before/after comparison from the README."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "f47c6f4"
  notes: "MIT LICENSE at repository root. Requirements from the README; the creator calls it a weekend project."
added: 2026-10-04
---

A fullscreen effect that blurs any object that has motion vectors, using Unity 2022.2's Full Screen Pass Renderer Feature and a Fullscreen Shader Graph. Import the package, add the feature to your URP renderer, assign the supplied `PerObjectMotionBlur` material and request the *Color* and *Motion* inputs.

Material settings: number of samples, blur amplitude and the target frame rate / shutter speed. The technique follows John Chapman's per-object motion blur article.
