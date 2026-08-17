"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RSVP_CTA_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { SECTION_IDS } from "@/constants/navigation";
import { SectionHeading, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

const FORM_HEIGHT_PX = 979;

export function RsvpCallToActionSection() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  function openForm() {
    setIsFormLoading(true);
    setIsFormOpen(true);
    window.setTimeout(() => {
      formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section id={SECTION_IDS.rsvp} className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={RSVP_CTA_CONTENT.eyebrow} title={RSVP_CTA_CONTENT.title} />
        <Reveal>
          <Card className="text-center">
            <p className="mx-auto max-w-md text-base leading-relaxed text-white/80">{RSVP_CTA_CONTENT.message}</p>

            <div className="mx-auto mt-8 grid w-full max-w-sm gap-3">
              {!isFormOpen ? (
                <Button size="lg" className="w-full" onClick={openForm}>
                  {RSVP_CTA_CONTENT.buttonLabel}
                </Button>
              ) : (
                <Button size="md" variant="secondary" className="w-full" onClick={closeForm}>
                  {RSVP_CTA_CONTENT.closeFormLabel}
                </Button>
              )}
            </div>

            <AnimatePresence initial={false}>
              {isFormOpen && (
                <motion.div
                  key="google-form"
                  ref={formContainerRef}
                  initial={{ opacity: 0, height: 0, y: 12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 8 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03] shadow-[0_14px_34px_rgba(0,0,0,0.22)]">
                    {isFormLoading && (
                      <div className="absolute inset-x-0 top-0 z-10 flex min-h-16 items-center justify-center bg-[var(--color-navy)]/92 px-4 text-sm text-white/60 backdrop-blur-sm">
                        {RSVP_CTA_CONTENT.formLoadingLabel}
                      </div>
                    )}
                    <iframe
                      src={EVENT.rsvp.googleForms.embedUrl}
                      title={RSVP_CTA_CONTENT.iframeTitle}
                      loading="lazy"
                      onLoad={() => setIsFormLoading(false)}
                      className="block w-full border-0 bg-white"
                      style={{ minHeight: FORM_HEIGHT_PX }}
                    >
                      {RSVP_CTA_CONTENT.formLoadingLabel}
                    </iframe>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6">
              <a
                href={EVENT.rsvp.googleForms.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-silver)]/80 underline underline-offset-4 transition hover:text-white"
              >
                {RSVP_CTA_CONTENT.externalFormLabel}
              </a>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
