import { PARTY_COLORS_CONTENT } from "@/constants/content";
import { Reveal } from "@/components/animations/Reveal";

export function PartyColorsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(43,75,176,0.16),transparent_68%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-[var(--color-navy)]/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[var(--color-navy)]/35 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{PARTY_COLORS_CONTENT.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,10vw,3rem)] leading-tight text-white sm:text-5xl">{PARTY_COLORS_CONTENT.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-8">
          <Reveal direction="right" delay={0.1}>
            <div className="rounded-2xl border border-[var(--color-royal)]/40 bg-gradient-to-b from-[var(--color-royal)]/20 to-transparent p-5 sm:p-8">
              <h3 className="font-serif text-2xl text-white">{PARTY_COLORS_CONTENT.blue.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/70">{PARTY_COLORS_CONTENT.blue.meanings.map((m) => (<li key={m}>{m}</li>))}</ul>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <div className="rounded-2xl border border-[var(--color-silver)]/40 bg-gradient-to-b from-white/10 to-transparent p-5 sm:p-8">
              <h3 className="font-serif text-2xl text-white">{PARTY_COLORS_CONTENT.silver.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/70">{PARTY_COLORS_CONTENT.silver.meanings.map((m) => (<li key={m}>{m}</li>))}</ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.35} className="mt-8 sm:mt-12">
          <p className="font-script text-2xl leading-snug text-[var(--color-silver)] sm:text-3xl">&ldquo;{PARTY_COLORS_CONTENT.quote}&rdquo;</p>
        </Reveal>
      </div>
    </section>
  );
}
