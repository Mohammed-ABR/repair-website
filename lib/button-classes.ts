/**
 * Shared button / control interactions: scale + color on hover, 300ms custom ease.
 */

const buttonEase =
  "transform-gpu transition-[transform,background-color,box-shadow,border-color,filter,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] select-none motion-reduce:transition-none";

/** Core hover for primary/secondary CTAs (CSS; use with Link or <a>) */
const buttonInteractive = `${buttonEase} hover:scale-[1.03] active:scale-[0.99] motion-reduce:hover:scale-100 motion-reduce:active:scale-100`;

/** Lighter lift for outline / secondary surfaces */
const buttonInteractiveSubtle = `${buttonEase} hover:scale-[1.02] active:scale-[0.99] motion-reduce:hover:scale-100 motion-reduce:active:scale-100`;

/** Icon-only controls (menu, toolbar) */
export const interactiveIcon = `${buttonEase} hover:scale-[1.04] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100`;

/** Cards / panels — lighter lift, no opacity shift */
export const cardInteractive = `${buttonEase} hover:scale-[1.01] hover:shadow-soft-md hover:border-primary/15 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-soft`;

export const buttonPrimary = `inline-flex items-center justify-center rounded-2xl border border-transparent bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft-md ${buttonInteractive} hover:bg-accent-secondary hover:shadow-soft-lg active:bg-accent-secondary motion-reduce:hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2`;

export const buttonPrimaryCompact = `inline-flex items-center justify-center rounded-2xl border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft-md ${buttonInteractive} hover:bg-accent-secondary hover:shadow-soft-lg active:bg-accent-secondary motion-reduce:hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2`;

export const buttonSecondary = `inline-flex items-center justify-center rounded-2xl border border-transparent bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft-md ${buttonInteractiveSubtle} hover:bg-accent-secondary hover:shadow-soft-lg active:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2`;

/**
 * Visual-only base for Framer `m.a` / `m.button` — no CSS hover transform (Framer drives scale/opacity).
 */
export const buttonPrimaryMotion =
  "inline-flex items-center justify-center rounded-2xl border border-transparent bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft-md transform-gpu transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-secondary hover:shadow-soft-lg active:bg-accent-secondary motion-reduce:transition-none motion-reduce:hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2";

export const buttonSecondaryMotion =
  "inline-flex items-center justify-center rounded-2xl border border-transparent bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft-md transform-gpu transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent-secondary hover:shadow-soft-lg active:bg-accent-secondary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2";
