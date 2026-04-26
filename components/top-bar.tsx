import { PhoneIcon } from "@/components/icons/phone-icon";
import { content } from "@/lib/content";
import { formatBelgianDisplayPhone, getPhoneHref } from "@/lib/format-phone";

export function TopBar() {
  const tel = getPhoneHref(content.contact.phone);
  const label = `Bel ${formatBelgianDisplayPhone(content.contact.phone)}`;

  return (
    <div className="border-b border-primary/10 bg-accent text-primary">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-1.5 sm:justify-between sm:px-8 sm:py-2 lg:px-10 xl:px-12">
        <p className="text-center text-[0.8125rem] font-medium leading-snug tracking-tight sm:text-left sm:text-sm">
          <span className="whitespace-nowrap">✔ 7/7 beschikbaar</span>
          <span className="mx-1.5 text-primary/55 sm:mx-2" aria-hidden>
            ،
          </span>
          <span className="whitespace-nowrap">✔ Snelle service</span>
          <span className="mx-1.5 text-primary/55 sm:mx-2" aria-hidden>
            ،
          </span>
          <span className="whitespace-nowrap">✔ €69 diagnose</span>
        </p>
        <a
          href={tel}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-white/85 text-primary shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:border-primary/25 hover:bg-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={label}
        >
          <PhoneIcon className="h-[1.05rem] w-[1.05rem]" />
        </a>
      </div>
    </div>
  );
}
