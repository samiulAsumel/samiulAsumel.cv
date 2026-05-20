# samiul.dev — Portfolio Website

**Owner:** MD Samiul Alam Sumel  
**Role:** Port Digital Operations Specialist  
**Target:** Port Operations / Port IT Operations — Saudi Arabia, Q2 2027  
**CV source of truth:** `Samiul_Alam_Sumel_CV_Final.docx`

---

## For Claude: How to Update This Portfolio

When the user says **"update my portfolio"** or **"update the website"**:

1. **Extract the full CV** — run the Python extractor below against `Samiul_Alam_Sumel_CV_Final.docx`
2. **Diff against the CV snapshot** in this README (Section: Current CV Content)
3. **Find only what changed** — do not touch anything that didn't change
4. **Apply changes to `index.html`** using the Section Map below
5. **Never add content not in the DOCX** — no GitHub links, no invented achievements, no extra sections
6. **Never delete content that is in the DOCX** — every line in the CV must appear on the site
7. **Never change the design** — colors, fonts, layout, animations are locked unless user says otherwise

### CV Extraction Command
```python
import zipfile, xml.etree.ElementTree as ET

def extract_docx(path):
    with zipfile.ZipFile(path) as z:
        with z.open('word/document.xml') as f:
            tree = ET.parse(f)
    root = tree.getroot()
    paragraphs = []
    for para in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        texts = [t.text for t in para.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
        text = ''.join(texts).strip()
        if text:
            paragraphs.append(text)
    return paragraphs

lines = extract_docx('Samiul_Alam_Sumel_CV_Final.docx')
for i, l in enumerate(lines):
    print(f'{i+1:03d} | {l}')
```

---

## File Structure

```
samiulAsumel.cv/
├── index.html                        ← All site content (single page)
├── css/
│   └── style.css                     ← Complete design system (~1514 lines)
├── js/
│   └── main.js                       ← All interactivity (~267 lines)
├── favicon.svg                       ← Cargo ship SVG icon (amber + dark navy)
├── Samiul_Alam_Sumel_CV_Final.docx   ← SOURCE OF TRUTH for all content
└── README.md                         ← This file (update memory)
```

**Rule:** `project_list_final.md` content (DevOps projects roadmap) must NEVER appear on the website — it is a private planning document, not part of the CV.

---

## Section Map — CV Lines → HTML Sections

This is the exact mapping between every CV line and its location in `index.html`.

