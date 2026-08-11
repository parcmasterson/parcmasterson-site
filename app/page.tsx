import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { LockIcon } from "@/components/LockIcon";
import { NodeField } from "@/components/NodeField";
import { ShapeSwatch } from "@/components/ShapeSwatch";
import { toneTextClass } from "@/components/tone";
import { caseStudies } from "@/lib/case-studies";
import { experience } from "@/lib/experience";
import { shapeParade } from "@/lib/shapes";

const leadershipPrinciples = [
  {
    title: "Good design is good business",
    body: "I bring business sense and systems thinking to the tension between human outcomes and financial reality. I stay in that tension. I don't resolve it reflexively in either direction. Design earns its seat by delivering for people and the business simultaneously. That's not a compromise. It's the fundamental design problem worth solving.",
  },
  {
    title: "Lead from within",
    body: "I'm most effective as a player-coach, close to the work, contributing as a peer and an authority. I take on the less glamorous parts so teammates can stretch. That proximity grounds my guidance in specificity. It keeps my teams oriented toward clear outcomes. Empowered to act. Supported in ways that make me a resource my teams actually want to use.",
  },
  {
    title: "Candor drives craft",
    body: "I treat the team environment as a design problem. I establish shared ownership, team norms, and rituals that make candor and critique the default, not the exception. Practitioners seek out others to make their ideas better. Hard conversations happen instinctively. Teams stop chasing a fractured sense of perfection. What replaces it is a shared definition of great work.",
  },
  {
    title: "Find third ways",
    body: "I approach cross-functional relationships as investments, not negotiations. Understanding the priorities, challenges, and key measures other leaders are after enables open exchanges, direct challenges, and co-creation. Co-creation that produces something neither side could have reached alone. This allows service design's influence to take root across functions and disciplines. No formal authority required.",
  },
  {
    title: "People are the practice",
    body: "I view coaching as a core part of my practice. I use a co-active approach, designing relationships around the priorities that matter to practitioners, not the ones I think they should have. The result is people who stop looking for answers and start finding them. Who stop coming back for approval and start coming back with what they learned.",
  },
];

