---
name: ui-audit
description: Audit frontend components for accessibility, responsive layout, dark-mode correctness, semantics, and performance. Use when the user asks to review/audit/check UI, before shipping a visual change, or after the frontend-design skill finishes.
---

# UI Audit

Scope: files user names, else changed files (`git diff --name-only`), else all of `src/components/` + `src/app/`.

Read each `.js` + matching `.module.css`. Report findings as `file:line — problem — fix`, grouped by severity (Blocker / Should fix / Nice). Offer to apply fixes; don't silently rewrite.

## Checklist

### Accessibility
- [ ] One `<h1>` on page (Hero). Sections use `<h2>` (SectionLabel), entries `<h3>`.
- [ ] Landmarks: `<header>`, `<nav aria-label>`, `<main>`, `<footer>`.
- [ ] Icon-only controls have `aria-label`; decorative glyphs (`↗`) have `aria-hidden="true"`.
- [ ] Theme toggle is a `<button>` (not div/a) with label reflecting state.
- [ ] `:focus-visible` style present on all interactive elements; no `outline: none` without replacement.
- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for ≥24px/19px bold) in **both** themes.
- [ ] Touch targets ≥ 44×44px on mobile.
- [ ] Animations respect `prefers-reduced-motion`.
- [ ] Images have meaningful `alt` (or `alt=""` if decorative).

### Theming
- [ ] No hardcoded colors (`#xxx`, `rgb(`, named colors) in `.module.css` — grep: `grep -nE "#[0-9a-fA-F]{3,8}|rgb\(" src/components`.
- [ ] Tokens added to both `:root` and `[data-theme="dark"]`.
- [ ] Pre-paint theme script in `layout.js` intact (no flash of wrong theme).

### Responsive
- [ ] Works at 320, 375, 768, 1024, 1440px. No horizontal scroll.
- [ ] No fixed `height` on text containers; use `min-height`.
- [ ] `vh` → `svh`/`dvh` for full-screen sections on mobile.
- [ ] Large fixed font sizes → `clamp()`.

### Semantics & React
- [ ] Lists use `<ul>/<li>`; list `.map()` keys stable, not index.
- [ ] `"use client"` only where needed.
- [ ] External links `rel="noopener noreferrer"`; `href: null` TODOs in `src/data/content.js` listed for the user.
- [ ] `metadata` in `layout.js` has title, description, openGraph.

### Performance
- [ ] `<img>` → `next/image`. Fonts only via `next/font`. No new client components or scroll listeners without reason.
- [ ] Animations use `transform`/`opacity` only; no `transition: all`.

Finish with `npm run lint` and `npm run build` output summary.
