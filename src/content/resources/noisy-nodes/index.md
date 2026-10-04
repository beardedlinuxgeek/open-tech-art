---
title: Noisy Nodes
summary: Drop-in Shader Graph sub-graphs for 2D/3D Perlin, Simplex, Voronoi (up to 4D) and white noise — the building blocks for procedural materials that Shader Graph does not ship with.
category: tools
type: node-library
tags: [procedural, noise, perlin, simplex, voronoi, 3d-noise, sub-graph, shader-graph-extension]
repo: JimmyCushnie/Noisy-Nodes
creators:
  - name: Jimmy Cushnie
    url: https://github.com/JimmyCushnie
  - name: fdervaux
    url: https://github.com/fdervaux
    role: Voronoi and white noise nodes
license:
  spdx: WTFPL
  url: https://github.com/JimmyCushnie/Noisy-Nodes/blob/master/LICENSE
  holder: Jimmy Cushnie
  notes: The Perlin and Simplex code comes from Keijiro Takahashi's NoiseShader, which carries its own MIT notices (Ashima Arts, Stefan Gustavson). Keep those notices when redistributing.
links:
  project: https://github.com/JimmyCushnie/Noisy-Nodes
  extra:
    - label: Upstream noise code — keijiro/NoiseShader
      url: https://github.com/keijiro/NoiseShader
engine:
  name: unity
  minVersion: "2019.3"
  packages:
    - { name: Shader Graph, version: "7.1.8+" }
implementation: [shader-graph, hlsl]
compatibility:
  vr: unknown
  mobile: unknown
  notes: The nodes are plain Shader Graph sub-graphs with no pipeline-specific code, but the creator does not name supported render pipelines, so none are listed here.
requirements:
  - Shader Graph (declared dependency com.unity.shadergraph 7.1.8)
images:
  hero:
    src: ./hero.webp
    alt: A Shader Graph window with noise nodes feeding into a material preview of a sphere covered in red and black 3D noise.
    caption: Demo image from the repository.
verification:
  date: 2026-10-04
  revision: 81a21b22fb
  notes: WTFPL v2 LICENSE at repository root. Minimum Unity version and Shader Graph dependency read from package.json. No render pipeline is stated by the creator, so none is recorded.
added: 2026-10-04
---

Shader Graph's built-in noise nodes are 2D only. **Noisy Nodes** adds a library of sub-graphs backed by HLSL Custom Function nodes, so you can make seamless 3D procedural materials, animated noise (use the extra dimension as time) and stochastic effects.

## Nodes

| Family | Variants |
| --- | --- |
| Perlin | 2D, 2D periodic, 3D, 3D periodic |
| Simplex | 2D, 2D gradient, 3D, 3D gradient |
| Voronoi | 2D, 3D, 4D, and "precise" 2D/3D/4D |
| White noise | 2D, 3D |

The Perlin and Simplex implementations come from [keijiro/NoiseShader](https://github.com/keijiro/NoiseShader). The Voronoi and white-noise nodes were contributed by fdervaux, based on tutorials by Cyanilux and Ronja.

## Installation

Use **Add package from git URL** in the Package Manager:

```
https://github.com/JimmyCushnie/Noisy-Nodes.git
```

Or copy the repository into your project's `Assets` or `Packages` folder.
