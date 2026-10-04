---
title: Sairi — Anime Graphic Poster UI
summary: An interactive "graphic poster" scene that blends anime toon shading, kinetic typography, Shader Graph polka-dot patterns, depth-based masking and procedural spline particles into game UI.
category: reference-scenes
type: sample-project
tags: [anime, toon, ui, typography, polka-dot, masking, webgl, vroid, motion-design]
repo: musicofmusix/sairi
creators:
  - name: Joshua Jang
    url: https://github.com/musicofmusix
    role: musicofmusix
license:
  spdx: MIT
  url: https://github.com/musicofmusix/sairi/blob/main/LICENSE
  holder: Joshua Jang
links:
  project: https://github.com/musicofmusix/sairi
  extra:
    - label: Play the WebGL build
      url: https://musicofmusix.github.io/sairi/
    - label: Companion project — bezierspline (Python)
      url: https://github.com/musicofmusix/bezierspline
engine:
  name: unity
  testedVersions: ["2021.3.15f1 LTS"]
  renderPipelines: [urp]
  packages:
    - { name: Universal RP, version: "12.1.8" }
implementation: [shader-graph, csharp]
compatibility:
  vr: unknown
  mobile: partial
  notes: The creator recommends "a modern desktop or mobile browser" for the WebGL build. Native mobile builds are not discussed.
requirements:
  - Open the repository as a complete Unity project
  - The README marks the URP-UniVrm import step as deprecated, so check the README for current character setup
images:
  hero:
    src: ./hero.webp
    alt: An anime schoolgirl character posed over bold Japanese and English typography, pink spline lines and polka-dot graphics.
    caption: Title screen of the demo.
  gallery:
    - src: ./pose-walk.webp
      alt: The character in a walking pose in front of repeated outlined "POSE WALK" text.
      caption: Pose screen with layered kinetic typography.
    - src: ./polka-dot-graph.webp
      alt: A Shader Graph network generating polka-dot and stripe patterns.
      caption: Polka-dot background effect in Shader Graph.
verification:
  date: 2026-10-04
  revision: 5cd37bdb07
  notes: MIT LICENSE at repository root. Unity version from the README and ProjectSettings, URP version from the manifest. Screenshots from the repository's ReadmeImages folder.
added: 2026-10-04
---

**Sairi** tries to close the gap between graphic posters, which look sophisticated but never move, and game UI, which is interactive but usually much plainer. It is a complete Unity scene, so you can study how several stylisation techniques combine in one frame.

## Techniques on show

- Flat, anime-style **toon shading** on a rigged character made in VRoid Studio
- Dynamic text and glitch effects that **react to user input**
- A customisable **polka-dot pattern** effect built in URP Shader Graph
- **Procedural Bézier splines** and particles (the core logic also exists as a [Python project](https://github.com/musicofmusix/bezierspline))
- **Real-time, depth-based shader replacement** for masking effects
- Animated transitions, eye tracking and natural blinking

A playable [WebGL build](https://musicofmusix.github.io/sairi/) shows the full interactive result.
