import { PARTY_COLORS_CONTENT } from "@/constants/content";
import { Reveal } from "@/components/animations/Reveal";

export function PartyColorsSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="absolute -inset-y-32 inset-x-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(43,75,176,0.14),transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{PARTY_COLORS_CONTENT.eyebrow}</p>
          <h2 className="font-serif text-[clamp(2rem,10vw,3rem)] leading-tight text-white sm:text-5xl">{PARTY_COLORS_CONTENT.title}</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:hidden">
          <Reveal direction="right" delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-royal)]/40 bg-gradient-to-b from-[var(--color-royal)]/30 to-[var(--color-royal)]/5 px-3 py-5">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--color-royal)]/30 blur-2xl" aria-hidden="true" />
              <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-white/20 bg-[var(--color-royal)] shadow-[0_0_24px_rgba(43,75,176,0.65)]" aria-hidden="true" />
              <h3 className="font-serif text-xl text-white">{PARTY_COLORS_CONTENT.blue.name}</h3>
              <ul className="mt-2 space-y-1 text-xs leading-relaxed text-white/65">{PARTY_COLORS_CONTENT.blue.meanings.map((m) => (<li key={m}>{m}</li>))}</ul>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-silver)]/35 bg-gradient-to-b from-white/[0.13] to-white/[0.025] px-3 py-5">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-white/15 blur-2xl" aria-hidden="true" />
              <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-white/45 bg-[linear-gradient(145deg,#f4f6fa,#929db1)] shadow-[0_0_24px_rgba(199,208,224,0.4)]" aria-hidden="true" />
              <h3 className="font-serif text-xl text-white">{PARTY_COLORS_CONTENT.silver.name}</h3>
              <ul className="mt-2 space-y-1 text-xs leading-relaxed text-white/65">{PARTY_COLORS_CONTENT.silver.meanings.map((m) => (<li key={m}>{m}</li>))}</ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-12 hidden grid-cols-2 gap-8 sm:grid">
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
