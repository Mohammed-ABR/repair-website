"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";

/** Approximate pin positions (%) on the Wikimedia Flanders locator SVG view (1136×988). */
const cityPins = [
  { label: "Antwerpen", x: "51%", y: "28%" },
  { label: "Gent", x: "30%", y: "42%" },
  { label: "Leuven", x: "44%", y: "36%" },
  { label: "Hasselt", x: "54%", y: "32%" },
] as const;

/**
 * Real geographic map: Belgium with the Flemish region highlighted (Wikimedia Commons locator SVG).
 * Light card, subtle depth, small location dots — no abstract shapes.
 */
export function FlandersServiceMap() {
  const reduceMotion = useReducedMotion();
  const hover = reduceMotion ? undefined : { y: -1 };

  return (
    <m.div
      className="w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md ring-1 ring-slate-900/4"
      whileHover={hover}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    >
      <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-2.5 sm:px-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Werkgebied</p>
        <p className="text-sm font-semibold text-slate-800">Vlaanderen (België)</p>
      </div>

      <div className="p-3 sm:p-4">
        <p className="sr-only">
          Kaart van België met de regio Vlaanderen gemarkeerd. Referentiepunten: Antwerpen, Gent, Leuven, Hasselt.
        </p>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            className="relative w-full overflow-hidden rounded-xl bg-slate-100/90"
            style={{ aspectRatio: "1136 / 988" }}
          >
            <Image
              src="/maps/flanders-region.svg"
              alt="Kaart van België met regio Vlaanderen"
              fill
              className="object-contain object-center p-1 sm:p-2"
              sizes="(min-width: 1024px) 400px, 100vw"
              unoptimized
            />

            <ul className="pointer-events-none absolute inset-0" aria-hidden>
              {cityPins.map((pin) => (
                <li
                  key={pin.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pin.x, top: pin.y }}
                >
                  <span
                    className="block h-2 w-2 rounded-full border-2 border-white bg-emerald-600 shadow-sm ring-1 ring-slate-900/15"
                    title={pin.label}
                  />
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-2 text-center text-[11px] text-slate-500 sm:text-xs">
            Antwerpen · Gent · Leuven · Hasselt
          </p>
        </div>
      </div>
    </m.div>
  );
}
