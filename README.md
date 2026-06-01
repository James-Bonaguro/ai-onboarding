# The AI Operating System — Private Credit Edition

A field manual that teaches private credit professionals to use AI as a
reasoning partner, not a search engine. Configure your tools in ~30 minutes,
then run a six-week practice program built around real deal work — credit memos,
CIMs, covenants, models, IC and LP communications.

**The product is the website in [`/docs`](docs/).** It's a self-contained static
site — plain HTML/CSS/JS, no build step, no dependencies. The reader opens one
link; they never see GitHub, markdown, or any developer tooling.

---

## Hosting: Vercel (private repo)

This repo is meant to be **private**. The site is published publicly through
**Vercel**, so the share link is clean and the source content + owner notes in
this repo stay private.

### Deploy in ~2 minutes (zero config)

1. In Vercel: **Add New → Project → Import Git Repository**, and pick
   `James-Bonaguro/ai-onboarding`.
2. Framework Preset: **Other**. Leave Build Command and Output Directory empty —
   it's a static site. Click **Deploy**.
3. Done. You get a link like `https://ai-onboarding.vercel.app`.

No settings to change: [`vercel.json`](vercel.json) rewrites the site root to
`/docs`, so the homepage is the site (not this README), and
[`.vercelignore`](.vercelignore) keeps the markdown source out of the
deployment. Every push to the repo redeploys automatically.

**Custom domain:** Vercel project → **Settings → Domains** → add your domain and
follow the DNS instructions (same flow you used for `intersectionstrategies.co`).

### Turn off the old GitHub Pages

GitHub Pages was rendering this README as a public page. To stop it: make the
repo **private** (repo **Settings → General → Change visibility**) — on a free
plan that also disables Pages — or set **Settings → Pages → Source → None**.

---

## Share the link

After deploy, text the Vercel URL (or your custom domain) to anyone. It works on
phone and desktop, light and dark, and offline if the page is saved.

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

## Working on it locally (for me, or an agent like Codex)

No build step, no dependencies.

- **Preview:** `python3 -m http.server -d docs 8000` → http://localhost:8000, or
  just open `docs/index.html` in a browser.
- **Structure:** each page is self-contained; the shared header/nav/footer markup
  is duplicated per page on purpose (keeps it portable, no templating). The whole
  design system lives in `docs/assets/app.css`; behavior (theme, copy buttons,
  tabs, drill progress, mobile nav) in `docs/assets/app.js`.
- **Design language:** editorial finance — system serif display + system sans
  body (zero web fonts), hairline rules, light/dark, no AI-gradient clichés.
  Tokens are at the top of `app.css`.

```
docs/
  index.html rules.html setup.html prompts.html
  examples.html drills.html workflows.html play.html 404.html
  assets/app.css assets/app.js
vercel.json        ← serves /docs as the site root
.vercelignore      ← keeps markdown source out of the deploy
```

### Source content

The long-form content also lives as markdown in `doctrine/`, `setup/`,
`examples/`, `drills/`, `workflows/`, `play/`, and `agents/`. These stay as an
editable source-of-truth and reference; the **site in `/docs` is the delivered
product**. See [CLAUDE.md](CLAUDE.md) for voice/audience/constraints and
[CHANGELOG.md](CHANGELOG.md) for the rebuild.

## Accuracy

Setup steps were verified against the tools' current behavior (mid-2026):
Microsoft 365 Copilot's native Custom Instructions + Memory and Copilot
Notebooks, ChatGPT's Personalization/Memory, and Claude's profile preferences and
Projects. Tool UIs move — if a label has shifted, the fix is almost always under
**Settings → Personalization** (or **Profile**).
