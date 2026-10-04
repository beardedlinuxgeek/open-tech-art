# Shader Discovery Research Summary

Deliverable: `shader_candidates.csv` (128 candidates, strongest first). Research date: 2026-10-04.

## Headline numbers

| Metric | Count |
|---|---|
| Candidates | 128 |
| `verified_open` (LICENSE file read and recognised) | 108 (99 MIT, 3 Apache-2.0, 1 CC0, 1 WTFPL, 4 GPL) |
| `free_restrictive` | 6 (5 NullTale non-commercial, 1 Unity Companion License) |
| `unclear` (no LICENSE file found) | 14 |
| URP confirmed (`urp=yes`) | 109 |
| Shader Graph confirmed (`yes` or `mixed`) | 47 (45 yes, 2 mixed); 80 unknown; 1 no |
| URP + Shader Graph + verified open | 33 |

"Confirmed" means the project's README states it. Most `shader_graph=unknown` rows are code-based shaders or renderer features. I did not open the repo trees, so I did not mark them `no`.

## Distribution by source

All 128 rows come from github.com. See "Source limitation" below.

## Distribution by category

Post-Processing 17, Toon 11, Water 8, Stylized Material 8, Outline 8, Collection 7, Grass 6, Screen-Space Effect 6, Retro/Pixelation 5, Clouds/Sky 5, Ocean 5, Dissolve 4, Decal 4, Fog/Volumetrics 4, Glass/Refraction 3, Shader Graph Tools 3, and 1-2 each for Force Field, Transparency, 2D, VFX/Particles, Fur, Foliage, Vertex Animation, Terrain, Portal, Lens Flare, Hologram, Lava, Snow and others.

Thin or missing in the CSV: rock, brick and cobblestone procedural materials, sand, ice, fire, god rays as a standalone effect, impostors/billboards, fake interiors, and triplanar-specific projects. No repo with both a verifiable licence and a usable screenshot turned up for these. Leads are listed below.

## Recommended seed set

These have an MIT licence file, an explicit URP + Shader Graph statement, and a repo-hosted screenshot that returned HTTP 200.

- Daniel Ilett's repos (all MIT): `shaders-stylised-shield`, `water-urp`, `dissolve-urp`, `shaders-holo-card`, `shaders-stylised-lava`, `shaders-fullscreen-outlines`, `shaders-halftone`, `decals-urp`, `shaders-terastal`, `shaders-mgs-stealth`
- `jiaozi158/UnityRefractionURP` (refraction)
- `Cyanilux/URP_RetroCRTShader` and `URP_WatercolourShaders`
- `Kodrin/URP-PSX` (retro)
- `TinyPlay/URPShadersCollection` (MIT)
- `SnutiHQ/Toon-Shader` and `you-ri/LiliumToonGraph` (toon)
- `UxxHans/Unity-Dissolve-HDR-Shaders` (dissolve)
- `mozankatip/InteractiveGrass` (CC0) and `InteractiveStylizedWater`

Strong URP renderer-feature or code projects (MIT, with a screenshot):

- Volumetrics and sky: `CristianQiu/Unity-URP-Volumetric-Light`, `sinnwrig/URP-Fog-Volumes`, `jiaozi158/UnityVolumetricCloudsURP`, `UnityPhysicallyBasedSkyURP`, `bearworks/URPOcean`
- Screen-space and decals: `jiaozi158/UnitySSReflectionURP`, `ColinLeung-NiloCat/UnityURPUnlitScreenSpaceDecalShader`
- Grass: `ColinLeung-NiloCat/UnityURP-MobileDrawMeshInstancedIndirectExample`

## Recurring problems

1. **Licence missing.** Many good repos have no LICENSE file: `happy-turtle/foliage-wind`, `hecomi/UnityFurURP` (README MIT badge only), `UnityTechnologies/ShaderGraph_ExampleLibrary`, `mert-dev-acc/*`. They are marked `unclear`, not approved.
2. **Non-commercial licences.** NullTale's VolFx, DitherFx, VhsFx, OldMovieFx and OutlineFilter forbid commercial use. The author's OutlineFx is MIT.
3. **Copyleft.** GPL repos are marked `verified_open` but are unsuitable for a permissive catalog: `adrian-miasik/unity-shaders`, `bobboli/gerstner-water`, `fisekoo/shell-grass`, `StarRailNPRShader`. The GPL version was not recorded.
4. **Unity Companion License.** `ShaderGraph-MasterStack-Samples` is restricted to use with Unity.
5. **Forks and game-IP replicas.** `unitycoder/Procedural-Stochastic-Terrain-Shader` is a fork. Genshin and Star Rail clones and Zelda/Pokemon recreations may bundle third-party assets. Check before reuse.
6. **Unity version drift.** Many 2019-2020 projects may not open cleanly on Unity 6. Versions are recorded where the README states them.
7. **Screenshot hosting.** 43 rows use an image URL copied from the README (`user-images`, `user-attachments`, imgur, YouTube thumbnails) because those hosts are unreachable from the sandbox. The other 85 image URLs are `raw.githubusercontent.com` and returned HTTP 200. Re-verify the 43 later. Two rows use a YouTube thumbnail of the author's demo.
8. **Some projects excluded for lack of a usable preview image**, for example `Robinseibold/Unity-URP-Outlines` (MIT), `lilxyzw/lilToon` (MIT), `Cyanilux/URP_BlitRenderFeature` and `URP_ShaderGraphCustomLighting`, `ronja-tutorials/ShaderTutorials` (CC-BY 4.0) and `phi-lira/UniversalShaderExamples` (images 404). They are good candidates to re-add with a screenshot.

## Methodology and source limitation

- GitHub topic and search pages were fetched through WebFetch. Each repo's README, LICENSE and image URL were read from `raw.githubusercontent.com`. The LICENSE text was matched against known licences, and image URLs were checked with HEAD requests.
- **The sandbox network proxy blocks itch.io, the Unity Asset Store, ArtStation, Gumroad, personal blogs, Unity Discussions, imgur and others.** I could not open those pages, so I could not verify licence, price or screenshots there. I did not add them to the CSV, because guessing is not acceptable. Leads from search results only, not verified:
  - Daniel Ilett's Shader Showcase (itch.io, MIT per search snippet)
  - Shader Toolbox for URP (paid)
  - PSX Water Shader by soundy777 (itch.io; code MIT, assets CC BY 4.0 per snippet)
  - Fake Interior URP Graph by aetuts (itch.io)
  - Simple Dynamic Skybox Clouds URP (itch.io)
  - Fake Interiors FREE (Asset Store)
  - Unity's official Shader Graph Procedural Patterns and Terrain samples
  - Mirza Beig's Shader Graph glass shader
  - GitHub repos found by search but not yet checked: `z4gon` shader repos (names unresolved), `aetuts/*`
- A follow-up pass from an environment with open web access should cover the non-GitHub sources and the category gaps.
