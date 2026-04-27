"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";

import { pageContainer } from "@/lib/layout-classes";
import { immersivePhoto } from "@/lib/image-presets";

const ease = [0.22, 1, 0.36, 1] as const;
const sectionSpacing = "py-10 md:py-16 lg:py-20";
const headingClass = "break-words text-xl font-bold tracking-tight text-primary md:text-3xl";
const bodyClass = "break-words text-base leading-relaxed text-foreground/80 md:text-lg lg:text-xl";

function getFadeProps(reduceMotion: boolean, delay = 0) {
  return {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  };
}

const checklist = [
  "Snelle service binnen 24u",
  "Transparante prijzen",
  "Ervaren techniekers",
  "Actief in heel Vlaanderen",
] as const;

const stats = [
  { value: "1000+", label: "herstellingen", icon: "wrench" },
  { value: "10+", label: "jaar ervaring", icon: "clock" },
  { value: "100+", label: "tevreden klanten", icon: "users" },
] as const;

function StatIcon({ variant }: { variant: (typeof stats)[number]["icon"] }) {
  const common = "h-5 w-5";
  if (variant === "wrench") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.3 7.3l-6.8 6.8a2 2 0 1 1-2.8-2.8l6.8-6.8a6 6 0 0 1 7.3-7.3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (variant === "clock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
    </svg>
  );
}

export function OverOnsPage() {
  const reduceMotion = useReducedMotion();
  const fade = (delay = 0) => getFadeProps(!!reduceMotion, delay);

  return (
    <div className="overflow-hidden bg-[#f8fafc]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/about/about-main.jpg"
          alt="Over ons"
          fill
          priority
          className={immersivePhoto}
          sizes="100vw"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/50 via-primary/40 to-transparent"
          aria-hidden
        />
        <div className={`relative z-10 ${pageContainer} flex items-center justify-center py-10 md:py-16`}>
          <m.div
            className="text-center text-white"
            {...fade(0)}
          >
            <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">Over ons</h1>
            <p className="mt-4 break-words text-sm font-medium text-white/92 md:text-base">Ervaring, kwaliteit en vertrouwen</p>
          </m.div>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-white">
        <div className={`${pageContainer} ${sectionSpacing}`}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
            <m.div className="w-full" {...fade(0)}>
              <h2 className={headingClass}>Over ons</h2>
              <p className={`mt-5 ${bodyClass}`}>
                Wij zijn gespecialiseerd in het herstellen van huishoudtoestellen met jarenlange ervaring en focus op
                kwaliteit.
              </p>
              <ul className="mt-7 space-y-3.5 sm:mt-8">
                {checklist.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-foreground/85 sm:text-base">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-secondary/14 text-accent-secondary ring-1 ring-accent-secondary/28">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.3">
                        <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </m.div>
            <m.div className="w-full" {...fade(0.06)}>
              <m.div
                className="group w-full overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-soft-lg ring-1 ring-primary/6"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
              >
                <div className="w-full">
                  <Image
                    src="/images/about/about-work.jpeg"
                    alt="Technieker aan het werk"
                    width={1200}
                    height={900}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full rounded-3xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-[#f8fafc]">
        <div className={`${pageContainer} ${sectionSpacing}`}>
          <m.div className="mx-auto max-w-5xl" {...fade(0)}>
            <h2 className={`${headingClass} text-center`}>Onze resultaten</h2>
            <p className={`mx-auto mt-4 max-w-2xl text-center ${bodyClass}`}>
              Dagelijks bouwen we vertrouwen op met snelle interventies en betrouwbare herstellingen.
            </p>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {stats.map((item, i) => (
                <m.li key={item.label} {...fade(0.04 * i)}>
                  <article className="rounded-3xl border border-primary/10 bg-white p-4 text-center shadow-soft ring-1 ring-primary/6 sm:p-6">
                    <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-secondary/12 text-accent-secondary ring-1 ring-accent-secondary/24">
                      <StatIcon variant={item.icon} />
                    </span>
                    <p className="mt-4 text-3xl font-bold tracking-tight text-primary">{item.value}</p>
                    <p className="mt-1 text-sm font-medium text-foreground/75 sm:text-base">{item.label}</p>
                  </article>
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${pageContainer} ${sectionSpacing}`}>
          <m.div
            className="mx-auto max-w-3xl rounded-3xl border border-primary/10 bg-white px-6 py-10 text-center shadow-soft ring-1 ring-primary/6 sm:px-10 sm:py-12"
            {...fade(0)}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">Onze missie</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl">
              Klanten helpen hun toestellen te herstellen in plaats van weg te gooien
            </p>
          </m.div>
        </div>
      </section>
    </div>
  );
}
