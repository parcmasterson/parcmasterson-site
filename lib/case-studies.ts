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
    slug: "small-biz-exit",
    title: "Small Business Exit Service",
    client: "Fortune 500 Insurer",
    scope: "Zero-to-One Innovation",
    tone: "orange",
    protected: true,
    pull: {
      pre: "Compressed time-to-alignment from ",
      highlight: "months to weeks",
      post: " across five business units.",
    },
  },
  {
    slug: "practice-build",
    title: "Innovation & Experience Practice",
    client: "Signal Theory",
    scope: "Practice Building",
    tone: "gold",
    pull: {
      pre: "Won a ",
      highlight: "$2M",
      post: " engagement on the strength of the practice alone.",
    },
  },
  {
    slug: "auto-shopping",
    title: "Auto Insurance Shopping Experience",
    client: "Fortune 500 Insurer",
    scope: "Service Redesign",
    tone: "orange",
    protected: true,
    pull: {
      pre: "Received ",
      highlight: "unanimous board approval",
      post: " — the only time in over 30 years.",
    },
  },
  {
    slug: "tide-store",
    title: "Store-within-a-store Experience",
    client: "Tide Cleaners/Procter & Gamble",
    scope: "Service Redesign",
    tone: "teal",
    pull: {
      pre: "Delivered an ",
      highlight: "execution-ready",
      post: " package across two flexible store formats.",
    },
  },
  {
    slug: "roofing",
    title: "Residential Roofing Service",
    client: "Fortune 500 Insurer",
    scope: "Zero-to-One Innovation",
    tone: "gold",
    protected: true,
    pull: {
      pre: "Defined a north star with ",
      highlight: "$100M",
      post: " in projected ten-year revenue.",
    },
  },
  {
    slug: "evolve",
    title: "Host & Guest Experience",
    client: "Evolve Vacation Rental",
    scope: "Service Strategy",
    tone: "teal",
    pull: {
      pre: "Replaced marketing personas with ",
      highlight: "four research-backed host segments",
      post: ".",
    },
  },
  {
    slug: "enterprise-presence",
    title: "Enterprise Innovation Practice",
    client: "Fortune 500 Insurer",
    scope: "Practice Building",
    tone: "gold",
    protected: true,
    pull: {
      pre: "Scaled an innovation portfolio worth ",
      highlight: "$250M",
      post: " in value.",
    },
  },
  {
    slug: "tide-service-vision",
    title: "Unified Service Architecture",
    client: "Tide Cleaners/Procter & Gamble",
    scope: "Service Strategy",
    tone: "teal",
    pull: {
      pre: "Unified three formats into ",
      highlight: "one shared brand system",
      post: ".",
    },
  },
];
