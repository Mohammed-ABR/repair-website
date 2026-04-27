"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  buttonPrimary,
  buttonPrimaryCompact,
  interactiveIcon,
} from "@/lib/button-classes";
import { content } from "@/lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/diensten", label: "Diensten" },
  { href: "/problemen", label: "Problemen" },
  { href: "/contact", label: "Contact" },
] as const;

function navLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-60 border-b border-primary/10 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-18px_rgba(15,23,42,0.34)]" : "shadow-none"
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between overflow-x-hidden px-4 py-3 sm:gap-3 lg:min-h-18 lg:gap-6">
        {/* Left: logo image + company name */}
        <Link
          href="/"
          className="relative z-10 flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          aria-label={`${content.companyName}, home`}
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt=""
            width={160}
            height={48}
            className="h-8 w-auto rounded-md object-contain object-left shadow-sm ring-1 ring-black/5 sm:h-11"
          />
          <span className="hidden text-pretty text-sm font-bold leading-snug tracking-tight text-primary sm:inline sm:text-base lg:text-lg">
            {content.companyName}
          </span>
        </Link>

        {/* Center: main nav (desktop) */}
        <nav
          className="absolute left-1/2 top-1/2 z-5 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navItems.map((item) => {
            const active = navLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] after:pointer-events-none after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary hover:after:w-[calc(100%-1.5rem)] focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  active
                    ? "bg-primary/6 text-primary after:w-[calc(100%-1.5rem)]"
                    : "text-foreground/75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA + mobile menu */}
        <div className="relative z-10 flex items-center gap-2">
          <Link
            href="/herstelling-aanvragen"
            className={`${buttonPrimaryCompact} inline-flex max-w-full shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm shadow-soft-md sm:min-h-11 sm:rounded-xl sm:px-4`}
            onClick={() => setOpen(false)}
          >
            Herstelling aanvragen
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/12 bg-white text-primary shadow-sm hover:border-primary/20 hover:bg-primary/4 lg:hidden ${interactiveIcon}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Sluiten" : "Menu"}</span>
            {open ? (
              <svg
                className="h-5 w-5 transition-all duration-300 ease-in-out"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 transition-all duration-300 ease-in-out"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          open
            ? "max-h-[min(85vh,22rem)] border-t border-primary/10 shadow-sm"
            : "max-h-0 border-t-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Mobiele navigatie"
        >
          {navItems.map((item) => {
            const active = navLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out active:scale-[0.99] motion-reduce:transition-none ${
                  active
                    ? "bg-primary/7 text-primary shadow-sm"
                    : "text-foreground/85 hover:bg-primary/4 hover:text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/herstelling-aanvragen"
            className={`${buttonPrimary} mt-4 w-full justify-center sm:hidden`}
            onClick={() => setOpen(false)}
          >
            Herstelling aanvragen
          </Link>
        </nav>
      </div>
    </header>
  );
}
