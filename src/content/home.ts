import { assets } from "@/content/assets";

export const proofPoints = [
  { value: "1987", label: "Especializacion desde" },
  { value: "+30", label: "anos de experiencia sectorial" },
  { value: "4", label: "lineas diferenciales: ITS, Revisa, alquiler y formacion" },
  { value: "2025/26", label: "catalogo general vigente" }
];

export const partnerBrands = ["Tesmec", "Plumett", "Work Italia", "3M", "Tractel", "Cembre"];

export const homeServices = [
  {
    title: "ITS Servicio Tecnico Integral",
    href: "/servicios/its-servicio-tecnico",
    image: assets.its,
    kicker: "Revision, mantenimiento y calibracion",
    summary:
      "Programa preventivo para acreditar que el equipo mantiene su punto optimo de funcionamiento y seguridad.",
    bullets: ["Informes completos", "Servicio tecnico oficial", "Actuacion en instalaciones u obra"]
  },
  {
    title: "Revisa",
    href: "/servicios/revisa-trazabilidad",
    image: assets.revisa,
    kicker: "Trazabilidad en tiempo real",
    summary:
      "Sistema para controlar EPIs, lineas de vida, cabrestantes y equipos que requieren revision periodica.",
    bullets: ["Lectura por movil, tablet o PC", "Alertas por estado", "Informes por equipo y ubicacion"]
  },
  {
    title: "Rent Puller",
    href: "/alquiler",
    image: assets.rentPuller,
    kicker: "Alquiler para obra",
    summary:
      "Equipos de tendido para necesidades puntuales, desde tiradas pequenas hasta proyectos de mayor escala.",
    bullets: ["Cabrestantes y frenadoras", "Asistencia tecnica", "Alquiler diario, semanal o mensual"]
  },
  {
    title: "Formacion Tranluz",
    href: "/formacion",
    image: assets.training,
    kicker: "Cursos para empresas",
    summary:
      "Formacion teorico-practica para que operadores y tecnicos trabajen con seguridad y criterio.",
    bullets: ["Operador de tendido", "Fibra optica", "Trabajos en altura"]
  }
];

export const featuredEquipment = [
  {
    name: "Cabrestante ARS301",
    href: "/alquiler/cabrestante-ars301",
    meta: "2.500 kg",
    specs: ["Tiro maximo 25 kN", "Motor diesel 25 kW", "Tendido aereo y subterraneo"]
  },
  {
    name: "Cabrestante ARS403",
    href: "/alquiler/cabrestante-ars403",
    meta: "3.500 kg",
    specs: ["Tiro maximo 35 kN", "Velocidad max. 3,6 km/h", "Control de tiro"]
  },
  {
    name: "Cabrestante ARS523",
    href: "/alquiler/cabrestante-ars523",
    meta: "7.000 kg",
    specs: ["Tiro maximo 70 kN", "Peso 2.100 kg", "Grabadora de tiro opcional"]
  },
  {
    name: "Frenadora TN1200",
    href: "/alquiler/frenadora-tn1200",
    meta: "4.000 kg",
    specs: ["Tension max. 40 kN", "Pantalla 7 pulgadas", "Control remoto por radio"]
  }
];

export const downloads = [
  {
    title: "Catalogo General 2025-2026",
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
    title: "Folleto Formate Tranluz",
    href: "/formacion",
    version: "V1 - 05/2024",
    size: "2,9 Mb"
  }
];

export const quickActions = [
  {
    title: "Comprar producto",
    summary: "Catalogo por familias tecnicas, fichas, accesorios y presupuesto.",
    href: "/productos"
  },
  {
    title: "Alquilar equipo",
    summary: "Cabrestantes, frenadoras y equipos de tendido con asesoramiento.",
    href: "/alquiler"
  },
  {
    title: "Revisar o certificar",
    summary: "Mantenimiento preventivo, revisiones, calibracion e informes.",
    href: "/servicios/its-servicio-tecnico"
  },
  {
    title: "Formar equipo",
    summary: "Cursos para operadores, fibra optica, altura y empresas.",
    href: "/formacion"
  }
];

