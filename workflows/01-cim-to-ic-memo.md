# Workflow 1: From CIM to IC Memo

This is the workflow that matters most for any private credit associate or VP. A teaser lands. Then a CIM. Then a model. Then management calls. Then notes. Then a draft IC memo. The whole thing used to take a week of hard grinding. With AI as your reasoning partner — not your ghostwriter — it can take two days, and the result is better, not worse.

This walkthrough shows the full sequence with the exact prompts. The example deal is fake. The structure is real — this is the same sequence I'd run on any sponsor-backed unitranche I picked up tomorrow.

**Tool assumption:** Most steps are written for Microsoft 365 Copilot with Notebooks enabled, because that's where most private credit firms live. Where a step is meaningfully different in Claude or ChatGPT, it's noted.

**Time:** Plan on roughly four hours of focused work spread across two days. Compare that to the 25-30 hours the same write-up used to take and you'll understand why this matters.

---

## The Setup (15 min, do once per deal)

Before you write a single prompt, build the workspace.

1. **Create a Copilot Notebook for the deal.** Name it after the project codename — *Project Aurora* or whatever. One notebook per deal, no exceptions. (If you don't have Notebooks, create a new chat and plan to keep it open across all the steps below — but Notebooks is meaningfully better for this.)

2. **Add every document you have.** The teaser, the CIM, the preliminary model, the management presentation, any sector research, your call notes, comparable deal memos from your firm if you have them. If you have nothing yet besides the teaser, that's fine — start there and add materials as they arrive.

3. **Add a context page at the top of the notebook.** Copy your About You block from setup. Then add three lines specific to this deal:
   - *"My role on this deal: [originator / lead analyst / supporting analyst]."*
   - *"My PM is [name] and they care most about [the two or three things this PM consistently flags]."*
   - *"Our hold size on this would be roughly [$X million] in [unitranche / first lien / second lien / mezz]."*

4. **Run the Overview.** Let Copilot generate its synthesized summary of the materials. Read it. This is not your work product — it's a first pass at what your materials collectively say. Note anything in the Overview that surprises you. That's where the interesting questions usually live.

You now have a workspace that knows the deal. Every prompt below assumes you're inside that notebook.

---

## Step 1 — The 20-Minute Read (20 min)

The point of this step is to come out the other side knowing what the deal *is*, in your own words, before you've spent any real time on it.

### Prompt 1.1
> Read the CIM and the teaser and tell me, in plain English: what does this company actually do, who pays them, and how do they make money? Skip the marketing language. If their description includes the word "platform" or "solution," translate it to what a normal person would understand.

### Prompt 1.2
> What is the sponsor's growth thesis, in three sentences? Strip out the optimistic adjectives.

### Prompt 1.3
> Tell me the five things about this business I should be most curious about after one read of the CIM. Not risks yet — just things that don't quite add up or that I'd want to know more about.

**Output:** A few paragraphs you can read in five minutes that tell you what the deal is. Save this in your notebook as *01 — The Deal in Plain English*. You'll come back to it later when you're writing the memo.

---

## Step 2 — Quantitative Hunt (30 min)

You're going to make Copilot do the part of the read that's slow and boring: pulling every number that matters and putting it where you can compare it.

### Prompt 2.1
> Pull every quantitative claim about market size, growth rate, or market share in this CIM. List each one with the page number, the source the CIM cites (or "no source" if none), and your read on whether the claim looks defensible. Format it as a table.

### Prompt 2.2
> Now pull every customer-related number: total customer count, top customer percentage of revenue, net retention if mentioned, churn if mentioned, average contract length if mentioned. Same table format. Page numbers required.

### Prompt 2.3
> Find the EBITDA bridge. List every adjustment from reported EBITDA to adjusted EBITDA. For each, give me the dollar amount, the rationale the CIM provides, and your assessment of how it would survive credit committee scrutiny (defensible / arguable / aggressive / not going to fly). Order them from most defensible to least.

**Output:** Three tables. Save them as *02 — Quant Hunt*. These are the foundation of your risk section in the memo. The EBITDA bridge in particular is going to come up in literally every IC discussion you ever have on this deal.

**Editor's note:** You should sanity-check at least three of the numbers Copilot pulled by going back to the CIM and confirming the page reference. Not because Copilot is unreliable — because *you* need to be the one who has touched the numbers when your IC asks. The drill in Week 2 of the 30-day program covered this. Same skill, applied to a real deal.

---

## Step 3 — The Walk Through the Model (45 min) — Excel Copilot

Open the sponsor's preliminary model in Excel. Click the Copilot button.

### Prompt 3.1
> Walk me through this model. What are the tabs, what does each one do, and what are the four or five assumptions that drive everything else?

### Prompt 3.2
> What's the base case revenue growth assumption, where in the model is it set, and what's the underlying logic? If the logic isn't documented in the model, say so.

### Prompt 3.3
> Find the EBITDA margin assumptions. Are they expanding, flat, or compressing across the projection period? By how much? And where in the model is the assumption that drives the expansion/compression?

### Prompt 3.4
> Stress test: drop revenue growth by 200bps in years 2 through 5 and EBITDA margins by another 100bps in the same period. Tell me what happens to: total leverage at year 3, fixed charge coverage at year 3, and the maintenance covenant headroom in each year. Build a new tab with the output and walk me through what you did.

### Prompt 3.5
> If you had to flag one structural issue with how this model is built — something that would make me trust the output less — what would it be?

**Output:** A stressed model and a clear understanding of where the sponsor's case is fragile. Save Copilot's stress tab. You're going to use the output in your memo's downside section.

**If you don't have Excel Copilot:** Open the model yourself, identify the four or five key assumptions manually, then describe them in Claude or ChatGPT and run prompts 3.4 and 3.5 in text form. It's slower but the logical work is the same.

---

## Step 4 — The Risk Inventory (45 min)

Now you do the work that justifies your role. The AI helps you generate the inventory, but you're the one deciding which risks matter.

### Prompt 4.1
> Based on everything in this notebook — CIM, model, my call notes, the sector research — give me the ten biggest risks to this credit. Order them from most material to least. For each one, give me: a one-sentence description, the evidence for it from the materials (with page or document references), and what mitigation the sponsor is currently offering (if any).

### Prompt 4.2
> Now I want you to be more aggressive. For each of the top five risks, tell me what the most skeptical PM at my firm would say about it. Not the polite version — the version where they've seen this play out badly three times in their career.

### Prompt 4.3
> What's missing from this risk list? What are the things I should be worried about that aren't in the materials at all because the sponsor wouldn't volunteer them?

### Prompt 4.4 — Your judgment
This step has no AI prompt. Take Copilot's output and do the human part: pick the three risks you're going to lead with in your memo. The criteria are: (a) materiality if it goes wrong, (b) how hard it is to mitigate, (c) how clearly your IC will care about it. Write your three picks down in the notebook with one sentence on why each one made the cut.

**Output:** Three lead risks, your reasoning, and a fuller risk inventory in the background. Save as *04 — Risk Lead*.

---

## Step 5 — The Management Meeting Question Set (20 min)

Before you go into management calls, you build the question list. This is one of the highest-leverage uses of AI in this entire workflow.

### Prompt 5.1
> Based on the three lead risks I just identified, build me a management meeting question set. For each risk, give me: (a) the framing question I'd open with, (b) the two or three follow-up questions I'd use to push if their first answer was generic, and (c) the one question I'd save for the end if I wanted to test whether they're being straight with me.

### Prompt 5.2
> Now add five more questions that aren't about risk — they're about the business itself. Things I'd want to understand to write a credible memo about why this is a good company, even if I weren't worried about anything.

**Output:** A focused question list, in your voice, ready to walk into a call with. Save as *05 — Management Q Set*.

---

## Step 6 — After the Management Call (30 min)

You ran the call. You took notes. (If you used Teams Copilot, you have transcribed notes already — even better.) Now you sit down with the AI and process what you heard.

### Prompt 6.1
> Here are my notes from the management call. Summarize the call in five bullets. What did they say about each of the three lead risks I went in worried about?

### Prompt 6.2
> Where did management give a sharp, specific, well-evidenced answer, and where did they fall back on platitudes? Be specific — tell me which answers felt strong and which felt soft.

### Prompt 6.3
> Did anything they said change my read on the deal? If so, what, and how would I update the risk list from earlier?

### Prompt 6.4
> Draft the three follow-up questions I should send to management or to the sponsor's deal team in the next 24 hours, based on the gaps in their answers.

**Output:** Updated risk read and a follow-up email ready to send. Save as *06 — Post-Mgmt Read*.

---

## Step 7 — The First Draft of the Memo (45 min)

This is the moment most people skip directly to and then complain that the AI's output is bad. By this point, you've done four hours of structured work and the notebook is rich with context. The first draft is going to be dramatically better than what you'd get from a cold prompt.

### Prompt 7.1
> Using everything in this notebook — the deal description, the quant hunt, the stress test output, the risk lead, the management call notes — draft a first-pass IC memo. Use this structure:
>
> 1. **The deal in two sentences.**
> 2. **Why we like it.** Three bullets. Each bullet is one specific reason, not a generic adjective. No marketing language. No "compelling," no "differentiated."
> 3. **The three biggest risks.** For each: the risk, the evidence, and how we get comfortable.
> 4. **What we're still trying to figure out.** Two or three open questions that will be resolved in confirmatory diligence.
> 5. **Recommendation.** One paragraph. Direct.
>
> Match my firm's tone: direct, analytical, no hedging language, no corporate adjectives. If my notes contain a phrase the sponsor used that sounds like marketing, do not put it in the memo.

### Prompt 7.2
> Now critique the draft you just wrote. Where is it weakest? Where am I going to get pushed back on if I send this to my PM tomorrow morning?

### Prompt 7.3
> Rewrite the two weakest sections based on your own critique.

**Output:** A first draft you can edit, not start from. Save it.

---

## Step 8 — Your Edit (60 min)

The AI gave you 60% of the way there. The remaining 40% is the part that makes the memo *yours* and the part that demonstrates why you have your job.

What you do in this hour:

1. **Read the full draft out loud.** If a sentence sounds like it could have been written by anyone, rewrite it.
2. **Check every quantitative claim against the source.** Trust no number you haven't personally verified at least once.
3. **Add the one or two things only you know.** A texture from the management call that isn't in the notes. A read on the sponsor that comes from a side conversation. The thing your PM mentioned offhandedly that turned out to matter. This is your value-add.
4. **Cut anything that hedges.** Words like "potentially," "may," "could be," "we believe" — kill them. Be willing to be wrong on the record.
5. **Run one final adversarial pass.** Paste the edited memo into a new conversation and ask: *"You are the most skeptical PM at my firm. Read this and tell me the three questions you'd ask me first."* Add the answers to your draft if they're not already there.

**Output:** A memo that is presentable to your IC tomorrow, that you can defend line by line, and that you produced in roughly four hours of focused work instead of a week.

---

## What You Just Did

You used the AI as a reasoning partner across every step of a real deal: synthesis, quant extraction, stress testing, risk inventory, management prep, post-meeting processing, and drafting. You did not let it write your memo for you. You let it absorb everything around the deal so that when *you* wrote the memo, you had every piece of context at your fingertips.

The first time you do this it'll feel slow and weird. The second time it'll feel obvious. The third time it'll feel like the way you were always supposed to work, and you'll never go back.

When you're ready, the next workflow ([when it's added](.)) will walk through the quarterly portfolio monitoring sequence — different shape, same mindset.
