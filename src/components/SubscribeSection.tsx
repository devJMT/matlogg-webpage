"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { Mascot } from "@/components/Mascot";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!emailPattern.test(email.trim())) {
      setStatus("idle");
      setError("Skriv inn en gyldig e-postadresse.");
      return;
    }

    setStatus("loading");

    // TODO: Connect subscribe form to newsletter/backend provider.
    await new Promise((resolve) => setTimeout(resolve, 750));

    setStatus("success");
  }

  return (
    <section className="px-5 py-14 sm:px-6 md:py-20 lg:px-8" id="venteliste">
      <div className="mx-auto max-w-[1220px] overflow-hidden rounded-[2rem] bg-white p-6 md:p-10 lg:p-12">
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <Mascot className="mb-5" size="sm" />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-page)] px-4 py-2 text-sm font-bold text-[var(--color-text-soft)]">
              <Mail aria-hidden="true" className="size-4" />
              Venteliste
            </div>
            <h2 className="font-display text-4xl font-bold leading-tight text-[var(--color-text)] md:text-[2.75rem]">
              Få beskjed når Matlogg er klar
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-text-soft)] md:text-lg">
              Meld deg på ventelisten og få korte oppdateringer når appen og de ekte skjermbildene er klare.
            </p>
          </div>

          <form
            className="relative rounded-[1.5rem] bg-[var(--color-page)] p-4 md:p-5"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="waitlist-email">
                Din e-postadresse
              </label>
              <input
                aria-describedby={error ? "subscribe-error" : "subscribe-help"}
                aria-invalid={Boolean(error)}
                className="min-h-14 flex-1 rounded-full bg-white px-5 text-base font-semibold text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:bg-[var(--color-soft-card)]"
                disabled={status === "loading"}
                id="waitlist-email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                placeholder="Din e-postadresse"
                type="email"
                value={email}
              />
              <Button
                className="shrink-0"
                disabled={status === "loading"}
                icon={status === "success" ? CheckCircle2 : ArrowRight}
                size="lg"
                type="submit"
              >
                {status === "loading" ? "Melder på..." : "Meld meg på"}
              </Button>
            </div>
            <div aria-live="polite" className="mt-3 min-h-6 text-sm font-semibold">
              {error ? (
                <p className="text-[#c9346e]" id="subscribe-error">
                  {error}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="text-[var(--color-emerald-deep)]" id="subscribe-help">
                  Takk! Du er på listen.
                </p>
              ) : null}
              {!error && status !== "success" ? (
                <p className="text-[var(--color-text-soft)]" id="subscribe-help">
                  Ingen spam. Bare viktige oppdateringer.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
