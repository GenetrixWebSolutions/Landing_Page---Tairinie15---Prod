"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Direction = "up" | "down" | "left" | "right" | "none";
const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 }, down: { y: -28 }, left: { x: 24 }, right: { x: -24 }, none: {},
};

export function Reveal({
  children, direction = "up", delay = 0, duration = 0.8, className,
}: { children: ReactNode; direction?: Direction; delay?: number; duration?: number; className?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = OFFSETS[direction];

  if (prefersReducedMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
