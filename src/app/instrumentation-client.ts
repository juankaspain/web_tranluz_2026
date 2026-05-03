/**
 * instrumentation-client.ts — Next.js 15 hook de instrumentación cliente.
 * Registra Web Vitals (LCP, INP, CLS, FCP, TTFB) de forma defensiva.
 * Si web-vitals no está disponible en el entorno, no lanza error.
 */
export async function onRouteChange() {
  try {
    const [{ onCLS, onFCP, onINP, onLCP, onTTFB }, { reportWebVitals }] =
      await Promise.all([
        import("web-vitals"),
        import("@/lib/web-vitals"),
      ]);
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onINP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  } catch {
    // web-vitals no disponible — no bloquea la app
  }
}
