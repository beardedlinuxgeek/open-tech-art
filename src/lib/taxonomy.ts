/**
 * Controlled vocabularies used by the resource schema.
 *
 * Adding a value here makes it valid in frontmatter and gives it a display
 * label everywhere in the UI. Keep keys lowercase-kebab; they appear in URLs.
 *
 * Categories (top-level areas such as "Shaders" or "Rendering") are *not*
 * defined here — they are content, in src/content/categories.yaml.
 */

/** What kind of thing the resource is. */
export const RESOURCE_TYPES = {
  shader: 'Shader',
  'shader-collection': 'Shader collection',
  'node-library': 'Node library',
  'render-feature': 'Renderer feature',
  'post-processing': 'Post-processing',
  'vfx-graph': 'VFX Graph effect',
  'material-system': 'Material system',
  toolkit: 'Toolkit',
  'editor-tool': 'Editor tool',
  'lighting-setup': 'Lighting setup',
  'impostor-system': 'Impostor system',
  'sample-project': 'Sample project',
  'reference-scene': 'Reference scene',
} as const;

/** How it is built. A resource can use several. */
export const IMPLEMENTATIONS = {
  'shader-graph': 'Shader Graph',
  'vfx-graph': 'VFX Graph',
  hlsl: 'HLSL',
  shaderlab: 'ShaderLab',
  compute: 'Compute shader',
  csharp: 'C#',
  'render-graph': 'Render Graph API',
  dots: 'DOTS / ECS',
} as const;

/** Engines. Engine-specific details live under `engine` in frontmatter. */
export const ENGINES = {
  unity: 'Unity',
  unreal: 'Unreal Engine',
  godot: 'Godot',
  blender: 'Blender',
  agnostic: 'Engine-agnostic',
} as const;

/** Render pipelines / renderers. Values are namespaced by convention only. */
export const RENDER_PIPELINES = {
  urp: 'URP',
  hdrp: 'HDRP',
  'built-in': 'Built-in RP',
  'custom-srp': 'Custom SRP',
} as const;

/** Tri-state (plus "partial") answers for compatibility questions. */
export const SUPPORT_VALUES = {
  yes: 'Yes',
  partial: 'Partial',
  no: 'No',
  unknown: 'Unknown',
} as const;

/** Where the canonical project page lives. */
export const PLATFORMS = {
  github: 'GitHub',
  gitlab: 'GitLab',
  itch: 'itch.io',
  'personal-site': 'Personal site',
  artstation: 'ArtStation',
  gumroad: 'Gumroad',
  'asset-store': 'Unity Asset Store',
  other: 'Other',
} as const;

/** Licenses we currently accept, keyed by SPDX identifier. */
export const LICENSES = {
  MIT: { name: 'MIT License', url: 'https://opensource.org/license/mit' },
  'BSD-2-Clause': { name: 'BSD 2-Clause', url: 'https://opensource.org/license/bsd-2-clause' },
  'BSD-3-Clause': { name: 'BSD 3-Clause', url: 'https://opensource.org/license/bsd-3-clause' },
  'Apache-2.0': { name: 'Apache 2.0', url: 'https://www.apache.org/licenses/LICENSE-2.0' },
  'CC0-1.0': { name: 'CC0 1.0', url: 'https://creativecommons.org/publicdomain/zero/1.0/' },
  'CC-BY-4.0': { name: 'CC BY 4.0', url: 'https://creativecommons.org/licenses/by/4.0/' },
  Unlicense: { name: 'The Unlicense', url: 'https://unlicense.org/' },
  WTFPL: { name: 'WTFPL', url: 'https://www.wtfpl.net/about/' },
  Zlib: { name: 'zlib License', url: 'https://opensource.org/license/zlib' },
} as const;

type Keys<T> = [keyof T & string, ...(keyof T & string)[]];
export const keysOf = <T extends object>(o: T) => Object.keys(o) as Keys<T>;

export const label = <T extends Record<string, string>>(map: T, key: string): string =>
  (map as Record<string, string>)[key] ?? key;
