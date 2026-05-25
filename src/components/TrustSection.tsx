import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { Mascot } from "@/components/Mascot";
import { Section } from "@/components/Section";
import { privacyBadges, trustPoints } from "@/lib/constants";

export function TrustSection() {
  return (
    <Section className="py-10 md:py-16" id="personvern">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#fffaf1] p-6 md:p-10 lg:p-12">
        <div className="relative grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Mascot className="mb-6" size="md" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-emerald-deep)]">
              Personvern
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-[var(--color-text)] md:text-[2.7rem]">
              Bygget på tillit. For deg.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-text-soft)] md:text-lg">
              Matlogg skal være et trygt sted for egen oversikt. Du bestemmer hva du logger og
              hva du vil bruke det til.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {privacyBadges.map((badge) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-bold text-[var(--color-emerald-dark)]"
                  key={badge.label}
                >
                  <badge.icon aria-hidden="true" className="size-4 text-[var(--color-emerald)]" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trustPoints.map((point, index) => (
              <Card className="bg-white/88" key={point.title} padding="md">
                <IconBadge icon={point.icon} tone={index === 1 ? "aqua" : "green"} />
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--color-text)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">{point.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
