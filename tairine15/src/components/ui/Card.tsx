import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_28px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6",
        className
      )}
      {...props}
    />
  );
}

export function SectionHeading({ eyebrow, title, className }: { eyebrow?: string; title: string; className?: string }) {
  return (
    <div className={clsx("mb-8 text-center sm:mb-10", className)}>
      {eyebrow && <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--color-silver)]/80 min-[390px]:tracking-[0.35em]">{eyebrow}</p>}
      <h2 className="font-serif text-[clamp(2rem,9vw,3rem)] leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[var(--color-silver)] to-transparent" />
    </div>
  );
}
