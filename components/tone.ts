export type Tone = "teal" | "orange" | "gold" | "lilac" | "ground";

export const toneTextClass: Record<Tone, string> = {
  teal: "text-teal",
  orange: "text-orange",
  gold: "text-gold",
  lilac: "text-lilac",
  ground: "text-ground",
};

export const toneSoftBgClass: Record<Tone, string> = {
  teal: "bg-teal/15",
  orange: "bg-orange/15",
  gold: "bg-gold/15",
  lilac: "bg-lilac/15",
  ground: "bg-ground/15",
};

export const toneBgClass: Record<Tone, string> = {
  teal: "bg-teal",
  orange: "bg-orange",
  gold: "bg-gold",
  lilac: "bg-lilac",
  ground: "bg-ground",
};

export const toneSoftTextClass: Record<Tone, string> = {
  teal: "text-teal/15",
  orange: "text-orange/15",
  gold: "text-gold/15",
  lilac: "text-lilac/15",
  ground: "text-ground/15",
};

export const toneBorderClass: Record<Tone, string> = {
  teal: "border-teal",
  orange: "border-orange",
  gold: "border-gold",
  lilac: "border-lilac",
  ground: "border-ground",
};
