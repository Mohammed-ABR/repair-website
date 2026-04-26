"use client";

import { useReducedMotion } from "framer-motion";

/** Ease: smooth deceleration, readable fade-in on scroll */
export const scrollRevealEase = [0.22, 1, 0.36, 1] as const;

export const scrollRevealDurationSec = 0.52;
export const scrollRevealChildDurationSec = 0.44;
export const scrollRevealChildStaggerSec = 0.05;

/**
 * Fade + slight slide up for sections (whileInView, once).
 */
export function getScrollRevealProps(reduceMotion: boolean | null) {
  const off = Boolean(reduceMotion);
  return {
    initial: off ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-56px", amount: 0.12 },
    transition: {
      duration: off ? 0 : scrollRevealDurationSec,
      ease: scrollRevealEase,
    },
  } as const;
}

/**
 * Staggered children (cards, list items) — slightly smaller motion than sections.
 */
export function getScrollRevealChildProps(reduceMotion: boolean | null, index: number) {
  const off = Boolean(reduceMotion);
  return {
    initial: off ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px", amount: 0.1 },
    transition: {
      duration: off ? 0 : scrollRevealChildDurationSec,
      delay: off ? 0 : index * scrollRevealChildStaggerSec,
      ease: scrollRevealEase,
    },
  } as const;
}

/** Hook variant when you already have `useReducedMotion()` in scope */
export function useScrollRevealProps() {
  return getScrollRevealProps(Boolean(useReducedMotion()));
}