| CV Lines | CV Content | HTML Section / Element |
|---|---|---|
| 001 | MD SAMIUL ALAM SUMEL | `<h1 class="h-name">` → `.h-fn` + `.h-ln` |
| 002 | Port Digital Operations Specialist | `<p class="h-role">` (hero) + `<meta name="description">` + JSON-LD |
| 003 | Port Billing · Cargo Ops · Process Digitization · Linux Admin · Saudi Maritime | `<p class="h-spec">` (hero) |
| 004 | Mongla, Bangladesh | `.hc-item` (hero contact row) + footer `.ft-copy` + JSON-LD |
| 005 | +8801312312512 | `<a class="hc-link" href="tel:+8801312312512">` (hero) + contact `.clink` |
| 006 | sa.sumel91@gmail.com | `<a class="hc-link" href="mailto:...">` (hero) + contact `.clink` + footer + `nav-cta` |
| 007 | linkedin.com/in/samiul-alam-sumel | `<a class="hc-link">` (hero) + contact `.clink` + footer + JSON-LD |
| 008 | sasumel.netlify.app | `<a class="hc-link">` (hero) + contact `.clink` + footer + `canonical` + `og:url` |
| 009 | PROFESSIONAL SUMMARY heading | `<span class="lbl">` + `<h2>` in `#summary` |
| 010 | Summary paragraph | `<blockquote class="sum-quote">` |
| 011 | Target: Saudi Arabia — 2027 + companies | `.sum-target` → `.target-lbl` + `.target-txt` + `.target-cos span` × 5 |
| 012 | CORE COMPETENCIES heading | `<span class="lbl">` + `<h2>` in `#competencies` |
| 013–019 | PORT OPERATIONS (6 items) | First `.comp-card` → `<ul class="sk-list">` |
| 020–026 | CARGO & DOCUMENTATION (6 items) | Second `.comp-card` → `<ul class="sk-list">` |
| 027–033 | TECHNICAL & DIGITAL (6 items) | Third `.comp-card` → `<ul class="sk-list">` |
| 034 | WORK EXPERIENCE heading | `<span class="lbl">` + `<h2>` in `#experience` |
| 035 | Senior OA — Nov 2017–Present | `.tl-cur` → `.tl-date`, `.tl-role`, `.tl-org`, `.badge-live` |
| 036 | Port description | `<p class="tl-desc">` in first `.tl-item` |
| 037 | Core Port Operations: label | `<p class="tl-sec-lbl">` |
| 038–044 | 7 Core Port Operations bullets | `<ul class="tl-ul">` (first group) |
| 045 | Self-Initiated Digital & Technical Work: label | `<p class="tl-sec-lbl">` |
| 046–053 | 8 Digital & Technical Work bullets (5 URLs) | `<ul class="tl-ul">` (second group) |
| 054 | Junior OA — Nov 2013–Nov 2017 | Second `.tl-item` → `.tl-date`, `.tl-role`, `.tl-org` |
| 055 | Foundation description | `<p class="tl-desc">` in second `.tl-item` |
| 056–060 | 5 Junior role bullets | `<ul class="tl-ul">` in second `.tl-item` |
| 061 | LIVE PORT SYSTEMS — SELF-BUILT (AI-ASSISTED DEVELOPMENT) | `<span class="lbl">` + `<h2>` in `#projects` |
| 062–064 | Project 01 — portbill.vercel.app | First `.pcard` → `.pcard-title`, `.pcard-url`, `.pcard-dl` |
| 065–067 | Project 02 — monthly-car-balance | Second `.pcard` |
| 068–070 | Project 03 — otbill.vercel.app | Third `.pcard` |
| 071 | LINUX & TECHNICAL PROJECTS — RHCSA ALIGNED | `<span class="lbl">` + `<h2>` in `#linux-projects` |
| 072–080 | Smart Port Billing Infrastructure (7 bullets) | First `.pcard` in `#linux-projects` |
| 081–088 | Bash Automation Toolkit (6 bullets) | Second `.pcard` in `#linux-projects` |
| 089–090 | Linux/DevOps Command Reference | Third `.pcard` in `#linux-projects` |
| 091 | TECHNICAL DEVELOPMENT heading | `<span class="lbl">` + `<h2>` in `#technical` |
| 092–097 | Linux Admin — RHCSA (5 bullets) | First `.td-card` → `.td-title`, `.td-meta`, `.sk-list` |
| 098–100 | Arabic Language (2 bullets) | Second `.td-card` |
| 101 | EDUCATION heading | `<span class="lbl">` + `<h2>` in `#education` |
| 102 | HSC — Khulna Public College, 2009–2011 | First `.edu-card` → `.edu-yr`, `.edu-deg`, `.edu-inst` |
| 103 | SSC — Mongla Bandar Secondary School, 1999–2009 | Second `.edu-card` |
| 104–107 | Bengali/English/Arabic + levels | `.lang-row` → three `.lang-pill` with `.lang-fill` widths |
| 108 | Portfolio + GitHub + Available for Saudi Arabia — Q2 2027 | contact `.clink` × 3 extra + footer links + `.avail-pill` |

### Language Bar Widths (from CV)
| Language | Level | Bar width |
|---|---|---|
| Bengali | Native | `100%` |
| English | Professional Working | `65%` |
| Arabic | Elementary — Learning | `20%` |

---

## Design System — DO NOT CHANGE

### Color Tokens (css/style.css `:root`)
| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#030c1a` | Primary background |
| `--bg2` | `#061628` | Alternate section background |
| `--bg3` | `#0b2040` | Experience section background |
| `--glass` | `rgba(8,20,40,0.80)` | All card surfaces |
| `--bd` | `rgba(255,255,255,0.065)` | Default card borders |
| `--bd-a` | `rgba(240,160,48,0.28)` | Hover card borders |
| `--a` | `#f0a030` | Primary amber accent |
| `--a-lt` | `#ffc85a` | Light amber (hover states) |
| `--a-dk` | `#b87818` | Dark amber (gradients) |
| `--a-dim` | `rgba(240,160,48,0.06)` | Amber backgrounds |
| `--green` | `#00c896` | Live/active indicators |
| `--blue` | `#3d8ef0` | Secondary accent (particles) |
| `--tx` | `#ddeaff` | Primary text |
| `--tx-m` | `#5e7ea0` | Muted text |
| `--tx-d` | `#243550` | Dimmed text / labels |

