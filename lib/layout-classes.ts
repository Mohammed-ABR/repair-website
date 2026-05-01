/**
 * Shared spacing, alignment, and typography for a consistent premium feel.
 */

/** Max width + horizontal padding aligned site-wide */
export const pageContainer =
  "mx-auto w-full max-w-7xl px-5 sm:px-7 md:px-10";

/** Vertical section rhythm — extra breathing room, especially on small screens */
export const sectionY = "py-12 md:py-16 lg:py-24";

/** Inner pages (contact, diensten, etc.) */
export const innerPageY = "py-12 md:py-16 lg:py-24";

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
  "text-pretty break-words text-xl font-semibold tracking-tight text-primary md:text-[1.75rem] md:leading-[1.15] lg:text-[2rem] lg:tracking-tighter";

export const sectionSubtitle =
  "mx-auto mt-5 max-w-2xl text-pretty break-words text-[0.9375rem] font-normal leading-relaxed text-primary/65 md:mt-6 md:text-lg md:leading-relaxed";

/** Headings on dark section bands */
export const sectionTitleOnDark =
  "text-pretty break-words text-xl font-semibold tracking-tight text-primary md:text-[1.75rem] md:leading-[1.15] lg:text-[2rem] lg:tracking-tighter";

export const sectionSubtitleOnDark =
  "mx-auto mt-5 max-w-2xl text-pretty break-words text-[0.9375rem] font-normal leading-relaxed text-primary/65 md:mt-6 md:text-lg md:leading-relaxed";

/** Accent rule under titles */
export const sectionRule = "mx-auto mt-5 h-0.5 w-14 rounded-full bg-accent";

export const sectionRuleLeft =
  "mt-5 h-0.5 w-14 rounded-full bg-accent";

/** Long-form body (about, story) */
export const bodyProse =
  "text-pretty text-base leading-[1.85] text-[#374151] sm:text-lg sm:leading-[1.8]";

/** Page H1 (Over Ons, Contact, …) */
export const pageTitle =
  "text-pretty break-words text-2xl font-semibold tracking-tight text-primary md:text-4xl md:leading-[1.1]";

export const pageLead =
  "mt-6 max-w-2xl text-pretty break-words text-sm leading-relaxed text-[#374151] md:text-base";

/** Card headings + body */
export const cardTitle =
  "text-pretty text-base font-semibold leading-snug tracking-tight text-primary sm:text-lg sm:leading-tight";

export const cardBody =
  "mt-3 text-sm leading-relaxed text-primary/70 sm:leading-relaxed";
