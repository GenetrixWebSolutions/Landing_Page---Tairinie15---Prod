"use client";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { GALLERY_CONTENT, GALLERY_IMAGES } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SectionHeading } from "@/components/ui/Card";
import { Reveal } from "@/components/animations/Reveal";

const GALLERY_SPEED_PIXELS_PER_SECOND = 26;

function wrapTrackX(value: number, loopWidth: number) {
  if (loopWidth <= 0) return value;

  let wrapped = value;
  while (wrapped <= -loopWidth) wrapped += loopWidth;
  while (wrapped > 0) wrapped -= loopWidth;
  return wrapped;
}

export function PhotoCarouselSection() {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const trackX = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const firstSet = firstSetRef.current;
    if (!firstSet) return;

    function updateLoopWidth() {
      const currentFirstSet = firstSetRef.current;
      if (!currentFirstSet) return;

      const width = currentFirstSet.getBoundingClientRect().width;
      setLoopWidth(width);
      trackX.set(wrapTrackX(trackX.get(), width));
    }

    updateLoopWidth();

    const resizeObserver = new ResizeObserver(updateLoopWidth);
    resizeObserver.observe(firstSet);
    window.addEventListener("resize", updateLoopWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLoopWidth);
    };
  }, [trackX]);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion || isDragging || loopWidth <= 0) return;

    const distance = (GALLERY_SPEED_PIXELS_PER_SECOND * delta) / 1000;
    trackX.set(wrapTrackX(trackX.get() - distance, loopWidth));
  });

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const step = Math.min(loopWidth / GALLERY_IMAGES.length, 340);
    trackX.set(wrapTrackX(trackX.get() - direction * step, loopWidth));
  }

  const carouselGroups = prefersReducedMotion ? [GALLERY_IMAGES] : [GALLERY_IMAGES, GALLERY_IMAGES];

  return (
    <section id={SECTION_IDS.gallery} className="px-4 py-16 [overflow-x:clip] [overflow-y:visible] sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={GALLERY_CONTENT.eyebrow} title={GALLERY_CONTENT.title} />
        <Reveal>
          <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative -mx-4 py-10 outline-none [overflow-x:clip] [overflow-y:visible] focus-visible:ring-2 focus-visible:ring-[var(--color-silver)]/60 sm:-mx-8 sm:py-12"
            aria-label={GALLERY_CONTENT.title}
            style={{ touchAction: "pan-y" }}
          >
            <motion.div
              data-gallery-track
              className="flex w-max cursor-grab active:cursor-grabbing"
              style={{ x: prefersReducedMotion ? 0 : trackX }}
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: -loopWidth, right: 0 }}
              dragDirectionLock
              dragElastic={0.04}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => {
                trackX.set(wrapTrackX(trackX.get(), loopWidth));
                setIsDragging(false);
              }}
            >
              {carouselGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  ref={groupIndex === 0 ? firstSetRef : undefined}
                  className="flex shrink-0 gap-4 px-4 sm:gap-5 sm:px-8"
                  aria-hidden={groupIndex > 0}
                >
                  {group.map((image, imageIndex) => (
                    <motion.figure
                      key={`${groupIndex}-${image.src}`}
                      data-gallery-card
                      data-gallery-src={image.src}
                      className="relative h-[20rem] w-[76vw] max-w-[18rem] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] shadow-[0_16px_36px_rgba(0,0,0,0.24)] min-[390px]:h-[22rem] min-[390px]:w-[72vw] sm:h-[24rem] sm:w-[20rem] sm:max-w-[21rem] md:h-[28rem]"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -6, zIndex: 20 }}
                      viewport={{ once: false, amount: 0.35, margin: "-10% 0px -10% 0px" }}
                      transition={{ duration: 0.55, delay: imageIndex * 0.04 }}
                    >
                      <Image
                        src={image.src}
                        alt={groupIndex > 0 ? "" : image.alt}
                        fill
                        sizes="(max-width: 390px) 76vw, (max-width: 640px) 72vw, 320px"
                        className="object-cover"
                        style={{ objectPosition: image.objectPosition }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/30 via-transparent to-transparent" />
                    </motion.figure>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
