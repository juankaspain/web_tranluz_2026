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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tranluz.es";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
