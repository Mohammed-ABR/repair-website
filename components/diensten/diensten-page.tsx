"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { buttonPrimary } from "@/lib/button-classes";
import { pageContainer } from "@/lib/layout-classes";
import { immersivePhoto } from "@/lib/image-presets";

const services = [
  {
    id: "herstelling",
    title: "Herstelling",
    image: "/images/services/service-repair-s.jpg",
    text: "Wij herstellen alle huishoudtoestellen snel en professioneel.",
    checklist: ["Binnen 24u service", "Alle merken", "Ervaren techniekers"],
  },
  {
    id: "onderhoud",
    title: "Onderhoud",
    image: "/images/services/service-maintenance-s.jpg",
    text: "Voorkom problemen en verleng de levensduur van uw toestel.",
    checklist: ["Reiniging", "Controle", "Betere prestaties"],
  },
  {
    id: "installatie",
    title: "Installatie",
    image: "/images/services/service-installation-s.jpg",
    text: "Wij installeren uw toestel correct en veilig.",
    checklist: ["Aansluiten", "Testen", "Uitleg aan klant"],
  },
] as const;

const trustPoints = [
  "Snelle service",
  "Transparante prijzen",
  "Actief in heel Vlaanderen",
  "Klanttevredenheid",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;
const sectionSpacing = "py-10 md:py-16 lg:py-20";
const headingClass = "text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl";
const bodyClass = "text-sm leading-relaxed text-foreground/80 sm:text-base lg:text-lg";

function fade(reduceMotion: boolean, delay = 0) {
  return {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px", amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease },
  } as const;
}

export function DienstenPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-[#f8fafc]">
      <section className="relative isolate min-h-[52vh] overflow-hidden border-b border-white/10">
        <Image
          src="/images/services/repair-service.jpg"
          alt="Onze diensten"
          fill
          priority
          sizes="100vw"
          className={immersivePhoto}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/50 via-primary/40 to-transparent" aria-hidden />
        <div className={`relative z-10 ${pageContainer} flex min-h-[52vh] items-center justify-center py-10 md:py-16`}>
          <m.div className="max-w-3xl text-center text-white" {...fade(Boolean(reduceMotion), 0)}>
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Onze diensten</h1>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/92 sm:text-base lg:text-xl">
              Snelle en professionele service voor alle huishoudtoestellen
            </p>
          </m.div>
        </div>
      </section>

      <section className="border-b border-primary/10 bg-white">
        <div className={`${pageContainer} ${sectionSpacing}`}>
          <m.div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12" {...fade(Boolean(reduceMotion), 0)}>
            <h2 className={headingClass}>Herstelling, onderhoud en installatie</h2>
            <p className={`mt-4 ${bodyClass}`}>
              Kies de dienst die u nodig heeft. Wij zorgen voor snelle service, duidelijke communicatie en een
              professionele afwerking.
            </p>
          </m.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service, i) => (
              <m.article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-soft-lg ring-1 ring-primary/6"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
                {...fade(Boolean(reduceMotion), i * 0.06)}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/52 via-black/8 to-transparent" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-[1.7rem]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80 sm:text-base">{service.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/82 sm:text-[0.95rem]">
                        <span className="mt-0.5 inline-flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-500/14 text-emerald-600 ring-1 ring-emerald-500/30">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Link href="/herstelling-aanvragen" className={`${buttonPrimary} min-h-12 w-full rounded-2xl px-6 text-base shadow-soft-lg md:w-auto`}>
                      Aanvragen
                    </Link>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className={`${pageContainer} ${sectionSpacing}`}>
          <m.div className="mx-auto max-w-4xl rounded-3xl border border-primary/10 bg-white px-6 py-10 text-center shadow-soft-lg ring-1 ring-primary/6 sm:px-10 sm:py-12" {...fade(Boolean(reduceMotion), 0)}>
            <h2 className={headingClass}>Waarom kiezen voor ons?</h2>
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <m.li
                  key={point}
                  className="flex items-center justify-start gap-2.5 rounded-2xl border border-primary/10 bg-[#f8fafc] px-4 py-3 text-left text-sm font-semibold text-primary sm:justify-center sm:text-base"
                  {...fade(Boolean(reduceMotion), 0.04 * (index + 1))}
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600 ring-1 ring-emerald-500/28">
                    <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white">
        <div className={`${pageContainer} py-10 text-center md:py-16 lg:py-20`}>
          <m.div className="mx-auto max-w-3xl" {...fade(Boolean(reduceMotion), 0)}>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Probleem met uw toestel?</h2>
            <div className="mt-8">
              <Link
                href="/herstelling-aanvragen"
                className={`${buttonPrimary} min-h-12 w-full rounded-2xl px-7 text-base shadow-soft-lg sm:w-auto sm:text-lg`}
              >
                Herstelling aanvragen
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
