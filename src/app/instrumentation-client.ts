/**
 * instrumentation-client.ts — Next.js 15 hook de instrumentación cliente
 * Se ejecuta una vez al iniciar la app en el navegador.
 * Registra el colector de Web Vitals para LCP, INP, CLS, FCP, TTFB.
 */
export async function onRouteChange() {
  const { onCLS, onFCP, onINP, onLCP, onTTFB } = await import("web-vitals");
  const { reportWebVitals } = await import("@/lib/web-vitals");

  onCLS(reportWebVitals);
  onFCP(reportWebVitals);
  onINP(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);
}
