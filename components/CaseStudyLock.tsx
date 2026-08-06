import { Kicker } from "@/components/Kicker";
import { LockIcon } from "@/components/LockIcon";
import { toneTextClass, type Tone } from "@/components/tone";
import { unlockCaseStudy } from "@/lib/case-auth";

export function CaseStudyLock({
  slug,
  title,
  tone,
  hasError,
}: {
  slug: string;
  title: string;
  tone: Tone;
  hasError: boolean;
}) {
  return (
    <main className="flex-1 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Kicker tone={tone}>Case study</Kicker>
        <h1
          className={`font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6 max-w-2xl ${toneTextClass[tone]}`}
        >
          {title}
        </h1>
        <div className="flex items-center gap-2 mb-6 text-ink-secondary">
          <LockIcon className="w-4 h-4" />
          <p className="font-mono text-xs uppercase tracking-[0.08em]">
            Password protected
          </p>
        </div>
        <form action={unlockCaseStudy} className="max-w-sm space-y-4">
          <input type="hidden" name="slug" value={slug} />
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              required
              placeholder="Enter password"
              className="w-full font-sans text-base text-ink bg-panel border border-ink-secondary/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>
          {hasError && (
            <p className="font-sans text-sm text-orange">
              That password didn&rsquo;t work — try again.
            </p>
          )}
          <button
            type="submit"
            className="font-sans text-sm font-medium text-ground bg-teal rounded-lg px-5 py-3 hover:opacity-90 transition-opacity"
          >
            View case study
          </button>
        </form>
      </div>
    </main>
  );
}
