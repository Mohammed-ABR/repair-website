"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { m, useReducedMotion } from "framer-motion";

import { getScrollRevealChildProps, getScrollRevealProps } from "@/components/scroll-reveal";
import { pageContainer, sectionIntro, sectionSubtitle, sectionTitle, sectionY } from "@/lib/layout-classes";

const vaatwasserGroups = [
  {
    brand: "Bosch / Siemens",
    codes: "E09, E15, E19, E20, E21, E22, E23–E25, E26, E28, E18, E08",
  },
  {
    brand: "Miele",
    codes: "F11, F12–F13, F14, F15, F24–F26, F32–F34, F51–F53, F63–F64, F69, F70",
  },
  {
    brand: "AEG / Electrolux / Zanussi / IKEA",
    codes: "I10, E10, I20, E20, I30, E30, I40–I44, I50–I54, I60–I61",
  },
] as const;

/** Wasmachine: afzonderlijke veelvoorkomende meldingen (niet identiek aan vaatwasser). */
const wasmachineGroups = [
  {
    brand: "Bosch / Siemens",
    codes: "E02, E13, E17, E18, E23, E29, E32, E33",
  },
  {
    brand: "Miele",
    codes: "F01, F11, F20, F42, F63, F65, F84",
  },
  {
    brand: "AEG / Electrolux / Zanussi / IKEA",
    codes: "E10, E11, E20, E21, E35, E40, E41, C2, I30",
  },
] as const;

const appliancePanels = [
  {
    id: "vaatwasser" as const,
    title: "Vaatwasser foutcodes",
    groups: vaatwasserGroups,
  },
  {
    id: "wasmachine" as const,
    title: "Wasmachine foutcodes",
    groups: wasmachineGroups,
  },
] as const;

export function FoutcodesSection() {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openKey, setOpenKey] = useState<(typeof appliancePanels)[number]["id"] | null>(null);

  return (
    <m.section className="border-b border-primary/10 bg-background" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={`${sectionIntro} mx-auto max-w-3xl`}>
          <h2 className={sectionTitle}>Veelvoorkomende foutcodes bij huishoudtoestellen</h2>
          <p className={sectionSubtitle}>Zie je een foutmelding? Wij helpen snel met diagnose en herstelling</p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-600 md:text-base">
            Veel klanten zoeken hulp bij{" "}
            <span className="whitespace-nowrap">foutcodes vaatwasser</span>, een{" "}
            <span className="whitespace-nowrap">wasmachine foutmelding</span>, een{" "}
            <span className="font-medium text-gray-800">Bosch E15 storing</span>, een{" "}
            <span className="font-medium text-gray-800">Miele F70 probleem</span> of andere codes — wij komen graag langs voor een correcte diagnose.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3 md:mt-14 md:space-y-4">
          {appliancePanels.map((panel, panelIndex) => {
            const isOpen = openKey === panel.id;
            const panelId = `${baseId}-${panel.id}-panel`;
            const btnId = `${baseId}-${panel.id}-btn`;

            return (
              <m.div
                key={panel.id}
                className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft-md ring-1 ring-primary/6"
                {...getScrollRevealChildProps(reduceMotion, panelIndex)}
              >
                <h3 className="text-base font-semibold leading-snug text-primary sm:text-lg">
                  <button
                    type="button"
                    id={btnId}
                    onClick={() => setOpenKey(isOpen ? null : panel.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-primary/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40 sm:px-5 sm:py-4.5"
                  >
                    <span className="min-w-0 pr-1">{panel.title}</span>
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
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="border-t border-primary/6"
                >
                  <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
                    {panel.groups.map((g) => (
                      <div key={`${panel.id}-${g.brand}`} className="space-y-1">
                        <p className="font-semibold text-black">{g.brand}</p>
                        <p className="text-sm text-gray-600">{g.codes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>

        <m.p
          className="mx-auto mt-10 max-w-xl text-center md:mt-12"
          {...getScrollRevealChildProps(reduceMotion, appliancePanels.length)}
        >
          <Link
            href="/contact"
            className="text-base font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
          >
            Probleem niet gevonden? Neem contact op
          </Link>
        </m.p>
      </div>
    </m.section>
  );
}
