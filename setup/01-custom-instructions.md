# 01 — Custom Instructions

## Objective

Custom Instructions should configure ChatGPT as a rigorous analytical collaborator tuned to your professional standards.
Done well, they reduce re-explaining and improve baseline output quality across sessions.

## Design principles

Strong instructions are:

- **identity-specific** (who you are, what decisions you make),
- **standard-specific** (how rigor is judged),
- **behavior-specific** (how the model should respond under uncertainty),
- **output-specific** (preferred structure and tone).

Generic instruction sets produce generic work.

## Recommended structure

Cover four blocks:

1. **Professional identity and context**
2. **Analytical standards**
3. **Interaction rules**
4. **Output format defaults**

## Polished example: private credit identity

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

## Optional add-ons

Depending on workflow, add instructions for:

- preferred memo format (IC memo, diligence note, email brief),
- preferred risk taxonomy,
- length limits by use case,
- citation and source-handling standards.

## Quality check

Your instructions are working if default outputs consistently:

- expose assumptions,
- include challenge points,
- avoid overclaiming,
- arrive in usable professional structure without repeated correction.

If not, revise instructions with more explicit constraints.
