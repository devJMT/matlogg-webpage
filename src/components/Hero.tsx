import { ArrowRight, CalendarDays, Droplets, Plus, Utensils } from "lucide-react";
import { Button } from "@/components/Button";
import { Mascot } from "@/components/Mascot";
import { PhoneMockup } from "@/components/PhoneMockup";

export function Hero() {
  return (
    <section className="px-5 pb-14 pt-8 sm:px-6 md:pb-20 lg:px-8">
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-[var(--color-text-soft)]">
            <span className="size-2 rounded-full bg-[var(--color-emerald)]" />
            Ny iOS-beta
          </div>

          <h1 className="font-display text-[3.05rem] font-bold leading-[1.02] text-[var(--color-text)] sm:text-6xl md:text-[4.8rem]">
            Matlogg dagbok for rolige matdager.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-soft)] md:text-xl md:leading-9">
            Hold oversikt over måltider, vann, kropp og rutiner i samme rolige appflyt.
            Skjermbildene under er rene plassholdere for ekte appbilder.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="w-full sm:w-auto" href="#venteliste" icon={ArrowRight} size="lg">
              Kom i gang
            </Button>
            <Button className="w-full sm:w-auto" href="#app-preview" size="lg" variant="secondary">
              Se skjermbilder
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Oversikt", text: "Dagstotal og måltider", icon: Utensils },
              { label: "Plan", text: "Uke og rutiner", icon: CalendarDays },
              { label: "Vann", text: "Små daglige mål", icon: Droplets },
            ].map((item) => (
              <div className="rounded-[1.35rem] bg-white p-4" key={item.label}>
                <item.icon aria-hidden="true" className="mb-3 size-5 text-[var(--color-emerald)]" />
                <p className="font-semibold text-[var(--color-text)]">{item.label}</p>
                <p className="mt-1 text-sm text-[var(--color-text-soft)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[610px] gap-4">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="rounded-[2rem] bg-white p-5">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-[var(--color-text-muted)]">Dagens flyt</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[var(--color-text)]">I dag</h2>
                </div>
                <Mascot size="sm" />
              </div>
              <div className="grid gap-3">
                {["Frokost", "Lunsj", "Middag"].map((meal, index) => (
                  <div className="flex items-center gap-4 rounded-[1.4rem] bg-[var(--color-page)] p-4" key={meal}>
                    <span className="grid size-12 place-items-center rounded-[1.1rem] bg-white text-[var(--color-emerald)]">
                      {index === 0 ? <Utensils aria-hidden="true" className="size-5" /> : null}
                      {index === 1 ? <Droplets aria-hidden="true" className="size-5" /> : null}
                      {index === 2 ? <CalendarDays aria-hidden="true" className="size-5" /> : null}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold text-[var(--color-text)]">{meal}</span>
                      <span className="block text-sm text-[var(--color-text-soft)]">Ekte appdata kommer senere</span>
                    </span>
                    <span className="grid size-10 place-items-center rounded-full bg-[#d8cfbd] text-[var(--color-text-soft)]">
                      <Plus aria-hidden="true" className="size-5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <PhoneMockup className="mx-auto w-[236px] sm:w-[252px]" label="Matlogg skjermbildeplassholder" variant="today" />
          </div>
        </div>
      </div>
    </section>
  );
}
