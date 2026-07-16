import type { Tone } from "./tone";
import { toneTextClass } from "./tone";

export function Pull({
  tone = "gold",
  children,
}: {
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <span className={`font-display text-[1.3em] ${toneTextClass[tone]}`}>
      {children}
    </span>
  );
}