const dimensionsOfPractice = [
  "Spatial & Environmental",
  "Brand & Communication",
  "Experience & Interaction",
  "Service & Systems",
  "Innovation",
  "Product Strategy",
  "Consulting & Facilitation",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 md:min-h-[560px] flex items-center"
      >
        <NodeField className="absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1120px] px-6 md:px-10">
          <p className="font-display font-normal italic text-ink text-3xl md:text-4xl leading-tight max-w-2xl">
            Hi, I&rsquo;m Parc.
          </p>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink mt-1">
            Service design leader &middot; practice builder &middot; systems thinker
          </p>
          <h1 className="font-display font-normal text-orange text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.05] mb-5 max-w-none mt-8">
            I connect mental models to business models — building service
            design practices from scratch to deliver what didn&rsquo;t exist
            before.
          </h1>
        </div>
      </section>

      {/* Work signal strip */}
      <section id="work" className="py-16 md:py-20">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <Kicker tone="gold">Selected work</Kicker>
            <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight max-w-2xl">
              Case studies
            </h2>
          </div>
          <Link
            href="/work"
            className="shrink-0 font-sans text-sm font-medium text-ink underline underline-offset-4 decoration-1 hover:opacity-70"
          >
            View all work &rarr;
          </Link>
        </div>
        <ul
          className="flex gap-16 overflow-x-auto snap-x snap-mandatory pb-4 pl-6 md:pl-10 pr-6 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((c, i) => (
            <li key={c.slug} className="snap-start shrink-0 w-56">
              <Link href={`/work/${c.slug}`} className="group block">
                <div className="relative w-full h-48 mb-4">
                  <ShapeSwatch shape={shapeParade[i % shapeParade.length]} tone={c.tone} />
                  {c.protected && (
                    <span
                      className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full bg-ground/80 text-bone"
                      aria-label="Password protected"
                      title="Password protected"
                    >
                      <LockIcon />
                    </span>
                  )}
                </div>
                <p
                  className={`font-mono text-[11px] font-medium uppercase tracking-[0.06em] leading-[1.3] mb-1.5 ${toneTextClass[c.tone]}`}
                >
                  {c.client}
                </p>
                <h3 className="font-sans font-medium text-ink text-base leading-snug mb-1.5 group-hover:opacity-70 transition-opacity">
                  {c.title}
                </h3>
              </Link>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] leading-[1.3] text-ink-secondary">
                {c.scope}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Philosophy — Who I Am */}
      <section id="about" className="bg-bone py-20 md:py-28">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10 grid gap-12 md:grid-cols-[1fr_240px]">
          <div className="md:col-start-1 md:row-start-1">
            <Kicker tone="orange">About</Kicker>
            <h2 className="font-display font-normal text-ground text-3xl md:text-4xl leading-tight mb-6">
              This is me
            </h2>
          </div>

          <div className="md:col-start-1 md:row-start-2">
            <div className="space-y-5 max-w-[60ch]">
              <p className="text-ground text-base leading-[1.75]">
                I&rsquo;m a design leader who builds service design practices
                inside complex organizations to design, operate, and deliver
                intelligent services that hold up over time. First at Signal
                Theory, where I founded the Innovation &amp; Experience
                practice from the ground up and wove it into a 150-person
                agency. I&rsquo;ve been doing a version of it ever since at
                Harmonic Design, across engagements ranging from a
                100-year-old Fortune 500 insurer to a global airline. None of
                it started with a clear mandate. All of it ended with
                investment secured, business units aligned, and something
                real running in market. I don&rsquo;t advise from outside. I
                operate as a player-coach, co-creating the practice and the
                methods with the people who sustain the work after
                I&rsquo;m gone.
              </p>
            </div>
            <blockquote className="italic text-ground text-base leading-[1.75] mt-5 max-w-[60ch]">
              I&rsquo;m a true midwesterner and Kansas City native, married to
              an amazing architect, raising two daughters and a dog who
              outruns all three of us. I read more sci-fi and social science
              than design books, because I think the best frames for design
              come from somewhere else. I fuel my weekly runs with heaping
              bowls of Cap&rsquo;n Crunch and way too many podcasts.
            </blockquote>
          </div>

          <div className="md:col-start-2 md:row-start-2">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 md:flex-col md:gap-0">
              <div className="relative w-full max-w-[240px] aspect-square mb-8 shrink-0 sm:mb-0 md:mb-8 overflow-hidden rounded-[50%_45%_55%_50%/50%_55%_45%_50%] bg-panel">
                {/* Placeholder portrait layer. Swap for a real photo (e.g. an
                    <Image src="/portrait.jpg" fill className="object-cover" />)
                    when one is ready — the halftone overlay below will still
                    auto-reveal it on load without further changes. */}
                <div className="absolute inset-0 hero-halftone" />
              </div>
              <div className="sm:flex-1 md:flex-none">
                <p className="font-mono text-[11px] tracking-[0.02em] text-ground/70 uppercase mb-4">
                  Dimensions of practice
                </p>
                <ul className="font-mono text-[13px] leading-relaxed text-orange space-y-1.5">
                  {dimensionsOfPractice.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Lead */}
      <section id="how-i-lead" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          <Kicker tone="teal">Leadership</Kicker>
          <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight mb-8">
            Principles of practice
          </h2>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPrinciples.map((p, i) => (
              <div key={p.title}>
                <span className="font-display font-normal text-teal text-3xl leading-none block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans font-semibold text-ink text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-ink-secondary text-base leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="py-20 md:py-28">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10">
          <Kicker tone="lilac">Background</Kicker>
          <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight mb-10">
            Experience
          </h2>
          <ol className="relative space-y-9 max-w-xl">
            {experience.map((role) => (
              <li key={`${role.company}-${role.dates}`} className="relative pl-8">
                <span className="absolute left-[-4px] top-[7px] w-[7px] h-[7px] rounded-full bg-lilac" />
                <p className="font-mono text-xs tracking-[0.02em] text-ink-secondary mb-1">
                  {role.dates}
                </p>
                <h3 className="font-sans font-medium text-ink text-base">
                  {role.title}{" "}
                  <span className="text-ink-secondary font-normal">
                    &middot; {role.company}
                  </span>
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}
