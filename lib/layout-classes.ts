/**
 * Shared spacing, alignment, and typography for a consistent premium feel.
 */

/** Max width + horizontal padding aligned site-wide */
export const pageContainer =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

/** Vertical section rhythm */
export const sectionY = "py-10 md:py-16 lg:py-20";

/** Inner pages (contact, diensten, etc.) */
export const innerPageY = "py-10 md:py-16 lg:py-20";

export const innerPageShell = `${pageContainer} ${innerPageY}`;

/** Narrow reading column (contact, diensten) — same horizontal padding as site */
export const narrowPageShell = `mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 ${innerPageY}`;

/** Centered block for section titles + lead copy */
export const sectionIntro =
  "mx-auto max-w-2xl text-center sm:max-w-3xl";

/** Hero / landing H1 */
export const heroHeadline =
  "text-pretty text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl lg:leading-[1.05]";

export const heroLead =
  "mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/75 sm:text-xl sm:leading-relaxed";

/** Standard section H2 (centered blocks) */
export const sectionTitle =
  "text-pretty text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-[2.125rem] lg:leading-snug";

export const sectionSubtitle =
  "mt-4 text-pretty text-sm leading-relaxed text-[#374151] sm:text-base lg:text-lg";

/** Headings on dark section bands */
export const sectionTitleOnDark =
  "text-pretty text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-[2.125rem] lg:leading-snug";

export const sectionSubtitleOnDark =
  "mt-4 text-pretty text-sm leading-relaxed text-[#374151] sm:text-base lg:text-lg";

/** Accent rule under titles */
export const sectionRule = "mx-auto mt-5 h-0.5 w-14 rounded-full bg-accent";

export const sectionRuleLeft =
  "mt-5 h-0.5 w-14 rounded-full bg-accent";

/** Long-form body (about, story) */
export const bodyProse =
  "text-pretty text-base leading-[1.85] text-[#374151] sm:text-lg sm:leading-[1.8]";

/** Page H1 (Over Ons, Contact, …) */
export const pageTitle =
  "text-pretty text-2xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]";

export const pageLead =
  "mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#374151] sm:text-xl";

/** Card headings + body */
export const cardTitle =
  "text-pretty text-base font-semibold leading-snug tracking-tight text-primary sm:text-lg";

export const cardBody =
  "mt-3 text-sm leading-relaxed text-[#374151] sm:leading-relaxed";
