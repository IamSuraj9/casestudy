# Case study type scale (v1, 2026-10-16)

Fonts: **Artific Trial Bold** (headings and display only, per the foundry licence) · **Geist** (body, UI) · **Geist Mono** (labels). All sizes in rem (root 16px), so the page respects the reader's browser text size.

## The palette (up to 7 sizes)

| Token | Desktop | Mobile | Font | Line height | Tracking | Roles |
|---|---|---|---|---|---|---|
| `title` | 4rem · 64 | 2.5rem · 40 | Artific Bold | 1.0 | −2.5% | Case study title (hero screen only) |
| `number` | 3rem · 48 | 2rem · 32 | Artific Bold | 1.0 | −2% | Big stats (rare) |
| `headline` | 2.5rem · 40 | 1.75rem · 28 | Artific Bold | 1.1 | −1.5% | Chapter headlines |
| `lede` | 1.5rem · 24 | 1.25rem · 20 | Geist Medium | 1.4 | 0 | Lede, pull quote (rare) |
| `body` | 1.25rem · 20 | 1rem · 16 | Geist Regular; skim sentences SemiBold | 1.6 | 0 | All reading text; ~66ch at 700px |
| `ui` | 1rem · 16 | 0.875rem · 14 | Geist Regular/Medium | 1.5 | 0 | Captions, chips, buttons, meta values |
| `label` | 0.75rem · 12 | 0.75rem · 12 | Geist Mono Medium, UPPERCASE | 1.3 | +6% | Eyebrows, meta labels, nav, sticky rail |

Big sizes shrink more on mobile, small sizes less, and nothing goes below 12.

## The viewport rule (Suraj's)

**Any single screen shows at most 3 font sizes.** The palette can have 7; a screen picks 3.

- Always-visible chrome (nav, sticky rail) uses `label` (12, Geist Mono). It feels like Figma's layers panel and permanently takes one slot.
- `body` (20) is on most screens, so it takes the second slot.
- **Each screen gets one free slot:** `headline` OR `ui` captions OR `number` OR `lede` OR `title` (hero).
- Layout habit that follows: open each chapter with headline + text; visuals with captions start on the next screen.
- Separate roles that share a size by **weight, font (mono vs sans), case and colour**, not by adding sizes.
- Accepted edge case: during a scroll transition two screens can overlap briefly (e.g. hero title and Chapter 1 headline). Design the static screens to 3; don't shrink type to fix transitions.

## Colour and contrast (WCAG, checked) · "tinted neutrals" v2 (2026-10-17)

All text colours share the background's hue (OKLCH hue ≈265) with chroma low enough to read as grey: they belong to #F2F4F8 without looking blue. Never pure grey (#4E4E4E-style) and never warm black (#16140F was hue 89, a mismatch).

| Token | Hex | OKLCH (L / C / H) | On #F2F4F8 | On white | Use |
|---|---|---|---|---|---|
| ink | #181D27 | 0.23 / 0.022 / 265 | 15.3 | 16.9 | Title, headlines, bold skim sentences, lede, meta values |
| body | #485060 | 0.43 / 0.028 / 265 | 7.4 | 8.1 | Body paragraphs |
| muted | #626977 | 0.52 / 0.024 / 265 | 5.0 | 5.5 | Captions, labels, meta keys. Never on the yellow highlighter |
| accent | #2C55A5 | 0.47 / 0.137 / 262 | 6.5 | 7.1 | Eyebrows, links, active rail item, numbers |

Chosen by Suraj ("softer" option). The crisper alternative was ink #15181F / body #424854 / muted #5B6272 (body contrast 8.3).

Hierarchy comes from size and weight, not colour. Text inside product screenshots keeps its own colours.

## Open
- Whether homepage project cards (12 / 16 / 40) switch to this scale. Undecided.
- Validate the viewport rule on the first real build (Ninur) and record the result in the SKILL learnings log.
