---
name: frontend-design
description: Design direction for building or redesigning UI in this portfolio — typography, color, layout, spacing, visual hierarchy, and polish. Use when creating new components/pages, restyling a section, or when the user asks to make something look better, more modern, more distinctive, or less generic.
---

# Frontend Design

Goal: distinctive, intentional UI. Avoid generic "AI template" look (centered hero + three cards + purple gradient).

## 1. Pick direction before code

State in one line before writing CSS: tone (e.g. editorial/minimal, brutalist, technical/grid, warm/playful), and one memorable signature element. This site's language: editorial/architectural — Archivo condensed uppercase display, tracked sans labels, no divider rules, 12-column grid, muted palette, no cards. Extend it — don't fight it unless asked to redesign.

## 2. Typography

- Display: Archivo condensed — `font-weight: var(--display-weight); font-variation-settings: var(--display-axes);`, uppercase, line-height 0.84–0.95. Never bold.
- Labels: `.label` utility (small uppercase, 0.14em tracking, muted).
- Body: `var(--font-sans)` (Archivo, normal width) 400, line-height 1.6, measure 60–75ch (`max-width: 65ch`).
- Use fluid sizes: `font-size: clamp(2.5rem, 8vw, 6rem)` instead of fixed rem + media query overrides.
- Clear scale (~1.25 ratio). Max 3–4 sizes per section.
- Muted text: `var(--muted)` — never hardcoded grey.

## 3. Color

- Only tokens from `src/app/globals.css`. New token → add to `:root` **and** `[data-theme="dark"]`.
- Accent sparingly: one primary action, links, active states. ≤10% of surface.
- Check contrast: body text ≥ 4.5:1, large text ≥ 3:1, in both themes.

## 4. Layout & spacing

- Spacing scale on 4/8px rhythm: 0.25, 0.5, 1, 1.5, 2, 3, 4, 6, 8rem.
- Sections: generous vertical padding (`clamp(4rem, 10vw, 8rem)`).
- Prefer CSS Grid for section layouts; `auto-fit, minmax(min(100%, 300px), 1fr)` for card grids — responsive without media queries.
- Break symmetry deliberately: offset headings, asymmetric columns (`2fr 1fr`), oversized numbers/labels.
- Avoid fixed heights (`height: 90vh` + big padding overflows on short screens) — use `min-height` / `min-block-size: 100svh`.

## 5. Detail & polish

- No divider lines/rules (user dislikes them); separate with whitespace. Hairline border only on Selected work cards.
- Hover: subtle translate (−2px) + border/shadow change, 150–250ms ease-out. Gate in `@media (hover: hover) and (pointer: fine)`.
- Visible `:focus-visible` outline on every interactive element.
- Glyph arrows (`↗`) get `aria-hidden="true"`; icon-only controls need `aria-label`.
- Images: `next/image` with explicit `width`/`height` or `fill` + `sizes`.

## 6. Verify

1. `npm run build` passes.
2. Check both themes (toggle in header).
3. Check 375px, 768px, 1280px widths.
4. Run `ui-audit` skill on touched components.
