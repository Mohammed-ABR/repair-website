"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { StarRating } from "@/components/home/star-rating";
import { FlandersServiceMap } from "@/components/home/flanders-service-map";
import { getScrollRevealChildProps, getScrollRevealProps } from "@/components/scroll-reveal";
import { buttonPrimary, buttonSecondary } from "@/lib/button-classes";
import {
  cardGlass,
  cardHeadSpacing,
  cardReview,
  iconTileSoft,
  iconTileTrust,
} from "@/lib/card-classes";
import {
  cardBody,
  cardTitle,
  pageContainer,
  sectionIntro,
  sectionSubtitle,
  sectionSubtitleOnDark,
  sectionTitle,
  sectionTitleOnDark,
  sectionY,
} from "@/lib/layout-classes";
import { cardPhotoFrame, cardPhotoWithHover, immersivePhoto } from "@/lib/image-presets";
import { content } from "@/lib/content";

const gridAfterIntro = "mt-10 md:mt-16";

const homeCoreServiceImages: Record<string, string> = {
  herstelling: "/images/services/repair-service.jpg",
  onderhoud: "/images/services/maintenance.jpg",
  installatie: "/images/services/installation.jpg",
};

const homeServiceCardClass =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white/95 p-0 shadow-soft-md ring-1 ring-primary/6 backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-soft-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const serviceChecklist = ["Binnen 24u service", "Ervaren techniekers", "Alle merken"] as const;

