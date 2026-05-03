/**
 * Web Vitals reporter — issue #1 · 4.4
 * Envía métricas a /api/vitals (configurable) y registra en consola en dev.
 * Compatible con Vercel Speed Insights y cualquier endpoint propio.
 */
import type { Metric } from "web-vitals";

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_VITALS_ENDPOINT ?? "";

export function reportWebVitals(metric: Metric): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(
      `[Web Vitals] ${metric.name}: ${Math.round(metric.value)}ms (rating: ${metric.rating})`
    );
  }

  if (!ANALYTICS_ENDPOINT) return;

  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
  });

  // Preferimos sendBeacon para no bloquear la navegación
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
  } else {
    fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
      keepalive: true,
    });
  }
}
