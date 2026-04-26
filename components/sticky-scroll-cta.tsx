"use client";

import { useEffect, useState } from "react";

import { PhoneIcon } from "@/components/icons/phone-icon";
import { content } from "@/lib/content";
import { formatBelgianDisplayPhone, getPhoneHref } from "@/lib/format-phone";

const SCROLL_THRESHOLD_PX = 180;

export function StickyScrollCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = getPhoneHref(content.contact.phone);
  const phoneLabel = `Bel ${formatBelgianDisplayPhone(content.contact.phone)}`;

  return (
    <div
      role="region"
      aria-label="Snel bellen"
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-[9998] transition-transform duration-300 ease-out motion-reduce:duration-150 motion-reduce:transition-none ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="border-t border-white/15 bg-primary text-white shadow-[0_-6px_28px_rgb(0_0_0/0.2)]">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] pr-[4.5rem] sm:gap-4 sm:px-8 sm:py-3 sm:pr-24 lg:px-10 xl:px-12">
          <p className="min-w-0 flex-1 text-sm font-medium leading-snug tracking-tight sm:text-[0.95rem]">
            Probleem met uw toestel? Bel ons nu
          </p>
          <a
            href={tel}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/12 text-white shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:border-white/50 hover:bg-white/22 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={phoneLabel}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
