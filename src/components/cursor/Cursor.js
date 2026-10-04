"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

// Custom cursor for fine pointers only. The frame loop runs only while the
// dot is catching up to the pointer, then stops until the next move.
// Elements can opt in with:
//   data-cursor="Label"  → cursor grows into a labelled bubble
//   data-magnetic        → element is pulled slightly toward the pointer
export default function Cursor() {
  const ref = useRef(null);
  const [mode, setMode] = useState("hidden");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = ref.current;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let frame = 0;
    let started = false;
    let magnet = null;
    let magnetRect = null;

    const tick = () => {
      const ease = reduceMotion.matches ? 1 : 0.22;
      cx += (x - cx) * ease;
      cy += (y - cy) * ease;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!started) {
        started = true;
        cx = x;
        cy = y;
        setMode("default");
      }
      if (!frame) frame = requestAnimationFrame(tick);

      if (magnet && magnetRect && !reduceMotion.matches) {
        const dx = x - (magnetRect.left + magnetRect.width / 2);
        const dy = y - (magnetRect.top + magnetRect.height / 2);
        magnet.style.translate = `${dx * 0.3}px ${dy * 0.3}px`;
      }
    };

    const onOver = (e) => {
      const target = e.target.closest?.("[data-cursor], a, button");
      if (target?.dataset.cursor) {
        setLabel(target.dataset.cursor);
        setMode("label");
      } else {
        setMode(target ? "link" : "default");
      }

      const nextMagnet = e.target.closest?.("[data-magnetic]") ?? null;
      if (nextMagnet !== magnet) {
        if (magnet) magnet.style.translate = "";
        magnet = nextMagnet;
        magnetRect = magnet?.getBoundingClientRect() ?? null;
      }
    };

    const onLeave = () => {
      setMode("hidden");
      started = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    root.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      root.removeEventListener("pointerleave", onLeave);
      root.classList.remove("has-cursor");
      if (magnet) magnet.style.translate = "";
    };
  }, []);

  return (
    <div ref={ref} className={styles.cursor} data-mode={mode} aria-hidden="true">
      <span className={styles.ball}>
        <span className={styles.label}>{label}</span>
      </span>
    </div>
  );
}
