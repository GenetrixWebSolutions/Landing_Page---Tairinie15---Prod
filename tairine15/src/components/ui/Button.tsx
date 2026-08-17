import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-silver)] disabled:cursor-not-allowed disabled:opacity-50",
          size === "md" ? "px-5 py-3 text-sm sm:px-6" : "px-7 py-3.5 text-base sm:px-8 sm:py-4",
          variant === "primary" &&
            "bg-gradient-to-r from-[var(--color-royal)] to-[var(--color-navy)] text-white shadow-[0_0_25px_rgba(59,90,180,0.35)] hover:shadow-[0_0_35px_rgba(59,90,180,0.55)] hover:scale-[1.02]",
          variant === "secondary" &&
            "border border-[var(--color-silver)]/50 bg-white/5 text-[var(--color-silver)] backdrop-blur-sm hover:bg-white/10 hover:border-[var(--color-silver)]",
          variant === "ghost" && "text-[var(--color-silver)] hover:text-white",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
