export const SITE = {
  name: 'Open Tech Art',
  tagline: 'An open library of free technical-art resources',
  description:
    'Open Tech Art is a curated, open catalog of free and openly licensed technical-art resources — shaders, renderer features, tools and reference scenes — with consistent metadata and links back to the original creators.',
  repo: 'https://github.com/beardedlinuxgeek/open-tech-art',
  get newResourceUrl() {
    return `${this.repo}/blob/main/SUBMISSION_GUIDELINES.md`;
  },
  get issuesUrl() {
    return `${this.repo}/issues`;
  },
};
