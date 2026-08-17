"use client";
import { motion } from "framer-motion";
import { HERO_CONTENT, INVITATION_CONTENT } from "@/constants/content";
import { Button } from "@/components/ui/Button";

export function InvitationGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_#101d45_0%,_#050914_75%)] px-4 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-center sm:px-6"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col items-center gap-8"
      >
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-silver)]/60"
          animate={{ boxShadow: ["0 0 0px rgba(199,208,224,0.2)", "0 0 40px rgba(199,208,224,0.5)", "0 0 0px rgba(199,208,224,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="font-script text-2xl text-[var(--color-silver)]">{INVITATION_CONTENT.gateInitial}</span>
        </motion.div>
        <div>
          <h1 className="font-serif text-[clamp(2.25rem,12vw,3rem)] leading-tight text-white sm:text-5xl">{HERO_CONTENT.title}</h1>
          <p className="mt-3 max-w-md text-sm text-[var(--color-silver)] sm:text-base">{HERO_CONTENT.subtitle}</p>
        </div>
        <Button size="lg" onClick={onOpen}>{INVITATION_CONTENT.openButtonLabel}</Button>
      </motion.div>
    </motion.div>
  );
}
