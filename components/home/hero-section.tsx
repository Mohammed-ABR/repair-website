"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { formatBelgianDisplayPhone, getPhoneHref } from "@/lib/format-phone";
import { content } from "@/lib/content";

const checklistItems = [
  "Starttarief vanaf €69 (incl. eerste 15 min)",
  "Daarna €24,50 per extra 15 min",
  "Werkdagen: ma–vr (08:00–12:00, 14:00–18:00)",
  "Ook herstelling van horeca-apparatuur",
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

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-7 md:px-10 md:py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-14">
          <div className="space-y-5 text-center text-black md:text-left md:text-white sm:space-y-6">
            <m.h1
              className="text-pretty wrap-break-word text-2xl font-bold leading-[1.12] tracking-tight text-primary sm:text-3xl md:text-5xl md:leading-[1.08] md:text-white"
              {...fadeUp(0)}
            >
              Herstelling van huishoudtoestellen binnen 24u
            </m.h1>

            <m.p
              className="wrap-break-word text-base font-normal leading-relaxed text-primary/70 sm:text-lg md:text-xl md:leading-relaxed md:text-white/85"
              {...fadeUp(1)}
            >
              Snel, betrouwbaar en professioneel in België
            </m.p>

            <m.ul
              className="space-y-3 text-sm leading-snug text-gray-700 md:text-base md:leading-relaxed md:text-white/88"
              {...fadeUp(2)}
              role="list"
            >
              {checklistItems.map((line, i) => (
                <li key={line} className="flex items-start justify-center gap-2.5 text-left md:justify-start">
                  <CheckIcon className="mt-0.5 text-emerald-600 md:text-emerald-300" />
                  <span
                    className={`min-w-0 break-words ${i < 2 ? "font-semibold text-emerald-800 md:text-emerald-300" : ""}`}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </m.ul>

            <m.div
              className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start"
              {...fadeUp(3)}
            >
              <m.span whileHover={motionHover} whileTap={motionTap} transition={buttonHoverSpring}>
                <Link
                  href="/herstelling-aanvragen"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-green-600 px-6 text-base font-semibold text-white shadow-sm transition-[background-color,box-shadow,transform] duration-200 ease-out hover:bg-green-700 hover:shadow-md hover:scale-[1.02] motion-reduce:hover:scale-100 sm:w-auto"
                >
                  Herstelling aanvragen
                </Link>
              </m.span>
              <m.a
                href={getPhoneHref(contact.phone)}
                aria-label={`Bel ${phoneDisplay}`}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-gray-300 px-6 text-base font-semibold text-black transition-[background-color,border-color,transform] duration-200 ease-out hover:bg-gray-50 hover:scale-[1.02] motion-reduce:hover:scale-100 sm:w-auto md:border-white/80 md:text-white md:hover:bg-white/10 md:hover:scale-[1.02]"
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
              className="h-auto w-full rounded-2xl object-cover shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)] ring-1 ring-black/5"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
