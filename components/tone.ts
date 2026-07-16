export type Tone = "mint" | "coral" | "gold" | "lilac" | "ground";

export const toneTextClass: Record<Tone, string> = {
  mint: "text-mint",
  coral: "text-coral",
  gold: "text-gold",
  lilac: "text-lilac",
  ground: "text-ground",
};

export const toneSoftBgClass: Record<Tone, string> = {
  mint: "bg-mint/15",
  coral: "bg-coral/15",
  gold: "bg-gold/15",
  lilac: "bg-lilac/15",
  ground: "bg-ground/15",
};