function CoreServiceIcon({ id }: { id: (typeof content.dienstenCoreServices)[number]["id"] }) {
  const common = "h-6 w-6 sm:h-7 sm:w-7";
  switch (id) {
    case "herstelling":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
          <path
            d="m14.7 6.3 1.4-1.4a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8l-1.4 1.4M9.3 17.7l-4.4 1.7 1.7-4.4 9.6-9.6 4.4-4.4Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="m3 21 6-6" strokeLinecap="round" />
        </svg>
      );
    case "onderhoud":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            strokeLinecap="round"
          />
        </svg>
      );
    case "installatie":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
          <path d="M12 22v-6M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
          <path d="M9 8h6v6a3 3 0 0 1-6 0V8z" strokeLinejoin="round" />
          <path d="M5 16h14" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function initialsFromName(name: string) {
  const parts = name
    .replace(/\./g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TrustStripIcon({ variant }: { variant: "users" | "zap" | "award" | "shield" }) {
  const common = "h-6 w-6 text-accent-secondary";
  switch (variant) {
    case "users":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
        </svg>
      );
    case "zap":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "award":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="8" r="6" />
          <path d="M8 14l-2 8 6-3 6 3-2-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const trustStripIcons: Array<"users" | "zap" | "award" | "shield"> = [
  "users",
  "zap",
  "award",
  "shield",
];

function WhyGlyph({
  variant,
}: {
  variant: "clock" | "technician" | "bolt" | "shield";
}) {
  const common = "h-7 w-7 text-accent-secondary";
  switch (variant) {
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "technician":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 0L4 11.6V20h4v-4h8v4h4v-8.4l-5.3-5.3z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="4" r="2" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const whyGlyphs: Array<"clock" | "technician" | "bolt" | "shield"> = [
  "clock",
  "technician",
  "bolt",
  "shield",
];

const premiumBrands = [
  { name: "Miele", slug: "miele" },
  { name: "Bosch", slug: "bosch" },
  { name: "Siemens", slug: "siemens" },
  { name: "Neff", slug: "neff" },
  { name: "AEG", slug: "aeg" },
  { name: "Electrolux", slug: "electrolux" },
  { name: "Zanussi", slug: "zanussi" },
  { name: "Whirlpool", slug: "whirlpool" },
  { name: "Bauknecht", slug: "bauknecht" },
  { name: "Indesit", slug: "indesit" },
  { name: "Hotpoint", slug: "hotpoint" },
  { name: "Sharp", slug: "sharp" },
  { name: "Samsung", slug: "samsung" },
  { name: "LG", slug: "lg" },
  { name: "Panasonic", slug: "panasonic" },
  { name: "Beko", slug: "beko" },
  { name: "Grundig", slug: "grundig" },
  { name: "Gorenje", slug: "gorenje" },
  { name: "Hisense", slug: "hisense" },
  { name: "Haier", slug: "haier" },
  { name: "Candy", slug: "candy" },
  { name: "Hoover", slug: "hoover" },
  { name: "Smeg", slug: "smeg" },
  { name: "Pelgrim", slug: "pelgrim" },
  { name: "Ikea", slug: "ikea" },
] as const;

const commonProblems = [
  {
    device: "Wasmachine",
    issues: ["Start niet", "Lekt water", "Maakt lawaai", "Draait niet"],
  },
  {
    device: "Vaatwasser",
    issues: ["Reinigt niet goed", "Water blijft staan", "Maakt lawaai"],
  },
  {
    device: "Oven",
    issues: ["Warmt niet op", "Werkt niet", "Temperatuur probleem"],
  },
  {
    device: "Koelkast",
    issues: ["Koelt niet", "Maakt lawaai", "Lekt water"],
  },
] as const;

const faqItems = [
  {
    question: "Wat kost een herstelling?",
    answer:
      "De prijs hangt af van het toestel, de aard van het probleem en eventuele onderdelen. Na diagnose ontvangt u altijd eerst een duidelijke offerte.",
  },
  {
    question: "Hoe snel komen jullie?",
    answer:
      "In de meeste gevallen plannen we een interventie binnen 24 uur in. Bij dringende situaties zoeken we altijd de snelst mogelijke oplossing.",
  },
  {
    question: "Is diagnose verplicht?",
    answer:
      "Ja, een diagnose is nodig om de oorzaak correct vast te stellen en een eerlijke offerte te maken. Zo weet u vooraf exact waar u aan toe bent.",
  },
  {
    question: "Werken jullie in mijn regio?",
    answer:
      "Wij zijn actief in heel Vlaanderen en omliggende regio's. Neem contact op met uw postcode en we bevestigen meteen de beschikbaarheid.",
  },
] as const;

function CheckListIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/18 text-accent-secondary ring-1 ring-accent-secondary/28"
      aria-hidden
    >
      <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function CommonProblemsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section className="border-b border-primary/10 bg-background" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitle}>Veelvoorkomende problemen</h2>
        </div>

        <ul className={`${gridAfterIntro} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4`}>
          {commonProblems.map((item, i) => (
            <m.li key={item.device} {...getScrollRevealChildProps(reduceMotion, i)}>
              <m.article
                className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-4 shadow-soft-md ring-1 ring-primary/6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-soft-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              >
                <h3 className="text-xl font-semibold tracking-tight text-primary">{item.device}</h3>

                <ul className="mt-5 space-y-3">
                  {item.issues.map((issue) => (
                    <li key={issue} className="flex items-start gap-3 wrap-break-word text-sm leading-relaxed text-foreground/80 sm:text-[0.95rem]">
                      <CheckListIcon />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    href="/herstelling-aanvragen"
                    className={`${buttonPrimary} inline-flex min-h-11 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold shadow-soft-md md:w-auto`}
                  >
                    Herstelling aanvragen
                  </Link>
                </div>
              </m.article>
            </m.li>
          ))}
        </ul>

        <m.div
          className="mt-12 flex justify-center sm:mt-14 lg:mt-16"
          {...getScrollRevealChildProps(reduceMotion, 4)}
        >
          <Link
            href="/problemen"
            className={`${buttonSecondary} inline-flex min-h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold sm:min-h-12 sm:text-base`}
          >
            Bekijk alle problemen
          </Link>
        </m.div>
      </div>
    </m.section>
  );
}

export function TrustStripSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section
      className="border-b border-primary/10 bg-background"
      {...getScrollRevealProps(reduceMotion)}
    >
      <div className={`${pageContainer} py-10 md:py-16`}>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {content.trustStrip.map((item, i) => (
            <m.li
              key={item.title}
              {...getScrollRevealChildProps(reduceMotion, i)}
              className="flex gap-3 rounded-2xl border border-primary/8 bg-white/90 p-4 shadow-soft ring-1 ring-primary/4 transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-soft-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-secondary/12 ring-1 ring-accent-secondary/20">
                <TrustStripIcon variant={trustStripIcons[i] ?? "shield"} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug tracking-tight text-primary sm:text-[0.95rem]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/65 sm:text-sm">{item.description}</p>
              </div>
            </m.li>
          ))}
        </ul>
      </div>
    </m.section>
  );
}

export function ServicesCardsSection() {
  const reduceMotion = useReducedMotion();
  const core = content.dienstenCoreServices;

  return (
    <m.section
      className="border-b border-primary/10 bg-linear-to-b from-background via-white to-background"
      {...getScrollRevealProps(reduceMotion)}
    >
      <div className={`${pageContainer} py-10 md:py-16 lg:py-20`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitle}>Onze diensten</h2>
          <p className={sectionSubtitle}>
            Professionele herstelling, onderhoud en installatie met snelle service in Vlaanderen.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {core.map((service, i) => {
            const src = homeCoreServiceImages[service.id];
            return (
              <m.li key={service.id} {...getScrollRevealChildProps(reduceMotion, i)}>
                <m.article
                  className={homeServiceCardClass}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 26 }}
                >
                  <div className={cardPhotoFrame}>
                    {src ? (
                      <Image
                        src={src}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`${cardPhotoWithHover} transition-transform duration-500 ease-out group-hover:scale-105`}
                      />
                    ) : null}
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/50 via-primary/10 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
                      <span className={`${iconTileSoft} shadow-sm`}>
                        <CoreServiceIcon id={service.id} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-secondary/12 text-accent-secondary ring-1 ring-accent-secondary/22">
                        <CoreServiceIcon id={service.id} />
                      </span>
                      <h3 className={cardTitle}>{service.title}</h3>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-primary/90">{service.summary}</p>
                    <p className={`${cardBody} mt-3 line-clamp-2 text-foreground/80`}>{service.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {serviceChecklist.map((line) => (
                        <li key={line} className="flex items-start gap-2.5 text-sm font-medium text-foreground/80">
                          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600 ring-1 ring-emerald-500/25">
                            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href="/diensten"
                        className={`${buttonPrimary} inline-flex min-h-11 w-full items-center justify-center rounded-xl px-5 text-sm font-semibold shadow-soft-md md:w-auto`}
                      >
                        Meer info
                      </Link>
                    </div>
                  </div>
                </m.article>
              </m.li>
            );
          })}
        </ul>
      </div>
    </m.section>
  );
}

export function DevicesGridSection() {
  const reduceMotion = useReducedMotion();
  const gallery = content.devicesGallery;
  const [selectedDevice, setSelectedDevice] = useState<(typeof gallery)[number] | null>(null);

  useEffect(() => {
    if (!selectedDevice) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedDevice(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedDevice]);

  return (
    <m.section className="border-b border-primary/10 bg-surface-dark" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <m.h2
            className={sectionTitleOnDark}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {content.devicesSectionTitle}
          </m.h2>
          <m.p
            className={sectionSubtitleOnDark}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {content.devicesSectionSubtitle}
          </m.p>
        </div>
        <ul className={`${gridAfterIntro} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6`}>
          {gallery.map((item, index) => (
            <m.li key={item.id} {...getScrollRevealChildProps(reduceMotion, index)}>
              <m.article
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-soft-md ring-1 ring-primary/6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-accent/35 hover:shadow-soft-lg hover:ring-accent/15 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className={cardPhotoFrame}>
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`${cardPhotoWithHover} transition-transform duration-300 ease-in-out group-hover:scale-105`}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/72 via-black/32 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="space-y-4 p-4 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-primary">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-[#374151]">
                    Start niet, lekt water, maakt lawaai
                  </p>
                  <m.button
                    type="button"
                    onClick={() => setSelectedDevice(item)}
                    className={`${buttonPrimary} min-h-11 w-full px-5 md:w-auto`}
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Meer info
                  </m.button>
                </div>
              </m.article>
            </m.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {selectedDevice ? (
          <m.div
            className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={() => setSelectedDevice(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" aria-hidden />
            <m.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedDevice.label} details`}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-primary/10 bg-white/88 shadow-[0_36px_90px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedDevice(null)}
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white/92 text-primary transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/65 sm:right-4 sm:top-4"
                aria-label="Sluiten"
              >
                <span className="text-lg leading-none">X</span>
              </button>

              <div className="relative aspect-video w-full">
                <Image
                  src={selectedDevice.imageSrc}
                  alt={selectedDevice.label}
                  fill
                  sizes="(min-width: 1280px) 960px, (min-width: 640px) 90vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/72 via-black/16 to-transparent" aria-hidden />
              </div>

              <div className="space-y-6 p-5 sm:p-8">
                <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">{selectedDevice.label}</h3>
                <p className="text-sm leading-relaxed text-[#374151] sm:text-base">
                  Wij herstellen alle problemen snel en professioneel.
                </p>
                <ul className="grid gap-3 text-sm text-[#374151] sm:text-base">
                  {["Start niet", "Lekt water", "Maakt lawaai", "Draait niet"].map((problem) => (
                    <li key={problem} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent-secondary">
                        ✔
                      </span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
                <m.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                  <Link
                    href="/herstelling-aanvragen"
                    className={`${buttonPrimary} min-h-12 px-6 sm:text-base`}
                  >
                    Herstelling aanvragen
                  </Link>
                </m.div>
              </div>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </m.section>
  );
}

export function PricingSection() {
  const reduceMotion = useReducedMotion();
  const { pricingSectionTitle, pricingSection } = content;

  return (
    <m.section className="border-b border-primary/10 bg-background" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className="mx-auto max-w-4xl">
          <h2 className={`${sectionTitle} text-center`}>{pricingSectionTitle}</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:items-stretch">
            <div className="relative overflow-hidden rounded-[1.25rem] border-2 border-accent bg-linear-to-br from-accent/20 via-white to-white p-4 shadow-soft-lg ring-2 ring-accent/30 sm:p-8">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/25 blur-2xl" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/70">
                {pricingSection.diagnoseLabel}
              </p>
              <p className="mt-2 text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                {pricingSection.diagnosePrice}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Vaste diagnoseprijs, daarna een heldere offerte voor het herstel, afhankelijk van het
                probleem en onderdelen.
              </p>
            </div>
            <ul className="flex flex-col justify-center gap-4 rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-soft-md sm:p-8">
              {pricingSection.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-base leading-relaxed text-foreground/85 sm:text-lg">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-secondary" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export function WhyChooseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section className="border-b border-primary/10 bg-white" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitle}>{content.homeWhyChooseTitle}</h2>
          <p className={sectionSubtitle}>{content.homeWhyChooseSubtitle}</p>
        </div>
        <ul className={`${gridAfterIntro} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6`}>
          {content.homeWhyChoose.map((point, i) => (
            <m.li key={point.title} {...getScrollRevealChildProps(reduceMotion, i)}>
              <div className={cardGlass}>
                <div className={iconTileTrust}>
                  <WhyGlyph variant={whyGlyphs[i] ?? "shield"} />
                </div>
                <h3 className={`${cardTitle} ${cardHeadSpacing}`}>{point.title}</h3>
                <p className={`${cardBody} mt-3`}>{point.description}</p>
              </div>
            </m.li>
          ))}
        </ul>
      </div>
    </m.section>
  );
}

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const { aboutHeroImage } = content;
  const aboutChecklist = [
    "Snelle service binnen 24u",
    "Ervaren techniekers",
    "Transparante prijzen",
    "Actief in heel Vlaanderen",
  ] as const;
  const aboutStats = [
    { value: "1000+", label: "herstellingen uitgevoerd" },
    { value: "10+", label: "jaar ervaring" },
    { value: "100+", label: "tevreden klanten" },
  ] as const;

  return (
    <m.section
      className="border-b border-primary/10 bg-[#f7f8fa]"
      {...getScrollRevealProps(reduceMotion)}
    >
      <div className={`${pageContainer} py-20 sm:py-24 lg:py-28`}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <m.div className="lg:col-span-6" {...getScrollRevealChildProps(reduceMotion, 0)}>
            <m.h2
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Over ons
            </m.h2>
            <m.p
              className="mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Wij zijn gespecialiseerd in het herstellen van huishoudtoestellen met jarenlange ervaring en passie voor
              kwaliteit.
            </m.p>

            <m.ul
              className="mt-7 space-y-3.5 sm:mt-8"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {aboutChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">
                  <span
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-secondary/14 text-accent-secondary ring-1 ring-accent-secondary/30"
                    aria-hidden
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.3">
                      <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </m.ul>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-3">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-primary/10 bg-background p-4 shadow-soft ring-1 ring-primary/6">
                  <p className="text-2xl font-bold tracking-tight text-primary sm:text-[1.75rem]">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-foreground/65 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </m.div>

          <m.div className="lg:col-span-6" {...getScrollRevealChildProps(reduceMotion, 1)}>
            <m.div
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-soft-lg ring-1 ring-primary/8"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 340, damping: 26 }}
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={aboutHeroImage.src}
                  alt="Technieker aan het werk bij een huishoudtoestel"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`${immersivePhoto} transition-transform duration-500 ease-out group-hover:scale-105`}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/45 via-primary/10 to-transparent" aria-hidden />
              </div>
            </m.div>
          </m.div>
        </div>

        <m.div className="mx-auto mt-12 max-w-3xl sm:mt-14" {...getScrollRevealChildProps(reduceMotion, 2)}>
          <div className="mx-auto mb-6 h-px w-28 bg-linear-to-r from-transparent via-primary/25 to-transparent" aria-hidden />
          <m.div
            className="rounded-3xl border border-primary/10 bg-white/75 px-6 py-10 text-center shadow-soft ring-1 ring-primary/6 sm:px-10 sm:py-12"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-accent-secondary/12 text-accent-secondary ring-1 ring-accent-secondary/25">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M9 11a4 4 0 0 1 4-4M9 11v2a2 2 0 0 0 2 2h2M15 11a4 4 0 0 1 4-4" strokeLinecap="round" />
            </svg>
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">Onze missie</h3>
            <div className="mx-auto mt-4 h-px w-16 bg-linear-to-r from-transparent via-accent-secondary/55 to-transparent" aria-hidden />
            <p className="mt-5 text-pretty text-xl font-semibold italic leading-relaxed tracking-tight text-primary/90 sm:text-2xl sm:leading-relaxed">
              Klanten helpen hun toestellen te herstellen in plaats van weg te gooien
            </p>
          </m.div>
        </m.div>
      </div>
    </m.section>
  );
}

export function BrandsShowcaseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section className="border-b border-primary/10 bg-background" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitle}>Merken die wij herstellen</h2>
        </div>
        <ul className={`${gridAfterIntro} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
          {premiumBrands.map((brand, i) => (
            <m.li key={brand.name} {...getScrollRevealChildProps(reduceMotion, i)}>
              <div className="group flex min-h-[64px] items-center justify-center px-3 py-2">
                <Image
                  src={`https://cdn.simpleicons.org/${brand.slug}`}
                  alt={brand.name}
                  width={150}
                  height={46}
                  className="h-8 w-auto max-w-35 object-contain grayscale opacity-65 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 sm:h-9"
                  unoptimized
                />
              </div>
            </m.li>
          ))}
        </ul>
      </div>
    </m.section>
  );
}

export function ReviewsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section className="border-b border-primary/10 bg-surface-dark" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitleOnDark}>{content.reviewsSectionTitle}</h2>
          <p className={sectionSubtitleOnDark}>{content.reviewsSectionSubtitle}</p>
        </div>
        <ul className={`${gridAfterIntro} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5`}>
          {content.reviews.map((review, i) => (
            <m.li key={review.name + review.location} {...getScrollRevealChildProps(reduceMotion, i)}>
              <article className={`${cardReview} h-full`}>
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white"
                    aria-hidden
                  >
                    {initialsFromName(review.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <StarRating rating={review.rating} size="sm" />
                    <p className="mt-2 text-sm font-semibold tracking-tight text-primary">{review.name}</p>
                    <p className="text-xs tracking-wide text-foreground/50">{review.location}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">&ldquo;{review.text}&rdquo;</p>
              </article>
            </m.li>
          ))}
        </ul>
      </div>
    </m.section>
  );
}

export function LocationsSection() {
  const reduceMotion = useReducedMotion();
  const serviceRegions = [
    {
      region: "Antwerpen",
      cities: ["Antwerpen", "Mechelen", "Turnhout", "Geel", "Lier"],
    },
    {
      region: "Oost-Vlaanderen",
      cities: ["Gent", "Aalst", "Sint-Niklaas", "Dendermonde", "Lokeren"],
    },
    {
      region: "Vlaams-Brabant",
      cities: ["Brussel", "Leuven", "Vilvoorde", "Halle"],
    },
    {
      region: "Limburg",
      cities: ["Hasselt", "Genk", "Sint-Truiden", "Lommel", "Bilzen", "Tongeren"],
    },
  ] as const;

  return (
    <m.section className="border-b border-primary/10 bg-surface-dark" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitleOnDark}>Werkgebied in Vlaanderen</h2>
        </div>
        <div
          className={`${gridAfterIntro} grid items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12`}
        >
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-7">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {serviceRegions.map((item, i) => (
                <m.li key={item.region} {...getScrollRevealChildProps(reduceMotion, i)}>
                  <article className="h-full rounded-2xl border border-primary/10 bg-white p-4 shadow-soft-md ring-1 ring-primary/6 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-secondary/12 text-accent-secondary ring-1 ring-accent-secondary/25">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" strokeLinejoin="round" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight text-primary">{item.region}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{item.cities.join(", ")}</p>
                  </article>
                </m.li>
              ))}
            </ul>
          </div>

          <m.div className="order-1 w-full lg:order-2 lg:col-span-5 lg:sticky lg:top-28" {...getScrollRevealChildProps(reduceMotion, 4)}>
            <FlandersServiceMap />
          </m.div>
        </div>

        <p className="mt-10 text-center text-base font-medium text-white/80 sm:mt-12 sm:text-lg">
          Wij zijn actief in heel Vlaanderen en omgeving
        </p>
      </div>
    </m.section>
  );
}

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <m.section className="border-b border-primary/10 bg-background" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className="mx-auto max-w-[800px]">
          <div className={sectionIntro}>
            <h2 className={sectionTitle}>Veelgestelde vragen</h2>
          </div>

          <ul className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question}>
                  <m.article
                    className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft-md ring-1 ring-primary/6 transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-soft-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ type: "spring", stiffness: 360, damping: 26 }}
                    {...getScrollRevealChildProps(reduceMotion, index)}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-secondary/12 text-accent-secondary ring-1 ring-accent-secondary/25 transition-transform duration-300 group-hover:scale-105"
                          aria-hidden
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9.75 9a2.25 2.25 0 1 1 3.27 2.02c-.92.48-1.52 1.14-1.52 2.23" strokeLinecap="round" />
                            <circle cx="12" cy="16.8" r="0.8" fill="currentColor" stroke="none" />
                          </svg>
                        </span>
                        <span className="text-base font-semibold leading-tight text-primary sm:text-lg">{item.question}</span>
                      </span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/15 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <m.div
                          key="content"
                          initial={reduceMotion ? { opacity: 1, height: "auto", y: 0 } : { opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -4 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/80 sm:px-7 sm:pb-7 sm:text-[0.96rem]">
                            {item.answer}
                          </p>
                        </m.div>
                      ) : null}
                    </AnimatePresence>
                  </m.article>
                </li>
              );
            })}
          </ul>

          <m.div
            className="mt-12 rounded-2xl border border-primary/10 bg-white p-7 text-center shadow-soft-md ring-1 ring-primary/6 sm:mt-14 sm:p-9"
            {...getScrollRevealChildProps(reduceMotion, faqItems.length)}
          >
            <p className="text-lg font-semibold tracking-tight text-primary sm:text-xl">Nog vragen? Neem contact met ons op</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className={`${buttonPrimary} inline-flex min-h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold sm:min-h-12 sm:text-base`}
              >
                Contact opnemen
              </Link>
            </div>
          </m.div>
        </div>
      </div>
    </m.section>
  );
}

