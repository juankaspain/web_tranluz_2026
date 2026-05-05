// src/lib/schema.ts
// Fix 2.4: Schema.org datos estructurados — Organization, Service, BreadcrumbList
// Importar en layout.tsx y en cada page.tsx de servicio

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tranluz',
  url: 'https://tranluz.com',
  logo: 'https://tranluz.com/logo.png',
  description:
    'Empresa especializada en traducción técnica, interpretación y tecnología lingüística para el sector industrial y corporativo.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+34-000-000-000', // TODO: actualizar con número real
    contactType: 'customer service',
    areaServed: 'ES',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/tranluz',
    // TODO: añadir otras redes sociales reales
  ],
};

export function serviceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Tranluz',
      url: 'https://tranluz.com',
    },
    areaServed: 'ES',
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
