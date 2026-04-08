# Agents — Coming in v2

You noticed this folder is empty. That's on purpose.

## Why Nothing's Here Yet

Most AI training products will hand you six pre-built "specialists" on day one — an IC Memo Drafter, a Deal Screener, a Portfolio Monitor — and tell you that's the product. We tried that. It doesn't work, for two reasons.

**First, generic agents produce generic output.** An agent built to write IC memos for "a private credit fund" will produce memos that feel like a private credit fund memo from 2021, not your firm's memo. Your IC has a specific format. Your PM hates certain words. Your firm thinks about covenants differently than the fund down the street. A generic agent papers over all of that and produces something you'd have to rewrite anyway.

**Second, agents short-circuit the learning.** If you've read Rule 6, you know the only way to actually get good at this is reps — reps at giving context, reps at steering, reps at pushing back on bad AI output. Handing you a pre-built IC Memo Drafter on day one is like giving you the answer key before the exam. You never build the instinct. Six weeks later you're still dependent on the template, and the day the template breaks you have no idea how to fix it.

We want you to build the instinct first. That's what the drills and workflows are for. Once the instinct is there, agents stop being crutches and start being force multipliers. That's when they matter.

## What's Coming in v2

Real custom agents, built for your specific firm, delivered as part of ongoing support. Not generic templates. The v2 agent roadmap includes:

- **A custom IC Memo Drafter** built on your firm's actual memo format, your PM's preferred structure, your firm's specific risk framework, and (optionally) your firm's historical memos as reference material. Deployed as a Copilot declarative agent inside your Microsoft 365 environment so it can see your SharePoint and OneDrive files directly.
- **A custom Deal Screener** built on your firm's actual investment criteria. You describe your box once, in detail. The agent screens every new CIM and teaser against it and tells you in five minutes what's worth a deeper look and why.
- **A custom Portfolio Monitor** that ingests your quarterly compliance certs and financials (via Copilot's Microsoft Graph access) and produces one-page summaries, watch list recommendations, and escalation flags in your firm's format.
- **A custom Industry Research agent** for whatever sector you cover most, pre-loaded with the specific questions your firm asks about every new deal in that space.
- **A custom Client / LP Communications agent** for drafting updates, follow-ups, and relationship notes in your voice and your firm's tone.

Each one is built for you. Each one gets updated as your firm's process evolves, as Copilot ships new capabilities, and as you give feedback about what's working and what isn't. That's the retainer.

## What You Should Do Instead Right Now

Work through the 30-day drill program in [`../drills/01-first-30-days.md`](../drills/01-first-30-days.md). By the end of it you'll be producing better work faster than you are today, and you'll have the instinct for steering AI that makes custom agents actually useful when they arrive.

If you want to sketch your own lightweight "agent" in the meantime — meaning a context block you paste at the top of every new conversation — that's covered in the drills around week 3. Think of it as a rehearsal for v2, and a useful exercise in clarifying what you'd actually want a custom agent to do.
