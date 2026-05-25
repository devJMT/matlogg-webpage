import { cn } from "@/lib/utils";

type MascotProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "size-16",
  md: "size-24",
  lg: "size-32",
};

export function Mascot({ className, size = "md" }: MascotProps) {
  return (
    <div
      aria-label="Matlogg maskot"
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full bg-[#fbf3cf]",
        sizeClasses[size],
        className,
      )}
      role="img"
    >
      <div className="relative size-[64%] rounded-full bg-[#ffc56f]">
        <span className="absolute left-[27%] top-[36%] size-[9%] rounded-full bg-[var(--color-text)]" />
        <span className="absolute right-[27%] top-[36%] size-[9%] rounded-full bg-[var(--color-text)]" />
        <span className="absolute left-[20%] top-[53%] size-[15%] rounded-full bg-[#f8a06d]/72" />
        <span className="absolute right-[20%] top-[53%] size-[15%] rounded-full bg-[#f8a06d]/72" />
        <span className="absolute left-[32%] top-[56%] h-[10%] w-[36%] rounded-full bg-[#ec5f94]" />
        <span className="absolute -right-[4%] top-[4%] h-[14%] w-[42%] rotate-[-35deg] rounded-full bg-[#49cdbf]" />
        <span className="absolute -left-[5%] top-[15%] text-[0.56rem] font-bold text-white">+</span>
      </div>
    </div>
  );
}
