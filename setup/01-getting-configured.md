# Setup: Getting Configured (15 minutes, one time)

## What You're Doing

You're going to paste some text into your AI's settings. This text runs behind every conversation. It tells the AI who you are, what you do, and how you work. After this, every response it gives you will be better.

## Step 1: Open Your Settings

**ChatGPT:**
- Click your profile picture (bottom left)
- Click "Customize ChatGPT"
- You'll see two boxes: "What would you like ChatGPT to know about you?" and "How would you like ChatGPT to respond?"

**Claude:**
- Click your profile picture (bottom left)
- Click "Settings"
- Click "Profile"
- You'll see a "Custom Instructions" box

**Microsoft Copilot:**
- Enterprise Copilot deployments often restrict or remove custom instructions entirely. This depends on how your firm's IT configured it — you may not have a settings page at all.
- **Workaround:** Paste a context block at the start of each new conversation. It's an extra step, but it works.
- Copy the "About You" template from Step 2 below and paste it at the top of every new chat before your first message. Start it with: "Before we begin, here's context about me and how I work:"

## Step 2: Fill in "About You"

Copy the template below. Replace everything in [brackets] with your actual information. Delete any lines that don't apply.

```
I am a [title] at a [type of firm — e.g., private credit fund, insurance brokerage, consulting firm].

I have [X] years of experience. My day-to-day involves [list your 3-4 main tasks — e.g., reviewing CIMs, building financial models, writing IC memos, managing client relationships].

When I write, I write for [audience — e.g., investment committee, senior partners, clients]. The tone should be [e.g., direct and analytical / professional but conversational / formal and precise].

Formats I use most: [e.g., one-page memos, Excel models, email, PowerPoint decks].

I care most about: [e.g., downside protection, data accuracy, speed, clear recommendations].

I do NOT want: generic responses, corporate buzzwords, or answers that could apply to any company in any industry. Be specific to my situation.
```

## Step 3: Fill in "How to Respond"

This tells the AI how to talk to you. Copy and paste, then adjust to your preference:

```
Be direct. No preamble, no filler, no "Great question!" openers.

When I share analysis or a thesis, find the weaknesses first. Don't validate me — challenge me. I'd rather hear problems from you than from my committee.

If I ask you to write something, match my firm's tone: [professional / analytical / direct]. No generic language.

When you don't have enough information to give a useful answer, ask me what's missing instead of guessing.

Keep responses concise unless I specifically ask for depth. If I want more, I'll ask.

If I give you a document, read the whole thing before responding. Don't summarize the first two pages and stop.
```

## Step 4: Test It

Open a new conversation and type something simple:

> "I need to write a quick summary of a deal I'm reviewing. Mid-market B2B software, PE-backed, 5x levered. Where should I start?"

**If setup worked:** The response will reference your role, your firm type, and your typical output format. It will sound like it knows you.

**If setup didn't work:** The response will sound generic, like it could be written for anyone. Go back and check that your custom instructions saved properly.

## You're Done

This is the foundation. Every conversation from here forward is running on your custom configuration. The five rules you just read will compound on top of this.

**Next step:** Work through the examples to see what configured AI actually looks like in practice → [Examples](../examples/)

---

## Quick Reference: What You Just Set Up

| What | Where it lives | What it does |
|---|---|---|
| Your background | "About You" / Custom Instructions | AI knows your role, your firm, your standards |
| Response style | "How to Respond" / Custom Instructions | AI matches your tone and pushes back instead of agreeing |
| Everything else | Your conversations | Each chat builds on this foundation |