### Typography
| Variable | Value |
|---|---|
| `--ff` | `'Space Grotesk', system-ui, sans-serif` |
| `--mono` | `'JetBrains Mono', 'Fira Code', monospace` |

Google Fonts URL (in `<head>`):
```
https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap
```

### Section Background Pattern
| Section ID | Background |
|---|---|
| `#hero` | `var(--bg)` with blobs + grid overlay |
| `#summary` | `var(--bg2)` |
| `#competencies` | `var(--bg)` |
| `#experience` | `var(--bg3)` |
| `#projects` | `var(--bg2)` |
| `#technical` | `var(--bg)` |
| `#education` | `var(--bg2)` |
| `.dl-band` | `var(--bg)` |
| `#contact` | `var(--bg)` |
| `footer` | `var(--bg)` |

### Border Radii
| Variable | Value | Usage |
|---|---|---|
| `--r` | `10px` | Small cards, buttons, badges |
| `--rl` | `16px` | Main cards (comp, proj, tl-body, td, lang) |
| `--rx` | `24px` | Download CV card |

---

## HTML Component Reference

### Adding a New Competency Item
Inside the appropriate `.comp-card` → `<ul class="sk-list">`:
```html
<li>New Skill Name</li>
```

### Adding a New Work Bullet
Inside the appropriate `<ul class="tl-ul">`:
```html
<li>New bullet point text here</li>
```

### Adding a New Project Card
Copy this block and paste inside `.proj-grid`, increment `pcard-num`:
```html
<article class="pcard reveal" data-delay="N">
  <div class="pcard-num" aria-hidden="true">05</div>
  <header class="pcard-hdr">
    <div>
      <h3 class="pcard-title">Project Title</h3>
      <div class="pcard-url">project.vercel.app</div>
    </div>
    <span class="badge-live" aria-label="Live system">● LIVE</span>
  </header>
  <dl class="pcard-dl">
    <dt>Problem</dt>
    <dd>Problem description from CV.</dd>
    <dt>Solution</dt>
    <dd>Solution description from CV.</dd>
  </dl>
  <a class="pcard-link" href="https://project.vercel.app" target="_blank" rel="noopener">
    Open Live App
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
  </a>
</article>
```
Also add to desktop `nav-links` if a new section is needed.

### Adding a New Technical Development Card
```html
<article class="td-card reveal" data-delay="N">
  <div class="td-ico" aria-hidden="true">🔧</div>
  <div class="td-body">
    <h3 class="td-title">Title — Subtitle</h3>
    <p class="td-meta">Self-Directed &nbsp;·&nbsp; Start Date – End Date</p>
    <ul class="sk-list">
      <li>Bullet from CV</li>
    </ul>
  </div>
</article>
```

### Adding an Education Entry
```html
<article class="edu-card">
  <div class="edu-yr">YEAR – YEAR</div>
  <h3 class="edu-deg">Degree Name — Field</h3>
  <div class="edu-inst">Institution Name</div>
</article>
```

### Adding a Language
```html
<div class="lang-pill">
  <span class="lang-flag" aria-hidden="true">🏳️</span>
  <div class="lang-info">
    <span class="lang-name">Language</span>
    <span class="lang-lvl">Proficiency Level</span>
  </div>
  <div class="lang-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="lang-fill" style="width:50%"></div>
  </div>
</div>
```

---

## JavaScript Functionality (js/main.js)

All JS is in one file, no dependencies, no frameworks.

| Feature | How it works |
|---|---|
| **Scroll progress bar** | `#pgbar` width set as % of scroll position via `requestAnimationFrame` |
| **Nav scroll glass** | `.scrolled` class added to `<nav>` after 40px scroll |
| **Typewriter** | Cycles through 5 strings in `lines[]`, types + deletes in a loop |
| **Counter animation** | `.cnt[data-to="N"]` counts from 0→N using cubic ease-out over 1600ms |
| **Scroll reveal** | `.reveal` elements get `.in` class when entering viewport (IntersectionObserver) |
| **Language bars** | `.lang-fill.animated` class triggers CSS `scaleX(1)` transition |
| **Active nav link** | `.act` class on nav link matching current visible section |
| **Particle canvas** | 68 particles (amber + blue), connected within 130px, mouse repulsion, RAF loop |
| **Mobile menu** | `hbg` button toggles `.on` / `.open` / `aria-hidden` / `aria-expanded` |
| **Escape key** | Closes mobile menu |
| **Back to top** | `#totop.show` after 420px scroll, smooth scroll on click |
| **Footer year** | `#ft-yr` auto-set to `new Date().getFullYear()` |

