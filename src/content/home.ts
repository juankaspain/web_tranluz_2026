import { assets } from "@/content/assets";

export const proofPoints = [
  { value: "1987", label: "Especializados desde" },
  { value: "+35", label: "Años de experiencia sectorial" },
  { value: "4", label: "Líneas: ITS, Revisa, alquiler y formación" },
  { value: "2025/26", label: "Catálogo general vigente" }
];

export const partnerBrands = ["Tesmec", "Plumett", "Work Italia", "3M", "Tractel", "Cembre"];

export const homeServices = [
  {
    title: "ITS Servicio Técnico Integral",
    href: "/servicios/its-servicio-tecnico",
    image: assets.its,
    kicker: "Revisión, mantenimiento y calibración",
    summary: "Programa preventivo para acreditar que el equipo mantiene su punto óptimo de funcionamiento y seguridad.",
    bullets: ["Informes completos", "Servicio técnico oficial", "Actuación en instalaciones u obra"]
  },
  {
    title: "Revisa",
    href: "/servicios/revisa-trazabilidad",
    image: assets.revisa,
    kicker: "Trazabilidad en tiempo real",
    summary: "Sistema para controlar EPIs, líneas de vida, cabrestantes y equipos que requieren revisión periódica.",
    bullets: ["Lectura por móvil, tablet o PC", "Alertas por estado", "Informes por equipo y ubicación"]
  },
  {
    title: "Rent Puller",
    href: "/alquiler",
    image: assets.rentPuller,
    kicker: "Alquiler para obra",
    summary: "Equipos de tendido para necesidades puntuales, desde tiradas pequeñas hasta proyectos de mayor escala.",
    bullets: ["Cabrestantes y frenadoras", "Asistencia técnica incluida", "Alquiler diario, semanal o mensual"]
  },
  {
    title: "Formación Tranluz",
    href: "/formacion",
    image: assets.training,
    kicker: "Cursos para empresas",
    summary: "Formación teórico-práctica para que operadores y técnicos trabajen con seguridad y criterio.",
    bullets: ["Operador de tendido", "Fibra óptica", "Trabajos en altura"]
  }
];

export const featuredEquipment = [
  {
    name: "Cabrestante ARS301",
    href: "/alquiler/cabrestante-ars301",
    meta: "2.500 kg",
    specs: ["Tiro máximo 25 kN", "Motor diésel 25 kW", "Tendido aéreo y subterráneo"]
  },
  {
    name: "Cabrestante ARS403",
    href: "/alquiler/cabrestante-ars403",
    meta: "3.500 kg",
    specs: ["Tiro máximo 35 kN", "Velocidad máx. 3,6 km/h", "Control de tiro"]
  },
  {
    name: "Cabrestante ARS523",
    href: "/alquiler/cabrestante-ars523",
    meta: "7.000 kg",
    specs: ["Tiro máximo 70 kN", "Peso 2.100 kg", "Grabadora de tiro opcional"]
  },
  {
    name: "Frenadora TN1200",
    href: "/alquiler/frenadora-tn1200",
    meta: "4.000 kg",
    specs: ["Tensión máx. 40 kN", "Pantalla 7 pulgadas", "Control remoto por radio"]
  }
];

export const downloads = [
  {
    title: "Catálogo General 2025-2026",
    href: "/soporte/catalogos",
    version: "V1 - 20/11/2025",
    size: "23,31 Mb"
  },
  {
    title: "Folleto ITS Tranluz",
    href: "/servicios/its-servicio-tecnico",
    version: "V2 - 05/2024",
    size: "2,4 Mb"
  },
  {
    title: "Folleto Rent Puller",
    href: "/alquiler",
    version: "V5 - 05/2024",
    size: "2,3 Mb"
  },
  {
    title: "Folleto Fórmate Tranluz",
    href: "/formacion",
    version: "V1 - 05/2024",
    size: "2,9 Mb"
  }
];

export const quickActions = [
  {
    title: "Comprar producto",
    summary: "Catálogo por familias técnicas, fichas, accesorios y presupuesto.",
    href: "/productos"
  },
  {
    title: "Alquilar equipo",
    summary: "Cabrestantes, frenadoras y equipos de tendido con asesoramiento.",
    href: "/alquiler"
  },
  {
    title: "Revisar o certificar",
    summary: "Mantenimiento preventivo, revisiones, calibración e informes ITS.",
    href: "/servicios/its-servicio-tecnico"
  },
  {
    title: "Formar al equipo",
    summary: "Cursos para operadores, fibra óptica, altura y empresas.",
    href: "/formacion"
  }
];
