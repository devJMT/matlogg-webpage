import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  id?: string;
  title?: string;
  titleClassName?: string;
};

export function Section({
  children,
  className,
  description,
  eyebrow,
  id,
  title,
  titleClassName,
}: SectionProps) {
  return (
    <section className={cn("py-14 md:py-20", className)} id={id}>
      <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8">
        {title ? (
          <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
            {eyebrow ? (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-emerald-deep)]">
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={cn(
                "font-display text-4xl font-bold leading-tight tracking-normal text-[var(--color-text)] md:text-[2.7rem]",
                titleClassName,
              )}
            >
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
