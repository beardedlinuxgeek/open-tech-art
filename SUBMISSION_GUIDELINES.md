# Submission guidelines

> **Status: draft.** These guidelines cover the basics for early contributions. The full
> contribution process (review workflow, capture standards, templates and automation) will be
> developed once we have experience with real entries.

Open Tech Art is a curated library. A good entry helps someone **find, understand and correctly
credit** a technical-art resource, and then sends them to the original creator to get it.

## How to submit

- **Suggest:** [open an issue](https://github.com/beardedlinuxgeek/open-tech-art/issues) with the
  project link and its license. That's enough.
- **Add it yourself:** copy [`docs/templates/resource/`](docs/templates/resource/) to
  `src/content/resources/<slug>/`, fill it in, run `npm run validate`, and open a pull request. The
  [README](README.md#content-model) documents every field.

A pull request should touch exactly one folder per resource.

## What qualifies

A resource must be:

1. **On GitHub.** The project lives in a public GitHub repository, recorded as `repo: owner/name`.
   We don't list resources that are only distributed through other sites (itch.io, ArtStation,
   Gumroad, asset stores).
2. **Free.** No payment is required to obtain it.
3. **Openly licensed.** It has an explicit license that allows use and the display of its screenshots.
   We prefer MIT, BSD, Apache 2.0, CC0, CC BY, the Unlicense, or something equally clear.
   - Free of charge is **not** open source. A public repository without an open license does
     not qualify.
   - **Ambiguous licensing means exclusion.** This includes a missing license file, extra
     conditions in a README that contradict the license, or a copied license naming someone else.
     Don't try to reason around it.
4. **Illustrated.** There are creator-provided screenshots we are allowed to show, or captures made
   to the standard below.

## Attribution and honesty

- Credit the **original creators** in `creators`. Open Tech Art never appears there.
- `repo` must be the original repository, not a fork or mirror, unless the original is gone. Say so
  if that's the case. `links.project` defaults to the repository and only needs setting when a
  different page is canonical.
- After adding an entry, run `npm run update:github -- --only <slug>` to record its stars and
  last-commit date in `src/data/github-stats.json`.
- Record the license accurately (`license.spdx` and `license.url`). Surface third-party notices in
  `license.notes`.
- **Don't fabricate compatibility.** Record versions, pipelines and VR or mobile support only when
  the creator states them or they are evident from the project files. Otherwise leave them as
  `unknown`, and cite claims in `compatibility.notes`.
- Fill in `verification` with the date, the revision you checked, and how you confirmed the license.
- Describe the resource in your own words. Don't paste the creator's README wholesale.

## Hosting

Link to the resource; don't re-host it. Only include files from the resource itself when there's
a compelling reason **and** the license clearly allows redistribution. Mention why in the pull
request.

## Images

- Use **WebP**, at most 1920 px on the long edge, ideally under 250 KB each (the build enforces
  400 KB and 2560 px).
- Write meaningful `alt` text describing what the image shows.
- Include only the images the entry actually uses. Don't copy whole galleries.
- Animated GIFs: use a representative still frame and note it in the caption.
- **Never manufacture or "improve" missing screenshots.** No AI-generated or mocked-up
  images presented as the resource.

### The image standard: Raw → Reference → Showcase

| Image | Field | Purpose |
| --- | --- | --- |
| **Raw** | `images.raw` | What goes in: the geometry or input *without* the technique |
| **Reference** | `images.reference` | What the technique itself does, under simple, honest conditions (neutral lighting, plain background) |
| **Showcase** | `images.hero` | Optional. What can be achieved with it in an attractive scene |
| Gallery | `images.gallery[]` | Optional extra views, details and settings |

**Raw shows what goes in. Reference shows what the technique itself does. Showcase demonstrates
what can be achieved with it.** When both Raw and Reference exist, the resource page shows them as
a comparison.

Mark such captures with `images.provenance: standard`.

**Seed and prototype entries** collected from the web are exempt from Raw and Reference, because we
are not opening them in an engine ourselves. They use the creator's own screenshots with
`provenance: creator`.

**Exceptions are expected.** Unusual techniques may not fit the scheme. A post-processing stack has
no meaningful "raw mesh", an editor tool may be best shown as UI, and an impostor system may need a
near/far pair. When that happens, explain the choice in the entry. Honesty and clarity matter more
than rigid standardisation.

## Review checklist

- [ ] License is explicit, open and correctly recorded, with a link to the license text
- [ ] Creators and original project are credited and linked
- [ ] Screenshots are allowed under the license, web-optimized and have alt text
- [ ] No guessed compatibility; unknowns stay `unknown`
- [ ] `verification` filled in
- [ ] `repo` set and GitHub stats recorded (`npm run update:github -- --only <slug>`)
- [ ] `npm run validate` passes
