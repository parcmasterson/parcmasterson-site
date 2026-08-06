import type { Tone } from "@/components/tone";

export type CaseSummary = {
  slug: string;
  title: string;
  client: string;
  scope: string;
  tone: Tone;
  protected?: boolean;
  pull: {
    pre: string;
    highlight: string;
    post: string;
  };
};

export const caseStudies: CaseSummary[] = [
  {
    slug: "auto-shopping",
    title: "Personal Auto Insurance Shopping Ecosystem",
    client: "Fortune 500 insurer",
    scope: "End-to-end service redesign",
    tone: "orange",
    protected: true,
    pull: {
      pre: "Received ",
      highlight: "unanimous board approval",
      post: " — the only time in over 30 years.",
    },
  },
  {
    slug: "enterprise-presence",
    title: "Enterprise Innovation Presence",
    client: "Fortune 500 insurer",
    scope: "Sustained organizational engagement",
    tone: "gold",
    protected: true,
    pull: {
      pre: "Scaled an innovation portfolio worth ",
      highlight: "$250M",
      post: " in value.",
    },
  },
  {
    slug: "evolve",
    title: "Vacation Rental Host & Guest Experience",
    client: "Evolve Vacation Rental",
    scope: "Service redesign",
    tone: "teal",
    pull: {
      pre: "Replaced marketing personas with ",
      highlight: "four research-backed host segments",
      post: ".",
    },
  },
  {
    slug: "practice-build",
    title: "Innovation & Experience Practice Build",
    client: "Signal Theory",
    scope: "Practice building",
    tone: "gold",
    pull: {
      pre: "Won a ",
      highlight: "$2M",
      post: " engagement on the strength of the practice alone.",
    },
  },
  {
    slug: "roofing",
    title: "Residential Roofing Innovation (Roof-as-a-Service)",
    client: "Fortune 500 insurer",
    scope: "Adjacent innovation",
    tone: "gold",
    protected: true,
    pull: {
      pre: "Defined a north star with ",
      highlight: "$100M",
      post: " in projected ten-year revenue.",
    },
  },
  {
    slug: "small-biz-exit",
    title: "Small Business Exit Service",
    client: "Fortune 500 insurer",
    scope: "Zero-to-one innovation",
    tone: "orange",
    protected: true,
    pull: {
      pre: "Compressed time-to-alignment from ",
      highlight: "months to weeks",
      post: " across five business units.",
    },
  },
  {
    slug: "tide-service-vision",
    title: "Service Vision and Brand Architecture",
    client: "P&G Tide Cleaners",
    scope: "Service unification",
    tone: "teal",
    pull: {
      pre: "Unified three formats into ",
      highlight: "one shared brand system",
      post: ".",
    },
  },
  {
    slug: "tide-store",
    title: "Store-Within-a-Store Transformation",
    client: "P&G Tide Cleaners",
    scope: "Format expansion",
    tone: "teal",
    pull: {
      pre: "Delivered an ",
      highlight: "execution-ready",
      post: " package across two flexible store formats.",
    },
  },
];