export function MapSection() {
  const mapQuery = encodeURIComponent(content.contact.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const reduceMotion = useReducedMotion();

  return (
    <m.section className="border-b border-primary/10 bg-white" {...getScrollRevealProps(reduceMotion)}>
      <div className={`${pageContainer} ${sectionY}`}>
        <div className={sectionIntro}>
          <h2 className={sectionTitle}>Kaart & route</h2>
          <p className={sectionSubtitle}>Vind ons eenvoudig via Google Maps.</p>
        </div>
        <m.div
          className={`${gridAfterIntro} mx-auto w-full max-w-5xl rounded-[1.25rem] border border-primary/10 bg-white p-4 shadow-soft-lg ring-1 ring-primary/8 sm:p-6`}
          {...getScrollRevealChildProps(reduceMotion, 0)}
        >
          <p className="mb-4 px-1 text-sm font-medium text-foreground/70 sm:text-[0.95rem]">
            {content.contact.address}
          </p>
          <div className="overflow-hidden rounded-3xl border border-primary/10 bg-background shadow-soft-md">
            <div className="aspect-16/10 w-full sm:aspect-16/8 lg:aspect-16/7">
              <iframe
                title={`Google Maps locatie, ${content.contact.address}`}
                src={mapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}

export function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <m.section
      className="relative overflow-hidden bg-linear-to-br from-primary via-primary to-primary/90 text-white"
      {...getScrollRevealProps(reduceMotion)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgb(34 197 94 / 0.35) 0%, transparent 45%),
            radial-gradient(circle at 80% 80%, rgb(255 255 255 / 0.12) 0%, transparent 35%)`,
        }}
        aria-hidden
      />
      <div className={`${pageContainer} relative py-10 md:py-16 lg:py-20`}>
        <div className="mx-auto max-w-2xl text-center sm:max-w-3xl">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
            {content.ctaSectionTitle}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/88 sm:text-base lg:text-xl sm:leading-relaxed">
            {content.ctaSectionDescription}
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="/herstelling-aanvragen"
              className={`${buttonPrimary} inline-flex min-h-12 w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-soft-lg ring-1 ring-white/15 sm:w-auto sm:min-h-14 sm:px-10 sm:py-4 sm:text-lg`}
            >
              {content.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </m.section>
  );
}
