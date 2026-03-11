# Examples: Before vs. After

## Why This Matters

Every example below shows the same person asking the same question. The only difference is whether their AI was configured using the setup guide or not.

---

## Example 1: Summarizing a Deal

### Before (default AI):

**You:** "Summarize this CIM for me."

**AI:** "This Confidential Information Memorandum presents an investment opportunity in a mid-market company. The company operates in the healthcare services sector and has demonstrated consistent revenue growth over the past five years. Key highlights include strong EBITDA margins, a diversified customer base, and experienced management team. The company is seeking financing to support its growth strategy..."

*Generic. Could describe literally any company. You'd have to redo the whole thing.*

### After (configured AI):

**You:** "Summarize this CIM for me."

**AI:** "This is a $45M revenue healthcare staffing company, PE-backed by [Sponsor] since 2022. They're seeking a $120M first lien term loan to refinance existing debt and fund a tuck-in acquisition.

Three things that matter for your review:
1. **Revenue concentration** — Top 3 hospital systems represent 62% of revenue. If any one of them shifts to an in-house model, you lose 20%+ overnight.
2. **EBITDA adjustments** — $8M in add-backs on a $14M base. That's 57% of adjusted EBITDA coming from 'run-rate synergies' and 'one-time integration costs.' Your committee will push hard on this.
3. **Cash flow** — Capex-light business, but working capital swings are significant due to 60-90 day collection cycles from hospital systems. DSC looks fine on paper but tightens fast in a slowdown.

Want me to build out the risk section for your memo, or do you want to dig into the adjustments first?"

*It knows your role, your firm's standards, and what you'll actually get asked about. It's already thinking about your next step.*

---

## Example 2: Writing an Email

### Before (default AI):

**You:** "Write a follow-up email to a potential client."

**AI:** "Subject: Following Up on Our Recent Conversation

Dear [Name],

I hope this email finds you well. I wanted to follow up on our recent conversation regarding potential collaboration opportunities. I believe there are several synergies between our organizations that could be mutually beneficial..."

*Straight to the trash folder. Nobody reads this.*

### After (configured AI):

**You:** "Write a follow-up email to the CFO at the healthcare company we met last Tuesday. He was interested but said he needs to talk to his board first."

**AI:** "Subject: Quick follow-up — next steps from Tuesday

Hi [Name],

Good meeting you on Tuesday. Wanted to keep this simple — you mentioned the board conversation was coming up. If it would be helpful, I can put together a one-page summary of the key terms we discussed that you could share with them. Sometimes that makes the internal conversation easier.

Either way, let me know how the board discussion goes. Happy to adjust anything based on their feedback.

Best,
[Your name]"

*Short. Useful. Gives him something to work with. Doesn't sound like a robot wrote it.*

---

## Example 3: Stress-Testing Your Own Work

### Before (default AI):

**You:** "I think this company's margins are sustainable. What do you think?"

**AI:** "That's a reasonable assessment. The company has demonstrated consistent margin performance over the past several years, which suggests sustainability. Additionally, their market position and operational efficiency support the view that margins can be maintained going forward."

*This is worthless. It just agreed with you.*

### After (configured AI):

**You:** "I think this company's margins are sustainable. What do you think?"

**AI:** "I'd push back on that. Three things bother me:

1. **Labor costs** — 68% of COGS is labor. They're in a market with 3.2% unemployment. Wage pressure is real, and they have no pricing power to pass it through because their top 3 clients are all on fixed-rate contracts through 2027.

2. **The 2024 margin expansion** — margins jumped 300bps in one year. That tracks to a one-time contract win, not an operational improvement. If you're underwriting to the trailing twelve months, you're underwriting to the peak.

3. **The add-backs again** — if you strip out the 'non-recurring' costs that have recurred three years in a row, normalized margins are closer to 16%, not 20%.

What margin are you underwriting to in your base case? I can stress it against the covenant package if you share the leverage calc."

*It found the holes. That's what you need before you walk into committee.*

---

## Example 4: Learning Something New

### Before (default AI):

**You:** "Explain covenant-lite structures to me."

**AI:** "Covenant-lite, or 'cov-lite,' refers to loan agreements that lack traditional maintenance covenants. Instead of requiring the borrower to maintain certain financial ratios on an ongoing basis, cov-lite loans typically only include incurrence covenants that are tested when the borrower takes a specific action, such as issuing additional debt..."

*A textbook answer. Fine if you're studying for an exam. Not useful if you're reviewing a live deal.*

### After (configured AI):

**You:** "Explain covenant-lite structures to me."

**AI:** "In your world, cov-lite means you're lending money with fewer tripwires.

**Normal loan:** Borrower has to prove every quarter that their leverage is below X and their cash flow coverage is above Y. If they miss, you have a seat at the table to renegotiate terms or accelerate the loan.

**Cov-lite loan:** Those quarterly tests don't exist. The borrower only gets tested when they try to do something — take on more debt, make a big acquisition, pay a dividend. If they're just slowly deteriorating, you don't find out until it's too late.

**Why it matters for you:** If you're reviewing a deal with cov-lite terms, your downside protection is weaker. You're betting on the business performing as projected with fewer off-ramps if it doesn't. Your IC will want to know why you're comfortable with that.

**The question to ask:** What's your early warning system if this deal starts underperforming? Because the covenant package won't tell you."

*Same concept, but framed for your actual job and the decisions you actually make.*

---

## The Pattern

Notice what's the same across every example:

1. The configured AI knows your context — so it skips the generic stuff
2. It writes for your actual audience — not for a textbook
3. It challenges your thinking — instead of validating it
4. It suggests next steps — because it knows what your workflow looks like

This is what the five rules and the setup create. Not better prompts. Better infrastructure.
