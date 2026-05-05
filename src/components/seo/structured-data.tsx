import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const BASE_URL = "https://www.tranluz.es";

/**
 * StructuredData — E4
 * JSON-LD global con @graph.
 * Incluye Organization + LocalBusiness (reforzados),
 * WebSite, Service, Product, Course, FAQPage y BreadcrumbList raíz.
 *
 * Los breadcrumbs específicos de página se generan en
 * src/components/navigation/breadcrumbs.tsx (E3).
 */
export function StructuredData() {
  const graph = [
    // ── Organization (E4: reforzado) ───────────────────────────────────────
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: brand.name,
      alternateName: "Tranluz S.L.",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: assets.logoAbsolute,
        width: 200,
        height: 52,
      },
      foundingDate: brand.founded,
      foundingLocation: {
        "@type": "Place",
        name: "Sevilla, España",
      },
      email: brand.email,
      telephone: brand.phone,
      description:
        "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas.",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 49,
      },
      sameAs: [
        brand.social.linkedin,
        brand.social.instagram,
        brand.social.youtube,
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address,
        addressLocality: "Sevilla",
        postalCode: "41007",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: brand.phone,
          contactType: "customer service",
          areaServed: "ES",
          availableLanguage: ["Spanish"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "18:00",
          },
        },
        {
          "@type": "ContactPoint",
          email: brand.email,
          contactType: "sales",
          areaServed: "ES",
        },
      ],
    },

    // ── LocalBusiness (E4: reforzado) ──────────────────────────────────────
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#localbusiness`,
      name: brand.name,
      url: BASE_URL,
      image: [
        `${BASE_URL}${assets.ogImage}`,
        `${BASE_URL}${assets.logoAbsolute}`,
      ],
      telephone: brand.phone,
      email: brand.email,
      priceRange: "$$",
      currenciesAccepted: "EUR",
      paymentAccepted: "Transferencia bancaria, tarjeta de crédito",
      areaServed: [
        { "@type": "Country", name: "España" },
        { "@type": "Country", name: "Portugal" },
        { "@type": "Continent", name: "Europa" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address,
        addressLocality: "Sevilla",
        postalCode: "41007",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.389092,
        longitude: -5.984459,
      },
      hasMap: `https://maps.google.com/?q=37.389092,-5.984459`,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00",
        },
      ],
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
    },

    // ── WebSite ────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: brand.name,
      inLanguage: ["es-ES", "en-GB", "de-DE", "it-IT", "fr-FR"],
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/productos?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // ── Service ────────────────────────────────────────────────────────────
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#technical-service`,
      name: "Servicio técnico integral ITS para equipos eléctricos",
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: [
        "Servicio técnico integral",
        "Alquiler de equipos de tendido",
        "Formación técnica certificada",
        "Trazabilidad de equipos (Revisa)",
      ],
      areaServed: "ES",
      url: `${BASE_URL}/servicios/its-servicio-tecnico`,
    },

    // ── Product ────────────────────────────────────────────────────────────
    {
      "@type": "Product",
      "@id": `${BASE_URL}/alquiler/#product`,
      name: "Alquiler de equipos de tendido eléctrico — Rent Puller",
      description:
        "Alquiler de cabrestantes, frenadoras y equipos de soplado de fibra óptica con asistencia técnica personalizada.",
      brand: { "@id": `${BASE_URL}/#organization` },
      url: `${BASE_URL}/alquiler`,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/presupuesto`,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${BASE_URL}/#organization` },
      },
    },

    // ── Course ─────────────────────────────────────────────────────────────
    {
      "@type": "Course",
      "@id": `${BASE_URL}/formacion/#course`,
      name: "Formación técnica para operadores de equipos eléctricos y de tendido",
      description:
        "Cursos especializados para operadores de equipos eléctricos, tendido de fibra óptica y prevención de riesgos laborales en obras eléctricas críticas.",
      provider: { "@id": `${BASE_URL}/#organization` },
      url: `${BASE_URL}/formacion`,
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          name: "Operador de equipos eléctricos",
          courseMode: "onsite",
          courseWorkload: "PT16H",
          url: `${BASE_URL}/formacion/operador-equipos-electricos`,
        },
        {
          "@type": "CourseInstance",
          name: "Operador de equipos de tendido de fibra óptica",
          courseMode: "onsite",
          courseWorkload: "PT8H",
          url: `${BASE_URL}/formacion/operador-equipos-tendido-fibra-optica`,
        },
      ],
    },

    // ── FAQPage ────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es el servicio ITS de Tranluz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ITS (Integral Technical Service) es el servicio técnico integral de Tranluz: mantenimiento preventivo y correctivo, reparación, calibración y certificación de equipos eléctricos con atención nacional.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es Rent Puller?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rent Puller es el servicio de alquiler de equipos de tendido de Tranluz: cabrestantes, frenadoras y equipos de soplado de fibra óptica con asistencia técnica incluida.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es Revisa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Revisa es la plataforma de trazabilidad de Tranluz para la gestión y control de EPI y herramientas de protección, garantizando el cumplimiento normativo y las revisiones certificadas.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué zonas opera Tranluz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tranluz tiene sede en Sevilla y ofrece atención técnica a nivel nacional en España, con presencia en Portugal y distribución de productos en Europa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo solicito un presupuesto?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes solicitar un presupuesto a través del formulario en tranluz.es/presupuesto, por email a info@tranluz.es o llamando al teléfono de contacto disponible en la web.",
          },
        },
        {
          "@type": "Question",
          name: "¿Tranluz ofrece formación certificada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Tranluz imparte formación técnica especializada para operadores de equipos eléctricos y de tendido de fibra óptica, con certificación propia y orientada a la prevención de riesgos laborales.",
          },
        },
      ],
    },

    // ── BreadcrumbList raíz ────────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
