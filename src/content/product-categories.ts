/**
 * product-categories.ts – Familias de producto del catálogo Tranluz.
 * ITER-4B: Se añade interface tipada, color semántico, slug, número de
 * referencias estimado, keywords SEO y subcategorías para mejorar la
 * navegación y el rendimiento SEO del catálogo.
 */

export type CategoryColor = "technical" | "field" | "safety" | "brand";

export interface ProductCategory {
  slug: string;
  title: string;
  href: string;
  summary: string;         // descripción corta para cards y nav
  description: string;     // texto largo para páginas de categoría y SEO
  color: CategoryColor;    // var CSS semántico
  refCount: string;        // número de referencias aproximado
  keywords: string[];      // términos de búsqueda relevantes
  subcategories: string[]; // subgrupos de producto de la categoría
}

export const productCategories: ProductCategory[] = [
  {
    slug: "alta-tension",
    title: "Alta tensión",
    href: "/productos/alta-tension",
    summary: "Equipos y herramientas para trabajos en media y alta tensión.",
    description:
      "Herramientas y equipos certificados para trabajos en media y alta tensión: percha de maniobra, pértigas, detectores, guantes dieléctricos, cubiertas aislantes y banquetas. Todo el material está validado por fabricantes internacionales y cumple las normativas UNE-EN aplicables.",
    color: "technical",
    refCount: "+120 referencias",
    keywords: [
      "alta tensión",
      "media tensión",
      "herramientas aislantes",
      "guantes dieléctricos",
      "percha de maniobra",
      "pértiga detectora",
    ],
    subcategories: [
      "Herramientas aislantes",
      "Equipos de detección",
      "Material de protección",
      "Puestas a tierra",
    ],
  },
  {
    slug: "tendidos-aereos",
    title: "Tendidos aéreos",
    href: "/productos/tendidos-aereos",
    summary: "Maquinaria, accesorios y soluciones para tendido aéreo profesional.",
    description:
      "Maquinaria, accesorios y consumibles para tendido aéreo de conductores en líneas de media y alta tensión: cabrestantes, frenadoras, poleas de tendido, rodillos de apoyo, antirozamiento y todo el material auxiliar. Fabricantes: Tesmec, Plumett, Work Italia.",
    color: "brand",
    refCount: "+200 referencias",
    keywords: [
      "tendido aéreo",
      "cabrestante",
      "frenadora",
      "polea de tendido",
      "conductor eléctrico",
      "Tesmec",
      "Plumett",
    ],
    subcategories: [
      "Cabrestantes",
      "Frenadoras",
      "Poleas y rodillos",
      "Material auxiliar de tendido",
    ],
  },
  {
    slug: "tendidos-subterraneos",
    title: "Tendidos subterráneos",
    href: "/productos/tendidos-subterraneos",
    summary: "Rodillos, cabrestantes, guías y equipamiento para obra subterránea.",
    description:
      "Equipamiento completo para tendido subterráneo: rodillos de cable, guías y curvas de PEHD, trinchas y carro-bobinas. Solución adaptada a zanjas, tuberías y colectores. Fabricantes: Plumett, Tractel.",
    color: "field",
    refCount: "+80 referencias",
    keywords: [
      "tendido subterráneo",
      "rodillos de cable",
      "guías PEHD",
      "zanja eléctrica",
      "Tractel",
    ],
    subcategories: [
      "Rodillos de zanja y tubería",
      "Guías y curvas de dirección",
      "Carros bobina",
      "Accesorios de tiro",
    ],
  },
  {
    slug: "fibra-optica",
    title: "Fibra óptica",
    href: "/productos/fibra-optica",
    summary: "Equipos de soplado, tendido y control para telecomunicaciones.",
    description:
      "Equipos especializados para instalación de fibra óptica en redes FTTH y redes troncales: máquinas de soplado, detectores de continuidad, kits de terminación, herramientas de pelado y fusionado. Fabricantes: Plumett, 3M.",
    color: "technical",
    refCount: "+60 referencias",
    keywords: [
      "fibra óptica",
      "FTTH",
      "máquina de soplado",
      "fusionado fibra",
      "telecomunicaciones",
      "3M",
    ],
    subcategories: [
      "Máquinas de soplado",
      "Herramientas de terminación",
      "Protección y accesorios",
      "Detección y medida",
    ],
  },
  {
    slug: "seguridad-electrica",
    title: "Seguridad eléctrica",
    href: "/productos/seguridad-electrica",
    summary: "Verificadores, pértigas, EPIs y material de seguridad certificado.",
    description:
      "Material de protección individual y colectiva para trabajos eléctricos: cascos dieléctricos, guantes clase 0-4, trajes de arco, verificadores de tensión, sección de tierra y cortocircuito. Todo certificado según normativa UNE-EN 50321, IEC 60900 y directiva 89/686/CE. Fabricantes: 3M, Cembre.",
    color: "safety",
    refCount: "+150 referencias",
    keywords: [
      "EPIs eléctricos",
      "guantes dieléctricos",
      "seguridad eléctrica",
      "traje arco",
      "verificador de tensión",
      "Cembre",
    ],
    subcategories: [
      "Protección individual (EPIs)",
      "Verificadores y detectores",
      "Puestas a tierra y cortocircuito",
      "Señalización y balizamiento",
    ],
  },
  {
    slug: "herramienta-hidraulica",
    title: "Herramienta hidráulica",
    href: "/productos/herramienta-hidraulica",
    summary: "Prensas, bombas, cabezales y accesorios para trabajos exigentes.",
    description:
      "Herramientas hidráulicas para crimpar, cortar y perforar en instalaciones eléctricas de media y alta tensión: prensas crimpadoras manuales y motoherramienta, cortacables, perforadoras y bombas. Fabricantes: Cembre, Tractel.",
    color: "brand",
    refCount: "+90 referencias",
    keywords: [
      "herramienta hidráulica",
      "prensa crimpadora",
      "cortacables hidráulico",
      "Cembre",
      "Tractel",
      "bomba hidráulica",
    ],
    subcategories: [
      "Prensas crimpadoras",
      "Cortacables",
      "Perforadoras hidráulicas",
      "Bombas y accesorios",
    ],
  },
];
