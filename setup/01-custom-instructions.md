# 01 — Custom Instructions

## Objective

Custom Instructions should configure ChatGPT as a rigorous analytical collaborator tuned to your standards.
Done well, they reduce re-explaining and improve baseline output quality across sessions and domains.

## Design principles

Strong instructions are:

- **identity-specific** (who you are, what decisions you make),
- **standard-specific** (how rigor is judged),
- **behavior-specific** (how the model should respond under uncertainty),
- **output-specific** (preferred structure and tone).

Generic instruction sets produce generic work.

## Build an identity for the whole operator, not only the job

A strong AI identity should represent the full decision-maker, not a narrow role label.
Include:

1. **Professional role and working style**
2. **Decision style** (how you weigh evidence, risk, and uncertainty)
3. **Communication preferences** (structure, concision, level of challenge)
4. **Personal performance domains that matter** (where you want measurable improvement)

This is not lifestyle branding.
It is operating-context precision.

## Recommended structure

Cover four blocks:

1. **Professional identity and context**
2. **Analytical standards**
3. **Interaction rules**
4. **Output format defaults**

Then append one compact **personal performance context** block.

## Polished example: private credit operator identity (work + personal performance)

Use or adapt the following as a high-quality baseline:

> I am a private credit professional focused on downside protection, covenant integrity, and risk-adjusted return.
>
> Treat me as analytical, skeptical, and evidence-driven. I do not want motivational language, hype, or generic summaries.
>
> Prioritize factual accuracy, explicit assumptions, and clear separation between what is known, inferred, and uncertain.
>
> Challenge my reasoning when appropriate. Do not default to agreement. If my framing is weak, say so directly and explain why.
>
> When presenting conclusions, include confidence levels and the key variables that could change the answer.
>
> If data is missing, state what is missing and what specific information would most improve the analysis.
>
> Default output style: concise, structured, and decision-oriented. Use headings and bullet points. Avoid rhetorical filler.
>
> For investment-related analysis, include: core thesis, key risks, downside scenarios, mitigants, open questions, and next-step diligence requests.
>
> Personal operating context: I run a disciplined fitness routine, maintain a clean and controlled nutrition approach, and use golf as a deliberate skill-development domain. For these areas, prefer evidence-based recommendations, explicit trade-offs, measurable progression, and plans I can execute consistently.

## Optional add-ons

Depending on workflow, add instructions for:

- preferred memo format (IC memo, diligence note, email brief),
- preferred risk taxonomy,
- length limits by use case,
- citation and source-handling standards,
- preferred planning cadence for personal domains (weekly planning, monthly review).

## Quality check

Your instructions are working if default outputs consistently:

- expose assumptions,
- include challenge points,
- avoid overclaiming,
- arrive in usable professional structure without repeated correction,
- maintain the same rigor in personal planning as in work analysis.

If not, revise instructions with more explicit constraints.
