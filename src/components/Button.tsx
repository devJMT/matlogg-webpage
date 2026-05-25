import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  primary:
    "bg-[var(--color-emerald)] text-white hover:bg-[var(--color-emerald-deep)]",
  secondary:
    "bg-white text-[var(--color-text)] hover:bg-[var(--color-soft-card)]",
  ghost:
    "text-[var(--color-text-soft)] hover:bg-white/70 hover:text-[var(--color-emerald-dark)]",
};

const sizeClasses = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-[0.96rem]",
  lg: "min-h-14 px-6 text-base",
};

export function Button({
  children,
  className,
  disabled,
  href,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon aria-hidden="true" className="size-4" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? <Icon aria-hidden="true" className="size-4" /> : null}
    </>
  );

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200",
    "focus-visible:outline-none focus-visible:bg-[var(--color-emerald-deep)] focus-visible:text-white",
    "disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type} {...props}>
      {content}
    </button>
  );
}
