"use client";

import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const duration = reduce ? 0 : 0.2;

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait">
        <m.div
          key={pathname}
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
          transition={{ duration, ease }}
          className="w-full"
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
