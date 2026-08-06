import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudyLock } from "@/components/CaseStudyLock";
import { Kicker } from "@/components/Kicker";
import { ScrollReveal } from "@/components/ScrollReveal";
import { toneTextClass, type Tone } from "@/components/tone";
import { caseStudies } from "@/lib/case-studies";
import { caseDetails, type CaseSection } from "@/lib/case-details";
import { isCaseUnlocked } from "@/lib/case-auth";

export async function generateStaticParams() {
  return Object.keys(caseDetails).map((slug) => ({ slug }));
}

function findCase(slug: string) {
  const summary = caseStudies.find((c) => c.slug === slug);
  const detail = caseDetails[slug];
  if (!summary || !detail) return null;
  return { summary, detail };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = findCase(slug);
  if (!found) return {};
  return {
    title: `${found.summary.title} — Parc Masterson`,
    description: `${found.summary.client} · ${found.summary.scope}`,
  };
}

// SCAO card head, uniform across all four beats (Section 2: card-kicker).
// Color is passed in per beat — tone-accented on ground, forced orange
// inside the Complication tint block regardless of the case's own tone.
function CardKicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`type-card-kicker mb-3.5 ${className}`}>{children}</p>;
}

// Situation is plain flowing paragraphs — no serif, no chunk grid, no
// bolded lead-in (Section 2: "no serif anywhere on this card").
function SituationSection({
  tone,
  paragraphs,
}: {
  tone: Tone;
  paragraphs: string[];
}) {
  return (
    <section className="py-16 md:py-20 bg-ground">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <ScrollReveal>
          <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
            <div>
              <CardKicker className={toneTextClass[tone]}>Situation</CardKicker>
              <div className="max-w-3xl space-y-6">
                {paragraphs.map((p, i) => (
                  <p key={i} className="type-situation-body text-ink">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            {/* Placeholder artifact layer — swap for a real photo (e.g. an
                <Image src="..." fill className="object-cover" />) when one
                is ready. No wrapping frame: this shape is the artifact
                itself, reading against ground on its own value contrast. */}
            <div className="relative w-full aspect-[4/5] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-panel to-ground">
              <div className="absolute inset-0 hero-halftone" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// "complication" renders full-bleed on lilac-tint with ground as ink;
// "action" stays on dark ground — the only deliberate visual break in
// this template is the Complication tint block.
function SectionBlock({
  tone,
  label,
  section,
  beat,
}: {
  tone: Tone;
  label: string;
  section: CaseSection;
  beat: "complication" | "action";
}) {
  const isTint = beat === "complication";

  const kickerClass = isTint ? "text-orange" : toneTextClass[tone];
  const inkClass = isTint ? "text-ground" : "text-ink";
  const secondaryClass = isTint ? "text-lilac-tint-ink-secondary" : "text-ink-secondary";
  const chunkTitleClass = isTint ? "text-ground" : toneTextClass[tone];
  const chunkCols = "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-16 md:py-20 ${isTint ? "bg-lilac-tint" : "bg-ground"}`}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <ScrollReveal>
          <CardKicker className={kickerClass}>{label}</CardKicker>
          <p className={`type-lede mb-8 max-w-3xl ${inkClass}`}>{section.intro}</p>
          <div className={`grid gap-8 ${chunkCols}`}>
            {section.blocks.map((block) => (
              <div key={block.lead}>
                <h4
                  className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] mb-1.5 ${chunkTitleClass}`}
                >
                  {block.lead}
                </h4>
                <p className={`text-base leading-relaxed ${secondaryClass}`}>
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const found = findCase(slug);
  if (!found) notFound();
  const { summary, detail } = found;

  if (summary.protected && !(await isCaseUnlocked())) {
    const { error } = await searchParams;
    return (
      <CaseStudyLock
        slug={slug}
        title={summary.title}
        tone={summary.tone}
        hasError={error === "1"}
      />
    );
  }

  return (
    <main className="flex-1 pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Link
          href="/work"
          className="font-sans text-sm text-ink-secondary hover:text-ink transition-colors"
        >
          &larr; All work
        </Link>

        <div className="mt-8 mb-14 md:mb-20 max-w-3xl">
          <Kicker tone={summary.tone}>Case study</Kicker>
          <h1
            className={`font-display font-normal text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] mb-6 ${toneTextClass[summary.tone]}`}
          >
            {summary.title}
          </h1>
          <p className="font-mono text-[13px] leading-[1.4] text-ink-secondary">
            {summary.client} &middot; {summary.scope}
          </p>
        </div>
      </div>

      <SituationSection tone={summary.tone} paragraphs={detail.situation} />
      <SectionBlock
        tone={summary.tone}
        label="Complication"
        section={detail.complication}
        beat="complication"
      />
      <SectionBlock
        tone={summary.tone}
        label="Action"
        section={detail.action}
        beat="action"
      />

      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <ScrollReveal className="mt-14 md:mt-16 max-w-3xl">
          <CardKicker className={toneTextClass[summary.tone]}>Outcome</CardKicker>
          <ul className="space-y-4">
            {detail.outcome.map((line) => (
              <li key={line.pre + line.highlight + line.post}>
                <span className="type-outcome-list text-ink">
                  {line.pre}
                  <em className="italic">{line.highlight}</em>
                  {line.post}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <div className="mt-16 md:mt-20 pt-10">
          <Link
            href="/work"
            className="font-sans text-sm font-medium text-ink underline underline-offset-4 decoration-1 hover:opacity-70"
          >
            &larr; Back to all work
          </Link>
        </div>
      </div>
    </main>
  );
}
