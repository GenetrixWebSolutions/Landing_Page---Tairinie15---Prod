"use client";
import { useCountdown } from "@/hooks/useCountdown";
import { COUNTDOWN_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { Reveal } from "@/components/animations/Reveal";
import { Card } from "@/components/ui/Card";

export function CountdownSection() {
  const countdown = useCountdown(EVENT.partyDateISO);
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          {countdown.isPast ? (
            <h2 className="font-serif text-3xl text-white sm:text-4xl">{COUNTDOWN_CONTENT.pastTitle}</h2>
          ) : (
            <>
              <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em] sm:mb-8">{COUNTDOWN_CONTENT.title}</p>
              <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-4 sm:gap-6">
                {COUNTDOWN_CONTENT.units.map((unit) => (
                  <Card key={unit.key} className="py-4 sm:py-6">
                    <span className="font-serif text-3xl tabular-nums text-white sm:text-4xl">{String(countdown[unit.key]).padStart(2, "0")}</span>
                    <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{unit.label}</p>
                  </Card>
                ))}
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
