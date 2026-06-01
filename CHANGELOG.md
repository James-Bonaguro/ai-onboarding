# Changelog

## v2.0 — The website rebuild

A ground-up rebuild of how this product is *delivered*, with the content spine
preserved and deepened. The goal: a non-technical private credit VP opens one
link and, within ~30 minutes, has their AI configured and has produced one
genuinely useful piece of work — without ever seeing GitHub, a repo, or a
markdown file.

### The headline change: it's a website now

- **New self-contained static site in [`/docs`](docs/)** — beautiful, fast, and
  fully responsive (desktop + phone), with light/dark themes. Built as plain
  HTML/CSS/JS with **no build step, no dependencies, and no web fonts**, so it
  loads instantly and works offline if saved.
- **One clickable link**, published through **Vercel** with the repo kept
  **private** (`vercel.json` serves `/docs`; `.vercelignore` keeps the markdown
  source and owner notes out of the deploy). Every push redeploys automatically;
  the reader never touches GitHub.
- **Premium editorial design** for finance professionals: system serif display
  + system sans body, hairline rules, real whitespace, a restrained navy/brass
  palette — and zero AI-gradient clichés.

### New content

- **Prompt library** (`prompts.html`) — ~35 copy-paste prompts built for private
  credit work (screening, CIM/covenant analysis, model stress tests, comparison
  tables, diligence lists, IC memos, redlines, email, portfolio monitoring,
  learning), each with one-click copy and a category filter.
- **Ready-to-paste operating profiles** (`setup.html`) — a fully written "About
  me" + "How to respond" pair tuned for a private credit AVP/VP, with copy
  buttons, instead of bare fill-in-the-blank templates.
- **Second end-to-end workflow** (`workflows.html`) — a full **quarterly
  portfolio monitoring** walkthrough with exact prompts, filling the gap the old
  repo flagged ("when it's added"). The CIM → IC memo workflow is ported and now
  has every prompt individually copyable.
- **Interactive 30-day program** (`drills.html`) — the 20 drills with a progress
  tracker that saves to the browser (no account, nothing leaves the device).
- **"Do this today" actions** at the end of every section, so each visit ends in
  a concrete win.

### Accuracy fixes (verified against mid-2026 tool behavior)

- **Microsoft 365 Copilot now has native Custom Instructions + Memory.** The old
  content claimed enterprise Copilot strips custom instructions and pushed a
  paste-every-time workaround. That's outdated — the setup guide now shows the
  real native flow, with the OneNote/SharePoint method kept as a fallback for
  tenants still rolling it out.
- **Copilot Notebooks** is presented as generally available (it is, as of 2026),
  not "ask IT if it's on."
- **ChatGPT** steps updated to the current Settings → Personalization → Custom
  Instructions (two fields) + Memory (saved memories / reference chat history).
- **Claude** steps updated to Settings → Profile preferences, plus Projects for
  deal/sector-specific context.
- Added an explicit **safety** section: work materials in Copilot (inside the
  firm perimeter); ChatGPT/Claude for learning and practice only.

### Preserved and elevated

- The core thesis (AI as a reasoning partner, foundation-first), the Five Rules,
  Rule 6 ("how you actually get good"), the before/after pattern, the 30-day
  program, the CIM → IC memo workflow, and the honest career "Play" — all kept,
  in the same direct, anti-hype voice, reformatted and tightened for the web.
- The original long-form markdown remains in the content folders as an editable
  source-of-truth and reference.

### Docs

- `README.md` rewritten around the site and how to iterate on it.
- `CLAUDE.md` updated with the new site architecture, design language, and
  accuracy rules.
- Added `START-HERE.md` (a plain-language note for the two intended readers) and
  this changelog. `PLAN.md` records the rebuild plan.
