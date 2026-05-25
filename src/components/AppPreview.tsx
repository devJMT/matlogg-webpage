import { Card } from "@/components/Card";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Section } from "@/components/Section";
import { previewScreens } from "@/lib/constants";

export function AppPreview() {
  return (
    <Section
      description="Ingen oppdiktede appbilder her. Disse rammene er satt opp så du kan legge inn faktiske screenshots fra appen."
      id="app-preview"
      title="Plass til ekte appskjermer"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {previewScreens.map((screen) => (
          <Card
            className="flex min-h-[520px] flex-col items-center justify-between overflow-hidden bg-white text-center"
            hover
            key={screen.title}
            padding="lg"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-text)]">{screen.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-[var(--color-text-soft)]">
                {screen.text}
              </p>
            </div>
            <div className="relative mt-7 flex min-h-[330px] w-full items-end justify-center">
              <PhoneMockup
                className="relative z-10 w-[190px]"
                compact
                label={`Matlogg ${screen.title}-skjerm`}
                variant={screen.variant}
              />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
