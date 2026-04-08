# Copilot Power Moves (Microsoft 365)

Most private credit firms are on Microsoft 365 Copilot, not ChatGPT or Claude. That's usually because Copilot is bundled with the Microsoft license the firm is already paying for, and because Copilot can see the firm's SharePoint, OneDrive, Outlook, and Teams data inside the firm's security perimeter. When you hear your colleagues complain that "Copilot isn't as good as ChatGPT," they're almost always comparing the chat window only. They're missing everything below.

This file walks through the parts of Copilot that matter most for a private credit analyst. If you work through this after the basic setup guide, you'll be using maybe 10% of what's in front of you today and closer to 60% by the time you're done.

---

## The Thing Nobody Tells You

Copilot isn't one tool. It's the same AI wired into every Microsoft app you already use — Word, Excel, Outlook, Teams, OneNote, PowerPoint, SharePoint — plus a standalone chat window that can see across all of them.

The standalone chat window is the part most people see first and judge everything on. It's fine. It's also the least interesting part. The actual leverage is in the integrations, and specifically in three features most analysts have never opened: **Copilot Notebooks**, **Agent Builder**, and **Copilot in Excel**.

---

## Power Move 1 — Copilot Notebooks

**What it is:** A workspace inside Copilot (also accessible through OneNote on Windows) where you add reference materials — Word docs, PowerPoint decks, Excel files, OneNote pages, PDFs, Copilot Pages — and Copilot reasons across *all of them together*. You can ask it questions that pull from multiple sources, generate summaries, extract themes, and even generate an audio overview you can listen to on your commute.

Think of it as a sidecar brain for a specific deal or project. One notebook per deal, or one per portfolio company, or one per sector you cover.

**Why it matters for you:** Most private credit work is about synthesizing a pile of unstructured material — a CIM, a model, management presentations, data room documents, call notes, research reports — into a view you can defend to your IC. That synthesis work is exactly what Copilot Notebooks is built for. You drop everything into the notebook, it reads it all, and you get a persistent workspace that remembers every document you've added and can answer questions across them.

