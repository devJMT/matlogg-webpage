import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { Section } from "@/components/Section";
import { featureCards } from "@/lib/constants";

const accentMap = {
  aqua: "aqua",
  berry: "berry",
  green: "green",
} as const;

export function FeatureGrid() {
  return (
    <Section id="funksjoner" title="Alt du trenger for å forstå hverdagen bedre">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((feature) => (
          <Card className="group min-h-[230px]" hover key={feature.title} padding="lg">
            <IconBadge icon={feature.icon} tone={accentMap[feature.accent]} />
            <h3 className="mt-6 font-display text-2xl font-bold text-[var(--color-text)]">
              {feature.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">{feature.text}</p>
            <div className="mt-6 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,var(--color-emerald),var(--color-aqua))] opacity-70 transition group-hover:w-24" />
          </Card>
        ))}
      </div>
    </Section>
  );
}
