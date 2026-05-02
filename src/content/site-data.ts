import { assets } from "@/content/assets";

// ─── Company Highlights ────────────────────────────────────────────────────────
export const companyHighlights = [
  {
    title: "Más de 35 años de experiencia",
    text: "Tranluz inicia su actividad en 1987 con el propósito de ser referente nacional en equipos, máquinas y útiles especiales para el sector eléctrico y de telecomunicaciones.",
    icon: "award",
    stat: "+35 años",
  },
  {
    title: "Gestión global 360°",
    text: "La propuesta combina distribución, mantenimiento, revisiones certificadas, alquiler, formación y asesoramiento técnico especializado para cada proyecto.",
    icon: "layers",
    stat: "6 servicios",
  },
  {
    title: "Fabricantes internacionales",
    text: "El proyecto se apoya en acuerdos de colaboración con fabricantes de nivel mundial y un equipo con clara vocación de servicio y excelencia técnica.",
    icon: "globe",
    stat: "+40 marcas",
  },
  {
    title: "Cercanía al profesional",
    text: "La experiencia de Tranluz nace del contacto directo con los profesionales que trabajan cada día en obra, mantenimiento y seguridad eléctrica.",
    icon: "users",
    stat: "+500 clientes",
  },
];

// ─── Service Details ────────────────────────────────────────────────────────────
export const serviceDetails = {
  "its-servicio-tecnico": {
    eyebrow: "ITS",
    title: "Servicio Técnico Integral para mantener equipos en su punto óptimo.",
    intro:
      "Programa de mantenimiento preventivo para prever incidencias, corregirlas a tiempo y acreditar el estado de funcionamiento de equipos y herramientas. Avalado por los principales fabricantes del sector.",
    image: assets.itsTechnician,
    logo: assets.itsLogo,
    facts: [
      "Revisiones y mantenimientos",
      "Informes completos",
      "Actuación en obra o instalaciones",
      "Servicio oficial homologado",
    ],
    benefits: [
      "Técnicos especializados ayudan a resolver dudas relacionadas con el equipo y su uso seguro.",
      "Las actuaciones pueden realizarse en instalaciones del cliente, en obra o en Tranluz.",
      "El informe final refleja el trabajo realizado y acredita el estado de funcionamiento.",
      "El mantenimiento preventivo detecta más del 90% de posibles incidencias antes de que produzcan daños.",
      "El respaldo de fabricantes ayuda a optimizar recursos y prolongar la vida útil de los equipos.",
      "Reduce el coste total de propiedad del equipo con revisiones periódicas programadas.",
    ],
    process: [
      "Recepción o visita técnica",
      "Revisión y diagnóstico",
      "Mantenimiento o ajuste",
      "Informe y acreditación",
    ],
    extras: [
      "Restyling",
      "Certificación de equipos",
      "Adaptación de equipos convencionales",
    ],
    cta: "Solicitar revisión",
    tag: "Oficial",
  },
  "revisa-trazabilidad": {
    eyebrow: "Revisa",
    title: "Trazabilidad completa y en tiempo real para equipos con revisión periódica.",
    intro:
      "Sistema digital para controlar EPIs, líneas de vida, cabrestantes, herramientas, máquinas y cualquier elemento que deba revisarse periódicamente. Accesible desde cualquier dispositivo.",
    image: assets.revisa,
    facts: [
      "Móvil, tablet y PC",
      "Informes por equipo",
      "Códigos de color",
      "Gestión para prevención",
    ],
    benefits: [
      "Acceso online a la información en tiempo real desde móvil, tablet o PC.",
      "Lectura de informes por trabajador, número de serie, zona o ubicación.",
      "Firma del inspector visible en cada informe consultable o imprimible.",
      "Seguimiento continuo mediante código de colores para facilitar la planificación.",
      "Gráficos e indicadores para una visión global del estado de todos los equipos.",
      "Alertas automáticas antes de que venza el plazo de revisión de cada equipo.",
    ],
    process: [
      "Inventario inicial",
      "Inspección",
      "Carga de datos",
      "Seguimiento y alertas",
    ],
    extras: ["EPIs", "Líneas de vida", "Cabrestantes", "Seguridad eléctrica"],
    cta: "Solicitar demo",
    tag: "Digital",
  },
  "revisiones-certificadas": {
    eyebrow: "Revisiones",
    title: "Revisiones certificadas con criterio técnico y documentación útil.",
    intro:
      "Servicio pensado para empresas que necesitan evidencias claras del estado de sus equipos antes de trabajos críticos. Cumplimiento normativo garantizado con documentación oficial.",
    image: assets.its,
    facts: [
      "Prevención",
      "Mantenimiento",
      "Acreditación",
      "Trazabilidad",
    ],
    benefits: [
      "Reduce el riesgo operativo antes de uso por personal autorizado en obra.",
      "Ordena el ciclo de vida de equipos sometidos a revisión periódica obligatoria.",
      "Facilita auditorías internas, normativa de calidad y PRL.",
      "Documentación válida para inspecciones de seguridad y prevención de riesgos laborales.",
    ],
    process: [
      "Solicitud",
      "Planificación",
      "Revisión",
      "Entrega documental",
    ],
    extras: ["EPIs", "Herramientas", "Maquinaria", "Líneas de vida"],
    cta: "Planificar revisión",
    tag: "Normativo",
  },
  repuestos: {
    eyebrow: "Repuestos",
    title: "Repuestos originales y soporte para prolongar la vida útil del equipo.",
    intro:
      "Canal especializado para identificar referencias, compatibilidades y necesidades de mantenimiento con apoyo técnico de primer nivel. Stock propio y acceso a fabricante.",
    image: assets.its,
    facts: [
      "Identificación",
      "Compatibilidad",
      "Suministro",
      "Soporte",
    ],
    benefits: [
      "Ayuda a localizar repuestos correctos por referencia y modelo de equipo.",
      "Reduce paradas de obra por error de compatibilidad o falta de stock.",
      "Conecta compra, mantenimiento y servicio técnico en un único flujo.",
      "Acceso a piezas originales de fabricante para garantizar rendimiento y seguridad.",
    ],
    process: [
      "Identificar equipo",
      "Validar referencia",
      "Confirmar plazo",
      "Enviar propuesta",
    ],
    extras: ["Referencias", "Accesorios", "Consumibles", "Mantenimiento"],
    cta: "Pedir repuesto",
    tag: "Original",
  },
};

