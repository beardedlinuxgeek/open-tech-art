---
title: "Retro CRT Shader"
summary: "A Shader Graph that fakes an old CRT monitor or TV — screen warp, scanlines, distortion, static and RGB phosphor stripes — applied as a full-screen pass, with an optional low-resolution camera setup for a pixelated look."
category: rendering
type: post-processing
tags: ["crt", "retro", "scanlines", "vhs", "distortion", "pixelated", "fullscreen", "post-processing"]
repo: Cyanilux/URP_RetroCRTShader
creators:
  - name: "Cyanilux"
    url: https://github.com/Cyanilux
license:
  spdx: MIT
  url: https://github.com/Cyanilux/URP_RetroCRTShader/blob/master/LICENSE.md
  holder: "Cyanilux"
links:
  project: https://github.com/Cyanilux/URP_RetroCRTShader
  docs: https://cyangamedev.wordpress.com/2020/09/10/retro-crt-shader-breakdown/
engine:
  name: unity
  testedVersions: []
  minVersion: "2022"
  renderPipelines: ["urp"]
implementation: ["shader-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Fullscreen Pass Renderer Feature on the Universal Renderer asset (current branch targets Unity 2022+; older Unity versions are on other branches)"
  - "The multi-camera example renders the scene to a low-resolution render texture"
images:
  hero:
    src: ./hero.webp
    alt: "A landscape scene seen through a curved CRT-style screen with scanlines, a coloured phosphor mask and a rounded dark bezel."
    caption: "Animated preview from the repository; a still frame is shown."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "ccd515c"
  notes: "README states the shader targets Unity 2022+ and lists the effects; version minimum is the creator's \"2022+\"."
added: 2026-10-04
---

A single Shader Graph that reproduces the look of a cathode-ray tube screen. The effects are toggled with shader keywords on the material:

- CRT screen warping
- Scanlines
- Image distortion
- Static, including a scrolling glitchy variant
- Vertical RGB sub-pixel / phosphor stripes

The repository also contains a multi-camera example: one camera renders the scene to a low-resolution render texture for the pixelated look, while the main camera draws that texture through a Fullscreen Pass Renderer Feature. Vignette, film grain and chromatic aberration are added afterwards with normal post-processing.

## Notes

- To put the effect on a mesh (such as a TV model) rather than the whole screen, change the graph type to Lit or Unlit.
- To skip the second camera, swap the texture sample for a URP Sample Buffer node set to *Blit Source*.
- The keywords are `shader_feature`, so unused variants are stripped from builds. Switch them to `multi_compile` if you need to toggle effects at runtime.
