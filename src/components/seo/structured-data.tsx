import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const baseUrl = "https://www.tranluz.es";

export function StructuredData() {
  const graph = [
    // ── Organization ──────────────────────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: brand.name,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: assets.logo,
        width: 300,
        height: 85,
      },
      foundingDate: brand.founded,
      email: brand.email,
      telephone: brand.phone,
      description:
        "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas.",
      sameAs: [brand.social.linkedin, brand.social.instagram, brand.social.youtube],
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address,
        addressLocality: "Sevilla",
        postalCode: "41007",
        addressRegion: "Andalucía",
        addressCountry: "ES",
      },
    },

    // ── LocalBusiness ─────────────────────────────────────────────────────────
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${baseUrl}/#localbusiness`,
      name: brand.name,
      url: baseUrl,
      image: `${baseUrl}${assets.ogImage}`,
      telephone: brand.phone,
      email: brand.email,
      priceRange: "$$",
      currenciesAccepted: "EUR",
      paymentAccepted: "Transferencia bancaria, tarjeta de crédito",
      areaServed: ["España", "Portugal", "Europa"],
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00",
        },
      ],
    },

    // ── WebSite ───────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: brand.name,
      inLanguage: ["es-ES", "en-GB", "de-DE", "it-IT", "fr-FR"],
      publisher: { "@id": `${baseUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/productos?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // ── Service principal ─────────────────────────────────────────────────────
    {
      "@type": "Service",
      "@id": `${baseUrl}/#technical-service`,
      name: "Servicio técnico integral ITS para equipos eléctricos",
      provider: { "@id": `${baseUrl}/#organization` },
      serviceType: [
        "Servicio técnico integral",
        "Alquiler de equipos de tendido",
        "Formación técnica certificada",
        "Trazabilidad de equipos (Revisa)",
      ],
      areaServed: "ES",
      url: `${baseUrl}/servicios/its-servicio-tecnico`,
    },

    // ── Alquiler — Product ────────────────────────────────────────────────────
    {
      "@type": "Product",
      "@id": `${baseUrl}/alquiler/#product`,
      name: "Alquiler de equipos de tendido eléctrico — Rent Puller",
      description:
        "Alquiler de cabrestantes, frenadoras y equipos de soplado de fibra óptica con asistencia técnica personalizada. Solución rápida y rentable para obras de tendido eléctrico.",
      brand: { "@id": `${baseUrl}/#organization` },
      url: `${baseUrl}/alquiler`,
      offers: {
        "@type": "Offer",
        url: `${baseUrl}/presupuesto`,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${baseUrl}/#organization` },
      },
    },

    // ── Formación — Course ────────────────────────────────────────────────────
    {
      "@type": "Course",
      "@id": `${baseUrl}/formacion/#course`,
      name: "Formación técnica para operadores de equipos eléctricos y de tendido",
      description:
        "Cursos especializados para operadores de equipos eléctricos, tendido de fibra óptica y prevención de riesgos laborales en obras eléctricas críticas.",
      provider: { "@id": `${baseUrl}/#organization` },
      url: `${baseUrl}/formacion`,
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          name: "Operador de equipos eléctricos",
          courseMode: "onsite",
          courseWorkload: "PT16H",
          url: `${baseUrl}/formacion/operador-equipos-electricos`,
        },
        {
          "@type": "CourseInstance",
          name: "Operador de equipos de tendido de fibra óptica",
          courseMode: "onsite",
          courseWorkload: "PT8H",
          url: `${baseUrl}/formacion/operador-equipos-tendido-fibra-optica`,
        },
      ],
    },

    // ── FAQ Global ────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es el servicio ITS de Tranluz?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "ITS (Integral Technical Service) es el servicio técnico integral de Tranluz: mantenimiento preventivo y correctivo, reparación, calibración y certificación de equipos eléctricos y herramientas de alta tensión con atención nacional.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es Rent Puller?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rent Puller es el servicio de alquiler de equipos de tendido de Tranluz: cabrestantes, frenadoras y equipos de soplado de fibra óptica con asistencia técnica y soporte telefónico incluidos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es Revisa?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Revisa es la plataforma de trazabilidad de Tranluz para la gestión y control de EPI y herramientas de protección, garantizando el cumplimiento normativo y las revisiones certificadas.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué zonas opera Tranluz?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tranluz tiene sede en Sevilla y ofrece atención técnica a nivel nacional en España, con presencia en Portugal y distribución de productos en Europa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo solicito un presupuesto?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Puedes solicitar un presupuesto a través del formulario en tranluz.es/presupuesto, por email a info@tranluz.es o llamando al teléfono de contacto disponible en la web.",
          },
        },
        {
          "@type": "Question",
          name: "¿Tranluz ofrece formación certificada?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Sí. Tranluz imparte formación técnica especializada para operadores de equipos eléctricos y de tendido de fibra óptica, con certificación propia y orientada a la prevención de riesgos laborales.",
          },
        },
      ],
    },

    // ── BreadcrumbList — Home ─────────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: baseUrl,
        },
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
