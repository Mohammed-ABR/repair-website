/**
 * Premium card surfaces + icon tiles (shared hover / spacing).
 * Card hovers use `accent` (orange); icon wells use `accent-secondary` (green).
 */

/** Primary content cards: services, diensten steps, similar */
export const cardMarketing =
  "group relative flex h-full flex-col overflow-hidden rounded-[1.125rem] border border-primary/10 bg-linear-to-b from-white via-white to-primary/4 p-8 pb-9 shadow-soft-md ring-1 ring-primary/[0.07] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent/30 hover:bg-linear-to-b hover:from-white hover:via-white hover:to-accent/[0.03] hover:shadow-soft-lg hover:ring-accent/12 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:p-9 sm:pb-10";

/** Compact centered tiles: device grid */
export const cardDevice =
  "group relative flex h-full flex-col items-center justify-center gap-5 rounded-[1.125rem] border border-primary/10 bg-white px-6 py-10 text-center shadow-soft-md ring-1 ring-primary/[0.06] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent/30 hover:shadow-soft-lg hover:ring-accent/12 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:px-7 sm:py-11";

/** Glass / trust cards */
export const cardGlass =
  "group relative flex h-full flex-col overflow-hidden rounded-[1.125rem] border border-white/70 bg-white/95 p-8 shadow-soft-md ring-1 ring-primary/[0.05] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-accent/22 hover:bg-white hover:shadow-soft-lg hover:ring-accent/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:p-9";

/** Reviews — quote card */
export const cardReview =
  "group relative flex h-full flex-col overflow-hidden rounded-[1.125rem] border border-primary/10 bg-linear-to-br from-white to-primary/[0.03] p-8 shadow-soft-md ring-1 ring-primary/[0.06] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-accent/28 hover:from-white hover:to-accent/[0.04] hover:shadow-soft-lg hover:ring-accent/12 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 sm:p-9";

/** Accent icon well — pairs with group-hover on parent card */
export const iconTileAccent =
  "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent-secondary/25 via-accent-secondary/12 to-accent-secondary/5 text-accent-secondary shadow-[inset_0_1px_0_0_rgb(255_255_255/0.35)] ring-1 ring-accent-secondary/20 transition-[transform,box-shadow] duration-200 ease-out group-hover:scale-[1.02] group-hover:from-accent-secondary/32 group-hover:via-accent-secondary/18 group-hover:ring-accent-secondary/35 motion-reduce:group-hover:scale-100";

/** Service grid — detailed line icons sit on card surface (no tinted square) */
export const serviceCardIconWrap =
  "flex shrink-0 items-center justify-start text-primary transition-transform duration-200 ease-out group-hover:-translate-y-px motion-reduce:group-hover:translate-y-0";

/** Softer icon well — devices, secondary */
export const iconTileSoft =
  "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary/[0.09] to-primary/[0.02] text-accent-secondary ring-1 ring-primary/10 transition-[transform,background-color,box-shadow] duration-200 ease-out group-hover:scale-[1.02] group-hover:from-accent-secondary/14 group-hover:to-accent-secondary/5 group-hover:ring-accent-secondary/28 motion-reduce:group-hover:scale-100";

/** Icon well for trust / glyph-sized icons (h-11 w-11 inner) */
export const iconTileTrust =
  "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent-secondary/15 to-transparent text-accent-secondary ring-1 ring-accent-secondary/15 transition-transform duration-200 ease-out group-hover:scale-[1.02] group-hover:ring-accent-secondary/32 motion-reduce:group-hover:scale-100";

/** Space from icon row to title */
export const cardHeadSpacing = "mt-7";

/** Horizontal highlight row (team list) */
export const cardListRow =
  "group flex items-center gap-4 rounded-[1rem] border border-primary/10 bg-white px-4 py-4 shadow-soft-md ring-1 ring-primary/[0.05] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent/28 hover:shadow-soft-lg hover:ring-accent/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Large prose panel */
export const cardPanel =
  "rounded-[1.125rem] border border-primary/10 bg-linear-to-br from-white to-primary/[0.04] p-9 shadow-soft-md ring-1 ring-primary/[0.06] sm:p-11";
