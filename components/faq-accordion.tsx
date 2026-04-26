"use client";

import { useId, useState } from "react";

export type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  heading: string;
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ heading, items, className = "" }: FaqAccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={className} aria-labelledby={`${baseId}-title`}>
      <h2
        id={`${baseId}-title`}
        className="text-balance text-center text-xl font-bold tracking-tight text-primary sm:text-2xl"
      >
        {heading}
      </h2>
      <div className="mt-5 space-y-2 sm:mt-6">
        {items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-btn-${i}`;

          return (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm shadow-slate-900/4"
            >
              <h3 className="text-base font-semibold leading-snug sm:text-lg">
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left text-primary transition-colors hover:bg-primary/3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40 sm:px-5 sm:py-4.5"
                >
                  <span className="min-w-0 pr-1">{item.question}</span>
                  <span
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="border-t border-primary/6 px-4 pb-4 pt-0 sm:px-5"
              >
                <p className="pt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
