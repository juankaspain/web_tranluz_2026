/**
 * services.ts – Listado de servicios diferenciales de Tranluz.
 * ITER-4A: Se enriquece cada servicio con color semántico, badge de posicionamiento,
 * slug, cta personalizado y descripción larga para SEO y componentes de UI avanzados.
 */

export type ServiceColor = "technical" | "field" | "safety" | "brand";

export interface Service {
  slug: string;
  title: string;
  href: string;
  summary: string;
  description: string;     // texto largo para páginas de detalle / SEO
  signal: string;          // badge corto de posicionamiento
  badge?: string;          // etiqueta destacada ("Nuevo", "Oficial", etc.)
  color: ServiceColor;     // mapeado a CSS var para iconos y acentos
  cta: string;             // texto del botón de acción
  ctaHref: string;         // destino del CTA
  highlights: string[];    // 3-4 puntos clave (para cards y listas)
}

export const services: Service[] = [
  {
    slug: "its-servicio-tecnico",
    title: "ITS Servicio Técnico",
    href: "/servicios/its-servicio-tecnico",
    summary:
      "Revisión, mantenimiento, calibración y certificación de equipos para mantener la obra segura y operativa.",
    description:
      "El Servicio Técnico Integral de Tranluz es el programa preventivo oficial que acredita que cada equipo eléctrico, cabrestante o EPI mantiene su punto óptimo de funcionamiento y cumple la normativa vigente. Con más de 38 años de experiencia, nuestros técnicos especializados actuan en instalaciones del cliente, en obra o en nuestras instalaciones de Sevilla, emitiendo un informe final completo y trazable.",
    signal: "Servicio oficial",
    badge: "Homologado",
    color: "technical",
    cta: "Solicitar revisión",
    ctaHref: "/presupuesto?servicio=its",
    highlights: [
      "Revisiones preventivas que detectan el 90%+ de incidencias antes de daños",
      "Informe completo y trazable entregado tras cada actuación",
      "Servicio oficial homologado por fabricantes internacionales",
      "Actuación en instalaciones del cliente, en obra o en Tranluz",
    ],
  },
  {
    slug: "revisa-trazabilidad",
    title: "Revisa",
    href: "/servicios/revisa-trazabilidad",
    summary:
      "Plataforma digital de trazabilidad para controlar EPIs, líneas de vida, cabrestantes y equipos con revisión periódica.",
    description:
      "Revisa es el sistema de trazabilidad de Tranluz que permite a empresas eléctricas y de telecomunicaciones controlar en tiempo real el estado de todos sus equipos y EPIs: fecha de caducidad, inspector responsable, historial de revisiones y alertas automáticas. Accesible desde móvil, tablet o PC. Diseñado para responsables de prevención y jefes de obra.",
    signal: "Trazabilidad digital",
    badge: "SaaS",
    color: "field",
    cta: "Pedir demo gratuita",
    ctaHref: "/presupuesto?servicio=revisa",
    highlights: [
      "Acceso online 24/7 desde cualquier dispositivo",
      "Alertas automáticas por estado y fecha de caducidad",
      "Firma del inspector visible en cada informe imprimible",
      "Gráficos para una visión global del estado de la flota",
    ],
  },
  {
    slug: "rent-puller",
    title: "Rent Puller",
    href: "/alquiler",
    summary:
      "Alquiler de cabrestantes y frenadoras para obras de tendido eléctrico y fibra óptica con asistencia técnica incluida.",
    description:
      "Rent Puller es el servicio de alquiler de equipos de tendido de Tranluz. Desde cabrestantes de 25 kN hasta equipos de 70 kN para proyectos de alta exigencia. Alquiler diario, semanal o mensual con transporte y asistencia técnica personalizada en obra. La solución más flexible para obras puntuales sin inversión en inmovilizado.",
    signal: "Alquiler profesional",
    badge: "Asistencia incluida",
    color: "brand",
    cta: "Ver equipos disponibles",
    ctaHref: "/alquiler",
    highlights: [
      "Flota desde 25 kN hasta 70 kN para cualquier obra",
      "Alquiler diario, semanal o mensual según necesidad",
      "Asistencia técnica en obra incluida sin coste adicional",
      "Transporte y recogida gestionados por Tranluz",
    ],
  },
  {
    slug: "formacion",
    title: "Formación Tranluz",
    href: "/formacion",
    summary:
      "Cursos certificados para operadores, técnicos y empresas eléctricas que necesitan trabajar con seguridad y criterio profesional.",
    description:
      "Fórmate Tranluz ofrece formación teórico-práctica homologada para cubrir las necesidades de empresas eléctricas y de telecomunicaciones: operador de equipos eléctricos, técnico en fibra óptica y trabajos en altura. Los cursos combinan teoría, práctica con maquinaria real y certificación documental para cumplimiento de PRL.",
    signal: "Para empresas",
    badge: "Certificado",
    color: "safety",
    cta: "Ver oferta formativa",
    ctaHref: "/formacion",
    highlights: [
      "Práctica con maquinaria real en instalaciones Tranluz",
      "Certificación documental para cumplimiento de PRL",
      "Cursos in-company o en sede de Tranluz (Sevilla)",
      "Modalidades: tendido eléctrico, fibra óptica y altura",
    ],
  },
];
