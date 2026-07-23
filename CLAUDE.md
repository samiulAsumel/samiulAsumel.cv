# CLAUDE.md — samiulAsumel.cv

Project-specific instructions for Claude Code working in this repo. This
supplements (does not replace) the user's global instructions.

## What this is

Samiul Alam Sumel's personal portfolio: a static site (`index.html` +
`css/style.css` + `js/main.js`) deployed on Cloudflare Pages, plus two CV
`.docx` files generated from the same source facts as the site
(`scripts/generate_cvs.py`). No framework, no build step, no backend.

## Positioning — read before editing content

The site's identity is **Full-Stack Web Developer** (React/Next.js,
Node.js/Express, MongoDB), backed by 12+ years of professional work
experience at Mongla Port Authority and real, shipped web apps. This is a
deliberate, explicit choice made with the user — do not drift it back
toward "Port/Maritime Specialist" or "Linux/DevOps Practitioner" framing
without being asked.

### Hard content rules (no sugarcoating)

- **Every skill or claim must be traceable** to either (a) a module actually
  covered in the Programming Hero course (`Let's Code Your Career -
  Fixed-Main.docx` — 81 modules / 14 milestones, kept locally, not
  committed) or (b) a real, verifiable public GitHub repo
  (`github.com/samiulAsumel`). If you're about to add a skill/tech pill,
  grep the course doc or check the actual repo first — don't assume.
- **Do not re-add**: RHCSA, SELinux, Podman, firewalld, Ansible, n8n,
  DevOps/Linux-sysadmin framing, TypeScript as a *completed* skill (it's
  real but only "in progress" — keep it in the Growth section, not Core
  Competencies), SQL/Mongoose (never covered by the course — the course
  uses the native MongoDB driver), Arabic/German languages (removed at the
  user's request).
- The bootcamp is **completed** (Jul 2025 – Jul 2026, 81/81 modules). The
  RHCSA angle was **dropped entirely** per explicit instruction — don't
  resurrect it even if you find old references in git history.
- Job history (Mongla Port Authority, both roles) is real and stays as
  professional background — it's the differentiator, not the headline.
- The 4 featured projects are real and live-checked: Port Billing
  Calculator, carview, OT Bill Management System, Client Intake Form. Each
  has a live URL and a GitHub URL. Don't add project cards for anything not
  actually deployed/pushed (e.g. course exercises like "Zap Shift" or
  "Payooo" only count once they're actually public with a real repo).

## Keeping the site and CVs in sync

`index.html` (Skills, Services, Experience, Projects, Growth sections) and
`scripts/generate_cvs.py` (`SKILLS`, `PROJECTS`, `COURSE_SUMMARY`
constants) must tell the same story. When you change one, change the other,
then regenerate:

```bash
python3 scripts/generate_cvs.py
```

Verify page count stays at 2 pages per CV (`soffice --headless
--convert-to pdf ... && pdfinfo`) — if it grows to 3, tighten spacing in
the script's helper functions before adding more content.

## Style conventions already in place

- CSS: single `css/style.css`, design tokens in `:root`, BEM-ish flat class
  names (`.sk-card`, `.pc-ds`, `.dc-note`), mobile-first isn't used but
  `@media(max-width:900px/768px/480px)` breakpoints are — check all three
  after layout changes.
- Body-copy paragraphs (`.h-desc`, `.ab-text p`, `.svc-intro`, `.svc-desc`,
  `.pc-pb`, `.pc-ds`, `.dc-note`, `.ct-text p`) are `text-align: justify`
  with `hyphens: auto`. Keep this pattern for any new long-form paragraph
  class; never justify nav links, buttons, tags/pills, or bulleted lists
  (`.tl-ul`, `.dc-ul`, `.svc-ready-item`) — it looks wrong on short/flex
  content.
- `js/main.js` is vanilla JS, no dependencies. Don't add a framework for a
  single-page static site.
- Bump `CACHE_NAME` in `sw.js` (`sas-portfolio-vN` → `vN+1`) on **every**
  content change to `index.html`/`css`/`js` — the service worker is
  cache-first and stale content will otherwise stick for return visitors.

## Before pushing

1. Tag-balance check (`grep -c` open vs. close on `div`/`section`/`a`, or
   just view in a browser).
2. `grep -niE 'rhcsa|selinux|podman|devops|ansible|n8n'` on `index.html`
   should return nothing.
3. Load the page locally, check the browser console for errors, click
   through nav anchors and both CV download buttons.
4. Regenerate CVs if content changed; check they're still 2 pages.
5. Only stage files relevant to the site/CVs. `learning.txt` and `Let's
   Code Your Career - Fixed-Main.docx` are the user's personal working
   documents (source material, not site content) — do not commit them
   unless explicitly asked.
6. Commit with a Conventional Commits message (`feat(site): ...`,
   `fix(site): ...`) and only push when the user has asked for it.
