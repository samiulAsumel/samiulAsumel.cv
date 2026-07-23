# Samiul Alam Sumel — Portfolio

Personal portfolio site for MD Samiul Alam Sumel, a full-stack web developer
(React/Next.js, Node.js/Express, MongoDB) with 12+ years of professional
experience at Mongla Port Authority. Static HTML/CSS/JS, no build step,
deployed on Cloudflare Pages.

**Live:** https://sasumel.pages.dev/

## Prerequisites

- Any modern browser.
- A local static file server for development (no bundler/build tooling
  required — this is plain HTML/CSS/JS).
- Python 3 with [`python-docx`](https://python-docx.readthedocs.io/) if you
  need to regenerate the CV documents.

## Local setup

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

Any static server works (`npx serve`, `php -S localhost:8000`, etc.) — the
site has no server-side dependencies.

## Project structure

```
index.html              Single-page site: hero, about, skills, services,
                         experience, projects, growth, education, contact
css/style.css            All styling (design tokens, components, responsive,
                         reduced-motion, print)
js/main.js               Scroll reveal, nav, counters, card tilt/spotlight,
                         mobile menu, service worker registration
manifest.json             PWA manifest
sw.js                     Service worker (cache-first, bump CACHE_NAME on
                         every content change so return visitors get updates)
favicon.svg
scripts/generate_cvs.py   Regenerates both CV .docx files from the same
                         content facts as the site (see below)
Samiul_Alam_Sumel_Final.docx                Standard CV (job applications)
Samiul_Alam_Sumel_Freelance_Remote_CV.docx  Freelance/contract-pitch CV
```

## Regenerating the CVs

```bash
pip install python-docx
python3 scripts/generate_cvs.py
```

This overwrites both `.docx` files in the repo root. Edit the content
constants at the top of `scripts/generate_cvs.py` (`SKILLS`, `PROJECTS`,
`COURSE_SUMMARY`) rather than the generated files directly — regenerating is
how the two CVs and the site are kept in sync.

## Deployment

Cloudflare Pages is connected to this GitHub repo and auto-deploys the
`main` branch — no manual build step. Pushing to `main` is the deploy:

```bash
git add <changed files>
git commit -m "..."
git push origin main
```

Give it 30–60 seconds after the push for the new build to go live.

## Content policy

Every claim on this site and in both CVs must be traceable to something
real: a completed module in the Programming Hero course, or a verifiable
public GitHub project. See `CLAUDE.md` for the full content policy before
editing skills, experience, or project claims.
