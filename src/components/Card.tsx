import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
} & HTMLAttributes<HTMLDivElement>;

const paddingClasses = {
  sm: "p-5",
  md: "p-6",
  lg: "p-7 md:p-8",
};

export function Card({ children, className, hover = false, padding = "md", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] bg-white",
        paddingClasses[padding],
        hover && "transition duration-300 motion-safe:hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
