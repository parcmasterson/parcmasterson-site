import type { ShapeDef } from "@/lib/shapes";
import { toneSoftBgClass, toneSoftTextClass, type Tone } from "@/components/tone";

// Renders one shape-parade entry, filling its container exactly the way a
// border-radius div always has — SVG shapes stretch with
// preserveAspectRatio="none" rather than letterboxing, so every shape in
// the parade reads at the same scale regardless of construction.
export function ShapeSwatch({
  shape,
  tone,
  className = "",
}: {
  shape: ShapeDef;
  tone: Tone;
  className?: string;
}) {
  if (shape.type === "css") {
    return (
      <div
        className={`w-full h-full ${toneSoftBgClass[tone]} ${className}`}
        style={{ borderRadius: shape.radius }}
      />
    );
  }

  return (
    <svg
      viewBox={shape.viewBox}
      preserveAspectRatio="none"
      className={`w-full h-full ${toneSoftTextClass[tone]} ${className}`}
    >
      <path d={shape.path} className="fill-current" />
    </svg>
  );
}
