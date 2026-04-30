import { assets } from "@/content/assets";

export const companyHighlights = [
  {
    title: "Esfuerzo, capacidad, servicio y calidad",
    text: "Tranluz inicia su actividad en 1987 con el proposito de ser referente nacional en equipos, maquinas y utiles especiales para el sector electrico y de telecomunicaciones."
  },
  {
    title: "Gestion global",
    text: "La propuesta combina distribucion, mantenimiento, revisiones certificadas, alquiler, formacion y asesoramiento tecnico."
  },
  {
    title: "Fabricantes internacionales",
    text: "El proyecto se apoya en acuerdos de colaboracion con fabricantes de nivel mundial y un equipo con clara vocacion de servicio."
  },
  {
    title: "Cercania al profesional",
    text: "La experiencia de Tranluz nace del contacto directo con los profesionales que trabajan cada dia en obra, mantenimiento y seguridad."
  }
];

export const serviceDetails = {
  "its-servicio-tecnico": {
    eyebrow: "ITS",
    title: "Servicio Tecnico Integral para mantener equipos en su punto optimo.",
    intro:
      "Programa de mantenimiento preventivo para prever incidencias, corregirlas a tiempo y acreditar el estado de funcionamiento de equipos y herramientas.",
    image: assets.itsTechnician,
    logo: assets.itsLogo,
    facts: ["Revisiones y mantenimientos", "Informes completos", "Actuacion en obra o instalaciones", "Servicio oficial homologado"],
    benefits: [
      "Tecnicos especializados ayudan a resolver dudas relacionadas con el equipo y su uso.",
      "Las actuaciones pueden realizarse en instalaciones del cliente, en obra o en Tranluz.",
      "El informe final refleja el trabajo realizado y acredita el estado de funcionamiento.",
      "El mantenimiento preventivo detecta mas del 90% de posibles incidencias antes de que produzcan danos.",
      "El respaldo de fabricantes ayuda a optimizar recursos y prolongar la vida util de los equipos."
    ],
    process: ["Recepcion o visita tecnica", "Revision y diagnostico", "Mantenimiento o ajuste", "Informe y acreditacion"],
    extras: ["Restyling", "Certificacion de equipos", "Adaptacion de equipos convencionales"],
    cta: "Solicitar revision"
  },
  "revisa-trazabilidad": {
    eyebrow: "Revisa",
    title: "Trazabilidad completa y en tiempo real para equipos con revision periodica.",
    intro:
      "Sistema para controlar EPIs, lineas de vida, cabrestantes, herramientas, maquinas y cualquier elemento que deba revisarse periodicamente.",
    image: assets.revisa,
    facts: ["Movil, tablet y PC", "Informes por equipo", "Codigos de color", "Gestion para prevencion"],
    benefits: [
      "Acceso online a la informacion en tiempo real desde movil, tablet o PC.",
      "Lectura de informes por trabajador, numero de serie, zona o ubicacion.",
      "Firma del inspector visible en cada informe consultable o imprimible.",
      "Seguimiento continuo mediante codigo de colores para facilitar planificacion.",
      "Graficos para una vision global del estado de los equipos."
    ],
    process: ["Inventario inicial", "Inspeccion", "Carga de datos", "Seguimiento y alertas"],
    extras: ["EPIs", "Lineas de vida", "Cabrestantes", "Seguridad electrica"],
    cta: "Solicitar demo"
  },
  "revisiones-certificadas": {
    eyebrow: "Revisiones",
    title: "Revisiones certificadas con criterio tecnico y documentacion util.",
    intro:
      "Servicio pensado para empresas que necesitan evidencias claras del estado de sus equipos antes de trabajos criticos.",
    image: assets.its,
    facts: ["Prevencion", "Mantenimiento", "Acreditacion", "Trazabilidad"],
    benefits: [
      "Reduce riesgo operativo antes de uso por personal autorizado.",
      "Ordena el ciclo de vida de equipos sometidos a revision periodica.",
      "Facilita auditorias internas, normativa de calidad y PRL."
    ],
    process: ["Solicitud", "Planificacion", "Revision", "Entrega documental"],
    extras: ["EPIs", "Herramientas", "Maquinaria", "Lineas de vida"],
    cta: "Planificar revision"
  },
  repuestos: {
    eyebrow: "Repuestos",
    title: "Repuestos y soporte para prolongar la vida util del equipo.",
    intro:
      "Canal preparado para identificar referencias, compatibilidades y necesidades de mantenimiento con apoyo tecnico.",
    image: assets.its,
    facts: ["Identificacion", "Compatibilidad", "Suministro", "Soporte"],
    benefits: [
      "Ayuda a localizar repuestos correctos por referencia y equipo.",
      "Reduce paradas por error de compatibilidad.",
      "Conecta compra, mantenimiento y servicio tecnico."
    ],
    process: ["Identificar equipo", "Validar referencia", "Confirmar plazo", "Enviar propuesta"],
    extras: ["Referencias", "Accesorios", "Consumibles", "Mantenimiento"],
    cta: "Pedir repuesto"
  }
};

export const rentalIntro = {
  title: "Alquiler de equipos de tendido para necesidades puntuales de obra.",
  text: "Rent Puller cubre desde tiradas pequenas a proyectos de mayor escala, tanto en tendido subterraneo como aereo, con alquiler diario, semanal o mensual y asistencia tecnica personalizada.",
  phone: "+34 608 741 622",
  image: assets.rentPuller
};

