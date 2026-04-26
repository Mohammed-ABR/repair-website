import Link from "next/link";

import { buttonPrimary } from "@/lib/button-classes";
import { innerPageShell } from "@/lib/layout-classes";

export default function BedanktPage() {
  return (
    <main className="min-h-[78vh] overflow-hidden bg-linear-to-b from-white via-primary/3 to-background">
      <section className={innerPageShell}>
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-[1.25rem] border border-primary/10 bg-white px-7 py-10 text-center shadow-soft-md ring-1 ring-primary/6 sm:px-10 sm:py-14">
          <div className="relative mb-8">
            <span
              className="absolute inset-0 rounded-full bg-accent-secondary/20 blur-md animate-pulse"
              aria-hidden
            />
            <span
              className="relative inline-flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br from-accent-secondary/20 to-accent-secondary/8 text-accent-secondary ring-1 ring-accent-secondary/30"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9" stroke="currentColor" strokeWidth="2.1">
                <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <h1 className="text-pretty text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Bedankt! Uw aanvraag is succesvol verzonden.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-foreground/75 sm:text-xl">
            Wij nemen zo snel mogelijk contact met u op.
          </p>

          <div className="mt-10">
            <Link className={`${buttonPrimary} min-h-12 rounded-2xl px-9 text-base`} href="/">
              Terug naar Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

