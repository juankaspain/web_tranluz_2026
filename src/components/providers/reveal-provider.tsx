"use client";

/**
 * RevealProvider — M9
 * Componente client que activa el IntersectionObserver de .reveal.
 * Importar en RootLayout (src/app/layout.tsx) como hijo de <body>:
 *
 *   import { RevealProvider } from "@/components/providers/reveal-provider";
 *   ...
 *   <body>
 *     <RevealProvider />
 *     {children}
 *   </body>
 *
 * El componente no renderiza nada visible — solo activa el hook.
 */

import { useReveal } from "@/hooks/use-reveal";

export function RevealProvider() {
  useReveal();
  return null;
}