// ─── Rental ─────────────────────────────────────────────────────────────────────
export const rentalIntro = {
  title: "Alquiler de equipos de tendido para necesidades puntuales de obra.",
  text: "Rent Puller cubre desde tiradas pequeñas a proyectos de mayor escala, tanto en tendido subterráneo como aéreo, con alquiler diario, semanal o mensual y asistencia técnica personalizada. Entrega en obra con soporte técnico incluido.",
  phone: "+34 608 741 622",
  image: assets.rentPuller,
};

export const rentalEquipment = [
  {
    slug: "cabrestante-ars301",
    name: "Cabrestante ARS301",
    capacity: "2.500 kg",
    description:
      "Cabrestante hidráulico compacto para tensar cable en tendidos eléctricos aéreos y subterráneos de mediana exigencia.",
    specs: [
      "Tiro máximo 25 kN",
      "Velocidad máxima 3,5 km/h",
      "Motor diesel 25 kW",
      "Peso sin cables 820 kg",
    ],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"],
  },
  {
    slug: "cabrestante-ars403",
    name: "Cabrestante ARS403",
    capacity: "3.500 kg",
    description:
      "Equipo hidráulico de alta fiabilidad para operaciones de tendido con control preciso de tiro y velocidad en obra.",
    specs: [
      "Tiro máximo 35 kN",
      "Velocidad máxima 3,6 km/h",
      "Motor diesel 25 kW",
      "Peso sin cables 980 kg",
    ],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"],
  },
  {
    slug: "cabrestante-ars405",
    name: "Cabrestante ARS405",
    capacity: "3.000 kg",
    description:
      "Cabrestante hidráulico con freno automático integrado y dinamómetro para mayor seguridad en tendido de cable.",
    specs: [
      "Tiro máximo 30 kN",
      "Velocidad máxima 3 km/h",
      "Motor diesel 18,8 kW",
      "Instalación eléctrica 12 V",
    ],
    accessories: ["ALL110", "ALL111", "ALL112", "AXR001", "DLR300"],
  },
  {
    slug: "cabrestante-ars402",
    name: "Cabrestante ARS402",
    capacity: "4.000 kg",
    description:
      "Equipo de alta capacidad para tendidos exigentes en alta tensión con transmisión hidráulica de máxima robustez.",
    specs: [
      "Tiro máximo 40 kN",
      "Velocidad máxima 5 km/h",
      "Motor diesel 42 kW",
      "Peso sin cables 1.800 kg",
    ],
    accessories: ["AXR001"],
  },
  {
    slug: "cabrestante-ars523",
    name: "Cabrestante ARS523",
    capacity: "7.000 kg",
    description:
      "Cabrestante hidráulico de gran potencia para trabajos de alta exigencia en tendidos aéreos y subterráneos de larga distancia.",
    specs: [
      "Tiro máximo 70 kN",
      "Velocidad máxima 4 km/h",
      "Motor diesel 55 kW",
      "Peso sin cables 2.100 kg",
    ],
    accessories: [
      "Grabadora de parámetros",
      "Sistema de preajuste",
      "Puesta a tierra",
    ],
  },
];

