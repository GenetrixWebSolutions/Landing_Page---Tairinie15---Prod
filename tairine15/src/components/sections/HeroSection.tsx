"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT, MEDIA_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { SECTION_IDS, SECTION_LINKS, scrollToSection } from "@/constants/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Button } from "@/components/ui/Button";

const HERO_SWAP_INTERVAL_MS = 5000;

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const date = new Date(EVENT.partyDateISO);
  const formattedDate = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  const formattedTime = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActivePhotoIndex((current) => (current + 1) % MEDIA_CONTENT.images.heroCards.length);
    }, HERO_SWAP_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section id={SECTION_IDS.hero} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-10 pt-[calc(env(safe-area-inset-top)+5.25rem)] sm:px-6 sm:pb-12 sm:pt-28 md:min-h-screen md:pb-0">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center_top,_rgba(43,75,176,0.25),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.45, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="text-center md:text-left"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.34em]">{HERO_CONTENT.eyebrow}</p>
          <h1 className="font-serif text-[clamp(2.5rem,13vw,3.75rem)] leading-[1.05] text-white sm:text-6xl">{HERO_CONTENT.title}</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-[var(--color-silver)] sm:text-lg md:mx-0">{HERO_CONTENT.subtitle}</p>
          <div className="mt-5 flex flex-col gap-1 text-sm text-white/70 sm:mt-6">
            <span>{formattedDate} às {formattedTime}</span>
            <span>{EVENT.venueName} — {EVENT.cityState}</span>
          </div>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.45, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="relative mx-auto h-[18.5rem] w-full max-w-[15.5rem] min-[360px]:h-[20.5rem] min-[360px]:max-w-[16.5rem] min-[390px]:h-[22.5rem] min-[390px]:max-w-[18rem] sm:h-[32rem] sm:max-w-sm md:col-start-2 md:row-span-2 md:row-start-1 md:h-[34rem]"
        >
          {MEDIA_CONTENT.images.heroCards.map((photo, index) => {
            const isActive = index === activePhotoIndex;
            const inactiveOffset = index === 0 ? { x: -14, y: -10, rotate: -2 } : { x: 14, y: 12, rotate: 2 };
            return (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setActivePhotoIndex(index)}
                aria-label={`Destacar ${photo.alt}`}
                className="absolute inset-0 cursor-pointer rounded-[1.5rem] border border-white/15 bg-transparent p-0 text-left shadow-[0_18px_45px_rgba(43,75,176,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-silver)] sm:rounded-[2rem] sm:shadow-[0_0_60px_rgba(43,75,176,0.35)]"
                animate={
                  isActive
                    ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 2 }
                    : { ...inactiveOffset, scale: 0.94, opacity: 0.86, zIndex: 1 }
                }
                whileHover={prefersReducedMotion ? undefined : { y: isActive ? -5 : inactiveOffset.y - 5 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="relative block h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 390px) 280px, (max-width: 768px) 320px, 400px"
                    className="object-cover"
                    style={{ objectPosition: photo.objectPosition }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent" />
                </span>
              </motion.button>
            );
          })}
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="mx-auto grid w-full max-w-xs gap-3 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4 md:col-start-1 md:row-start-2 md:mx-0 md:justify-start md:self-start"
        >
          <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection(SECTION_LINKS.rsvp)}>{HERO_CONTENT.primaryButtonLabel}</Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => scrollToSection(SECTION_LINKS.about)}>{HERO_CONTENT.secondaryButtonLabel}</Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/50 sm:block"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
