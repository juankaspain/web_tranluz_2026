import type { MetadataRoute } from "next";

const routes = [
  "",
  "/productos",
  "/soluciones",
  "/servicios",
  "/alquiler",
  "/formacion",
  "/soporte",
  "/soporte/catalogos",
  "/empresa",
  "/contacto",
  "/presupuesto",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
  "/accesibilidad",
  "/kit-digital",
  "/servicios/its-servicio-tecnico",
  "/servicios/revisa-trazabilidad",
  "/servicios/revisiones-certificadas",
  "/servicios/repuestos",
  "/alquiler/cabrestante-ars301",
  "/alquiler/cabrestante-ars403",
  "/alquiler/cabrestante-ars405",
  "/alquiler/cabrestante-ars402",
  "/alquiler/cabrestante-ars523",
  "/formacion/operador-equipos-electricos",
  "/formacion/operador-equipos-tendido-fibra-optica",
  "/productos/alta-tension",
  "/productos/tendidos-aereos",
  "/productos/tendidos-subterraneos",
  "/productos/fibra-optica",
  "/productos/seguridad-electrica",
  "/productos/herramienta-hidraulica"
];

// Mapeo de locales a prefijos de URL y hreflang
const localeMap: Record<string, string> = {
  es: "es-ES",
  en: "en-GB",
  de: "de-DE",
  it: "it-IT",
  fr: "fr-FR",
};

const localeOrder = ["es", "en", "de", "it", "fr"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tranluz.es";

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    const isHome = route === "";
    const priority = isHome ? 1 : 0.8;
    const changeFrequency = isHome ? "weekly" : "monthly";

    // Entrada canónica en español (sin prefijo)
    const alternates: Record<string, string> = {};
    for (const locale of localeOrder) {
      const hreflang = localeMap[locale];
      // Español: URL sin prefijo; otros: /locale/route
      const url = locale === "es" ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`;
      alternates[hreflang] = url;
    }
    // x-default apunta a la versión española
    alternates["x-default"] = `${baseUrl}${route}`;

    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
