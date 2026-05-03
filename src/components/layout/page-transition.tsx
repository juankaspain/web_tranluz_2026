"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * PageTransition — activa View Transitions API (Chrome 111+) entre rutas.
 * En navegadores sin soporte o con prefers-reduced-motion, no aplica ningún efecto.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (!document.startViewTransition) {
      prevPath.current = pathname;
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      prevPath.current = pathname;
      return;
    }

    // Solo animar en cambios reales de ruta
    if (prevPath.current !== null && prevPath.current !== pathname) {
      document.startViewTransition(() => {
        // Next ya actualiza el DOM — la transición ocurre automáticamente
      });
    }

    prevPath.current = pathname;
  }, [pathname]);

  return <>{children}</>;
}