This is the closest thing the enterprise world has to NotebookLM (Google's research synthesis tool), and it has one huge advantage: it lives inside your firm's data perimeter, so you can actually put confidential materials into it without compliance losing their mind.

**How to use it — a starter workflow:**

1. Open Microsoft 365 Copilot (the standalone app or web portal).
2. Create a new Notebook. Name it after the deal — for example, *Project Aurora — Healthcare Services*.
3. Add every relevant document you have: the CIM, the teaser, the preliminary model, the sponsor's management presentation, any industry research, your own notes from the first call.
4. Look at the Overview page Copilot generates. It'll give you a synthesized summary, key themes, and surfaced topics. Read it carefully. It's not final output — it's a first pass at what the materials collectively say.
5. Now start asking questions that a junior analyst would spend a day on:
   - *"Pull every mention of customer concentration across all these documents. Where is it consistent, and where does it contradict itself?"*
   - *"The sponsor describes this as a recession-resistant business. What evidence across these documents supports that claim, and what evidence undercuts it?"*
   - *"Summarize the EBITDA adjustments proposed in the CIM versus the adjustments implied by the preliminary model. Where do they disagree, and by how much?"*
6. Generate the Audio Overview. Listen to it on your commute home the day before IC. It is startlingly effective for locking the deal into your head.

**A warning:** Copilot Notebooks is generally available for Microsoft 365 Copilot enterprise licenses, but whether it's turned on at your firm depends on your IT configuration. If you open Copilot and don't see a Notebooks tab, ask IT whether it's enabled for your tenant. It usually is — they just haven't trained anyone on it.

---

## Power Move 2 — Agent Builder

**What it is:** A feature inside Microsoft 365 Copilot that lets you build custom agents by describing what you want in plain English. You don't need to know how to code. You type something like *"I want an agent that screens incoming CIMs against our investment criteria and tells me whether a deal is worth reviewing,"* and Agent Builder walks you through the rest.

The agents you build here are **declarative agents** — they're real, persistent specialists that live in your Copilot chat. You can invoke them the same way you invoke stock Copilot. They inherit your firm's Microsoft 365 security and data protections. Admins have visibility and control over which agents get distributed.

**Why it matters for you:** This is how you graduate from "I pasted a prompt at the top of a conversation" to "I have a persistent Deal Screener that lives in Copilot and I can invoke with one click." It's the difference between a rehearsal and a real thing.

**The catch:** Some firms allow Agent Builder for end users. Some restrict it to admins. Some haven't enabled it yet. You won't know until you open Copilot and look.

**How to check:** Open Microsoft 365 Copilot (web or desktop). Look for a "Create an agent" option in the chat window or in the Copilot app sidebar. If it's there, you can build. If it's not, ask your IT team whether Agent Builder / Copilot Studio is enabled for your tenant and whether end-users can create agents.

**Do not build an agent yet.** That's what v2 of this product is for, and you're going to do it badly if you try it on day one. Instead, make a short list of the three or four agents you would want — an IC Memo Drafter, a Deal Screener, a Portfolio Monitor, a Market Research agent — and save it. When you're three weeks into the drill program and you actually understand how to steer these things, you'll be ready. The drills teach you how to describe the agent clearly enough that Agent Builder can build a good one.

---

## Power Move 3 — Copilot in Excel

**What it is:** Copilot, embedded directly in Excel, with access to the model you have open. It can analyze your data, explain formulas, build new tables, spot trends, generate charts, and (in Agent Mode, where available) actively edit your model while walking you through its reasoning.

**Why it matters for you:** You spend a meaningful chunk of your week inside Excel models — a CIM's accompanying model, your firm's credit model, an LBO model a sponsor sent over. Copilot in Excel turns that from pure manual work into something closer to a conversation. You can ask it:

- *"Walk me through this model. What's the base case assumption for revenue growth, and where does that assumption come from?"*
- *"Stress this model: drop revenue growth by 300bps in years two through five and tell me what happens to the leverage covenant in each year. Build a new tab with the output."*
- *"I see the sponsor is modeling a 200bps margin expansion. Find every cell that contributes to that expansion and tell me which line items are driving it."*
- *"The LBO model assumes 18-month integration synergies. Find that assumption and tell me what would happen if synergies took 36 months instead."*

These are questions that used to take an associate an hour and now take four minutes. The time savings are real, and — importantly — Copilot will catch things you miss because it reads the model cell by cell without getting tired.

**How to get started:** Open any Excel model. Click the Copilot button in the ribbon. In the pane that opens, start by asking *"Walk me through this model"* and go from there. Treat it exactly like you'd treat a sharp junior analyst you're asking to explain something.

---

## Power Move 4 — Copilot in Outlook and Teams

These are the "boring" integrations that most people dismiss. They shouldn't.

**Outlook Copilot** can:
- Summarize a long email thread in three sentences. You stop scrolling through 40-message chains before every call.
- Draft replies in your voice after a few weeks of observing how you write.
- Extract action items from a thread automatically.
- Catch you up on email you missed while you were on PTO.

**Teams Copilot** can:
- Produce real-time meeting notes during a call. You're no longer the person taking notes while trying to think.
- Highlight decisions made during a meeting and flag the open questions.
- Generate follow-up action items tagged to the right people.
- Summarize a recorded meeting you missed, with timestamps for the important parts.

**Why it matters for you:** A private credit associate spends three to five hours a day in Outlook and Teams. Cutting even 20% of that time out by handing the mechanical parts to Copilot is a two-year bonus-cycle differentiator. Nobody talks about it because it's not glamorous. That's the opportunity.

**How to get started:** In Outlook, open any long email thread and click the Copilot button. Ask it to summarize. In Teams, open any past meeting recording or live meeting and click the Copilot button. Ask it for meeting notes.

---

## Power Move 5 — OneNote as Persistent Context

**What it is:** OneNote is Microsoft's note-taking app and it's been around forever. What changed recently is that **Copilot can read your OneNote notebooks**. Which means OneNote is now the easiest way to give Copilot persistent context about you, your firm, your deals, and your preferences — without fighting with the custom instructions settings page.

**Why it matters for you:** Remember how the basic setup guide told you to paste an "About You" block into Copilot's custom instructions, with the workaround being to paste it at the top of every new conversation if custom instructions are locked? Here's a better workaround: put all of that context into a dedicated OneNote notebook instead. Copilot can see it. You never have to re-paste anything. And you can keep expanding it as your context grows — firm style guide, deal criteria, portfolio list, common abbreviations, historical memo templates — and Copilot will reference it automatically.

**How to set it up:**

1. Open OneNote (desktop or web, both work). Create a new notebook called something like *My AI Context* or *Firm Playbook*.
2. Create a section called *About Me and My Role*. Paste in the "About You" template you filled out in the basic setup guide. This is the persistent version.
3. Create a section called *Firm Standards*. Write down — or paste from an existing firm doc — the investment criteria your firm uses, your IC memo format, your PM's preferences, the words your firm avoids in memos, the covenant structures you do and don't like, whatever else is useful.
4. Create a section called *Current Deals*. One page per active deal. Include the deal name, the sponsor, the key numbers, your working thesis, your open questions.
5. Create a section called *Portfolio Companies*. One page per portfolio company you cover. Basic facts, current watch list status, the thing you're worried about.
6. Now when you use Copilot Chat and ask a question, it can reference this notebook. Try it. Ask *"Based on what you know about me and my firm, what should I focus on when I review a new CIM in the industrial services space?"* and watch it pull from the OneNote context.

This is the single highest-leverage setup move for a Copilot-based firm. Your colleagues are not doing this. Do it this week.

---

## A Short List of Things NOT to Do

- **Don't build custom agents yet.** Build them in v2 after you understand what you actually need. Day-one agents are bad agents.
- **Don't use Copilot Cowork until you've used basic Copilot for two weeks.** Cowork is the "AI acts across multiple apps for you" mode that's rolling out now. It is powerful and you will be tempted. It is also the single easiest way to produce fast garbage if you don't already know how to steer the underlying model.
- **Don't upload anything to ChatGPT or Claude that you wouldn't send in an unencrypted email.** Copilot is cleared by your firm's IT; the public chatbots are not. Use Copilot for work materials. Use Claude or ChatGPT for personal learning and practice.
- **Don't dismiss Copilot because it looks dumber than ChatGPT in the chat window.** The chat window is the weakest part of the product. The strength is in the integrations.

---

## What to Do This Week

1. Open Copilot Notebooks and create a notebook for one current deal. Load the CIM and any other materials you have. Ask it five questions. Generate the audio overview and listen to it.
2. Set up the OneNote persistent context notebook. Fill in at least the first two sections — About Me and Firm Standards.
3. Open one Excel model you've been meaning to tear apart and ask Copilot to walk you through it.
4. Pick one long email thread from today and have Outlook Copilot summarize it.

That's four things. An hour of your life. By the end you'll know more about what Copilot can actually do than 90% of the people at your firm.

Then get started on the [30-day drill program](../drills/01-first-30-days.md).
