import type { Metadata } from "next";
import { Kicker } from "@/components/Kicker";
import { WorkIndex } from "@/components/WorkIndex";

export const metadata: Metadata = {
  title: "Work — Parc Masterson",
  description: "Selected service design engagements from Parc Masterson.",
};

export default function WorkPage() {
  return (
    <main className="flex-1 pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10 mb-12 md:mb-16">
        <Kicker tone="gold">Work</Kicker>
        <h1 className="font-display font-normal text-ink text-4xl md:text-6xl leading-tight max-w-2xl">
          Selected engagements.
        </h1>
      </div>
      <WorkIndex />
    </main>
  );
}
