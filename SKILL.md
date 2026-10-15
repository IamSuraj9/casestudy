---
name: case-study-writer
description: Frame, write, self-review and iterate a product design case study for Suraj's portfolio, one project at a time. Use when drafting or restructuring a case study (Eventory Vendor app V2, Eventory booking journey, Ninur, Yojana, or a new project), when Suraj shares project notes or screens for a case study, or when he asks to review, critique or improve a case study draft. Also use for the page layout (sticky chapter rail, 7-9 chapters, headline rules), motion budget (Motion Load Score), voice cleanup, interviewing from Wispr Flow notes, and Figma structure builds.
---

# Case study writer

Suraj is a product designer who also codes (IIT Guwahati, UXD @ Eventory). His portfolio headline is "Hey, I'm Suraj. I create experiences": calm, professional, with personality kept in the details. A case study has to read like **his** story about **one** project. It is not a generic template filled in.

This skill is a living document. After each case study round, add what was learned to `## 9. Extended references (layout, motion, voice)

Load these when the task touches layout, motion or voice. They extend this file; on any conflict this file wins.

| Task | Read |
|---|---|
| Page layout, rail/column/margin grid, 7-9 chapters, headline rules, building the structure in Figma | `references/layout-hybrid.md` |
| How much animation or interactivity, auditing motion, James Chugh keep/adapt/skip | `references/motion-system.md` (run `node scripts/motion-audit.mjs <dir> --mode case --chapters 8`) |
| Polishing spoken/dictated phrasing, hand-off lines between chapters, interviewing from Wispr Flow first | `references/voice-and-story.md` |
| See the layout and tune motion live | open `demo/layout-demo.html` |
| Patterns from studied case studies | `references/exemplars.md` |

Defaults: 7-9 chapters. Sentence-style headlines that tell the whole story alone. Write headlines first. One interactive proof (rule in section 3). Target Motion Load Score 12-17 per case study (green is up to 18). Respect `prefers-reduced-motion`.

---

## Learnings log` at the bottom, and change the rules above it when a learning overturns one.

References studied: see `references/exemplars.md`. Re-read it when a draft feels flat.

---

## 1. Core beliefs (from the research)

