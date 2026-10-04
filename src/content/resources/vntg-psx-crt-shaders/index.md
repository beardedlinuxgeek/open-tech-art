---
title: VNTG — PSX & CRT Shader Pack
summary: PSX-era materials and CRT/VHS post-processing for Unity 6 URP — vertex snapping, affine texture warping, texel-snapped lighting, dithering, custom palettes, stylised fog, screen curvature, interlacing and subpixel masks.
category: rendering
type: post-processing
tags: [psx, retro, crt, vhs, dithering, color-palette, pixelation, vertex-snapping, affine, fog, render-graph, unity-6]
creators:
  - name: Colby-O
    url: https://colby-o.itch.io
license:
  spdx: Unlicense
  url: https://github.com/Colby-O2/VNTG/blob/master/LICENSE.md
  notes: Public-domain dedication. The PSX lighting HLSL is adapted from Codrin-Mihail's MIT-licensed URP-PSX; see THIRD_PARTY_NOTICE.md in the project.
links:
  project: https://colby-o.itch.io/vntg-shaders
  source: https://github.com/Colby-O2/VNTG
  download: https://github.com/Colby-O2/VNTG/tree/downloads
  extra:
    - label: Third-party notice
      url: https://github.com/Colby-O2/VNTG/blob/master/THIRD_PARTY_NOTICE.md
platforms: [itch, github]
engine:
  name: unity
  minVersion: "6000.0"
  renderPipelines: [urp]
implementation: [shader-graph, hlsl, render-graph, csharp]
compatibility:
  vr: unknown
  mobile: unknown
  notes: The creator states "Desktop & WebGL fully supported" and compatibility with Forward, Forward+, Deferred and Deferred+.
requirements:
  - Unity 6 (6000.x) or newer with URP
  - Terrain support requires Unity 6.3 or newer
  - Add the PSX and CRT renderer features to your renderer, or use the included VNTG renderer
images:
  hero:
    src: ./hero.webp
    alt: A low-resolution forest clearing with a blue pond, rendered with a CRT filter and colour adjustment.
    caption: CRT renderer feature with colour adjustment. Still frame from the creator's demo animation.
  gallery:
    - src: ./palette.webp
      alt: Three versions of the same forest scene side by side — no palette, a desert palette, and the palette with preserved lighting.
      caption: Custom colour palettes, with and without preserved lighting.
    - src: ./crt-monochrome.webp
      alt: The forest scene rendered in monochrome through the CRT effect.
      caption: Monochrome CRT mode (still frame).
    - src: ./fog.webp
      alt: The forest scene fading into dense green stylised fog.
      caption: Stylised fog (still frame).
    - src: ./texel-lit.webp
      alt: A red point light on blocky, pixelated foliage showing texel-snapped lighting.
      caption: Texel-lit lighting model (still frame).
    - src: ./alpha-clipping.webp
      alt: Pixelated leaves using alpha clipping against a sandy ground.
      caption: Alpha clipping on the PSX material.
verification:
  date: 2026-10-04
  revision: 7faf53d5bb
  notes: Unlicense text in LICENSE.md; the README restates the Unlicense. Compatibility statements quoted from the README. Images are from the repository's Videos folder; animated GIFs were reduced to still frames.
added: 2026-10-04
featured: true
---

VNTG is a pack of PSX-inspired material shaders and CRT post-processing for **Unity 6 URP**, built on Render Graph. Its creator developed it across several game jams and uses it in their own itch.io releases.

## PSX PBR material

- Four lighting models: **Unlit, Lit, Texel Lit and Vertex Lit**, with a global ambient colour.
- Works with Forward, Forward+, Deferred and Deferred+.
- Texture downsampling, reduced colour depth, **vertex snapping** and **affine texture warping**.
- Vertex colour and alpha clipping. Terrain support on Unity 6.3+.

## PSX renderer feature

- Full-screen pixelation and colour-depth control.
- **Dithering** with nine preset patterns, additive or multiplicative, pixel-perfect or custom scale.
- **Custom colour palettes** imported from `.ase`, `.gpl`, `.hex`, `.txt` and `.pal`, built from a texture, or defined in the editor. Includes colour-distance metrics and lighting preservation.
- Customisable stylised fog.

## CRT renderer feature

- Screen curvature and a vintage effect.
- Interlaced rendering, pixel decay, and configurable refresh rate and resolution.
- Scanlines, noise, chromatic aberration, smear and other VHS artefacts.
- Subpixel display modes: Shadow Mask, Aperture Grille and Spot Mask.

## Installation

Download the matching `.unitypackage` from the repository's [downloads branch](https://github.com/Colby-O2/VNTG/tree/downloads) and import it. Add the PSX and CRT renderer features to your renderer, or use the included VNTG renderer. Settings live on the Global Volume.
