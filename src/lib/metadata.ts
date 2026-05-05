import type { Metadata } from "next";

const BASE_URL = "https://www.tranluz.es";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  locale?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/images/generated/tranluz-hero-ai.png",
  locale = "es_ES",
}: PageMetaInput): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = `${BASE_URL}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "es-ES": url,
        "en-GB": `${BASE_URL}/en${path}`,
        "de-DE": `${BASE_URL}/de${path}`,
        "it-IT": `${BASE_URL}/it${path}`,
        "fr-FR": `${BASE_URL}/fr${path}`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Tranluz",
      locale,
      alternateLocale: ["en_GB", "de_DE", "it_IT", "fr_FR"],
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
