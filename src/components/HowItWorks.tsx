import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { Section } from "@/components/Section";
import { steps } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section
      className="relative"
      id="slik-fungerer-det"
      title="Slik fungerer det"
    >
      <div className="relative">
        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card className="relative z-10" key={step.title} padding="lg">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-full bg-[var(--color-emerald)] font-display text-xl font-bold text-white">
                  {index + 1}
                </span>
                <IconBadge className="size-11" icon={step.icon} tone={index === 1 ? "aqua" : "green"} />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">{step.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
