"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BOOK_CONTENT, MEDIA_CONTENT } from "@/constants/content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Reveal } from "@/components/animations/Reveal";

export function BookSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center text-center md:grid-cols-2 md:gap-x-12">
        <Reveal className="md:col-start-2 md:row-start-1 md:self-end md:text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{BOOK_CONTENT.title}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-7 md:col-start-1 md:row-span-2 md:row-start-1 md:mt-0">
          <div className="relative mx-auto w-full max-w-[13rem] [perspective:900px] min-[390px]:max-w-[14.5rem] sm:max-w-[16rem] sm:[perspective:1200px] md:max-w-xs">
            <div className="absolute inset-x-8 bottom-1 h-8 rounded-full bg-[var(--color-royal)]/25 blur-xl sm:h-10 sm:blur-2xl" aria-hidden="true" />
            <motion.div
              className="relative aspect-[2/3] origin-center overflow-hidden rounded-[1.15rem] shadow-[0_18px_42px_rgba(0,0,0,0.36)] sm:shadow-[0_26px_60px_rgba(0,0,0,0.42)]"
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0], rotateY: [-3, 2, -3], rotateX: [1, -1, 1] }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.035, rotateY: 0, rotateX: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={MEDIA_CONTENT.images.coraline.src}
                alt={MEDIA_CONTENT.images.coraline.alt}
                fill
                sizes="(max-width: 390px) 208px, (max-width: 768px) 232px, 320px"
                className="object-contain"
              />
            </motion.div>
          </div>
        </Reveal>
        <Reveal direction="left" delay={0.2} className="mt-7 md:col-start-2 md:row-start-2 md:mt-2 md:self-start md:text-left">
          <h2 className="font-serif text-[clamp(2rem,10vw,2.5rem)] leading-tight text-white">{BOOK_CONTENT.bookName}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:mx-0 md:max-w-md">{BOOK_CONTENT.text}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {BOOK_CONTENT.themes.map((theme) => (<span key={theme} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">{theme}</span>))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
