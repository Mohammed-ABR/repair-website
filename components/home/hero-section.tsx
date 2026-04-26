"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { formatBelgianDisplayPhone, getPhoneHref } from "@/lib/format-phone";
import { content } from "@/lib/content";

const checklistItems = [
  "Starttarief vanaf €69",
  "Inclusief BTW, verplaatsing en diagnose",
  "7/7 beschikbaar",
  "Snelle service",
] as const;

const buttonHoverSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-400/45 ${className ?? ""}`}
      aria-hidden
    >
      <svg className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="m3.5 8 2.5 2.5 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { contact } = content;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  const stagger = reduceMotion ? 0 : 0.06;

  const motionHover = reduceMotion ? undefined : { scale: 1.02 };
  const motionTap = reduceMotion ? undefined : { scale: 0.98 };

  const phoneDisplay = formatBelgianDisplayPhone(contact.phone);

  const fadeUp = (delayIndex: number) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition, delay: stagger * delayIndex },
  });

  return (
    <section className="relative overflow-hidden border-b border-primary/10">
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        <Image
          src="/images/hero/hero-repair-hd-1.jpg"
          alt="Hero achtergrond"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4 text-center text-black md:text-left md:text-white">
            <m.h1
              className="text-pretty text-2xl font-bold leading-tight tracking-tight md:text-5xl"
              {...fadeUp(0)}
            >
              Herstelling van huishoudtoestellen binnen 24u
            </m.h1>

            <m.p className="text-base font-medium leading-relaxed text-gray-600 md:text-white/90 sm:text-lg" {...fadeUp(1)}>
              Snel, betrouwbaar en professioneel in België
            </m.p>

            <m.ul className="space-y-2 text-sm text-gray-700 md:text-white/90 sm:text-base" {...fadeUp(2)} role="list">
              {checklistItems.map((line) => (
                <li key={line} className="flex items-start justify-center gap-2.5 text-left leading-relaxed md:justify-start">
                  <CheckIcon className="mt-0.5 text-emerald-600" />
                  <span>{line}</span>
                </li>
              ))}
              <li className="font-semibold text-emerald-600 md:text-emerald-400">Geen oplossing? Geen kosten.</li>
            </m.ul>

            <m.div
              className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start"
              {...fadeUp(3)}
            >
              <m.span whileHover={motionHover} whileTap={motionTap} transition={buttonHoverSpring}>
                <Link
                  href="/herstelling-aanvragen"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-green-600 px-6 text-base font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto"
                >
                  Herstelling aanvragen
                </Link>
              </m.span>
              <m.a
                href={getPhoneHref(contact.phone)}
                aria-label={`Bel ${phoneDisplay}`}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-gray-300 px-6 text-base font-semibold text-black transition-colors hover:bg-gray-50 md:border-white md:text-white md:hover:bg-white/10 sm:w-auto"
                whileHover={motionHover}
                whileTap={motionTap}
                transition={buttonHoverSpring}
              >
                Bel direct
              </m.a>
            </m.div>
          </div>

          <div className="md:hidden" {...fadeUp(1)}>
            <Image
              src="/images/hero/hero-repair-hd-1.jpg"
              alt="Herstelling van huishoudtoestellen"
              width={1200}
              height={800}
              sizes="100vw"
              className="h-[200px] w-full rounded-xl object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
