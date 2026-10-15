# Motion system (Motion Load Score)

Scores how much motion a page has, which of James Chugh's interactions to keep, and how much is too much. Audit script: `scripts/motion-audit.mjs`. Live meter: `demo/layout-demo.html` (Motion lab panel).

Repo rule check: `SKILL.md` section 3 says **one interactive proof per case study, never more.** That rule wins. Read "max 3 interactive moments" below as the ceiling Suraj could lift to; the default is 1.

## Motion system

Motion has four purposes: **Guide** (orient), **Explain** (show how something works), **Prove** (let the reader verify a claim), **Delight** (pure flavor). Guide, Explain and Prove earn their place. Delight is taxed.

### Motion Load Score (MLS)

Count each distinct motion element once per page (a reveal component used 30 times is one element, capped at 3 counted for heavier kinds, see script caps). Points:

| Element | Purpose | Base pts | Cap counted |
| --- | --- | ---: | ---: |
| Hover/press feedback | Guide | 0.5 | 2 |
| Reveal on scroll (once, no replay) | Guide | 1 | 3 |
| Sticky rail highlight / progress bar | Guide | 1 | 2 |
| Interactive proof widget (toggle, stepper, input) | Prove | 2 | 3 |
| Flip card / expandable explainer | Explain | 2 | 3 |
| Scroll-linked or parallax | Delight | 3 | 4 |
| Looping ambient animation | Delight | 2 | 3 |
| Autoplay video / Lottie / Rive | Delight | 2 | 3 |
| Cursor effects | Delight | 4 | 2 |
| Sound | Delight | 4 | 1 |
| Full-page scene / WebGL / canvas | Delight | 6 | 1 |

**Delight multiplier: x1.5.** Total = sum of points.

### Thresholds

| Page | GREEN | AMBER | RED |
| --- | --- | --- | --- |
| Case study | <= 18 | 19-26 | > 26 |
| Homepage | <= 22 | 23-32 | > 32 |

Also enforce:
- **<= 2.5 points per chapter** on average.
- **Delight <= 25%** of total.
- **Max 3 interactive moments per case study**, ideally one per major claim. At most **one signature moment** (the thing people remember).
- **Floor:** a case study under 6 points tends to read flat. Keep at least one proof interaction.
- `prefers-reduced-motion` is mandatory: disable parallax, loops, cursor, scenes, smooth scroll and reveals; keep state changes instant.
- Nothing may delay reading. No motion longer than 600ms for UI, no gated content, no scroll hijack.

### James Chugh feature triage (keep / adapt / skip)

| James feature | Verdict | Budget note |
| --- | --- | --- |
| Numbered chapters with point-headlines | **Keep** | Zero motion. Core. |
| Single thread (100 diners funnel) | **Keep** | Zero motion. |
| Flip-card summary (role/timeline/team/metrics) | **Adapt** | Replace with static fact strip; flip only if it carries extra content (2 pts). |
| Interactive proof (8-digit card input, before/after toggle) | **Keep 1-3** | Best motion per point. 2 pts each. |
| First-person short sentences | **Keep** | Voice, not motion. |
| On-page "How would you have solved it?" form | **Adapt** | Keep once, at the end, optional. |
| Story-scene hero | **Skip** in case studies; homepage only, once | 6 x 1.5 = 9 pts. |
| Notes wall | **Skip** unless it is the homepage signature | Heavy. |
| Day/night toggle | **Adapt** | Follow `prefers-color-scheme`; manual toggle is optional, 1 pt. |
| Keyboard shortcuts | **Adapt** | `j/k` for chapters is cheap and useful; document it. |
| Cursor effects, ambient loops | **Skip** | Delight tax; fails the 25% cap fast. |

### Recommended level for this portfolio

Default recommendation: **Medium-low. Target MLS 12-17 per case study, 18-22 on the homepage.**

Reasoning: the hybrid layout already supplies structure (rail, margin, numerals), so motion's job is to prove claims, not decorate. Suraj's strength is chemical-engineering rigor and design judgment; a restrained page signals that. Reserve exactly one signature interactive moment per case study and one on the homepage.

A sample compliant build: hover 1 + reveal 3 + rail/progress 2 + two proof widgets 4 + one flip 2 = 12, plus one parallax-free signature widget 2 = 14.

## Judging procedure (run when asked to "audit motion")

1. Run `node .claude/skills/portfolio-case-study/scripts/motion-audit.mjs <dir> --mode case --chapters <N>` (use `--mode home` for the homepage; add `--json` for machine output).
2. Review the table by hand. The script is a heuristic: it counts source patterns, so code for an effect that is toggled off still counts. Add `data-motion="interactive|reveal|progress|parallax|loop|media|cursor|audio|scene"` to elements the regexes cannot see.
3. Classify each element Guide/Explain/Prove/Delight. Remove Delight first, starting with the highest points.
4. Check the five rules: MLS band, per-chapter average, Delight share, interactive cap, reduced-motion.
5. Report in this format:
   - MLS and band
   - What stays (with purpose)
   - What goes or gets adapted (with points saved)
   - One signature moment recommended
   - Missing reduced-motion handling, if any
6. Never remove content to cut motion. Cut effects.
