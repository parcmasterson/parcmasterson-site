"use client";

import { useEffect, useRef, useState } from "react";

// The one choreographed moment on the site (Section 6): each SCAO beat
// fades/slides in as it scrolls into view, and resets when it scrolls back
// out — replaying every time, not just once per page load.
export function ScrollReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    setMotionEnabled(true);

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${motionEnabled ? "transition-[opacity,transform] duration-1000 ease-out" : ""} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
    >
      {children}
    </div>
  );
}
