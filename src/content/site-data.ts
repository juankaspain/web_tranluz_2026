import { assets } from "@/content/assets";

export const companyHighlights = [
  {
    title: "Esfuerzo, capacidad, servicio y calidad",
    text: "Tranluz inicia su actividad en 1987 con el propósito de ser referente nacional en equipos, máquinas y útiles especiales para el sector eléctrico y de telecomunicaciones."
  },
  {
    title: "Gestión global",
    text: "La propuesta combina distribución, mantenimiento, revisiones certificadas, alquiler, formación y asesoramiento técnico."
  },
  {
    title: "Fabricantes internacionales",
    text: "El proyecto se apoya en acuerdos de colaboración con fabricantes de nivel mundial y un equipo con clara vocación de servicio."
  },
  {
    title: "Cercanía al profesional",
    text: "La experiencia de Tranluz nace del contacto directo con los profesionales que trabajan cada día en obra, mantenimiento y seguridad."
  }
];

export const serviceDetails = {
  "its-servicio-tecnico": {
    eyebrow: "ITS",
    title: "Servicio Técnico Integral para mantener equipos en su punto óptimo.",
    intro:
      "Programa de mantenimiento preventivo para prever incidencias, corregirlas a tiempo y acreditar el estado de funcionamiento de equipos y herramientas.",
    image: assets.itsTechnician,
    logo: assets.itsLogo,
    facts: ["Revisiones y mantenimientos", "Informes completos", "Actuación en obra o instalaciones", "Servicio oficial homologado"],
    benefits: [
      "Técnicos especializados ayudan a resolver dudas relacionadas con el equipo y su uso.",
      "Las actuaciones pueden realizarse en instalaciones del cliente, en obra o en Tranluz.",
      "El informe final refleja el trabajo realizado y acredita el estado de funcionamiento.",
      "El mantenimiento preventivo detecta más del 90% de posibles incidencias antes de que produzcan daños.",
      "El respaldo de fabricantes ayuda a optimizar recursos y prolongar la vida útil de los equipos."
    ],
    process: ["Recepción o visita técnica", "Revisión y diagnóstico", "Mantenimiento o ajuste", "Informe y acreditación"],
    extras: ["Restyling", "Certificación de equipos", "Adaptación de equipos convencionales"],
    cta: "Solicitar revisión"
  },
  "revisa-trazabilidad": {
    eyebrow: "Revisa",
    title: "Trazabilidad completa y en tiempo real para equipos con revisión periódica.",
    intro:
      "Sistema para controlar EPIs, líneas de vida, cabrestantes, herramientas, máquinas y cualquier elemento que deba revisarse periódicamente.",
    image: assets.revisa,
    facts: ["Móvil, tablet y PC", "Informes por equipo", "Códigos de color", "Gestión para prevención"],
    benefits: [
      "Acceso online a la información en tiempo real desde móvil, tablet o PC.",
      "Lectura de informes por trabajador, número de serie, zona o ubicación.",
      "Firma del inspector visible en cada informe consultable o imprimible.",
      "Seguimiento continuo mediante código de colores para facilitar planificación.",
      "Gráficos para una visión global del estado de los equipos."
    ],
    process: ["Inventario inicial", "Inspección", "Carga de datos", "Seguimiento y alertas"],
    extras: ["EPIs", "Líneas de vida", "Cabrestantes", "Seguridad eléctrica"],
    cta: "Solicitar demo"
  },
  "revisiones-certificadas": {
    eyebrow: "Revisiones",
    title: "Revisiones certificadas con criterio técnico y documentación útil.",
    intro:
      "Servicio pensado para empresas que necesitan evidencias claras del estado de sus equipos antes de trabajos críticos.",
    image: assets.its,
    facts: ["Prevención", "Mantenimiento", "Acreditación", "Trazabilidad"],
    benefits: [
      "Reduce riesgo operativo antes de uso por personal autorizado.",
      "Ordena el ciclo de vida de equipos sometidos a revisión periódica.",
      "Facilita auditorías internas, normativa de calidad y PRL."
    ],
    process: ["Solicitud", "Planificación", "Revisión", "Entrega documental"],
    extras: ["EPIs", "Herramientas", "Maquinaria", "Líneas de vida"],
    cta: "Planificar revisión"
  },
  repuestos: {
    eyebrow: "Repuestos",
    title: "Repuestos y soporte para prolongar la vida útil del equipo.",
    intro:
      "Canal preparado para identificar referencias, compatibilidades y necesidades de mantenimiento con apoyo técnico.",
    image: assets.its,
    facts: ["Identificación", "Compatibilidad", "Suministro", "Soporte"],
    benefits: [
      "Ayuda a localizar repuestos correctos por referencia y equipo.",
      "Reduce paradas por error de compatibilidad.",
      "Conecta compra, mantenimiento y servicio técnico."
    ],
    process: ["Identificar equipo", "Validar referencia", "Confirmar plazo", "Enviar propuesta"],
    extras: ["Referencias", "Accesorios", "Consumibles", "Mantenimiento"],
    cta: "Pedir repuesto"
  }
};

