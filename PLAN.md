# Rebuild Plan — Personalized AI Onboarding (Private Credit)

## Context

The content spine of this project is strong: the Five Rules, "AI as a reasoning
partner that fights you," "20% editing not 80%," the 30-day drill program, the
CIM→IC-memo workflow, and the honest career "play." The voice — direct, field
manual, anti-hype — is the load-bearing asset and stays.

The failure is **delivery**. Today this is a developer-style GitHub repo of raw
markdown. The two real users (a non-technical AVP and VP at a private credit
firm) would have to navigate GitHub, open `.md` files, and hand-copy text out of
code blocks. That is the thing to kill.

**The fix:** a beautiful, fast, self-contained static site under `/docs`,
deployed to GitHub Pages so it's one clickable link. Works offline if opened
from disk. No dev tooling, no GitHub, no markdown ever shown to the user.

## What I verified (June 2026, live web)

- **Microsoft 365 Copilot now has NATIVE Custom Instructions + Memory** (GA
  rolling out Jan–May 2026). The old content's "enterprise strips custom
  instructions, use a OneNote workaround" framing is outdated and gets corrected.
- **Copilot Notebooks is GA** (May–June 2026) for E3/E5/Business Standard/Premium
  with a Copilot license. Present as available.
- **ChatGPT:** Settings → Personalization → Custom Instructions (two fields,
  1,500 char each) + Memory (saved memories + reference chat history) + personality presets.
- **Claude:** Settings → Profile → preferences ("What preferences should Claude
  consider…"); plus Projects (instructions + knowledge, 5 free) and Styles.

## Deliverable: a static site in `/docs`

Premium editorial finance design. System serif display + system sans body (zero
web-font dependency = instant load, fully offline). Light/dark. Mobile-first.
No AI-gradient clichés — hairline rules, numbered modules, generous whitespace.
Progressive enhancement: fully readable with JS disabled.

Pages:
- `index.html` — Start Here. The promise, the 30-minute first win, the journey
  map, exactly what to click. Warm, unnamed welcome.
- `rules.html` — The Five Rules + "How you actually get good."
- `setup.html` — Get configured. Tabbed Copilot / ChatGPT / Claude with verified
  2026 steps. Ready-to-paste, pre-filled operating profiles (copy buttons). Copilot power moves.
- `prompts.html` — **NEW** copy-paste prompt library built for their job, one-click copy.
- `examples.html` — Before/after split panels.
- `drills.html` — 30-day program with interactive progress tracking (localStorage).
- `workflows.html` — CIM→IC memo (ported) **+ new portfolio-monitoring workflow**.
- `play.html` — Career positioning.
- `404.html`, inline SVG favicon, `.nojekyll`.

Shared: `assets/app.css`, `assets/app.js` (theme toggle, copy-to-clipboard with
execCommand fallback for file://, tabs, mobile nav, drill progress, reading
progress, active-section nav). All relative paths so it runs from disk.

Every major section ends with a **"Do this today"** action.

## Deployment

`.github/workflows/deploy-pages.yml` builds/deploys `/docs` via GitHub Actions.
One-time human step (documented): repo Settings → Pages → Source = GitHub Actions.
Resulting link: `https://james-bonaguro.github.io/ai-onboarding/`.

## Source preservation

Keep existing markdown as longform source (and to honor CLAUDE.md constraints on
`doctrine/06` and `examples/01`). The `/docs` site is the delivered product;
markdown stays editable for me/Codex. CLAUDE.md + README updated to explain this.

## Docs to update / add

- `README.md` — rewritten: what this is, the link, structure, how to iterate.
- `CLAUDE.md` — add the site/`docs` architecture + design + accuracy rules.
- `CHANGELOG.md` — what changed and why.
- `START-HERE.md` — short note to brother + friend: exactly what to click/do first
  (also surfaced on the site home).

## Verification

- Python script: every internal href resolves to a real file; every prompt card
  has copy text; no leftover broken links; HTML parses.
- Manual: tab logic, copy fallback, drill checkboxes, dark mode tokens, mobile nav.
- Confirm Pages workflow YAML is valid.

## Commits (logical)

1. Site scaffold: design system (CSS) + behavior (JS).
2. Core pages: home, rules, setup, prompts.
3. Content pages: examples, drills, workflows, play, 404.
4. Pages deploy workflow.
5. Docs: README, CLAUDE.md, CHANGELOG, START-HERE.
