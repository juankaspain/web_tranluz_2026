"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Valor final al que animar */
  end: number;
  /** Duración total de la animación en ms (por defecto 1200) */
  duration?: number;
  /** Retrasar el inicio hasta que el elemento sea visible */
  observeIntersection?: boolean;
}

/**
 * useCountUp
 * Anima un número desde 0 hasta `end`.
 * Respeta prefers-reduced-motion: si el usuario prefiere sin movimiento,
 * devuelve directamente el valor final sin animación.
 */
export function useCountUp(
  { end, duration = 1200, observeIntersection = true }: UseCountUpOptions
) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLElement | null>(null);
  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (reducedMotion) {
      setCount(end);
      return;
    }

    let rafId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    if (!observeIntersection || !nodeRef.current) {
      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          rafId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(nodeRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [end, duration, reducedMotion, observeIntersection]);

  return { count, nodeRef };
}