export const rentalIntro = {
  title: "Alquiler de equipos de tendido para necesidades puntuales de obra.",
  text: "Rent Puller cubre desde tiradas pequeñas a proyectos de mayor escala, tanto en tendido subterráneo como aéreo, con alquiler diario, semanal o mensual y asistencia técnica personalizada.",
  phone: "+34 608 741 622",
  image: assets.rentPuller
};

export const rentalEquipment = [
  {
    slug: "cabrestante-ars301",
    name: "Cabrestante ARS301",
    capacity: "2.500 kg",
    description: "Cabrestante hidráulico para tensar cable en tendidos eléctricos aéreos y subterráneos.",
    specs: ["Tiro máximo 25 kN", "Velocidad máxima 3,5 km/h", "Motor diesel 25 kW", "Peso sin cables 820 kg"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars403",
    name: "Cabrestante ARS403",
    capacity: "3.500 kg",
    description: "Equipo hidráulico para operaciones de tendido con control de tiro y velocidad.",
    specs: ["Tiro máximo 35 kN", "Velocidad máxima 3,6 km/h", "Motor diesel 25 kW", "Peso sin cables 980 kg"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars405",
    name: "Cabrestante ARS405",
    capacity: "3.000 kg",
    description: "Cabrestante hidráulico para tendido con freno automático y dinamómetro.",
    specs: ["Tiro máximo 30 kN", "Velocidad máxima 3 km/h", "Motor diesel 18,8 kW", "Instalación eléctrica 12 V"],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"]
  },
  {
    slug: "cabrestante-ars402",
    name: "Cabrestante ARS402",
    capacity: "4.000 kg",
    description: "Equipo de mayor capacidad para tendidos exigentes con transmisión hidráulica.",
    specs: ["Tiro máximo 40 kN", "Velocidad máxima 5 km/h", "Motor diesel 42 kW", "Peso sin cables 1.800 kg"],
    accessories: ["AXR001"]
  },
  {
    slug: "cabrestante-ars523",
    name: "Cabrestante ARS523",
    capacity: "7.000 kg",
    description: "Cabrestante hidráulico para trabajos de alta exigencia en tendidos aéreos y subterráneos.",
    specs: ["Tiro máximo 70 kN", "Velocidad máxima 4 km/h", "Motor diesel 55 kW", "Peso sin cables 2.100 kg"],
    accessories: ["Grabadora de parámetros", "Sistema de preajuste", "Puesta a tierra"]
  }
];

export const trainingIntro = {
  title: "Formación técnico-práctica para operadores y equipos de empresa.",
  text: "Formate Tranluz nace para cubrir necesidades específicas de responsables que deben formar técnicos en el uso seguro de maquinaria y equipos.",
  imageOne: assets.trainingOne,
  imageTwo: assets.trainingTwo,
  logo: assets.trainingLogo
};

export const courses = [
  {
    slug: "operador-equipos-electricos",
    ref: "TL01",
    title: "Curso de Operador de Equipos Eléctricos",
    duration: "6 horas",
    goal: "Dotar a los alumnos de conocimientos para el uso y manejo seguro de maquinaria.",
    syllabus: [
      "Definición y tipologías de máquinas",
      "Herramientas complementarias",
      "Tipos de tendidos aéreos",
      "Prescripciones para el operador",
      "Posicionamiento, anclaje y puesta a tierra",
      "Elementos de control y funciones",
      "Mantenimientos periódicos",
      "Prevención de accidentes y salud laboral"
    ]
  },
  {
    slug: "operador-equipos-tendido-fibra-optica",
    ref: "TL02",
    title: "Operador de Equipos de Tendido de Fibra Óptica",
    duration: "5 horas",
    goal: "Capacitar al operador para el uso de maquinaria en trabajos de fibra óptica.",
    syllabus: [
      "Definición y tipologías de máquinas",
      "Herramientas complementarias",
      "Tipos de trabajos",
      "Prescripciones para el operador",
      "Elementos de control y funciones",
      "Mantenimientos periódicos",
      "Prevención de accidentes y salud laboral"
    ]
  }
];

export const catalogGroups = [
  {
    title: "Catálogo General 2025-2026",
    description: "Contiene todos los capítulos del catálogo: alta tensión, tendidos, seguridad, hidráulica, fibra óptica y herramientas.",
    items: [{ name: "Catálogo General 2025-2026", version: "V1 - 20/11/2025", size: "23,31 Mb", status: "Actual" }]
  },
  {
    title: "Capítulos actualizados",
    description: "Principales áreas del catálogo separadas para consulta rápida.",
    items: [
      { name: "01 Alta Tensión", version: "V4 - 18/02/2025", size: "17,8 KB", status: "Actual" },
      { name: "02 Tendidos Subterráneos", version: "V2 - 23/03/2022", size: "3.047 KB", status: "Historico operativo" },
      { name: "03 Protección Laboral", version: "V2.2 - 08/07/2021", size: "8.318 KB", status: "Historico operativo" },
      { name: "04 Seguridad Eléctrica", version: "V4.1 - 22/12/2022", size: "10.891 KB", status: "Historico operativo" },
      { name: "05 Herramientas Hidráulica", version: "V1.3 - 21/01/2022", size: "8.768 KB", status: "Historico operativo" },
      { name: "06 Fibra Óptica", version: "V1 - 12/2019", size: "4.621 KB", status: "Archivo" }
    ]
  },
  {
    title: "Folletos de servicios",
    description: "Documentación comercial y técnica para servicios diferenciales.",
    items: [
      { name: "Folleto ITS-Tranluz", version: "V2 - 05/2024", size: "2,4 Mb", status: "Actual" },
      { name: "Folleto RentPuller-Tranluz", version: "V5 - 05/2024", size: "2,3 Mb", status: "Actual" },
      { name: "Folleto Revisa-Tranluz", version: "V1 - 04/2019", size: "2,19 Mb", status: "Archivo" },
      { name: "Folleto Formate-Tranluz", version: "V1 - 05/2024", size: "2,9 Mb", status: "Actual" }
    ]
  }
];

export const contactDepartments = ["Departamento Comercial", "Administración", "Compras", "Servicio Técnico", "Almacén"];

export const schedule = [
  { label: "Lunes - Jueves", value: "08:00 a 17:30 ininterrumpidamente" },
  { label: "Viernes", value: "08:00 a 14:00" },
  { label: "Horario de verano", value: "08:00 a 15:00" },
  { label: "Sábados", value: "Cerrado" }
];
