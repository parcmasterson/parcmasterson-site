// The shape parade: cycled across the homepage strip and the /work preview
// panel (both import this same array). Two constructions mixed together —
// CSS border-radius blobs, and SVG paths (straight edges + quadratic
// fillets) for shapes a border-radius curve can't produce, like the
// irregular quadrilateral and the rounded triangles.
export type ShapeDef =
  | { type: "css"; radius: string }
  | { type: "svg"; path: string; viewBox: string };

export const shapeParade: ShapeDef[] = [
  { type: "css", radius: "60% 40% 55% 45% / 45% 55% 40% 60%" },
  {
    type: "svg",
    path: "M6.6,76.3 L9.28,24.04 Q10,10 24.4,9.64 L80.4,8.24 Q90,8 90.48,16.88 L93.04,64.24 Q94,82 72.88,83.44 L19.2,87.1 Q6,88 6.6,76.3 Z",
    viewBox: "0 0 100 90",
  },
  { type: "css", radius: "48% 52% 51% 49% / 52% 48% 53% 47%" },
  { type: "css", radius: "40% 60% 45% 55% / 55% 45% 60% 40%" },
  {
    type: "svg",
    path: "M67.84,34.2 L71.44,39.7 Q88,65 57.34,69.2 L44.2,71 Q15,75 31.65,45.75 L37.94,34.7 Q52,10 67.84,34.2 Z",
    viewBox: "21 15 61 55",
  },
  { type: "css", radius: "50% 45% 55% 50% / 50% 55% 45% 50%" },
];
