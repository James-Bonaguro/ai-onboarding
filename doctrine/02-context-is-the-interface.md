# 02 — Context Is the Interface

## Core claim

For serious work, context quality matters more than prompt cleverness.
The model does not see your intent unless you externalize it.
Your context is the interface.

## Why this matters

In professional settings, most errors are not from “bad language generation.”
They come from missing or ambiguous context:

- unclear objective,
- absent definitions,
- unspecified risk tolerance,
- missing source hierarchy,
- no format constraints.

The model then improvises.
Improvisation is expensive when decisions carry capital risk.

## Context stack (minimum viable)

Before substantive tasks, supply five layers:

1. **Role and lens** — who the model should act as and what lens to prioritize.
2. **Objective** — what decision or deliverable this output must support.
3. **Inputs** — facts, documents, assumptions, and known gaps.
4. **Constraints** — style, structure, prohibited shortcuts, confidence standards.
5. **Evaluation criteria** — what “good” looks like and how it will be judged.

If these are weak, output variance rises immediately.

## Source discipline

Tell the model how to handle evidence:

- distinguish source-backed claims vs. model inference,
- mark low-confidence areas explicitly,
- avoid invented precision,
- recommend verification steps where evidence is thin.

This turns responses from “smooth narrative” into auditable analysis.

## Implementation heuristic

When quality drops, do not begin by rewriting wording.
Begin by asking: **Which context layer is missing?**

Fixing context is usually higher ROI than prompt tinkering.

## Bottom line

Prompts are requests.
Context is control.
If you want reliable, inspection-ready output, engineer context first.
