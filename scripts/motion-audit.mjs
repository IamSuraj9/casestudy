#!/usr/bin/env node
/**
 * motion-audit.mjs: static estimate of the Motion Load Score (MLS) for a portfolio codebase.
 *
 * Usage:
 *   node motion-audit.mjs <dir> [--mode case|home] [--chapters 8] [--json]
 *
 * It scans source files for motion patterns, caps repeated hits (a reused reveal
 * component should not count 30 times), applies the weights from SKILL.md and prints a
 * report. It is a HEURISTIC: always review the inventory by hand and add
 * data-motion="interactive|reveal|progress|parallax|loop|media|cursor|audio|scene"
 * attributes to anything the patterns cannot see.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const args = process.argv.slice(2);
const flagsWithValue = new Set(['--mode', '--chapters']);
const positional = args.filter((a, i) => !a.startsWith('--') && !flagsWithValue.has(args[i - 1]));
const dir = positional[0] ?? '.';
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const mode = opt('--mode', 'case');
const chapters = Math.max(1, Number(opt('--chapters', 8)) || 8);
const asJson = args.includes('--json');

const EXT = new Set(['.html', '.css', '.scss', '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.astro', '.mdx']);
const SKIP = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.output', 'coverage', '.vercel', '.turbo']);

function walk(d, out = []) {
  for (const name of readdirSync(d)) {
    if (SKIP.has(name)) continue;
    const p = join(d, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (EXT.has(extname(name))) out.push(p);
  }
  return out;
}

// weight = base points, cap = max occurrences counted, purpose: Explain | Prove | Guide | Delight
const RULES = [
  { id: 'hover', label: 'Hover/press feedback', w: 0.5, cap: 2, purpose: 'Guide', re: /transition\s*:/g },
  { id: 'reveal', label: 'Reveal on scroll', w: 1, cap: 3, purpose: 'Guide', re: /IntersectionObserver|whileInView|useInView|data-aos|data-motion=["']reveal/g },
  { id: 'sticky', label: 'Sticky rail / progress', w: 1, cap: 2, purpose: 'Guide', re: /position\s*:\s*sticky|scrollspy|data-motion=["']progress/g },
  { id: 'interactive', label: 'Interactive proof widget', w: 2, cap: 3, purpose: 'Prove', re: /data-motion=["']interactive/g },
  { id: 'scrolllinked', label: 'Scroll-linked / parallax', w: 3, cap: 4, purpose: 'Delight', re: /useScroll|useTransform|ScrollTrigger|animation-timeline|scroll-timeline|data-motion=["']parallax/g },
  { id: 'loops', label: 'Looping animation', w: 2, cap: 3, purpose: 'Delight', re: /animation[^;{}]*infinite|repeat\s*:\s*(-1|Infinity)|data-motion=["']loop/g },
  { id: 'media', label: 'Autoplay video / Lottie / Rive', w: 2, cap: 3, purpose: 'Delight', re: /<video[^>]*(autoplay|loop)|lottie|@rive-app|rive-react|data-motion=["']media/gi },
  { id: 'cursor', label: 'Cursor effects', w: 4, cap: 2, purpose: 'Delight', re: /mousemove|pointermove|data-motion=["']cursor/g },
  { id: 'audio', label: 'Sound / music', w: 4, cap: 1, purpose: 'Delight', re: /<audio|new Howl\(|new Audio\(|data-motion=["']audio/g },
  { id: 'scene', label: 'Full-page scene / canvas / WebGL', w: 6, cap: 1, purpose: 'Delight', re: /<canvas|from\s+['"]three['"]|THREE\.|new THREE|webgl|pixi\.js|data-motion=["']scene/gi },
];

const files = walk(dir);
const counts = Object.fromEntries(RULES.map((r) => [r.id, { occ: 0, files: new Set() }]));
let reducedMotion = false;

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  if (/prefers-reduced-motion/.test(text)) reducedMotion = true;
  for (const r of RULES) {
    const m = text.match(r.re);
    if (m) {
      counts[r.id].occ += m.length;
      counts[r.id].files.add(relative(dir, f));
    }
  }
}

let total = 0;
let delight = 0;
const rows = RULES.map((r) => {
  const c = counts[r.id];
  const counted = Math.min(c.occ, r.cap);
  const points = counted * r.w * (r.purpose === 'Delight' ? 1.5 : 1);
  total += points;
  if (r.purpose === 'Delight') delight += points;
  return { id: r.id, label: r.label, purpose: r.purpose, weight: r.w, found: c.occ, counted, points, files: [...c.files].slice(0, 3) };
});

const limits = mode === 'home' ? { green: 22, amber: 32 } : { green: 18, amber: 26 };
const perChapter = total / chapters;
const delightShare = total > 0 ? delight / total : 0;
let rating = 'GREEN';
if (total > limits.amber) rating = 'RED';
else if (total > limits.green) rating = 'AMBER';

const warnings = [];
if (!reducedMotion) warnings.push('No prefers-reduced-motion handling found. Required before shipping.');
if (perChapter > 2.5) warnings.push(`Average ${perChapter.toFixed(1)} points per chapter exceeds 2.5.`);
if (delightShare > 0.25) warnings.push(`Delight motion is ${(delightShare * 100).toFixed(0)}% of the score; cap is 25%.`);
if (counts.interactive.occ > 3) warnings.push('More than 3 interactive moments; hard cap is 3 per case study.');
if (counts.scene.occ > 0 && mode === 'case') warnings.push('Full-page scene found inside a case study; reserve scenes for the homepage.');
if (total < 6 && mode === 'case') warnings.push('Very low score: the page may read as flat. Consider one proof interaction.');

const result = { dir, mode, chapters, filesScanned: files.length, total: Number(total.toFixed(1)), perChapter: Number(perChapter.toFixed(2)), delightShare: Number(delightShare.toFixed(2)), rating, limits, reducedMotion, rows, warnings };

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`# Motion audit: ${dir}`);
  console.log(`Mode: ${mode} | chapters: ${chapters} | files scanned: ${files.length}\n`);
  console.log('| Pattern | Purpose | Found | Counted | Points | Example files |');
  console.log('| --- | --- | ---: | ---: | ---: | --- |');
  for (const r of rows) console.log(`| ${r.label} | ${r.purpose} | ${r.found} | ${r.counted} | ${r.points.toFixed(1)} | ${r.files.join(', ') || '-'} |`);
  console.log(`\nMLS: ${result.total} (${rating}; green <= ${limits.green}, amber <= ${limits.amber})`);
  console.log(`Per chapter: ${result.perChapter} | Delight share: ${(delightShare * 100).toFixed(0)}% | reduced-motion: ${reducedMotion ? 'yes' : 'NO'}`);
  if (warnings.length) console.log('\nWarnings:\n' + warnings.map((w) => `- ${w}`).join('\n'));
  console.log('\nHeuristic only. Review the inventory by hand and annotate with data-motion attributes.');
}
