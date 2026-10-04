---
name: motion
description: Add animations and micro-interactions — scroll reveals, hover effects, staggered entrances, page/section transitions — using CSS and lightweight React hooks, with reduced-motion support. Use when user asks for animation, transitions, "make it feel alive", scroll effects, or interactive polish.
---

# Motion

Principle: motion explains, doesn't decorate. One orchestrated entrance beats many scattered effects.

## Defaults

- Durations: micro 150–200ms, element 300–500ms, large/stagger 600–800ms total.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) for entrances; `ease-in-out` for toggles.
- Animate only `transform`, `opacity`, `filter`, `clip-path`. Never `transition: all`.
- Always wrap in reduced-motion guard.

Add to `globals.css` once:

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-base: 400ms;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Pattern: page-load stagger (pure CSS, server component OK)

```css
.item {
  opacity: 0;
  translate: 0 16px;
  animation: rise var(--dur-base) var(--ease-out) forwards;
  animation-delay: calc(var(--i, 0) * 80ms);
}
@keyframes rise { to { opacity: 1; translate: 0 0; } }
```
```jsx
<li className={styles.item} style={{ "--i": index }}>
```

## Pattern: scroll reveal (no library)

Prefer CSS scroll-driven animation where supported, with fallback visible:

```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: rise linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 60%;
  }
}
```

Need JS (broader support / trigger once) → small client hook `src/components/hooks/useInView.js`:

```jsx
"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}
```

Wrap in tiny `<Reveal>` client component so sections stay server components.

## Pattern: hover lift

```css
@media (hover: hover) and (pointer: fine) {
  .card { transition: translate var(--dur-fast) var(--ease-out), border-color var(--dur-fast); }
  .card:hover { translate: 0 -3px; border-color: var(--accent); }
}
```

## Pattern: theme toggle transition

Use View Transitions API when available:
```js
document.startViewTransition ? document.startViewTransition(apply) : apply();
```

## Libraries

Only add `motion` (Framer Motion) if need layout animations, gestures, or exit animations — ask user first. Not needed for reveals/hover.

## Verify

Test with OS reduced-motion on. Check no layout shift (CLS) — reveal elements must reserve space (opacity/transform only).
