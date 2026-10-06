# Portfolio — Rayen Inoubli

Personal site of a software engineer / technical founder. Single page:
Header → Hero → About → Attoset feature → Selected work → Experience → Footer.

Design direction: minimal, editorial, architectural. Typography + whitespace + hairline borders do the work. **Less, but better.** No cards, gradients, glows, skill bars, logo walls, photos.

## Stack

- Next.js 16 (App Router), React 19, **plain JavaScript** (no TypeScript)
- CSS Modules per component + global tokens/utilities in `src/app/globals.css`
- No UI or animation libraries. No icon font — glyphs (`↗ ↓ ↑`) and inline SVG.
- One font: Archivo variable (`--font-sans`) via `next/font/google` in `layout.js`. Display = condensed cut via `--display-weight` + `--display-axes` (`"wdth" 66`)
- Path alias: `@/*` → `src/*`

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # run before claiming a change works
npm run lint
```

## Structure

```
src/app/layout.js        fonts, metadata, inline pre-paint theme script
src/app/page.js          composes sections (server component)
src/app/globals.css      tokens, section grid, .label/.link/.arrow, motion system
src/data/content.js      ALL copy: links, experiences, projects (href: null = TODO)
src/components/<name>/<Name>.js + .module.css
```

Client components: `theme-toggle/ThemeToggle.js`, `cursor/Cursor.js` (fine pointers only; opt in with `data-cursor="Label"` or `data-magnetic`). Everything else stays server-rendered.

## Conventions

- **Colors only via tokens**: `--bg`, `--text`, `--muted`, `--border`, `--accent`, `--surface`. Define new ones in both `:root` (light) and `[data-theme="dark"]`.
- Theme: `data-theme` on `<html>`, default dark, saved in `localStorage("theme")`, falls back to OS preference. Set before paint in `layout.js`.
- Sections: `<section id className="section container">` → `<div className="section-grid">` → `<SectionLabel>` badge (columns 1–3) + `.section-body` (4–12) or `.section-full`.
- Display type: Archivo condensed (`font-weight: var(--display-weight); font-variation-settings: var(--display-axes)`), uppercase for names/titles. Labels: `.label` (small uppercase, tracked, muted). No serif/mono — avoid stock "AI portfolio" pairings.
- Project images: 16:10 files in `public/projects/`, set `image` in `content.js`; `null` renders a placeholder frame.
- Radius: `var(--radius)` on media frames and panels only; text and rules stay square.
- Motion (globals.css): `.enter` (load, `--delay`), `.reveal` (scroll-in), `.parallax` (`--speed` px), `.draw-rule` (hairline draws in); `ScrollFillText` for word-by-word fill. CSS scroll-driven animations only — no scroll listeners. Reveal animates `transform`, parallax animates `translate`: never both on one element.
- All motion inside `prefers-reduced-motion: no-preference`; hover inside `(hover: hover) and (pointer: fine)`.
- Breakpoints: 900px (layout collapses to one column), 768px (parallax scaled down), 600px (header trims).
- Never invent content or URLs. Missing link → `null` + `// TODO` in `content.js`; components hide the link.

## Skills

`.claude/skills/`: `frontend-design`, `new-section`, `ui-audit`, `motion`.