export const rentalEquipment = [
  {
    slug: "cabrestante-ars301",
    name: "Cabrestante ARS301",
    capacity: "2.500 kg",
    description: "Cabrestante hidraulico para tensar cable en tendidos electricos aereos y subterraneos.",
    specs: ["Tiro maximo 25 kN", "Velocidad maxima 3,5 km/h", "Motor diesel 25 kW", "Peso sin cables 820 kg"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars403",
    name: "Cabrestante ARS403",
    capacity: "3.500 kg",
    description: "Equipo hidraulico para operaciones de tendido con control de tiro y velocidad.",
    specs: ["Tiro maximo 35 kN", "Velocidad maxima 3,6 km/h", "Motor diesel 25 kW", "Peso sin cables 980 kg"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars405",
    name: "Cabrestante ARS405",
    capacity: "3.000 kg",
    description: "Cabrestante hidraulico para tendido con freno automatico y dinamometro.",
    specs: ["Tiro maximo 30 kN", "Velocidad maxima 3 km/h", "Motor diesel 18,8 kW", "Instalacion electrica 12 V"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars402",
    name: "Cabrestante ARS402",
    capacity: "4.000 kg",
    description: "Equipo de mayor capacidad para tendidos exigentes con transmision hidraulica.",
    specs: ["Tiro maximo 40 kN", "Velocidad maxima 5 km/h", "Motor diesel 42 kW", "Peso sin cables 1.800 kg"],
    accessories: ["AXR001"]
  },
  {
    slug: "cabrestante-ars523",
    name: "Cabrestante ARS523",
    capacity: "7.000 kg",
    description: "Cabrestante hidraulico para trabajos de alta exigencia en tendidos aereos y subterraneos.",
    specs: ["Tiro maximo 70 kN", "Velocidad maxima 4 km/h", "Motor diesel 55 kW", "Peso sin cables 2.100 kg"],
    accessories: ["Grabadora de parametros", "Sistema de preajuste", "Puesta a tierra"]
  }
];

export const trainingIntro = {
  title: "Formacion tecnico-practica para operadores y equipos de empresa.",
  text: "Formate Tranluz nace para cubrir necesidades especificas de responsables que deben formar tecnicos en el uso seguro de maquinaria y equipos.",
  imageOne: assets.trainingOne,
  imageTwo: assets.trainingTwo,
  logo: assets.trainingLogo
};

export const courses = [
  {
    slug: "operador-equipos-electricos",
    ref: "TL01",
    title: "Curso de Operador de Equipos Electricos",
    duration: "6 horas",
    goal: "Dotar a los alumnos de conocimientos para el uso y manejo seguro de maquinaria.",
    syllabus: [
      "Definicion y tipologias de maquinas",
      "Herramientas complementarias",
      "Tipos de tendidos aereos",
      "Prescripciones para el operador",
      "Posicionamiento, anclaje y puesta a tierra",
      "Elementos de control y funciones",
      "Mantenimientos periodicos",
      "Prevencion de accidentes y salud laboral"
    ]
  },
  {
    slug: "operador-equipos-tendido-fibra-optica",
    ref: "TL02",
    title: "Operador de Equipos de Tendido de Fibra Optica",
    duration: "5 horas",
    goal: "Capacitar al operador para el uso de maquinaria en trabajos de fibra optica.",
    syllabus: [
      "Definicion y tipologias de maquinas",
      "Herramientas complementarias",
      "Tipos de trabajos",
      "Prescripciones para el operador",
      "Elementos de control y funciones",
      "Mantenimientos periodicos",
      "Prevencion de accidentes y salud laboral"
    ]
  }
];

export const catalogGroups = [
  {
    title: "Catalogo General 2025-2026",
    description: "Contiene todos los capitulos del catalogo: alta tension, tendidos, seguridad, hidraulica, fibra optica y herramientas.",
    items: [{ name: "Catalogo General 2025-2026", version: "V1 - 20/11/2025", size: "23,31 Mb", status: "Actual" }]
  },
  {
    title: "Capitulos actualizados",
    description: "Principales areas del catalogo separadas para consulta rapida.",
    items: [
      { name: "01 Alta Tension", version: "V4 - 18/02/2025", size: "17,8 KB", status: "Actual" },
      { name: "02 Tendidos Subterraneos", version: "V2 - 23/03/2022", size: "3.047 KB", status: "Historico operativo" },
      { name: "03 Proteccion Laboral", version: "V2.2 - 08/07/2021", size: "8.318 KB", status: "Historico operativo" },
      { name: "04 Seguridad Electrica", version: "V4.1 - 22/12/2022", size: "10.891 KB", status: "Historico operativo" },
      { name: "05 Herramientas Hidraulica", version: "V1.3 - 21/01/2022", size: "8.768 KB", status: "Historico operativo" },
      { name: "06 Fibra Optica", version: "V1 - 12/2019", size: "4.621 KB", status: "Archivo" }
    ]
  },
  {
    title: "Folletos de servicios",
    description: "Documentacion comercial y tecnica para servicios diferenciales.",
    items: [
      { name: "Folleto ITS-Tranluz", version: "V2 - 05/2024", size: "2,4 Mb", status: "Actual" },
      { name: "Folleto RentPuller-Tranluz", version: "V5 - 05/2024", size: "2,3 Mb", status: "Actual" },
      { name: "Folleto Revisa-Tranluz", version: "V1 - 04/2019", size: "2,19 Mb", status: "Archivo" },
      { name: "Folleto Formate-Tranluz", version: "V1 - 05/2024", size: "2,9 Mb", status: "Actual" }
    ]
  }
];

export const contactDepartments = [
  "Departamento Comercial",
  "Administracion",
  "Compras",
  "Servicio Tecnico",
  "Almacen"
];

export const schedule = [
  { label: "Lunes - Jueves", value: "08:00 a 17:30 ininterrumpidamente" },
  { label: "Viernes", value: "08:00 a 14:00" },
  { label: "Horario de verano", value: "08:00 a 15:00" },
  { label: "Sabados", value: "Cerrado" }
];

