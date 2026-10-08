"use client";

import { useEffect, useRef } from "react";
import styles from "./KineticGrid.module.css";

// Hairline grid behind its parent that bends away from the pointer and
// ripples on click. Adapted from 21st.dev "kinetic-grid": colours come from
// the theme tokens (--border at rest, --accent near the pointer), it is
// sized to its parent, and the frame loop only runs while something moves.
// Touch devices and reduced motion get the static grid.

const CELL_SIZE = 72;
const INFLUENCE_RADIUS = 260;
const MAX_WARP = 22;
const LERP_SPEED = 0.1;
const RIPPLE_SPEED = 420; // px per second
const RIPPLE_WIDTH = 55;
const EDGE_MARGIN = 1.5; // cells over which the outer rows/cols are pinned

const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (t) => t * t * (3 - 2 * t);

function parseColor(value, fallback) {
  const hex = value.trim().replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) return fallback;
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function mix(a, b, t, alpha = 1) {
  const r = Math.round(lerp(a.r, b.r, t));
  const g = Math.round(lerp(a.g, b.g, t));
  const bl = Math.round(lerp(a.b, b.b, t));
  return `rgba(${r},${g},${bl},${alpha.toFixed(3)})`;
}

export default function KineticGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const root = document.documentElement;
    const interactive =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

    let W = 0;
    let H = 0;
    let colors = null;
    let frame = 0;
    let visible = true;
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let strength = 0; // 0..1, fades the warp in and out as the pointer enters/leaves
    let targetStrength = 0;
    const ripples = [];

    const readColors = () => {
      const css = getComputedStyle(canvas);
      colors = {
        line: parseColor(css.getPropertyValue("--border"), { r: 35, g: 35, b: 40 }),
        accent: parseColor(css.getPropertyValue("--accent"), { r: 124, g: 138, b: 255 }),
      };
    };

    const warp = (gx, gy, col, row, cols, rows) => {
      const colPin = Math.min(col / EDGE_MARGIN, (cols - 1 - col) / EDGE_MARGIN, 1);
      const rowPin = Math.min(row / EDGE_MARGIN, (rows - 1 - row) / EDGE_MARGIN, 1);
      const pin = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.hypot(dx, dy);
      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pin * strength;

      let x = gx;
      let y = gy;

      for (const r of ripples) {
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.hypot(rdx, rdy);
        const diff = rdist - r.radius;
        if (Math.abs(diff) < RIPPLE_WIDTH && rdist > 0) {
          const push = (1 - Math.abs(diff) / RIPPLE_WIDTH) * r.opacity * 16 * pin;
          const sign = diff < 0 ? 1 : -1;
          x += (rdx / rdist) * push * sign;
          y += (rdy / rdist) * push * sign;
        }
      }

      if (dist > 0 && dist < INFLUENCE_RADIUS) {
        const t = dist / INFLUENCE_RADIUS;
        const amount = (1 - t) * (1 - t) * Math.min(1, dist / 60) * MAX_WARP * pin * strength;
        x -= (dx / dist) * amount;
        y -= (dy / dist) * amount;
      }

      return { x, y, p: proximity };
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, W, H);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = age * RIPPLE_SPEED;
        r.opacity = Math.max(0, 1 - age * 1.2);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
      const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts = [];
      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        for (let col = 0; col < cols; col++) {
          pts[row][col] = warp(col * cellW, row * cellH, col, row, cols, rows);
        }
      }

      const seg = (a, b) => {
        const t = smoothstep((a.p + b.p) / 2);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = mix(colors.line, colors.accent, t, lerp(1, 0.85, t));
        ctx.lineWidth = lerp(1, 1.25, t);
        ctx.stroke();
      };

      for (let row = 0; row < rows; row++)
        for (let col = 0; col < cols - 1; col++) seg(pts[row][col], pts[row][col + 1]);
      for (let col = 0; col < cols; col++)
        for (let row = 0; row < rows - 1; row++) seg(pts[row][col], pts[row + 1][col]);

      // Intersections only show near the pointer
      ctx.fillStyle = mix(colors.accent, colors.accent, 0, 1);
      for (const line of pts) {
        for (const pt of line) {
          const t = smoothstep(pt.p);
          if (t < 0.05) continue;
          ctx.globalAlpha = t;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, lerp(0.5, 2.2, t), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      for (const r of ripples) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = mix(colors.accent, colors.accent, 0, r.opacity * 0.35);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const tick = (now) => {
      mouse.x = lerp(mouse.x, target.x, LERP_SPEED);
      mouse.y = lerp(mouse.y, target.y, LERP_SPEED);
      strength = lerp(strength, targetStrength, LERP_SPEED);
      draw(now);

      const settled =
        Math.abs(mouse.x - target.x) + Math.abs(mouse.y - target.y) < 0.1 &&
        Math.abs(strength - targetStrength) < 0.001 &&
        ripples.length === 0;
      frame = settled || !visible ? 0 : requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!frame && visible) frame = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const local = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top, rect };
    };

    const onMove = (e) => {
      const { x, y, rect } = local(e);
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (inside && strength < 0.01) {
        // Enter from where the pointer is instead of sweeping across the grid
        mouse.x = x;
        mouse.y = y;
      }
      target.x = x;
      target.y = y;
      targetStrength = inside ? 1 : 0;
      wake();
    };

    const onLeave = () => {
      targetStrength = 0;
      wake();
    };

    const onDown = (e) => {
      const { x, y, rect } = local(e);
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      ripples.push({ x, y, radius: 0, opacity: 1, born: performance.now() });
      wake();
    };

    readColors();
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      readColors();
      draw(performance.now());
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) wake();
    });
    visibility.observe(canvas);

    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      root.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className={styles.grid} aria-hidden="true" />;
}
