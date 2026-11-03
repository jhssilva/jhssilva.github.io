# Hugo Silva — Personal Website

<div align="center">

**[jhssilva.github.io](https://jhssilva.github.io/)** · Backend Software Engineer @ Datadog · Distributed systems, Go, Rust

[![deploy](https://github.com/jhssilva/jhssilva.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/jhssilva/jhssilva.github.io/actions/workflows/deploy.yml)

</div>

Source for my personal website: about, CV, projects, open-source contributions, publications and blog. Built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme, deployed to GitHub Pages.

## Where the content lives

| Page                     | Source                                                          |
| ------------------------ | --------------------------------------------------------------- |
| Home / about             | `_pages/about.md`                                               |
| CV page                  | `assets/json/resume.json` (rendered), `_data/cv.yml` (fallback) |
| CV PDF                   | `assets/pdf/hugo-silva-resume.pdf`                              |
| News                     | `_news/`                                                        |
| Projects and open source | `_projects/`                                                    |
| Blog                     | `_posts/`                                                       |
| Publications (theses)    | `_bibliography/papers.bib`, `assets/pdf/`                       |

## How the CV is updated

The resume is written in LaTeX in a separate private repository. Merging a change there builds a **public** PDF (no phone number, email or internal figures) and commits it here as `assets/pdf/hugo-silva-resume.pdf`, which redeploys the site.

`resume.json` and `cv.yml` are edited by hand and should match the public PDF.

**Keep this repository public-safe:** no phone number, personal email, salary or internal company figures. Contact is via [LinkedIn](https://www.linkedin.com/in/jhssilvaa) and [GitHub](https://github.com/jhssilva).

## Run locally

```sh
docker compose pull
docker compose up
# open http://localhost:8080
```

See [INSTALL.md](INSTALL.md) for other options.

## Deployment

Pushing to `main` runs [`deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to the `gh-pages` branch. Pull requests build the site without deploying.

## Credits

Theme: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat and contributors, [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).
