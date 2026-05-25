import Image from "next/image";
import { CalendarDays, Camera, Home, Search, Settings, Utensils } from "lucide-react";
import { Mascot } from "@/components/Mascot";
import { cn } from "@/lib/utils";

export type PhoneVariant = "today" | "insight" | "mealPlan" | "profile";

type PhoneMockupProps = {
  className?: string;
  compact?: boolean;
  label?: string;
  screenshotSrc?: string;
  tilted?: "left" | "right" | "none";
  variant?: PhoneVariant;
};

const tiltClasses = {
  left: "rotate-[-2deg]",
  none: "rotate-0",
  right: "rotate-[2deg]",
};

const screenCopy: Record<PhoneVariant, { title: string; description: string }> = {
  insight: {
    title: "Mat-Detektiv",
    description: "Ekte innsikt-skjerm legges inn her",
  },
  mealPlan: {
    title: "Ukekalender",
    description: "Ekte matplan-skjerm legges inn her",
  },
  profile: {
    title: "Profil",
    description: "Ekte profil-skjerm legges inn her",
  },
  today: {
    title: "I dag",
    description: "Ekte dagsvisning legges inn her",
  },
};

export function PhoneMockup({
  className,
  compact = false,
  label = "Matlogg appskjerm",
  screenshotSrc,
  tilted = "none",
  variant = "today",
}: PhoneMockupProps) {
  return (
    <div
      aria-label={label}
      className={cn(
        "relative aspect-[9/19.5] w-[268px] rounded-[2.6rem] bg-[var(--color-soft-card)] p-3 transition-transform duration-300",
        compact && "w-[196px] rounded-[2.2rem] p-2",
        tiltClasses[tilted],
        className,
      )}
      role="img"
    >
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-[var(--color-page)]">
        {screenshotSrc ? (
          <Image
            alt={label}
            className="object-cover"
            fill
            priority={!compact}
            sizes={compact ? "196px" : "286px"}
            src={screenshotSrc}
          />
        ) : (
          <ScreenshotPlaceholder compact={compact} variant={variant} />
        )}
      </div>
    </div>
  );
}

function ScreenshotPlaceholder({ compact, variant }: { compact: boolean; variant: PhoneVariant }) {
  const copy = screenCopy[variant];

  return (
    <div className="flex h-full flex-col text-[var(--color-text)]">
      <div className={cn("flex items-center justify-between px-5 pt-5 text-sm font-bold", compact && "px-4 pt-4 text-[0.68rem]")}>
        <span>11:01</span>
        <span className="flex items-center gap-1">
          <span className="h-1 w-4 rounded-full bg-[rgba(38,50,40,0.2)]" />
          <span className="h-2 w-3 rounded-sm bg-[rgba(38,50,40,0.78)]" />
        </span>
      </div>

      <div className={cn("flex-1 px-5 pb-3 pt-7", compact && "px-3 pt-5")}>
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className={cn("text-2xl font-semibold leading-tight", compact && "text-lg")}>{copy.title}</h3>
          {variant === "profile" ? (
            <Settings aria-hidden="true" className={cn("size-6 text-[var(--color-text-soft)]", compact && "size-4")} />
          ) : null}
        </div>

        {variant === "profile" ? (
          <div className="mb-5 flex justify-center">
            <Mascot size={compact ? "sm" : "md"} />
          </div>
        ) : null}

        <div className="rounded-[1.35rem] bg-white p-4">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-[1.15rem] bg-[#dcf6ec] text-[var(--color-emerald)]">
              <Camera aria-hidden="true" className="size-5" />
            </span>
            <div className="min-w-0">
              <p className={cn("font-semibold leading-tight", compact && "text-[0.76rem]")}>Ekte appbilde</p>
              <p className={cn("mt-1 text-sm leading-5 text-[var(--color-text-soft)]", compact && "text-[0.62rem] leading-4")}>
                {copy.description}
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <span className="h-2 rounded-full bg-[var(--color-beige-track)]" />
            <span className="h-2 w-4/5 rounded-full bg-[var(--color-beige-track)]" />
            <span className="h-2 w-2/3 rounded-full bg-[var(--color-beige-track)]" />
          </div>
        </div>

        <div className={cn("mt-4 grid gap-3", compact && "gap-2")}>
          {[
            ["#dcf6ec", "w-10/12"],
            ["#e5f0ff", "w-8/12"],
            ["#eee8ff", "w-9/12"],
          ].map(([color, width], index) => (
            <div className="flex items-center gap-3 rounded-[1.15rem] bg-white px-3 py-3" key={index}>
              <span className="size-8 rounded-[1rem]" style={{ backgroundColor: color }} />
              <span className={cn("h-2 rounded-full bg-[var(--color-beige-track)]", width)} />
            </div>
          ))}
        </div>
      </div>

      <div className={cn("mx-4 mb-4 grid grid-cols-5 gap-1 rounded-[2rem] bg-white p-2", compact && "mx-3 mb-3 rounded-3xl p-1.5")}>
        {[Home, CalendarDays, Utensils, Search, Settings].map((Icon, index) => (
          <span
            className={cn(
              "grid aspect-square place-items-center rounded-full text-[var(--color-text-muted)]",
              index === 2 && "bg-[var(--color-emerald)] text-white",
            )}
            key={index}
          >
            <Icon aria-hidden="true" className={cn("size-4", compact && "size-3.5")} />
          </span>
        ))}
      </div>
    </div>
  );
}
