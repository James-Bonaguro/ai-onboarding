# The AI Operating System — Private Credit Edition

A field manual that teaches private credit professionals to use AI as a
reasoning partner, not a search engine. Configure your tools in ~30 minutes,
then run a six-week practice program built around real deal work — credit memos,
CIMs, covenants, models, IC and LP communications.

**The product is a website.** It's a self-contained static site in [`/docs`](docs/).
You read it by clicking one link — no GitHub, no markdown, no developer tooling.

> 👉 **New here and not technical?** You're in the wrong place — open
> **[START-HERE.md](START-HERE.md)** instead, or just click the link you were sent.

---



## Records for myself (Ignore) --- The link to share

Once it's deployed to Vercel (one-time step below), the site lives at a clean
link like:

```
https://ai-onboarding-system.vercel.app/
```

Text that URL to anyone. It works on phone and desktop, light and dark, and
even offline if they save the page.

### One-time setup (repo owner, ~2 minutes)

Keep this repo **private**; publish the site through Vercel:

1. In Vercel → **Add New → Project → Import Git Repository** → pick
   `James-Bonaguro/ai-onboarding`.
2. Framework Preset: **Other**. Leave Build/Output empty (it's static). **Deploy**.
3. Done — you get `https://ai-onboarding-system.vercel.app` (its own project, separate
   from intersectionstrategies). `vercel.json` already serves `/docs`, so the
   homepage is the site, not this README.

To take down the old GitHub Pages page: make the repo **private** (Settings →
General → Change visibility) or set **Settings → Pages → Source → None**.

---

## What's on the site

| Page | What it is |
|---|---|
| **Start here** (`index.html`) | The promise, the 30-minute first win, the full journey map. |
| **The Rules** (`rules.html`) | The five rules + "how you actually get good." The mental model. |
| **Setup** (`setup.html`) | Current, verified steps to configure Copilot, ChatGPT, and Claude — with ready-to-paste operating profiles and Copilot power moves. |
| **Prompts** (`prompts.html`) | A filterable copy-paste prompt library built for private credit work. |
| **Examples** (`examples.html`) | Before/after: default AI vs. a configured reasoning partner. |
| **30 Days** (`drills.html`) | The 20-drill practice program, with progress tracking saved in the browser. |
| **Workflows** (`workflows.html`) | End-to-end: CIM → IC memo, and quarterly portfolio monitoring. |
| **The Play** (`play.html`) | Turning AI competence into visibility, bonus, and promotion. |

---

## Working on it (for me, or an agent like Codex)

The site is plain HTML/CSS/JS with **no build step and no dependencies**.

```
docs/
  index.html, rules.html, setup.html, prompts.html,
  examples.html, drills.html, workflows.html, play.html, 404.html
  assets/
    app.css   ← the whole design system (tokens, components, light/dark)
    app.js     ← theme toggle, copy buttons, tabs, drill progress, mobile nav
  .nojekyll
```

- **Preview locally:** open `docs/index.html` in a browser, or run a tiny server
  from the repo root: `python3 -m http.server -d docs 8000` → http://localhost:8000
- **Editing content:** each page is self-contained. The shared header/nav/footer
  markup is duplicated per page on purpose (no templating, so it stays simple and
  portable). Change `assets/app.css` to restyle everything at once.
- **Design language:** editorial finance — system serif display, system sans body
  (zero web fonts = instant load + fully offline), hairline rules, light/dark,
  no AI-gradient clichés. Tokens live at the top of `app.css`.
- **Verify before pushing:** `python3 -m http.server -d docs` and click through, or
  re-run the link/anchor check used during the rebuild.

### Source content

The original long-form content also lives as markdown in `doctrine/`, `setup/`,
`examples/`, `drills/`, `workflows/`, `play/`, and `agents/`. These remain as an
editable source-of-truth and reference; the **site in `/docs` is the delivered
product**. See [CLAUDE.md](CLAUDE.md) for voice, audience, and constraints, and
[CHANGELOG.md](CHANGELOG.md) for what changed in this rebuild.

---

## Accuracy

Setup steps were verified against the tools' current behavior (mid-2026),
including Microsoft 365 Copilot's native Custom Instructions + Memory and Copilot
Notebooks, ChatGPT's Personalization/Memory, and Claude's profile preferences and
Projects. Tool UIs move — if a menu label has shifted, the fix is almost always
under **Settings → Personalization** (or **Profile**).
