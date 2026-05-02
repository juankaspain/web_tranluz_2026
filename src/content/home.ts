/**
 * home.ts – Contenido de datos para la página de inicio.
 * ITER-3: Mejora de copy, métricas actualizadas, textos más persuasivos
 * y estructura orientada a conversión y UX.
 */
import { assets } from "@/content/assets";

// ─── Métricas de prueba social visibles en hero ────────────────────
export const proofPoints = [
  { value: "1987",   label: "Especialistas desde" },
  { value: "+38",    label: "Años de experiencia sectorial" },
  { value: "4",      label: "Líneas de negocio integradas" },
  { value: "2025/26",label: "Catálogo general vigente" },
];

// ─── Partners / marcas del ecosistema ──────────────────────────
export const partnerBrands = [
  "Tesmec", "Plumett", "Work Italia", "3M", "Tractel", "Cembre"
];

// ─── Servicios destacados (cards de la home) ─────────────────────
export const homeServices = [
  {
    title: "ITS Servicio Técnico Integral",
    href: "/servicios/its-servicio-tecnico",
    image: assets.its,
    kicker: "Revisión, mantenimiento y calibración certificada",
    summary:
      "Programa preventivo oficial para acreditar que cada equipo mantiene su punto óptimo de funcionamiento y seguridad. Cumplimiento normativo garantizado.",
    bullets: [
      "Informes completos y trazables",
      "Servicio técnico oficial de fábrica",
      "Actuación en instalaciones u obra",
    ],
  },
  {
    title: "Revisa",
    href: "/servicios/revisa-trazabilidad",
    image: assets.revisa,
    kicker: "Trazabilidad de EPIs y equipos en tiempo real",
    summary:
      "Plataforma digital para controlar EPIs, líneas de vida, cabrestantes y cualquier equipo que requiera revisión periódica con alertas automáticas.",
    bullets: [
      "Lectura por móvil, tablet o PC",
      "Alertas por estado y fecha de caducidad",
      "Informes por equipo y ubicación",
    ],
  },
  {
    title: "Rent Puller",
    href: "/alquiler",
    image: assets.rentPuller,
    kicker: "Alquiler flexible para obra",
    summary:
      "Cabrestantes y frenadoras para obras de tendido eléctrico y fibra óptica. Desde tiradas pequeñas hasta proyectos de mayor escala, con asistencia técnica incluida.",
    bullets: [
      "Cabrestantes de 2.500 a 70.000 kg",
      "Asistencia técnica en obra incluida",
      "Alquiler diario, semanal o mensual",
    ],
  },
  {
    title: "Formación Tranluz",
    href: "/formacion",
    image: assets.training,
    kicker: "Certificación y cursos para empresas eléctricas",
    summary:
      "Formación teórico-práctica homologada para que operadores y técnicos trabajen con máxima seguridad y criterio profesional.",
    bullets: [
      "Operador de tendido eléctrico",
      "Técnico en fibra óptica",
      "Trabajos en altura y EPIs",
    ],
  },
];

// ─── Equipos de alquiler destacados ────────────────────────────
export const featuredEquipment = [
  {
    name: "Cabrestante ARS301",
    href: "/alquiler/cabrestante-ars301",
    meta: "2.500 kg · 25 kN",
    specs: ["Tiro máximo 25 kN", "Motor diésel 25 kW", "Tendido aéreo y subterráneo"],
  },
  {
    name: "Cabrestante ARS403",
    href: "/alquiler/cabrestante-ars403",
    meta: "3.500 kg · 35 kN",
    specs: ["Tiro máximo 35 kN", "Velocidad máx. 3,6 km/h", "Control automático de tiro"],
  },
  {
    name: "Cabrestante ARS523",
    href: "/alquiler/cabrestante-ars523",
    meta: "7.000 kg · 70 kN",
    specs: ["Tiro máximo 70 kN", "Peso 2.100 kg", "Grabadora de tiro opcional"],
  },
  {
    name: "Frenadora TN1200",
    href: "/alquiler/frenadora-tn1200",
    meta: "4.000 kg · 40 kN",
    specs: ["Tensión máx. 40 kN", "Pantalla 7 pulgadas", "Control remoto por radio"],
  },
];

// ─── Documentación descargable ───────────────────────────────
export const downloads = [
  {
    title: "Catálogo General 2025-2026",
    href: "/soporte/catalogos",
    version: "V1 · 20/11/2025",
    size: "23,3 MB",
  },
  {
    title: "Folleto ITS Tranluz",
    href: "/servicios/its-servicio-tecnico",
    version: "V2 · 05/2024",
    size: "2,4 MB",
  },
  {
    title: "Folleto Rent Puller",
    href: "/alquiler",
    version: "V5 · 05/2024",
    size: "2,3 MB",
  },
  {
    title: "Fórmate Tranluz",
    href: "/formacion",
    version: "V1 · 05/2024",
    size: "2,9 MB",
  },
];

// ─── Acciones rápidas (panel operativo / hero command) ────────────
export const quickActions = [
  {
    title: "Comprar producto",
    summary: "Catálogo por familias técnicas, fichas, accesorios y presupuesto rápido.",
    href: "/productos",
  },
  {
    title: "Alquilar equipo",
    summary: "Cabrestantes, frenadoras y equipos de tendido. Asistencia técnica incluida.",
    href: "/alquiler",
  },
  {
    title: "Revisar o certificar",
    summary: "Mantenimiento preventivo, revisiones ITS, calibración e informes oficiales.",
    href: "/servicios/its-servicio-tecnico",
  },
  {
    title: "Formar al equipo",
    summary: "Cursos certificados para operadores de tendido, fibra óptica y altura.",
    href: "/formacion",
  },
];
