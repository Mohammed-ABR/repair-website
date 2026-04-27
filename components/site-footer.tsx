"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

import { getScrollRevealChildProps, getScrollRevealProps } from "@/components/scroll-reveal";
import { content } from "@/lib/content";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/problemen", label: "Problemen" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const { companyName, contact } = content;
  const reduceMotion = useReducedMotion();

  return (
    <m.footer
      className="border-t border-primary/10 bg-white shadow-[0_-1px_0_0_rgb(10_37_64_/0.04)]"
      {...getScrollRevealProps(reduceMotion)}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <m.div
            className="space-y-4 rounded-2xl border border-primary/10 bg-background/60 p-5 shadow-soft ring-1 ring-primary/6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            {...getScrollRevealChildProps(reduceMotion, 0)}
          >
            <Link href="/" aria-label={`${companyName}, home`} className="inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt=""
                width={120}
                height={36}
                className="h-8 w-auto rounded-md object-contain object-left ring-1 ring-black/5"
              />
              <span className="text-base font-semibold tracking-tight text-primary">{companyName}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/75">{content.heroDescription}</p>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Contact</p>
              <ul className="space-y-2 text-sm text-foreground/85">
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="rounded-lg transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="rounded-lg transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="leading-relaxed text-foreground/80">{contact.address}</li>
              </ul>
            </div>
          </m.div>

          <m.div
            className="space-y-3 rounded-2xl border border-primary/10 bg-background/60 p-5 shadow-soft ring-1 ring-primary/6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            {...getScrollRevealChildProps(reduceMotion, 1)}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Quick links</p>
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/85 transition-all duration-300 ease-in-out hover:text-primary hover:opacity-90"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            className="space-y-3 rounded-2xl border border-primary/10 bg-background/60 p-5 shadow-soft ring-1 ring-primary/6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            {...getScrollRevealChildProps(reduceMotion, 2)}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Openingstijden</p>
            <p className="text-sm font-medium text-foreground/85">Ma-Vr 08:00-18:00</p>
          </m.div>

          <m.div
            className="space-y-3 rounded-2xl border border-primary/10 bg-background/60 p-5 shadow-soft ring-1 ring-primary/6 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            {...getScrollRevealChildProps(reduceMotion, 3)}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground/50">Service areas</p>
            <p className="text-sm font-medium text-foreground/85">Vlaanderen</p>
          </m.div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary/10 pt-8 text-sm text-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {companyName}. Alle rechten voorbehouden.
          </p>
          <Link
            href="/privacybeleid"
            className="font-medium text-foreground/75 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </m.footer>
  );
}