// ─── Training ───────────────────────────────────────────────────────────────────
export const trainingIntro = {
  title: "Formación técnico-práctica para operadores y equipos de empresa.",
  text: "Fórmate Tranluz nace para cubrir necesidades específicas de responsables que deben formar técnicos en el uso seguro de maquinaria y equipos eléctricos. Cursos homologados, presenciales o en instalaciones del cliente.",
  imageOne: assets.trainingOne,
  imageTwo: assets.trainingTwo,
  logo: assets.trainingLogo,
};

export const courses = [
  {
    slug: "operador-equipos-electricos",
    ref: "TL01",
    title: "Curso de Operador de Equipos Eléctricos",
    duration: "6 horas",
    modality: "Presencial / In company",
    goal: "Dotar a los alumnos de conocimientos técnicos y de seguridad para el uso y manejo correcto de maquinaria eléctrica de tendido.",
    syllabus: [
      "Definición y tipologías de máquinas eléctricas de tendido",
      "Herramientas complementarias y accesorios",
      "Tipos de tendidos aéreos y subterráneos",
      "Prescripciones de seguridad para el operador",
      "Posicionamiento, anclaje y puesta a tierra",
      "Elementos de control y funciones del equipo",
      "Mantenimientos periódicos recomendados",
      "Prevención de accidentes y salud laboral en obra",
    ],
  },
  {
    slug: "operador-equipos-tendido-fibra-optica",
    ref: "TL02",
    title: "Operador de Equipos de Tendido de Fibra Óptica",
    duration: "5 horas",
    modality: "Presencial / In company",
    goal: "Capacitar al operador para el uso seguro y eficiente de maquinaria específica en trabajos de instalación de fibra óptica.",
    syllabus: [
      "Definición y tipologías de máquinas para fibra óptica",
      "Herramientas complementarias específicas",
      "Tipos de trabajos de fibra: canalización, soplado, microductos",
      "Prescripciones de seguridad para el operador",
      "Elementos de control y funciones del equipo",
      "Mantenimientos periódicos y revisión de consumibles",
      "Prevención de accidentes y salud laboral",
    ],
  },
];

