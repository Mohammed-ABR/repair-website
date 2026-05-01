/**
 * Shared presentation for `next/image` and photo regions sitewide.
 * Logos / icons (e.g. Simple Icons) should keep `object-contain`, not these.
 */

export const photoCover = "object-cover object-center";

/** `fill` under overlays — z-0; parent is `relative` and sized (min-h or fixed height) */
export const immersivePhoto = `${photoCover} z-0`;

/**
 * Service & device card media: one height, rounded top, slight shadow + hairline edge.
 * Parent of `<Image fill className={cardPhotoWithHover} />` should set `position: relative` (this does).
 */
export const cardPhotoFrame =
  "relative h-56 w-full shrink-0 overflow-hidden rounded-t-2xl shadow-sm ring-1 ring-black/5";

/**
 * Use on `<Image fill />` when inside `cardPhotoFrame` and an ancestor has `group` (hover zoom).
 */
export const cardPhotoWithHover = `${photoCover} transition-transform duration-200 ease-out will-change-transform group-hover:scale-[1.02] motion-reduce:group-hover:scale-100`;
