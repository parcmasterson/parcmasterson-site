import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { toneSoftBgClass } from "@/components/tone";
import { caseStudies } from "@/lib/case-studies";
import { experience } from "@/lib/experience";

const cardShapes = [
  "rounded-[60%_40%_55%_45%/45%_55%_40%_60%]",
  "rounded-3xl",
  "rounded-full",
  "rounded-[40%_60%_45%_55%/55%_45%_60%_40%]",
];

const leadershipPrinciples = [
  {
    title: "Create the conditions for collective potential",
    body: "Psychological safety isn't comfort — it's the foundation that makes candor, calculated risk, and real innovation possible. Trust doesn't happen by default. I build it deliberately so teams can challenge ideas, surface concerns, and make mistakes without fear. High standards and safety reinforce each other. They don't trade off.",
  },
  {
    title: "Find the third way",
    body: "Cross-functional influence isn't about winning or compromising — it's about co-creation. When perspectives conflict, both usually contain something true. My instinct is to resist the binary, hold both views with curiosity, and look for the path that neither side could have found alone. That's not a soft middle ground. It's often a better answer than either starting position. It's how design earns trust across functions — not by asserting its point of view, but by expanding what's possible.",
  },
  {
    title: "Invest in people as practitioners and as people",
    body: "I use co-active coaching to help team members take ownership of their growth — where they're trying to go, not just what the project needs from them. I listen to what people do, not what they say they can do, and build from actual capability toward aspirational capability.",
  },
  {
    title: "Lead with vision and operate as a player-coach",
    body: "I work hard to articulate a rich picture of where we're going — specific enough to orient, open enough for people to bring their own perspective to get there. Empowerment means designing the relationship: clear expectations, shared purpose, deliberate feedback loops. Not hands-off — hands-on in the right moments. I do the work and build the conditions for others to do it well simultaneously. That's not a transitional mode. It's how I'm most effective.",
  },
  {
    title: "Connect human outcomes to business impact — and hold both",
    body: "Design earns its seat by demonstrating value in terms the business cares about. But business impact without human grounding produces the wrong things efficiently. I keep both in view simultaneously — navigating the tradeoffs practically, in the near and long term. That means staying oriented to the ideal while making continuous, incremental progress through lean experimentation and learning loops. Don't get lost in either direction too long.",
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
      <section id="hero" className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Kicker tone="mint">
              Service design leader &middot; practice builder &middot; systems thinker
            </Kicker>
            <h1 className="font-display font-normal text-mint text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.05] mb-5">
              Systems have edges.
              <br />
              People live past them.
            </h1>
            <p className="text-ink-secondary text-lg leading-relaxed max-w-xl">
              Parc Masterson builds service design practice inside complex
              organizations — from zero-to-one innovation to enterprise-scale
              alignment.
            </p>
          </div>

          <div className="relative w-44 h-44 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-[50%_45%_55%_50%/50%_55%_45%_50%] bg-gradient-to-br from-panel to-hairline">
            {/* Placeholder portrait layer. Swap for a real photo (e.g. an
                <Image src="/portrait.jpg" fill className="object-cover" />)
                when one is ready — the halftone overlay below will still
                auto-reveal it on load without further changes. */}
            <div className="absolute inset-0 hero-halftone" />
          </div>
        </div>
      </section>

      {/* Work signal strip */}
      <section id="work" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10 flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <Kicker tone="gold">Selected work</Kicker>
            <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight max-w-2xl">
              Proof before philosophy.
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pl-6 md:pl-10 pr-6 md:pr-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((c, i) => (
            <li key={c.slug} className="snap-start shrink-0 w-56">
              <div
                className={`w-full h-36 mb-4 ${cardShapes[i % cardShapes.length]} ${toneSoftBgClass[c.tone]}`}
              />
              <h3 className="font-sans font-medium text-ink text-base leading-snug mb-1">
                {c.title}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.02em] text-ink-secondary">
                {c.scope}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Philosophy — Who I Am */}
      <section id="about" className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 grid gap-12 md:grid-cols-[1fr_240px]">
          <div>
            <Kicker tone="coral">About</Kicker>
            <h2 className="font-display font-normal text-ground text-3xl md:text-4xl leading-tight mb-6">
              Who I Am
            </h2>
            <div className="space-y-5 max-w-[60ch]">
              <p className="text-ground text-base leading-[1.75]">
                I came to service design through an unusually wide door. The
                path wasn&rsquo;t planned — it was followed, curiosity
                pulling me from one domain to the next until the pieces
                clicked into something that couldn&rsquo;t have been designed
                in advance. That breadth wasn&rsquo;t a detour. It&rsquo;s
                the foundation. I spent years working at the touchpoint
                level across physical, digital, and human channels, learning
                what it actually costs to execute an idea in the real world.
                That experience is what makes systems thinking useful rather
                than abstract.
              </p>
              <p className="text-ground text-base leading-[1.75]">
                My perspective is fed by fields well outside design —
                because the best frames for design problems usually come
                from somewhere else. I&rsquo;m genuinely at home in
                complexity and ambiguity — not as something to be managed
                down but as the terrain where the most interesting work
                happens. I hold the tension between seeing the full system
                and knowing when to set most of it aside to solve
                what&rsquo;s immediately in front of me.
              </p>
              <p className="text-ground text-base leading-[1.75]">
                At my best I&rsquo;m a builder and a player-coach. I find the
                most meaning in creating the conditions for service design
                to take root inside an organization — earning trust,
                establishing credibility, creating demand, and scaling from
                there. I&rsquo;ve done that twice in meaningful ways. I want
                to do it again, inside an enterprise, where the impact can
                compound over time.
              </p>
            </div>
            <blockquote className="font-display italic text-coral text-xl md:text-2xl leading-snug border-l-2 border-coral pl-6 mt-8 max-w-[52ch]">
              A lifelong Kansas City native. Architect wife, two daughters,
              one fast dog. Fueled by sci-fi, social science, strategy
              books, and Cap&rsquo;n Crunch.
            </blockquote>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.02em] text-ground/70 uppercase mb-4">
              Dimensions of practice
            </p>
            <ul className="font-mono text-[13px] leading-relaxed text-coral space-y-1.5">
              {dimensionsOfPractice.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I Lead */}
      <section id="how-i-lead" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Kicker tone="mint">Leadership</Kicker>
          <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight mb-8">
            How I Lead
          </h2>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPrinciples.map((p, i) => (
              <div key={p.title}>
                <span className="font-display font-normal text-ink-secondary text-3xl leading-none block mb-3">
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
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Kicker tone="mint">Background</Kicker>
          <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight mb-10">
            Experience
          </h2>
          <ol className="relative space-y-9 max-w-xl">
            {experience.map((role) => (
              <li key={`${role.company}-${role.dates}`} className="relative pl-8">
                <span className="absolute left-[-4px] top-[7px] w-[7px] h-[7px] rounded-full bg-mint" />
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

      {/* What I'm Looking For */}
      <section id="looking-for" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Kicker tone="lilac">What&rsquo;s next</Kicker>
          <h2 className="font-display font-normal text-ink text-3xl md:text-4xl leading-tight mb-6 max-w-2xl">
            What I&rsquo;m Looking For
          </h2>
          <div className="space-y-5 max-w-[68ch]">
            <p className="text-ink text-base leading-[1.75]">
              I want to build a service design practice that delivers real
              impact — to the business and to the people it serves. Work
              that ties mental models to business models, orchestrates
              across functions, and builds resilient systems for delivering
              products and services. A practice that&rsquo;s sustainable,
              high-performing, and evolving to meet a changing landscape.
              The right environment for that work is complex — regulated
              industries, multi-actor ecosystems, organizations where the
              hard problems are organizational as much as they are
              experiential.
            </p>
            <p className="text-ink text-base leading-[1.75]">
              The organizations I&rsquo;m drawn to share a few things.
              Executives who are genuinely invested in what design can do —
              not just supporting it in principle, but sponsoring the work
              in practice and honest enough about the organizational terrain
              to help navigate what&rsquo;s ahead. A recognition that design
              operates upstream of execution — a strategic capability, not a
              finishing detail. A culture where shared ownership, autonomy,
              curiosity, and experimentation are visible in how people work
              together, not just stated in how the company describes
              itself. And a leader worth learning from — a VP or CDO with a
              strong point of view — whose thinking challenges mine and
              whose example raises what&rsquo;s possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