### Typewriter Strings (update if job title / target changes)
Located in `js/main.js` lines ~53–59:
```javascript
const lines = [
  'Port Digital Operations Specialist',
  '12+ Years at Mongla Port Authority',
  'Wharfrent Billing · Cargo Dwell Time · CF Coordination',
  '3 Live Port Systems in Daily Active Use',
  'Targeting Saudi Arabia — Q2 2027',
];
```

### Hero Stat Counters (update if numbers change)
In `index.html`:
```html
<span class="cnt" data-to="12">0</span>  ← Years (update if tenure changes)
<span class="cnt" data-to="3">0</span>   ← Live apps (update if new apps launched)
```

---

## Strict Content Rules

These rules were set by the owner and must be followed in every future update:

1. **DOCX is the only source of truth.** Every word on the site must come from `Samiul_Alam_Sumel_Final_CV.docx`. No exceptions.
2. **No extra add.** Do not add skills, projects, achievements, links, or sections that are not in the DOCX.
3. **No skip.** Every line in the DOCX must appear somewhere on the site.
4. **No delete.** Do not remove content that is still present in the DOCX.
5. **GitHub is NOT in the CV.** The `github.com/samiulAsumel` link must not appear on the site unless it is added to the DOCX.
6. **`project_list_final.md` is private.** Its 7 planned DevOps projects must never appear on the website until they appear in the DOCX.
7. **Design is locked.** Do not change colors, fonts, animations, or layout unless explicitly asked.

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 1024px` | Full 3-col competency grid, 2-col contact layout |
| `≤ 1024px` | 2-col competency grid, 1-col contact |
| `≤ 768px` | Mobile nav (hamburger), all grids 1-col, stacked buttons |
| `≤ 540px` | Tighter padding, horizontal contact row collapses, td-card stacks icon |

---

## Meta / SEO

| Tag | Value |
|---|---|
| `<title>` | MD Samiul Alam Sumel — Port Digital Operations Specialist |
| `meta description` | Port Digital Operations Specialist — 12+ years Mongla Port Authority... |
| `og:url` | https://sasumel.netlify.app |
| `og:title` | MD Samiul Alam Sumel — Port Digital Operations Specialist |
| `og:description` | 12+ years at Mongla Port Authority. 3 live web apps in daily port use. Targeting Saudi Arabia Q2 2027. |
| `twitter:card` | summary |
| `theme-color` | #030c1a |
| `canonical` | https://sasumel.netlify.app |
| JSON-LD type | Person |
| JSON-LD sameAs | linkedin.com/in/samiul-alam-sumel, github.com/samiulAsumel |

**Update meta when:** job title changes, target year changes, number of apps changes.

---

## Current CV Content Snapshot
*(Last extracted: May 2026 — compare against DOCX on every update)*

```
001 | MD SAMIUL ALAM SUMEL
002 | Port Digital Operations Specialist
003 | Port Billing · Cargo Ops · Process Digitization · Linux Admin · Saudi Maritime
004 | Mongla, Bangladesh
005 | +8801312312512
006 | sa.sumel91@gmail.com
007 | linkedin.com/in/samiul-alam-sumel
008 | sasumel.netlify.app
009 | PROFESSIONAL SUMMARY
010 | 12+ years at Mongla Port Authority — Bangladesh's second-largest international seaport.
      Deep expertise in wharfrent billing, cargo dwell time management, terminal operations
      and CF agent coordination. Independently identified real port workflow inefficiencies
      and designed 3 live web applications using AI-assisted development — problem definition,
      requirements and validation based on 12+ years port domain expertise — now actively used
      by CF agents and port staff. Additionally built production-grade Linux infrastructure
      and Bash automation projects aligned with RHCSA EX200 exam objectives.
011 | Target: Port Operations or Port IT Operations role in Saudi Arabia — 2027 |
      DP World · Mawani · King Abdullah Port · NEOM Logistics · Kanoo Shipping
