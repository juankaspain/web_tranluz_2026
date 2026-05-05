"use client";

/**
 * useReveal — M9
 * IntersectionObserver que activa la clase .visible en elementos .reveal
 * al entrar en el viewport. Respeta prefers-reduced-motion.
 *
 * Uso:
 *   1. Añadir className="reveal" a cualquier elemento que deba animarse
 *   2. Importar y llamar useReveal() en un componente client que se
 *      renderice en todas las páginas (ej: RevealProvider en RootLayout)
 *
 * CSS (ya definido en utilities.css):
 *   .reveal { opacity: 0; transform: translateY(20px); transition: ... }
 *   .reveal.visible { opacity: 1; transform: none; }
 */

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    // Respetar prefers-reduced-motion: mostrar todo inmediatamente
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach(el => {
        el.classList.add("visible");
      });
      return;
    }

    // IntersectionObserver — threshold 12%, rootMargin -40px inferior
    // para que el elemento esté ya parcialmente visible antes de animar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Una sola vez: dejar de observar tras la primera activación
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observar todos los elementos .reveal presentes en el DOM
    document.querySelectorAll<HTMLElement>(".reveal").forEach(el => {
      observer.observe(el);
    });

    // Cleanup al desmontar
    return () => observer.disconnect();
  }, []);
}
