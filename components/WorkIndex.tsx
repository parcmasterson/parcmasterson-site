"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/case-studies";
import { toneTextClass, toneSoftBgClass } from "@/components/tone";

const previewShapes = [
  "rounded-[60%_40%_55%_45%/45%_55%_40%_60%]",
  "rounded-3xl",
  "rounded-full",
  "rounded-[40%_60%_45%_55%/55%_45%_60%_40%]",
];

export function WorkIndex() {
  const [active, setActive] = useState(0);
  const [edgePad, setEdgePad] = useState(0);
  const [firstPad, setFirstPad] = useState(0);
  const [shapeTop, setShapeTop] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const firstPadRef = useRef(0);
  const shapeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function updateEdgePad() {
      const rows = rowRefs.current.filter(
        (row): row is HTMLLIElement => row !== null
      );
      if (rows.length === 0) return;
      const avgHeight =
        rows.reduce((sum, row) => sum + row.offsetHeight, 0) / rows.length;
      // Exactly enough room for the last row to reach true viewport center
      // (where the sticky shape sits) at the bottom scroll extreme.
      setEdgePad(Math.max(0, (window.innerHeight - avgHeight) / 2));
    }

    updateEdgePad();
    window.addEventListener("resize", updateEdgePad);
    return () => window.removeEventListener("resize", updateEdgePad);
  }, []);

  useEffect(() => {
    function updateFirstPad() {
      const li1 = rowRefs.current[0];
      if (!li1) return;
      const rect = li1.getBoundingClientRect();
      // Back out whatever padding is currently applied to get the row's
      // true content height and unpadded position, then compute exactly
      // enough top padding to center that content at page load — no
      // scrolling required.
      const baselineTop = rect.top - firstPadRef.current;
      const contentHeight = li1.offsetHeight - firstPadRef.current;
      const viewportCenter = window.innerHeight / 2;
      const pad = Math.max(0, viewportCenter - contentHeight / 2 - baselineTop);
      firstPadRef.current = pad;
      setFirstPad(pad);
    }

    updateFirstPad();
    window.addEventListener("resize", updateFirstPad);
    return () => window.removeEventListener("resize", updateFirstPad);
  }, []);

  useEffect(() => {
    // Center the shape with a JS-computed pixel `top` instead of the
    // Tailwind `top-1/2 -translate-y-1/2` percentage. Percentage insets on
    // a sticky element resolve against its containing block's height, and
    // that height here comes from implicit CSS grid stretch rather than an
    // explicit `height` — a case browsers can resolve inconsistently.
    // Empirically that made the percentage version release from `sticky`
    // ~150px before the last (tallest) row reached center, so the shape
    // drifted away before the title ever lined up with it. A literal pixel
    // `top` has no such ambiguity, and — critically — this is computed only
    // on mount/resize, not on scroll, so positioning during scroll stays
    // 100% native `position: sticky` (compositor-driven, no per-frame JS
    // layout reads) instead of being recomputed on every scroll event,
    // which is what caused a visible stutter/bounce in the JS-driven
    // version.
    function updateShapeTop() {
      const shape = shapeRef.current;
      if (!shape) return;
      setShapeTop(window.innerHeight / 2 - shape.offsetHeight / 2);
    }

    updateShapeTop();
    window.addEventListener("resize", updateShapeTop);
    return () => window.removeEventListener("resize", updateShapeTop);
  }, []);

  useEffect(() => {
    // Whichever row's center is closest to viewport center is "active".
    // A pure distance comparison on every scroll frame can't skip a row
    // the way a threshold-crossing IntersectionObserver line can during
    // a fast scroll — there's always a well-defined closest row.
    let rafId: number | null = null;

    function updateActive() {
      rafId = null;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(rowCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActive(closestIndex);
    }

    function onScroll() {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateActive);
      }
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToCase = (index: number) => {
    rowRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      {/* The first row gets just enough top padding (computed above) to sit
          centered with the shape at page load, no scrolling required. The
          bottom spacer lives outside the sticky grid so the shape's
          containing block ends exactly at the last row and releases/scrolls
          away with it — it only exists to give the last row room to reach
          center. */}
      <div className="mx-auto max-w-5xl px-6 md:px-10 grid md:grid-cols-[1fr_260px] gap-12">
        <ul>
          {caseStudies.map((c, i) => (
            <li
              key={c.slug}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              data-index={i}
              onMouseEnter={() => setActive(i)}
              className="pt-40 md:pt-48 transition-opacity duration-300"
              style={{
                opacity: active === i ? 1 : 0.55,
                ...(i === 0 ? { paddingTop: firstPad } : {}),
              }}
            >
              <h2
                className={`font-display font-normal text-3xl md:text-5xl leading-tight mb-2 ${toneTextClass[c.tone]}`}
              >
                {c.title}
              </h2>
              <p className="font-mono text-xs tracking-[0.02em] text-ink-secondary">
                {c.client} &middot; {c.scope} &middot; {c.timeframe}
              </p>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <div
            ref={shapeRef}
            className={`sticky w-full h-64 transition-colors duration-300 ${previewShapes[active % previewShapes.length]} ${toneSoftBgClass[caseStudies[active].tone]}`}
            style={{ top: shapeTop }}
          />
        </div>
      </div>

      <div style={{ height: edgePad }} aria-hidden="true" />

      <div className="hidden lg:flex flex-col gap-3 fixed right-8 top-1/2 -translate-y-1/2">
        {caseStudies.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => scrollToCase(i)}
            aria-label={`Jump to ${c.title}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              active === i ? "bg-ink" : "bg-ink-secondary/40"
            }`}
          />
        ))}
      </div>
    </>
  );
}
