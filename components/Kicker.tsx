import type { Tone } from "./tone";
import { toneTextClass } from "./tone";

export function Kicker({
  tone = "mint",
  children,
}: {
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] mb-3.5 ${toneTextClass[tone]}`}
    >
      {children}
    </p>
  );
}
