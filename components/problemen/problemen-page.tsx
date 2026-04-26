import type { FC } from "react";
import Link from "next/link";

import { buttonPrimary } from "@/lib/button-classes";
import { cardBody, innerPageY, pageContainer, pageTitle } from "@/lib/layout-classes";

function IconWashingMachine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M7 5h10" strokeLinecap="round" />
    </svg>
  );
}

function IconDishwasher({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M7 7h4M7 11h4M7 15h3" strokeLinecap="round" />
      <circle cx="16.5" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconDryer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M8 7h.01M8 4.5V6" strokeLinecap="round" />
    </svg>
  );
}

function IconFridge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M5 9h14" />
      <path d="M12 9v12" />
      <circle cx="16" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function IconOven({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <rect x="7" y="6" width="10" height="8" rx="1" />
      <path d="M7 18h6" strokeLinecap="round" />
    </svg>
  );
}

function IconMicrowave({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <rect x="6" y="8" width="10" height="8" rx="0.5" />
      <path d="M18 10h1.5M18 13h1.5M18 16h1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckLine() {
  return (
    <span
      className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
      aria-hidden
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m2.5 6 2 2L9.5 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const devices: {
  id: string;
  title: string;
  problems: readonly string[];
  Icon: FC<{ className?: string }>;
}[] = [
  {
    id: "wasmachine",
    title: "Wasmachine",
    problems: ["Start niet", "Lekt water", "Maakt lawaai"],
    Icon: IconWashingMachine,
  },
  {
    id: "vaatwasser",
    title: "Vaatwasser",
    problems: ["Reinigt niet goed", "Water blijft staan", "Start niet"],
    Icon: IconDishwasher,
  },
  {
    id: "droogkast",
    title: "Droogkast",
    problems: ["Droogt niet", "Maakt lawaai"],
    Icon: IconDryer,
  },
  {
    id: "koelkast",
    title: "Koelkast",
    problems: ["Koelt niet", "Maakt geluid"],
    Icon: IconFridge,
  },
  {
    id: "oven",
    title: "Oven",
    problems: ["Wordt niet warm"],
    Icon: IconOven,
  },
  {
    id: "microgolf",
    title: "Microgolf",
    problems: ["Werkt niet"],
    Icon: IconMicrowave,
  },
];

export function ProblemenPage() {
  return (
    <main>
      <div className={`${pageContainer} ${innerPageY}`}>
        <header className="max-w-2xl">
          <h1 className={pageTitle}>Veelvoorkomende problemen</h1>
          <p className={`${cardBody} mt-5 max-w-xl text-base sm:text-[1.05rem]`}>
            Herkent u symptomen aan uw toestel? Wij komen ter plaatse voor een duidelijke diagnose en een professioneel
            herstel — zonder verrassingen achteraf.
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-4 p-0 sm:mt-14 md:grid-cols-2 md:gap-6 lg:mt-16 lg:grid-cols-3">
          {devices.map(({ id, title, problems, Icon }) => (
            <li key={id}>
              <article className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-4 shadow-sm ring-1 ring-primary/5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/6 text-primary ring-1 ring-primary/10">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="text-pretty text-lg font-semibold leading-tight text-primary sm:text-xl">{title}</h2>
                </div>
                <ul className="mt-4 space-y-2.5 border-t border-primary/8 pt-4">
                  {problems.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2.5 wrap-break-word text-left text-sm font-medium leading-snug text-[#374151] sm:text-[0.95rem]"
                    >
                      <CheckLine />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-primary/10 bg-primary/3 p-6 text-center sm:mt-16 sm:p-8">
          <p className="text-base font-medium text-primary sm:text-lg">Wilt u een afspraak of meer uitleg?</p>
          <p className="mt-2 text-sm leading-relaxed text-[#374151] sm:text-base">
            Vraag eenvoudig een herstelling aan — wij reageren snel.
          </p>
          <div className="mt-6">
            <Link
              href="/herstelling-aanvragen"
              className={`${buttonPrimary} inline-flex min-h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold sm:w-auto sm:text-base`}
            >
              Herstelling aanvragen
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
