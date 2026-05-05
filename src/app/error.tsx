"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * error.tsx — página de error genérico de Next.js (E2)
 * Misma estructura visual que not-found.tsx:
 * SiteHeader + page-hero + hero-actions + SiteFooter
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log a consola o plataforma de monitorización (Sentry, etc.)
    console.error("[Tranluz] Unhandled error:", error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Error inesperado</p>
          <h1>Algo ha fallado en esta página.</h1>
          <p>
            Ha ocurrido un error técnico. Puedes intentarlo de nuevo, volver al
            catálogo o solicitar ayuda directamente a nuestro equipo.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={reset}>
              Intentar de nuevo
            </button>
            <Link className="button button-secondary" href="/productos">
              Ver catálogo
            </Link>
            <Link className="button button-ghost" href="/presupuesto">
              Solicitar presupuesto
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && error?.message && (
            <details className="error-dev-details">
              <summary>Detalle técnico (solo en desarrollo)</summary>
              <pre>{error.message}</pre>
              {error.stack && <pre>{error.stack}</pre>}
            </details>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
