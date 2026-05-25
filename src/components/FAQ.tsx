"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/Section";
import { faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" title="Ofte stilte spørsmål">
      <div className="mx-auto grid max-w-4xl gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div className="rounded-[24px] bg-white" key={faq.question}>
              <button
                aria-controls={`faq-answer-${index}`}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 rounded-[24px] px-5 py-5 text-left focus-visible:bg-[var(--color-soft-card)] focus-visible:outline-none md:px-6"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span className="font-display text-lg font-bold text-[var(--color-text)] md:text-xl">
                  {faq.question}
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[rgba(36,179,115,0.1)] text-[var(--color-emerald-deep)]">
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                  />
                </span>
              </button>
              {isOpen ? (
                <div className="px-5 pb-5 pt-0 md:px-6" id={`faq-answer-${index}`}>
                  <p className="max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
                    {faq.answer}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
