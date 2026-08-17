import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string; error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-silver)]">{label}</label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={clsx(
            "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition-colors focus:border-[var(--color-silver)] focus:outline-none",
            error && "border-red-400/70",
            className
          )}
          {...props}
        />
        {error && <p id={errorId} role="alert" className="text-xs text-red-300">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string; error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-silver)]">{label}</label>
        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          rows={3}
          className={clsx(
            "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition-colors focus:border-[var(--color-silver)] focus:outline-none",
            error && "border-red-400/70",
            className
          )}
          {...props}
        />
        {error && <p id={errorId} role="alert" className="text-xs text-red-300">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