1. **A case study is a story, not a process report.** The engine is a loop: **Hook → And → But → Therefore → But → Therefore … → Outcome → Reflection.** Each beat connects to the next with "but" or "therefore", never "and then". Suraj's own framing is "hook → solution → but → solution".
2. **Every "but" must be a real obstacle:** an edge case, a build constraint, a test result, a stakeholder rejection, a business shift, an idea that failed. Invented drama is worse than none.
3. **The reframe beat shows product thinking.** "The obvious fix was X. No. The real question was Y." (Eemon: "Show progress on the taskbar. NO. How do you help users trust work they cannot see?")
4. **Honesty sells.** Scoped down, shelved, on hold, a metric that dipped, "why it failed", "what I'd do differently". Never fabricate or inflate a number. Unshipped or unmeasured work shows a **GOAL** (labelled as one) plus its status.
5. **Layered reading.** Someone who reads only the title, meta strip, headings, captions and TL;DR must understand the problem, Suraj's role, the key decision and the outcome. The body is for the hiring manager who wants depth.
6. **Length follows depth.** Soft ceiling about 2,000 words. Rough guide: deep live product 1,500–2,000 · medium 1,200–1,500 · concept 800–1,000. If a draft needs more, split it or move detail into collapsible "Thinking" notes. (Suraj rejected the field guide's 800-word cap.)
7. **Show, then tell.** Visuals carry the story and text explains the decision. Every image gets a caption that states the takeaway, not "Screen 3".

---

## 2. Project intake (do this before writing a single line)

Ask Suraj only for what's missing. Pull from his notes, Figma screens and memory first.

| Need | Question to answer |
|---|---|
| **Human moment** | What were users doing badly or painfully before? Find the "cart-hopping" moment (Dharmesh): one concrete, visual behaviour. |
| **Why this project** | What did it cost the business? Support load, drop-offs, ops time, returns (Vaibhav S: support queries → "saved 300 crib returns"). |
| **Role and team** | Suraj's exact role. Names and roles of collaborators, timeline. |
| **Status** | Live / Live · iterating / Shipped / On hold / Concept. |
| **Outcome or goal** | A real metric, a qualitative signal (adoption, team feedback, fewer calls), or a GOAL with its status. |
| **The buts** | Ideas that failed and why, constraints (tech, time, business), edge cases, test surprises, pushback. |
| **The therefores** | The decision made after each but, and what was traded off. |
| **Proof assets** | Final screens, early versions, flows, sketches, data, quotes. Which screens can be public (Eventory: some, not all). |
| **Reflection** | What it changed in how Suraj thinks, or what he'd do differently. |

If there is no "but" material, the case study is not ready. Go back and dig before writing.

---

## 3. Framing the story for this specific project

1. **Write the one-line arc first:** "[Users] were [human moment], **but** [blocker], **so** I [key decision], **and now** [outcome/status]." If this line is weak, nothing else will save the case study.
2. **Map the spine** as a numbered beat list before prose. Mark each beat H / A / B / R / T / O / L (hook, and, but, reframe, therefore, outcome, reflection). There must be at least 2 B→T pairs and 1 R.
3. **Pick the title**, as an outcome or a goal:
   - "How we [outcome]" (Vaibhav S: "How we saved 300 crib returns")
   - "Designing [what] for [whom] to [goal]" (Rahul)
   - A nickname plus company (James: "The Coupon Hunter · EazyDiner")
4. **Choose one interactive proof** for the code build (James): a before/after toggle, a try-it input, a funnel that follows N users. One per study, never more.
5. **Write the TL;DR in 5 lines.** If it can't be done, the story isn't clear yet. Fix the arc first.

---

## 4. Page structure (the default; adapt per project)

1. **Header:** company chip (logo + one-line context) · outcome/goal title, with highlighter on the outcome words · one-line summary · hero visual.
2. **Meta strip as a Figma properties panel:** Role · Team · Timeline · Status · Platform, plus the headline metric or GOAL.
3. **TL;DR:** a sticky pill "TL;DR · 30 sec" that opens 5 lines: Problem · My role · Key decision · Outcome/status · Jump links.
4. **Hook:** the human moment, told concretely, with an image or analogy.
5. **And (context):** the product, users, constraints. Keep it short.
6. **Why this project:** the business cost.
7. **But → Reframe:** the problem, then the real question.
8. **Therefore / But loops:** decisions, failed ideas ("Why it failed" with ✕ chips), constraints, edge cases. Each loop is one section with a story-telling heading.
9. **The solution:** final screens grouped by flow, annotated with stickies.
10. **Outcome:** proof that pays off the title. A metric, a signal, or a GOAL plus status. Never leave the hook's promise unproven (Vaibhav S's gap).
11. **Reflection:** one or two lines, "what I learned" or "what I'd do differently".
12. **Next:** a link to the next project, plus email (`mailto:`).

Navigation: a sticky **layers-panel** table of contents on the left, with the current section shown as the selected layer.

---

## 5. Writing rules (Suraj's voice)

