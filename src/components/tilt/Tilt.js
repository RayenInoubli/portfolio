"use client";

import { useRef } from "react";

// Tilts toward the pointer in 3D (fine pointers, motion allowed). Writes
// --rx / --ry on the element; the transform and its easing live in CSS so
// the tilt settles back smoothly on leave.
export default function Tilt({ className, children, max = 7 }) {
  const ref = useRef(null);
  const enabled = useRef(null);

  const onPointerMove = (e) => {
    if (enabled.current === null) {
      enabled.current =
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    }
    if (!enabled.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--rx", `${(-y * 2 * max).toFixed(2)}deg`);
    ref.current.style.setProperty("--ry", `${(x * 2 * max).toFixed(2)}deg`);
  };

  const onPointerLeave = () => {
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div ref={ref} className={className} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      {children}
    </div>
  );
}
