"use client";
import { useState } from "react";
import { LEGACY_GIFTS_CONTENT } from "@/constants/content";
import { EVENT } from "@/constants/event";
import { SectionHeading, Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";

export function GiftsSection() {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EVENT.legacyGifts.pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  }
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={LEGACY_GIFTS_CONTENT.title} />
        <Reveal>
          <Card className="text-center">
            <p className="text-white/85">{EVENT.legacyGifts.mainMessage}</p>
            <div className="mt-6 flex flex-col items-center gap-2">
              <p className="text-xs uppercase tracking-wider text-white/50">{LEGACY_GIFTS_CONTENT.pixLabel}</p>
              <p className="font-mono text-white">{EVENT.legacyGifts.pixKey}</p>
              <Button variant="secondary" size="md" onClick={handleCopy} className="mt-2">
                {copied ? LEGACY_GIFTS_CONTENT.copiedButtonLabel : LEGACY_GIFTS_CONTENT.copyButtonLabel}
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
