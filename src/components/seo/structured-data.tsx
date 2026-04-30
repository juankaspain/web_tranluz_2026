import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const baseUrl = "https://www.tranluz.es";

export function StructuredData() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: brand.name,
      url: baseUrl,
      logo: assets.logo,
      foundingDate: brand.founded,
      email: brand.email,
      telephone: brand.phone,
      sameAs: [brand.social.linkedin, brand.social.instagram, brand.social.youtube],
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address,
        addressLocality: "Sevilla",
        addressCountry: "ES"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: brand.name,
      url: baseUrl,
      image: `${baseUrl}${assets.ogImage}`,
      telephone: brand.phone,
      email: brand.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address,
        addressLocality: "Sevilla",
        addressCountry: "ES"
      },
      areaServed: ["Espana", "Portugal"],
      priceRange: "$$"
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: brand.name,
      publisher: {
        "@id": `${baseUrl}/#organization`
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/productos?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "@id": `${baseUrl}/#technical-service`,
      name: "Servicio tecnico, alquiler, formacion y trazabilidad para trabajos electricos",
      provider: {
        "@id": `${baseUrl}/#organization`
      },
      serviceType: [
        "Servicio tecnico integral",
        "Alquiler de equipos de tendido",
        "Formacion tecnica",
        "Trazabilidad de equipos"
      ],
      areaServed: "ES"
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph
        })
      }}
    />
  );
}