- **First person, plain words, short sentences.** He talks like a person, not a deck: "I debug experiences", "that's kind of the whole job".
- **Headings tell the story.** "We were stuck. Customers got us out." beats "User research". Read the headings alone: the arc must hold.
- One idea per paragraph, 2–4 sentences max.
- **Numbers:** exact, sourced, and labelled (actual / projected / goal). Before → after where possible.
- **Captions** state the takeaway: "The bill amount and the best coupon, on one screen" rather than "Final UI".
- **Name collaborators** and credit the team at the end (Aditya).
- **Humour:** at most one light moment per section ("IDEA #Nth 🎉"). Never at the user's expense.
- **Banned:** lorem ipsum, "seamless", "delightful", "user-centric", "leveraged", a passive-voice role ("was involved in"), and unexplained jargon.
- **The design-engineer edge:** where true, show that Suraj prototyped in code, worked with devs on feasibility or ran the handoff (James's 3-hour handoff). That's his differentiator.

---

## 5b. Reading craft (from great long-form writers)

Sources: Dan Abramov (overreacted, "A Complete Guide to useEffect"), Josh W. Comeau (interactive CSS guides), Bartosz Ciechanowski (interactive explainers), Paul Graham (essays), Maggie Appleton (digital garden), Nate Parrott, a UX Collective essay on storytelling, and the Designare Field Guide. A case study is long-form reading, so the same craft applies.

**Content strategy**
- **Open on the reader's confusion or a hook, not a thesis.** Dan lists the questions you've been asking and then promises answers. Josh opens with a demo that looks like wizardry.
- **One big promise per case study.** What the reader will understand by the end ("how I got vendors from enquiry to booking without a phone call"). Paul Graham: one question, answered end to end.
- **State the cost upfront.** Read time, plus "best on desktop" if there are interactive bits. Dan warns his piece is "like a mini-book" and gives a TL;DR.
- **Admit your own mistakes.** Josh: "I didn't understand flex-basis for a long time." Nate explains why he abandoned his project. This is the same muscle as "Why it failed".
- **End with a next step:** the next case study, a "walk me through it" email CTA, or the live product or Figma file.

**Structure that scans**
- **Headings carry the story alone.** The UX Collective essay recommends this explicitly.
- **Paragraphs of 2–4 sentences.** A one-line paragraph is allowed for emphasis, at most once per section.
- **Bold is the skim layer.** Bold only the sentence you'd keep if the reader read nothing else, about one per paragraph and never decoratively. Reading only the bold should give the argument.
- **A table of contents or chapter list** (our layers panel), plus **metadata up top:** read time · last updated · status.
- **A recurring rhythm.** Pick one per case study and repeat it. Ciechanowski: explain → demo → explain. Dan: question → "spoilers ahead" → answer. Ours: But → Thinking bubble → Therefore → visual.
- **Interleave text and visuals.** Never more than about 3 paragraphs without a visual, quote or callout.

**Callouts and extras (use sparingly; each one has a job)**
- **Side-note callouts** for tangents that would break the thread. Josh's "Proceed with caution" and "Not exactly the same" are examples. Ours are a Figma comment bubble or a sticky, labelled e.g. "Thinking", "Constraint", "Not shipped", "Dev note".
- **Big numbers and pull quotes.** Stats as large numerals; a user or stakeholder quote gets its own block.
- **"Guess first" dividers:** before a reveal (the final design, the twist), invite the reader to guess what you'd do. Dan's "spoilers ahead".
- **Interactive widgets** embedded in the flow: sliders, toggles, try-it inputs. At most one per case study (Josh, Ciechanowski, James).
- **Maturity or status tags:** "Live", "Live · iterating", "On hold", "Concept", with a "last updated" date, like Maggie's evergreen and planted labels.
- **Footnotes** keep digressions out of the main text (Paul Graham). Use them for numbers, methodology and caveats.
- **Friendly personality:** a casual line or one emoji per section is fine ("Let's do this!"); never in place of substance.

**Pick a reading strategy per case study (don't mix all three):**
1. **Make the reader do something** (Josh, Ciechanowski): reading feels like play. Best when the core decision can be interacted with.
2. **Talk to the reader** (Dan, Maggie): a strong first-person voice. Suraj's default.
3. **Rhythm only** (Paul Graham): almost no formatting, readable through sentence rhythm. Rarely right for a visual case study, but use it for the reflection.

---

## 6. Visual language for case studies

Keep the site system: background #F2F4F8, mat blue #2C55A5 (CTA and accents), highlighter #FFD84D, ink #16140F. Headline in Artific Bold, UI in Geist / Geist Mono. **Max 3 font sizes per component** (cards use 12 / 16 / 40). One filled primary button per screen.

| Pattern | Our rendering |
|---|---|
| Thinking callouts (Rahul) | **Figma comment bubbles** with Suraj's avatar |
| Option verdicts | ✓ / ✕ chips plus a highlighted "This one won" line |
| Screen annotations (Vaibhav S) | **Figma sticky notes** beside mockups |
| Iteration boards | On the cutting-mat grid, with screens cropped large enough to read |
| Section nav | Layers panel |
| Summary card (James's bill, Rahul's team block) | Properties panel |
| Selection on key words | Blue selection box + size label (the hero motif) |

Personality lives in behaviour, copy and margins. Don't cover the work in texture or stickers.

---

## 7. Self-review loop (run on every draft, before showing Suraj)

Score each check **0 / 1 / 2** and quote the line or section that earned the score.

| # | Check | Pass when |
|---|---|---|
| 1 | One-line arc | It can be stated in one sentence, and it's specific to this project |
| 2 | Hook | It opens on a concrete human moment, not on the company or the process |
| 3 | And/But/Therefore | ≥2 B→T pairs, no "and then" chains, each "but" is real |
| 4 | Reframe | One clear "obvious fix → real question" beat |
| 5 | Failure shown | ≥1 rejected idea with why it failed |
| 6 | 30-sec layer | Title + meta + headings + captions + TL;DR alone tell the full story |
| 7 | Proof | The outcome/goal is labelled honestly and pays off the title |
| 8 | Role clarity | What Suraj did versus the team is unambiguous |
| 9 | Design-engineer signal | Code, prototyping or dev collaboration is visible where true |
| 10 | Captions | Every visual has a takeaway caption |
| 11 | Voice | Sounds like Suraj; no banned words; short sentences |
| 12 | Length vs depth | Within the depth band, with no section that doesn't earn its place |
| 13 | Reflection | It ends with a real learning, not "thanks for reading" |
| 14 | Honesty | No invented numbers, quotes or users; unknowns marked `TODO(Suraj)` |
| 15 | Skim layer | Reading only the bold sentences gives the argument; bold is never decorative |
| 16 | Promise, cost, next step | One big promise stated early, read time/status shown up top, a clear next step at the end |
| 17 | Rhythm and pacing | One recurring rhythm; ≤3 paragraphs without a visual, quote or callout; paragraphs of 2–4 sentences |

**Review output format:**
```
SCORE: x/34
ARC: <one line>
TOP 3 FIXES (highest impact first):
1. <problem> → <exact rewrite or move>
2. ...
3. ...
BEAT MAP: H A B R T B T O L  (mark missing beats)
OPEN QUESTIONS FOR SURAJ: <only facts I can't know>
```

**Loop:** draft → self-review → apply the top fixes → re-score. Stop when score ≥ 29/34 with no 0s, or after 3 rounds. Then show Suraj the draft, the score and the remaining open questions. Never present a first draft unreviewed.

**After Suraj's feedback:** apply it, then add a dated entry to `## Learnings log`. If the feedback contradicts a rule above, change the rule and note why.

---

## 8. Anti-patterns (seen in the references, avoid)

- A 3D or gimmick wrapper that makes work unreadable at rest (James's box).
- Showing the same projects 3 times in different formats.
- Huge boards shrunk until the text in screens is unreadable (Rahul).
- An outcome in the title that's never proven later (Vaibhav S).
- Every line styled as a heading, which gives flat hierarchy.
- Process theatre: personas, double diamonds or affinity maps that don't change a decision.
- A wall of text before the first visual.

---

## Learnings log

- **2026-10-15:** The 800-word cap was rejected and replaced by length-by-depth (soft ceiling 2,000) plus the layered 30-sec rule. Lesson: don't apply a single guide's rule as law; check with Suraj.
- **2026-10-15:** A TL;DR on every case study was confirmed by Suraj.
- **2026-10-15:** Suraj's storytelling thesis (hook → solution → but → solution) was confirmed against 7 top case studies.
- **2026-10-15:** Added the long-form reading craft from Suraj's research (Dan Abramov, Josh Comeau, Ciechanowski, Paul Graham, Maggie Appleton, Nate Parrott, UX Collective, the Field Guide) as §5b, plus rubric checks 15–17 (skim layer, promise/cost/next step, rhythm). Threshold is now 29/34.
- **2026-10-16:** Added hybrid layout (sticky rail, left-aligned column, right margin, 7-9 chapters), the Motion Load Score with audit script and live demo, voice cleanup rules (from Wispr Flow review recordings) and interview mode as references (§9). Open conflict resolved in favour of the existing rule: one interactive proof per case study.
