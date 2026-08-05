"use client";

import { useEffect, useRef } from "react";

type FieldNode = {
  nx: number;
  ny: number;
  rx: number;
  ry: number;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
  radius: number;
  color: string;
};

const NODE_COUNT = 30;
const PROXIMITY = 120;
const TONE_VARS = ["--teal", "--orange", "--gold", "--lilac"];

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

// Ambient node field: each point orbits its own fixed anchor on independent
// sine/cosine phases (no shared velocity), so the field never drifts as a
// whole — the effect that reads as directional motion is deliberately absent.
export function NodeField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const rootStyle = getComputedStyle(document.documentElement);
    const toneColors = TONE_VARS.map(
      (v) => rootStyle.getPropertyValue(v).trim() || "#ffffff"
    );
    const lineColor = rootStyle.getPropertyValue("--ink-secondary").trim() || "#aeb89f";

    const nodes: FieldNode[] = Array.from({ length: NODE_COUNT }, () => ({
      nx: Math.random(),
      ny: Math.random(),
      rx: randomRange(6, 18),
      ry: randomRange(6, 18),
      speedX: randomRange(0.15, 0.35),
      speedY: randomRange(0.15, 0.35),
      phaseX: randomRange(0, Math.PI * 2),
      phaseY: randomRange(0, Math.PI * 2),
      radius: randomRange(1.6, 3.4),
      color: toneColors[Math.floor(Math.random() * toneColors.length)],
    }));

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = performance.now();
    let raf = 0;

    function positionAt(node: FieldNode, t: number) {
      return {
        x: node.nx * width + Math.sin(t * node.speedX + node.phaseX) * node.rx,
        y: node.ny * height + Math.cos(t * node.speedY + node.phaseY) * node.ry,
      };
    }

    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, width, height);

      const positions = nodes.map((n) => positionAt(n, t));

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = positions[i];
          const b = positions[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < PROXIMITY) {
            ctx!.strokeStyle = lineColor;
            ctx!.globalAlpha = (1 - dist / PROXIMITY) * 0.45;
            ctx!.lineWidth = 1.5;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
      nodes.forEach((node, i) => {
        const { x, y } = positions[i];
        ctx!.beginPath();
        ctx!.arc(x, y, node.radius, 0, Math.PI * 2);
        ctx!.fillStyle = node.color;
        ctx!.fill();
      });

      if (!reduceMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />
  );
}