// ─── Catalog ────────────────────────────────────────────────────────────────────
export const catalogGroups = [
  {
    title: "Catálogo General 2025-2026",
    description:
      "Contiene todos los capítulos del catálogo: alta tensión, tendidos, seguridad, hidráulica, fibra óptica y herramientas especiales.",
    items: [
      {
        name: "Catálogo General 2025-2026",
        version: "V1 - 20/11/2025",
        size: "23,31 Mb",
        status: "Actual",
      },
    ],
  },
  {
    title: "Capítulos actualizados",
    description:
      "Principales áreas del catálogo separadas por familia para consulta rápida y descarga independiente.",
    items: [
      { name: "01 Alta Tensión", version: "V4 - 18/02/2025", size: "17,8 KB", status: "Actual" },
      { name: "02 Tendidos Subterráneos", version: "V2 - 23/03/2022", size: "3.047 KB", status: "Histórico operativo" },
      { name: "03 Protección Laboral", version: "V2.2 - 08/07/2021", size: "8.318 KB", status: "Histórico operativo" },
      { name: "04 Seguridad Eléctrica", version: "V4.1 - 22/12/2022", size: "10.891 KB", status: "Histórico operativo" },
      { name: "05 Herramientas Hidráulica", version: "V1.3 - 21/01/2022", size: "8.768 KB", status: "Histórico operativo" },
      { name: "06 Fibra Óptica", version: "V1 - 12/2019", size: "4.621 KB", status: "Archivo" },
    ],
  },
  {
    title: "Folletos de servicios",
    description:
      "Documentación comercial y técnica para servicios diferenciales de Tranluz: ITS, RentPuller, Revisa y Fórmate.",
    items: [
      { name: "Folleto ITS-Tranluz", version: "V2 - 05/2024", size: "2,4 Mb", status: "Actual" },
      { name: "Folleto RentPuller-Tranluz", version: "V5 - 05/2024", size: "2,3 Mb", status: "Actual" },
      { name: "Folleto Revisa-Tranluz", version: "V1 - 04/2019", size: "2,19 Mb", status: "Archivo" },
      { name: "Folleto Fórmate-Tranluz", version: "V1 - 05/2024", size: "2,9 Mb", status: "Actual" },
    ],
  },
];

// ─── Contact ────────────────────────────────────────────────────────────────────
export const contactDepartments = [
  "Departamento Comercial",
  "Administración",
  "Compras",
  "Servicio Técnico",
  "Almacén",
];

export const schedule = [
  { label: "Lunes – Jueves", value: "08:00 a 17:30 ininterrumpidamente" },
  { label: "Viernes", value: "08:00 a 14:00" },
  { label: "Horario de verano", value: "08:00 a 15:00" },
  { label: "Sábados", value: "Cerrado" },
];

// ─── Trust Stats (para sección de confianza en home) ────────────────────────────
export const trustStats = [
  { value: "+35", label: "Años de experiencia", suffix: "años" },
  { value: "+500", label: "Clientes activos", suffix: "empresas" },
  { value: "+40", label: "Marcas representadas", suffix: "fabricantes" },
  { value: "90%", label: "Incidencias detectadas en revisión preventiva", suffix: "" },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────────
export const faq = [
  {
    question: "¿Qué zonas geográficas cubre Tranluz?",
    answer: "Tranluz opera a nivel nacional con sede en Madrid. Realizamos actuaciones en instalaciones del cliente, en obra o en nuestras propias instalaciones en toda España.",
  },
  {
    question: "¿Cuánto tiempo tarda una revisión certificada de equipos?",
    answer: "El plazo depende del volumen de equipos y la tipología. Una vez planificada, la mayoría de revisiones individuales se completan en el mismo día con entrega de informe inmediata.",
  },
  {
    question: "¿Puedo alquilar un cabrestante solo por un día?",
    answer: "Sí. Rent Puller ofrece modalidades de alquiler diario, semanal y mensual adaptadas a las necesidades del proyecto. Incluye asistencia técnica y entrega en obra.",
  },
  {
    question: "¿Los cursos de formación se pueden impartir en las instalaciones del cliente?",
    answer: "Sí. Todos nuestros cursos están disponibles en modalidad in company, adaptando el contenido al parque de maquinaria específico del cliente.",
  },
  {
    question: "¿Cómo puedo identificar el repuesto correcto para mi equipo?",
    answer: "Contáctanos con la referencia del equipo y el síntoma. Nuestro equipo técnico identificará la pieza correcta y confirmará plazo de suministro.",
  },
];