012 | CORE COMPETENCIES
013 | PORT OPERATIONS
014 | Wharfrent Billing & Slab Calculation
015 | Cargo Dwell Time Management
016 | CF Agent Coordination
017 | Terminal Vehicle Tracking
018 | Revenue Reporting
019 | Port Automation System Usage
020 | CARGO & DOCUMENTATION
021 | Customs Clearance Workflow
022 | Maritime Documentation
023 | Jetty Statistics & Reports
024 | Import/Delivery Records
025 | Advance Billing Estimation
026 | Multi-location Cargo Tracking
027 | TECHNICAL & DIGITAL
028 | Linux Admin — RHCSA (Pursuing)
029 | Bash Scripting & Automation
030 | SELinux · firewalld · LVM · SSH
031 | Podman Container Deployment
032 | Web App Development (AI-Assisted)
033 | Firebase · Cloud · Vercel Deploy
034 | WORK EXPERIENCE
035 | Senior Outdoor Assistant — Port Operations & IT Systems | Mongla Port Authority Nov 2017 – Present
036 | Mongla Port Authority — Bangladesh's second-largest international seaport handling vehicle imports, bulk cargo and general cargo.
037 | Core Port Operations:
038 | Managed full cargo dwell time & wharfrent billing cycle — slab-wise charges, VAT and levy computation for CF agents
039 | Provided advance billing estimates to CF agents — reducing vehicle dwell time and terminal counter dependency
040 | Tracked cargo & vehicle positions across warehouse, shed and yard locations simultaneously
041 | Maintained daily/monthly revenue reports, cumulative income statements & vehicle balance records
042 | Generated car import/delivery & jetty statistics reports for port authority management
043 | Coordinated CF agent documentation, billing queries & advance payment planning
044 | Operated port automation billing system — managing full wharfrent computation workflow
045 | Self-Initiated Digital & Technical Work:
046 | Identified critical inefficiencies in manual paper-based billing and tracking workflows
047 | Designed and deployed 3 live port web applications using AI-assisted development — actively used by CF agents daily
048 | Built 2 production-grade Linux infrastructure projects aligned with RHCSA EX200 exam objectives
049 | portbill.vercel.app — advance wharfrent calculator for C&F agents, avoiding permanent system entries
050 | otbill.vercel.app — OT billing web tool replacing manual Excel for all port staff
051 | monthly-car-balance.vercel.app — live vehicle tracking replacing personal Excel with cloud dashboard
052 | smart-port-billing-infra — RHEL 9 enterprise deployment: 7 hardened scripts, LVM, SELinux, Podman
053 | bash-automation-toolkit — 5 production Bash scripts: user provisioning, backup, monitoring, watchdog
054 | Junior Outdoor Assistant — Port & Terminal Operations | Mongla Port Authority Nov 2013 – Nov 2017
055 | Foundation of 12+ year uninterrupted career at Bangladesh's second-largest international seaport.
056 | Assisted in port inspections, vessel operations and cargo handling under senior supervision
057 | Monitored cargo dwell time and vehicle positioning across terminal locations
058 | Maintained inspection reports, cargo handling records and incident logs
059 | Coordinated with CF agents for efficient cargo clearance workflows
060 | Built foundational expertise in wharfrent billing, maritime logistics and customs clearance
061 | LIVE PORT SYSTEMS — SELF-BUILT (AI-ASSISTED DEVELOPMENT)
062 | Port Billing Web Application | portbill.vercel.app
063 | Problem: Port official system creates permanent bills that cannot be deleted — C&F agents had no way to estimate charges without committing to a final entry.
064 | Solution: Real-time advance wharfrent calculator for Car & General Cargo. Slab-based billing, VAT, levy, inside/outside cargo split, hoisting charge auto-calculation, print-ready output. Actively used by C&F agents at Mongla Port.
065 | Daily Car Balance & Location Tracking System | monthly-car-balance.vercel.app
066 | Problem: Vehicle tracking across warehouse, shed and yard was in personal Excel — only visible to one person.
067 | Solution: Live cloud dashboard replacing personal Excel. All staff view real-time vehicle positions across all terminal areas. Firebase sync, KPI analytics, monthly comparison reports, Excel export.
068 | OT Bill Management System | otbill.vercel.app
069 | Problem: Overtime billing was manual Excel — complex, time-consuming and error-prone every cycle.
070 | Solution: Any staff member adds profile once and generates final OT bill instantly. Employee database, auto hourly rate calculation, date-wise OT entry, A4 print output.
071 | LINUX & TECHNICAL PROJECTS — RHCSA ALIGNED
072 | Smart Port Billing Infrastructure — RHEL 9 Enterprise Deployment | smart-port-billing-infra.vercel.app
073 | Production-grade RHEL 9 infrastructure deployment. 7 hardened Bash scripts covering all core RHCSA EX200 objectives.
074 | LVM storage — 30GB across 3 logical volumes (billing-data, billing-logs, billing-backup) with XFS + UUID fstab
075 | SELinux enforcing mode — custom fcontext rules, port labeling (port 2222, 3000), booleans, restorecon
076 | firewalld — dedicated portbilling zone, rich rules, CIDR restrictions, rate limiting, REJECT target
077 | SSH hardening — port 2222, key-only auth, AllowGroups, MaxAuthTries, FIPS-compatible ciphers (CIS/NIST)
078 | Podman rootless container deployment — systemd unit, TLS 1.3, Nginx reverse proxy, health checks
079 | POSIX ACLs with default inheritance + systemd backup timer (daily 02:00, 30-day retention)
080 | Log monitoring — rsyslog routing, logrotate 90-day retention, journalctl alerting service
081 | Bash Automation Toolkit — RHEL 9 Sysadmin Scripts | bash-automation-toolkit.vercel.app
082 | 5 production-grade Bash scripts with strict error handling (set -euo pipefail + ERR trap), structured logging and automated recovery
083 | user_setup.sh — Linux user provisioning with primary group, password policy, validated sudoers file
084 | backup.sh — /home and /etc tar.gz archives with integrity verification and 7-day auto-pruning
085 | disk_monitor.sh — partition usage scanning with WARN (80%) and CRITICAL (95%) exit codes
086 | service_health.sh — sshd/nginx/firewalld watchdog with auto-restart and diagnostic logging
087 | system_report.sh — full system snapshot: CPU, memory, disk, network, failed logins, journal errors
088 | All 5 scripts ShellCheck verified — zero warnings — idempotent execution — cron-ready
089 | Linux/DevOps Command Reference | devops-command-summary.vercel.app
090 | 1,311 command blocks, 84 sections — Linux, Docker, Kubernetes, Terraform, AWS, Azure, Security. Built during RHCSA preparation as personal study and interview reference.
091 | TECHNICAL DEVELOPMENT
092 | Linux Administration — RHCSA EX200 Preparation | Self-Directed Jan 2025 – Present
093 | RHCSA EX200 — RHEL 9 structured 60-day program (exam scheduled 2026)
094 | Completed: user/group management, file permissions, ACLs, process management, SSH, basic storage/networking
095 | In progress: SELinux, LVM, firewalld, systemd services, NFS, Podman containers, Bash scripting
096 | Portfolio: 2 live infrastructure projects demonstrating RHCSA skills in production context
097 | AI-assisted development — Claude (prompt engineering), requirement definition, testing and Vercel deployment
098 | Arabic Language — Saudi Workplace Readiness | Self-Directed 2025 – Present
099 | MSA and Saudi spoken Arabic — maritime and port operations terminology focus
100 | Goal: conversational level for Saudi port workplace communication
101 | EDUCATION
102 | Higher Secondary Certificate — Business Studies | Khulna Public College 2009 – 2011
103 | Secondary School Certificate — Business Studies | Mongla Bandar Secondary School 1999 – 2009
104 | LANGUAGES
105 | Bengali — Native
106 | English — Professional Working
107 | Arabic — Elementary (Learning)
108 | Portfolio: sasumel.netlify.app  |  GitHub: github.com/samiulAsumel  |  Available for Saudi Arabia — Q2 2027
```

---

## Update Checklist

When the user provides an updated CV, go through this checklist:

- [ ] Run the Python extractor on the new DOCX
- [ ] Compare line by line against the snapshot above
- [ ] Note every changed, added, or removed line
- [ ] Update `index.html` only for changed lines using the Section Map
- [ ] Update the typewriter `lines[]` array in `js/main.js` if title or target changed
- [ ] Update `data-to` counter values in `index.html` if years/apps count changed
- [ ] Update `<meta name="description">`, `og:description`, `og:title` if headline changed
- [ ] Update `og:url` and `canonical` if domain changes from `https://sasumel.netlify.app`
- [ ] Update JSON-LD `jobTitle`, `sameAs` if role or links changed
- [ ] Update language bar `style="width:N%"` and `aria-valuenow` if proficiency changed
- [ ] Update the CV snapshot in this README to the new version
- [ ] Verify with the 35-point content check script
