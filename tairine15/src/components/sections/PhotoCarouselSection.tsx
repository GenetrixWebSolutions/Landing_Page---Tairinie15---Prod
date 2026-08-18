"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type PanInfo } from "framer-motion";
import { GALLERY_CONTENT, GALLERY_IMAGES } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

const PHOTO_CHANGE_INTERVAL_MS = 4800;
const SWIPE_THRESHOLD = 48;

const CARD_STATES = [
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 3 },
  { x: 24, y: 15, rotate: 4.5, scale: 0.965, opacity: 0.82, zIndex: 2 },
  { x: -22, y: 25, rotate: -4, scale: 0.93, opacity: 0.58, zIndex: 1 },
] as const;

export function PhotoCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  function showNext() {
    setActiveIndex((current) => (current + 1) % GALLERY_IMAGES.length);
  }

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }

  useEffect(() => {
    if (prefersReducedMotion || isInteracting) return;

    const interval = window.setInterval(showNext, PHOTO_CHANGE_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [isInteracting, prefersReducedMotion]);

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    setIsInteracting(false);
    if (info.offset.x <= -SWIPE_THRESHOLD) showNext();
    if (info.offset.x >= SWIPE_THRESHOLD) showPrevious();
  }

  return (
    <section id={SECTION_IDS.gallery} className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={GALLERY_CONTENT.eyebrow} title={GALLERY_CONTENT.title} />
        <Reveal>
          <div
            className="relative mx-auto mt-9 h-[25rem] w-full max-w-[18rem] [perspective:1200px] min-[390px]:h-[28rem] min-[390px]:max-w-[20rem] sm:mt-12 sm:h-[34rem] sm:max-w-[25rem]"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
          >
            <div className="absolute inset-x-8 bottom-2 h-16 rounded-full bg-[var(--color-royal)]/25 blur-3xl" aria-hidden="true" />
            {GALLERY_IMAGES.map((image, imageIndex) => {
              const position = (imageIndex - activeIndex + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
              const isVisible = position < CARD_STATES.length;
              const isActive = position === 0;
              const state = isVisible ? CARD_STATES[position] : { x: 0, y: 42, rotate: 0, scale: 0.88, opacity: 0, zIndex: 0 };

              return (
                <motion.figure
                  key={image.src}
                  className="absolute inset-0 overflow-hidden rounded-[1.65rem] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(199,208,224,0.045))] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.38)] sm:rounded-[2rem] sm:p-2"
                  animate={state}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
                  drag={isActive && !prefersReducedMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  onDragStart={() => setIsInteracting(true)}
                  onDragEnd={handleDragEnd}
                  onClick={isActive ? showNext : undefined}
                  role={isActive ? "button" : undefined}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={isActive ? (event) => {
                    if (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      showNext();
                    }
                    if (event.key === "ArrowLeft") {
                      event.preventDefault();
                      showPrevious();
                    }
                  } : undefined}
                  aria-label={isActive ? `${image.alt}. Toque ou deslize para trocar a fotografia.` : undefined}
                  aria-hidden={!isActive}
                  style={{ pointerEvents: isActive ? "auto" : "none", transformStyle: "preserve-3d" }}
                >
                  <div className="relative h-full overflow-hidden rounded-[1.35rem] sm:rounded-[1.65rem]">
                    <Image
                      src={image.src}
                      alt={isActive ? image.alt : ""}
                      fill
                      priority={imageIndex === 0}
                      sizes="(max-width: 390px) 288px, (max-width: 640px) 320px, 400px"
                      className="object-cover"
                      style={{ objectPosition: image.objectPosition }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/30 via-transparent to-white/[0.04]" />
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-6 text-center sm:mt-8">
          <p className="font-script text-2xl text-[var(--color-silver)]/80 sm:text-3xl">Memórias que guardo com carinho</p>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.22em] text-white/35">Toque ou deslize para descobrir</p>
        </Reveal>
      </div>
    </section>
  );
}
