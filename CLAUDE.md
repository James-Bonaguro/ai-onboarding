# ai-onboarding — Project Context

## What this repo is
The private credit vertical of a premium learning system that teaches analytical professionals to use AI as a reasoning partner, not a search tool. Structured around weeks of practice, not a one-sitting tutorial. Sold as the foundation product; ongoing updates and custom agent builds are delivered through a monthly retainer.

Sequence: **Doctrine → Setup → Drills → Workflows → Play**. Agents are deferred to v2 as a retainer deliverable (see `agents/README.md`).

## The product is the website in `/docs`
As of the v2 rebuild, the **delivered product is a self-contained static site** in `docs/`. It is published publicly through **Vercel** while the repo stays **private**, so the two intended readers click one clean link and never see GitHub, a repo, or markdown — and the owner notes/source content stay private. `vercel.json` rewrites the site root to `/docs`; `.vercelignore` keeps the markdown source out of the deploy. The long-form markdown in the content folders is now the **editable source-of-truth and reference**; the site is what ships. When you change content, update the relevant `docs/*.html` page (that's what people read). See `README.md` for how to preview/deploy and `CHANGELOG.md` for the rebuild.

- Stack: plain HTML/CSS/JS, **no build step, no dependencies, no web fonts** (system serif display + system sans body → instant load, fully offline-safe).
- Shared design system lives in `docs/assets/app.css`; behavior (theme toggle, copy buttons, tabs, drill progress, mobile nav) in `docs/assets/app.js`. Restyle everything from the tokens at the top of `app.css`.
- Header/nav/footer markup is intentionally duplicated per page (no templating) to keep it portable and dependency-free. Keep the eight content pages + `404.html` consistent.
- Pages: `index` (start here), `rules`, `setup`, `prompts` (copy-paste library), `examples`, `drills` (with browser-saved progress), `workflows` (CIM→IC memo + portfolio monitoring), `play`.
- **Verify before pushing:** open `docs/index.html` in a browser (or `python3 -m http.server -d docs`), click through, confirm copy buttons / tabs / drill checkboxes / theme toggle / mobile nav still work, and that internal links + anchors resolve.

## Design language (non-negotiable)
Editorial finance, premium and trustworthy. Serif display, sans body, hairline rules, generous whitespace, restrained navy + brass accents, light/dark. **No AI-gradient clichés, no purple-to-cyan, no cheesy hero glows.** Clean and fast over flashy.

## Accuracy rules for setup steps
Tool UIs change. Verify against current behavior before writing setup steps — do not rely on stale knowledge. As of mid-2026: Microsoft 365 Copilot has **native Custom Instructions + Memory** and **Copilot Notebooks is GA** (do not repeat the old "enterprise strips custom instructions" claim); ChatGPT uses Settings → Personalization → Custom Instructions + Memory; Claude uses Settings → Profile preferences + Projects. No invented menus or features. Keep a safety note: work materials in Copilot only; ChatGPT/Claude for practice.

## Audience
Private credit associates, VPs, and AVPs whose firms have recently mandated AI competence. Smart, busy, analytical, skeptical of AI hype. Most have opened ChatGPT once, bounced off it, and now feel pressure to get good without knowing how. Many are on enterprise Microsoft 365 Copilot — sometimes with Agent Builder and Copilot Studio available, sometimes locked down to chat-only. Content assumes Copilot is the default tool; Claude and ChatGPT are secondary.

Other verticals (insurance, consulting, general analytical) get their own repos. Do not generalize this one.

## Voice
Direct. Field manual, not course. No hooks, no influencer language, no "unlock," no "game-changer," no "level up." Short sentences. Anti-corporate. The reader should feel like a sharp peer wrote this in one sitting. Honest about tradeoffs. Willing to tell the reader when something is tedious.

## Constraints
- Private credit specific. Examples use CIMs, EBITDA adjustments, covenants, portfolio monitoring, IC memos. Do not water down with generic "analyst" framing.
- Tool-specific is fine. Copilot, Claude, and ChatGPT can be named directly when the content is actually about how each one works. Tool-agnostic phrasing is only required where the point applies equally to all three.
- Never assume the reader knows what a repo, a markdown file, a CLI, Git, or GitHub is. Explain in plain language when filesystem terms come up.
- New files and new folders are allowed and expected. The repo is expanding.
- Keep `doctrine/06-how-you-actually-get-good.md` and `examples/01-before-vs-after.md` unchanged for now — they're load-bearing and the voice is right.

## Quality bar
The repo should deliver **weeks of structured practice**, not a one-sitting read. A private credit associate should be able to follow the 30-day drill program in `drills/01-first-30-days.md`, work through the end-to-end workflows during real deals, and come out the other side visibly ahead of their peers at their firm. The bar is: after six weeks, the reader has shipped real work faster than they used to, has a track record of documented wins, and is the person their team goes to when they have an AI question.

The old 45-minute onboarding target is dead. Five Rules + Setup is still the entry point (about an hour), but the real product starts at the drills.

## Product structure
- `docs/` — **the shipped website** (what readers actually open). Build edits here.
- The folders below are the long-form **source content** behind the site:
- `doctrine/` — mental model (Five Rules + How You Actually Get Good). Read-once foundation.
- `setup/` — configuration and Copilot power moves. The "get your tool ready" layer.
- `examples/` — before/after comparisons. Shows the reader what "good" looks like.
- `drills/` — structured practice. Daily and weekly assignments. The centerpiece of the product.
- `workflows/` — end-to-end walkthroughs of real private credit work.
- `play/` — career positioning. How to turn AI competence into visibility, bonus, promotion.
- `agents/` — v2 teaser. Real agents come via the retainer, custom-built per client firm.
