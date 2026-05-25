import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeProps = {
  className?: string;
  icon: LucideIcon;
  tone?: "green" | "aqua" | "berry" | "warm";
};

const toneClasses = {
  green: "bg-[rgba(36,179,115,0.12)] text-[var(--color-emerald-deep)]",
  aqua: "bg-[rgba(46,196,189,0.12)] text-[#148E8A]",
  berry: "bg-[rgba(247,92,148,0.13)] text-[#C9346E]",
  warm: "bg-[var(--color-soft-card)] text-[var(--color-emerald-dark)]",
};

export function IconBadge({ className, icon: Icon, tone = "green" }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex size-12 items-center justify-center rounded-2xl",
        toneClasses[tone],
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={2.2} />
    </span>
  );
}
