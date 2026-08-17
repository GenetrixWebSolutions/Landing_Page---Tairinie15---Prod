"use client";
import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Star { id: number; top: string; left: string; size: number; delay: string; duration: string; }

export function StarfieldBackground({ count = 60 }: { count?: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const stars = useMemo<Star[]>(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: `${Math.random() * 6}s`,
      duration: `${3 + Math.random() * 4}s`,
    })),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--color-navy)_0%,_#050914_60%,_#02040a_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,90,180,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(150,170,210,0.12),transparent_50%)]" />
      {stars.map((star) => (
        <span
          key={star.id}
          className={prefersReducedMotion ? "absolute rounded-full bg-white/70" : "absolute rounded-full bg-white/70 animate-twinkle"}
          style={{ top: star.top, left: star.left, width: star.size, height: star.size, animationDelay: star.delay, animationDuration: star.duration }}
        />
      ))}
    </div>
  );
}
