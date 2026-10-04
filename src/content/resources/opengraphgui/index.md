---
title: "OpenGraphGUI"
summary: "A small open-source material inspector for URP Shader Graph: prefix property names in the Blackboard to get labels, single-line textures and cleaner layouts that match Unity's built-in URP materials."
category: tools
type: editor-tool
tags: ["shader-graph", "material-inspector", "editor", "gui", "urp"]
repo: RobProductions/OpenGraphGUI
creators:
  - name: "RobProductions"
    url: https://github.com/RobProductions
license:
  spdx: MIT
  url: https://github.com/RobProductions/OpenGraphGUI/blob/main/LICENSE.md
  holder: "RobProductions"
links:
  project: https://github.com/RobProductions/OpenGraphGUI
  extra:
    - label: "Package on OpenUPM"
      url: https://openupm.com/packages/com.robproductions.opengraphgui/
engine:
  name: unity
  testedVersions: ["2020.3.26f1"]
  renderPipelines: ["urp"]
  packages:
    - { name: "Universal RP", version: "10.9" }
implementation: ["csharp", "shader-graph"]
compatibility:
  vr: unknown
  mobile: unknown
requirements:
  - "Set the Shader Graph's *Custom Editor GUI* to `RPOpenGraphGUI`"
  - "Package Manager install may require lowering the Unity requirement in `package.json` on older versions (per the README)"
images:
  hero:
    src: ./hero.webp
    alt: "Unity inspector for a Shader Graph material showing a list of properties with bold labels and single-line texture fields."
    caption: "Material inspector customised with OpenGraphGUI."
  provenance: creator
verification:
  date: 2026-10-04
  revision: "0d79d1e"
  notes: "MIT stated in LICENSE and README. Tested versions are those the README says it was tested with."
added: 2026-10-04
---

Unity's default inspector for Shader Graph materials is plain compared with the built-in URP shaders. OpenGraphGUI lets you restyle it from inside the graph: property names on the Blackboard carry special prefixes, and any material using that shader shows the custom GUI.

## What the prefixes do

- `*` makes a bold label.
- `%` shows a texture as a compact single-line field, like built-in URP materials.
- Other tags handle alignment and spacing; the label/alignment properties are not rendered, so any property type works (a Boolean is the simplest).

The author describes it as a lightweight open alternative to the commercial Shader Graph Markdown asset, which inspired it. It is an editor tool rather than a shader.
