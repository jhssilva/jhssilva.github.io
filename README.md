# Hugo Silva — Personal Website

**[jhssilva.github.io](https://jhssilva.github.io/)** · Backend Software Engineer @ Datadog · Distributed systems, Go, Rust

[![Deploy site](https://github.com/jhssilva/jhssilva.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jhssilva/jhssilva.github.io/actions/workflows/deploy.yml)

Built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme, deployed to GitHub Pages.

## Where the content lives

| Page | File |
| --- | --- |
| Home (profile, links, buttons) | `hugo.toml` → `[params.profileMode]`, `[[params.socialIcons]]` |
| About | `content/about.md` |
| CV | `content/cv.md` (summary + embedded PDF) |
| CV PDF | `assets/pdf/hugo-silva-resume.pdf` (published automatically, see below) |
| Projects, open source, theses | `content/projects.md` |
| Blog posts | `content/blog/YYYY-MM-DD-slug.md` |
| Images and PDFs | `assets/img/`, `assets/pdf/` (served at `/assets/...`) |
| Custom CSS | `assets/css/extended/custom.css` |

## How the CV is updated

The resume is written in LaTeX in a separate private repository. Merging a change there builds a **public** PDF (no phone number, email or internal figures) and commits it here as `assets/pdf/hugo-silva-resume.pdf`, which redeploys the site. The CV page embeds that PDF, so there is nothing else to keep in sync.

**Keep this repository public-safe:** no phone number, personal email, salary or internal company figures.

## Run locally

```sh
brew install hugo                      # once
git submodule update --init            # once, fetches the theme
hugo server                            # http://localhost:1313
```

## Write a post

Create `content/blog/2026-11-03-my-post.md`:

```markdown
---
title: "My post"
date: 2026-11-03T10:00:00+01:00
slug: "my-post"
summary: "One-line summary."
tags: ["go"]
---

Content in Markdown.
```

## Deployment and maintenance

- Pushing to `main` runs [`deploy.yml`](.github/workflows/deploy.yml): builds with Hugo and publishes `public/` to the `gh-pages` branch (single commit, no history). Pull requests only build.
- To update the theme: `git -C themes/PaperMod pull origin master`, check locally, commit the submodule bump. If the theme requires a newer Hugo, bump `hugo-version` in `deploy.yml`.
