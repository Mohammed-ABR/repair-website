import type { SVGProps } from "react";

const baseCompact = "h-8 w-8 shrink-0 text-current";

const sw = 1.35;
const swFine = 1.1;

type ServiceIconProps = SVGProps<SVGSVGElement> & {
  id: string;
  /** Detailed line art for service cards; default = compact glyph for small overlays */
  variant?: "compact" | "line";
};

export function ServiceIcon({ id, className, variant = "compact", ...props }: ServiceIconProps) {
  if (variant === "line") {
    return <ServiceIconLine id={id} className={className} {...props} />;
  }
  const cn = className ? `${baseCompact} ${className}` : baseCompact;
  return <ServiceIconCompact id={id} className={cn} {...props} />;
}

function ServiceIconCompact({
  id,
  className,
  ...props
}: Omit<ServiceIconProps, "variant"> & { className?: string }) {
  const cn = className ?? baseCompact;
  switch (id) {
    case "wasmachine":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <circle cx="12" cy="14" r="4" />
          <path d="M9 6h6" />
        </svg>
      );
    case "droogkast":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <circle cx="12" cy="13" r="3.5" />
          <path d="M8 7h8" />
        </svg>
      );
    case "koelkast":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="6" y="2" width="12" height="20" rx="1.5" />
          <path d="M12 6v12" />
          <path d="M9 9h6" />
        </svg>
      );
    case "vaatwasser":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <circle cx="12" cy="12" r="3" />
          <path d="M8 20h8" />
        </svg>
      );
    case "oven":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <rect x="7" y="7" width="10" height="8" rx="0.5" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case "microgolf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cn} aria-hidden {...props}>
          <rect x="3" y="6" width="14" height="12" rx="1.5" />
          <path d="M17 10v4" />
          <rect x="6" y="9" width="8" height="6" rx="0.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={cn} aria-hidden {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      );
  }
}

function ServiceIconLine({ id, className, ...props }: Omit<ServiceIconProps, "variant">) {
  const cn = className ?? "h-16 w-16 shrink-0 text-current";
  const svgProps = {
    viewBox: "0 0 64 64",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn,
    "aria-hidden": true as const,
    ...props,
  };

  switch (id) {
    case "wasmachine":
      return (
        <svg {...svgProps}>
          <rect x="10" y="8" width="44" height="48" rx="3" />
          <rect x="14" y="12" width="36" height="10" rx="1.5" />
          <circle cx="22" cy="17" r="2.25" />
          <circle cx="32" cy="17" r="2.25" />
          <circle cx="42" cy="17" r="2.25" />
          <rect x="26" y="13" width="12" height="5" rx="1" />
          <circle cx="32" cy="38" r="15" strokeWidth={sw} />
          <circle cx="32" cy="38" r="10" strokeWidth={swFine} opacity="0.85" />
          <path d="M32 28v20M24 32c2.5 3 5.5 5 8 5s5.5-2 8-5" strokeWidth={swFine} opacity="0.75" />
          <path d="M44 34a10 10 0 0 1-24 8" strokeWidth={swFine} />
          <path d="M46 26h3.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H46" strokeWidth={swFine} />
        </svg>
      );
    case "droogkast":
      return (
        <svg {...svgProps}>
          <rect x="10" y="8" width="44" height="48" rx="3" />
          <rect x="14" y="12" width="36" height="9" rx="1.5" />
          <rect x="24" y="14" width="16" height="5" rx="1" />
          <path d="M18 16h3M43 16h3" strokeWidth={swFine} />
          <circle cx="32" cy="37" r="14" strokeWidth={sw} />
          <path d="M32 25v24M23 30c3 4 6 6 9 6s6-2 9-6" strokeWidth={swFine} opacity="0.75" />
          <path d="M18 48h28" strokeWidth={swFine} opacity="0.6" />
          <path d="M22 50h4M30 50h4M38 50h4" strokeWidth={swFine} opacity="0.6" />
          <path d="M46 22c2 1 3.5 3 4 5.5M48 20c2.5 1.5 4 4 4.5 7" strokeWidth={swFine} opacity="0.85" />
          <path d="M40 52h10v3a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3z" strokeWidth={swFine} />
        </svg>
      );
    case "koelkast":
      return (
        <svg {...svgProps}>
          <rect x="18" y="6" width="28" height="52" rx="2.5" />
          <path d="M18 28h28" strokeWidth={sw} />
          <path d="M41 14v8M41 38v8" strokeWidth={swFine} />
          <path d="M42.5 15v6M42.5 39v6" strokeWidth={swFine} opacity="0.85" />
          <path d="M14 14h2M14 22h2M14 34h2M14 46h2" strokeWidth={swFine} opacity="0.45" />
        </svg>
      );
    case "vaatwasser":
      return (
        <svg {...svgProps}>
          <path d="M14 18h36v34H14V18z" />
          <path d="M14 24h36" strokeWidth={swFine} opacity="0.55" />
          <path d="M18 28h28M18 32h28" strokeWidth={swFine} opacity="0.4" />
          <path d="M22 36h20" strokeWidth={swFine} />
          <circle cx="25" cy="33" r="2.2" strokeWidth={swFine} />
          <circle cx="32" cy="33" r="2.2" strokeWidth={swFine} />
          <circle cx="39" cy="33" r="2.2" strokeWidth={swFine} />
          <path d="M28 28h8M32 24v8" strokeWidth={swFine} />
          <circle cx="30" cy="26" r="0.65" fill="currentColor" />
          <circle cx="32" cy="26" r="0.65" fill="currentColor" />
          <circle cx="34" cy="26" r="0.65" fill="currentColor" />
          <path d="M20 18 L32 10 L44 18" strokeWidth={swFine} opacity="0.9" />
          <path d="M16 50 L24 40h16l8 10" strokeWidth={swFine} opacity="0.85" />
        </svg>
      );
    case "oven":
      return (
        <svg {...svgProps}>
          <rect x="10" y="10" width="44" height="44" rx="2.5" />
          <rect x="16" y="18" width="32" height="28" rx="2" />
          <path d="M20 24h24M20 30h24M20 36h24" strokeWidth={swFine} opacity="0.65" />
          <path d="M22 22c2-2 5-3 10-3s8 1 10 3" strokeWidth={swFine} />
          <path d="M24 22h16" strokeWidth={swFine} opacity="0.9" />
          <circle cx="32" cy="48" r="2.5" />
          <path d="M30 50v4M34 50v4" strokeWidth={swFine} />
        </svg>
      );
    case "microgolf":
      return (
        <svg {...svgProps}>
          <rect x="8" y="14" width="36" height="36" rx="2.5" />
          <rect x="12" y="18" width="22" height="28" rx="1.5" />
          <circle cx="23" cy="32" r="7" strokeWidth={swFine} />
          <ellipse cx="23" cy="32" rx="5" ry="1.5" strokeWidth={swFine} opacity="0.7" transform="rotate(-8 23 32)" />
          <rect x="36" y="18" width="6" height="28" rx="1" strokeWidth={swFine} />
          <rect x="37" y="20" width="4" height="3" rx="0.5" fill="currentColor" fillOpacity="0.35" />
          <path d="M37.5 26h5M37.5 29h5M37.5 32h5M37.5 35h5M37.5 38h5" strokeWidth={0.9} opacity="0.8" />
          <circle cx="39" cy="42" r="1.2" strokeWidth={swFine} />
          <path d="M14 14h26" strokeWidth={swFine} opacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <rect x="12" y="12" width="40" height="40" rx="3" />
        </svg>
      );
  }
}
