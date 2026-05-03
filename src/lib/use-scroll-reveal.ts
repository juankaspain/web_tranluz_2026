"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Adds `.is-visible` to the target element when it enters the viewport.
 * Uses IntersectionObserver for performance; respects prefers-reduced-motion.
 *
 * @param threshold  Visibility ratio required before triggering (default 0.12)
 * @param once       Trigger only once, default true
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  once = true,
}: {
  threshold?: number;
  once?: boolean;
} = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user motion preference at JS level too
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}
