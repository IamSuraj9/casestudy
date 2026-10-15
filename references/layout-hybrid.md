# Hybrid layout and chapter system

Sticky chapter rail + left-aligned column + sparing right margin, 7-9 point-headline chapters. Built from James Chugh (EazyDiner), Rahul Nadkarni (Wonders), the UX Collective magazine essay and the AI Design Field Guide. Live wireframe: `demo/layout-demo.html`.

Repo rule check: the page-structure list in `SKILL.md` section 4 (12 blocks) is grouped into these 7-9 numbered chapters. Header, meta strip and TL;DR sit above chapter 1; Outcome, Reflection and Next fold into the last chapter and ending.

## The hybrid layout

Sources: James Chugh (story thread, numbered point-headlines, proof interactions), Rahul Nadkarni (contents list, Thinking blocks, constraints chapter, honest ending), UX Collective magazine essay (big numerals, pull quotes, rhythm), AI Design Field Guide (chapter list, reading time).

Desktop grid (>= 1180px): `220px rail | 700px column | 220px margin`, 48px gaps, max width 1320px, content left-aligned, never centered.

- **Rail (left, sticky, full height):** case-study label, title, read time and chapter count; numbered chapter list `01 The numbers`; active item has a 2px left bar; TL;DR link at the bottom. Progress is shown by a 3px top bar.
- **Column (center-left, 680-720px):** serif body at 19px/1.65, max 66ch lines. Sans only for UI, labels and captions.
- **Margin (right):** sparingly. One big numeral, one pull quote, or one "what I'd change" note per chapter, never all three. Skip it if nothing earns the space.
- **Below 1180px:** rail becomes a sticky horizontal pill strip (numbers only); margin content folds under the chapter body; one column, 20px gutters.
- **Hero block:** eyebrow (company, year) -> H1 stating the outcome -> 2-3 sentence lede -> fact strip (Role, Team, Timeline, Result) -> TL;DR anchor.
- **Ending:** results chapter, honest caveats and next steps, then "Got a minute for another story?" with the next case study link.

## Chapter system (hard rules)

- **7 to 9 chapters.** Fewer than 7 reads thin, more than 9 reads like a diary. If a draft has 10+, merge.
- Each chapter: eyebrow (`Chapter 3`) -> point-headline -> 2-3 short paragraphs (max ~120 words each) -> one visual -> optional Thinking block.
- **Thinking block** (use at decision points only, max 3 per case study): label, 2-4 bullets of pros and cons, then the call made.
- Required chapters: the problem with a number, the people/evidence, the real problem chosen, **constraints ("what it was not allowed to be")**, exploration/rounds, the key decision, handoff, results with caveats.
- One thread: pick a single recurring unit (e.g. "100 groups") and return to it every few chapters.
- Every claim of impact has a number, a baseline and a timeframe. If it lacks one, mark `[X]` and flag it.

### Headline rules

1. A headline states the point, not the topic. Bad: "Research". Good: "I read what they were telling support."
2. Read the headlines alone, in order. They must tell the whole story. Write them first, before any body copy.
3. Sentence case, 4 to 10 words, no colon subtitles, no questions unless the chapter answers it.
4. First person, past tense, concrete nouns. Cut "leveraged", "seamless", "user-centric".
5. No two adjacent headlines start with the same word.
6. A number in a headline must also appear, sourced, in the body.

## Figma workflow

Can do: (a) a rough structure from the Figma file plus case-study text, (b) a build in Figma via the Figma MCP.

Needed from the user: Figma file URL, the case-study text (or notes), which frame is the portfolio style reference, real metrics.

Steps:
1. Read the file: `get_metadata`, `get_design_context`, `get_screenshot`; `search_design_system` for tokens/components.
2. Load `figma-use` (mandatory before `use_figma`) and `figma-generate-design` for page builds.
3. Output first as text: headline list (7-9), chapter -> visual mapping, margin items, Thinking-block slots, motion plan with MLS estimate. Get a go-ahead.
4. Build one desktop frame (1440 wide: 220 rail / 700 column / 220 margin) and one mobile frame (390). Reuse the user's styles; do not invent new tokens.
5. Annotate interactive elements with a note naming the motion type and points, so the code build matches.
