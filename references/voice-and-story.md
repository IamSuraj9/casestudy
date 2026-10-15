# Voice, story flow and interview mode

Complements `SKILL.md` section 5 (writing rules) and section 3 (framing). Where they overlap, `SKILL.md` wins. This file adds: the spoken-to-polished cleanup, the three-act hand-off lines, and interviewing from Wispr Flow notes first.

## Voice: Suraj's tone, polished

Source of the tone: how Suraj actually talks and dictates (opinion first, plain words, honest about trade-offs), taken from his chats and, when connected, his Wispr Flow notes (see Interview mode below). The goal is his voice at its best, not a transcript of it. It must never read as gibberish, and it must sound like an experienced designer presenting to a room.

**Keep (this is him):**
- Opinion first, then the reason. "I chose X because Y."
- Plain, direct words. Short sentences. Active voice.
- Honest about doubt and trade-offs: "I wasn't sure. Here is how I tested it."
- Systems-first thinking: name the system, then the part. Engineering fluency shows in how decisions are explained (constraints, trade-offs, edge cases), which is his edge from Chemical Engineering plus design.
- Warm, confident, never salesy.

**Also his (seen in recorded design reviews, spoken Hinglish):**
- He reasons in steps ("step 1 gave us this, so step 2 should sit beside it") and in the user's view ("the customer sees a card, so the vendor should see the same card"). Show that chain on the page.
- He states his first plan, then why it changed. Reversals build credibility; keep them.
- Hierarchy and grouping are his lens: where does one thing start and end? Name the unit.

**Clean up (spoken habits that do not belong on the page):**
- Tag questions and thinking aloud: "Right?", "theek hai?", "ek second", "matlab", "you know", "I guess".
- Fillers and hedges: "very honestly", "pretty", "kind of", "I think", "definitely", "basically", "like".
- Run-on dictation, repeated words, half sentences.
- Hinglish or slang in public copy (fine in notes, not in the case study).
- Vague praise ("really good", "decent"). Replace with the specific thing and its result.

**Register by moment:**
| Moment | Register |
| --- | --- |
| Headlines | Confident, concrete, a claim. |
| Body | Calm, specific, first person, past tense. |
| Decisions | Direct: what I chose, what I gave up. |
| Setbacks | Plain and unembarrassed. One sentence of what went wrong, one of what changed. |
| Results | Numbers first, adjectives last. |

**Before / after (illustrative):**
- Spoken: "Very honestly, the filters were kind of confusing and users were definitely dropping off."
- Page: "People couldn't tell which filters applied, so they left. Engagement sat at 18%."

Never invent a number to sound polished. If a figure is missing, write `[X]` and ask.

## Story flow: one story, not points

- **One thread**, named in chapter 1 and revisited in at least 4 more chapters.
- **Hand-off line:** the last sentence of each chapter sets up the next ("That told me what they needed. It didn't tell me what to cut."). The next headline then answers it.
- **Three-act shape:** Chapters 1-3 the problem (what's broken, who, why it matters). Chapters 4-6 the work (constraints, exploration, the decision). Chapters 7-8/9 the proof (handoff, results, what's next).
- **Tension before relief:** each act needs one moment of doubt or trade-off before the answer.
- **Consistent "I" and "we":** "I" for decisions I owned, "we" for team work. Never claim team results as solo.
- **Read-aloud test:** read the case study out loud in 6-8 minutes as if presenting. Any chapter where you'd say "so, moving on" lacks a hand-off line. Fix it.
- **Presenting mode:** each chapter must survive as a single slide: headline + one visual + one sentence. Keep a 30-second, 2-minute and full version of the story.
- **No orphan points:** if a paragraph doesn't advance the thread, move it to the margin or cut it.

## Interview mode with Wispr Flow (ask before writing)

Privacy: recorded meetings include colleagues and clients. Use them for Suraj's decisions, reasons and phrasing only. Never paste verbatim colleague speech, names, client data or confidential figures into public copy; summarise, refer to people by role, and confirm any number before use.

When starting a new case study, or when the user pastes raw notes, **ask first, write second.** If Wispr Flow tools are available, search the user's scratchpad notes and recorded meetings for the project name and key terms, and use them as raw material and as voice samples (read only what's relevant; summarize back; never quote private or client-confidential details into public copy without asking).

Ask in batches of at most 4 questions, one batch at a time, plain wording, answerable by voice:

1. **The situation:** Who were the users, what was the company or product, what was your role, and how long did it run?
2. **The number:** What was the metric before? What was it after? How was it measured, and over what period?
3. **The problem:** What did people actually say or do that showed it was broken? Which evidence convinced you?
4. **The constraints:** What were you not allowed to do (tech, time, policy, legacy)? What did you reject and why?
5. **The turning point:** What was the one decision that mattered? What did you give up by choosing it?
6. **The doubt:** Where were you wrong, or unsure? What did you change your mind about?
7. **The team:** Who did you work with, and what did you own versus share?
8. **The handoff:** How did engineering get the why, not just the screens?
9. **The result and the honest part:** What shipped, what moved, and what didn't?
10. **The next step:** What would you do with another month?

Then:
- Draft the 7-9 headlines only. Get a yes.
- Write chapters one at a time in the voice rules above.
- Mark every missing fact `[X]`.
- Finish with the read-aloud test and a list of open questions.

If Wispr Flow is not connected, run the same questions in chat. The user can answer by dictation, so tolerate messy answers and clean them per the voice rules above.
