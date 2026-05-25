import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      aria-label="Matlogg hjem"
      className={cn("inline-flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:bg-white", className)}
      href="/"
    >
      <span className="grid size-10 place-items-center rounded-full bg-[var(--color-emerald)] text-sm font-bold text-white">
        ML
      </span>
      <span className="font-display text-[1.35rem] font-bold tracking-normal text-[var(--color-emerald)]">
        Matlogg
      </span>
    </Link>
  );
}
