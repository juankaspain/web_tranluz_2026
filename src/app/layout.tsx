import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import { AutoTranslate } from "@/components/i18n/auto-translate";
import { ActionDock } from "@/components/layout/action-dock";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { SkipLink } from "@/components/layout/skip-link";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeScript } from "@/components/theme/theme-script";
import { defaultLocale, isLocale } from "@/i18n/config";
import "@fontsource-variable/manrope";
import "@fontsource-variable/archivo";
import "@/styles/globals.css";
import "@/styles/form-errors.css";
import { assets } from "@/content/assets";

// Forzar renderizado dinámico en Hostinger (next/headers requiere runtime dinámico)
export const dynamic = "force-dynamic";

const BASE_URL = "https://www.tranluz.es";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Tranluz",
  creator: "Tranluz",
  publisher: "Tranluz",
  title: {
    default: "Tranluz | Equipos eléctricos, servicio técnico, alquiler y formación",
    template: "%s | Tranluz",
  },
  description:
    "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas. Sede en Sevilla, atención nacional.",
  keywords: [
    "Tranluz",
    "equipos eléctricos",
    "alquiler de cabrestantes",
    "servicio técnico eléctrico",
    "tendido eléctrico",
    "formación técnica",
    "trazabilidad de equipos",
    "ITS servicio técnico integral",
    "Rent Puller alquiler",
    "Revisa trazabilidad EPI",
    "herramientas alta tensión",
    "Sevilla",
    "obras eléctricas",
    "cabrestantes frenadoras",
    "Tesmec",
    "Plumett",
    "Tractel",
    "Cembre",
    "mantenimiento preventivo equipos",
    "revisiones certificadas EPI",
    "líneas de vida",
    "seguridad eléctrica",
    "fibra óptica tendido",
    "maquinaria tendido cable",
    "prevención riesgos laborales eléctrico",
    "kit digital equipos",
    "repuestos equipos eléctricos",
  ],
  authors: [{ name: "Tranluz", url: BASE_URL }],
  category: "industrial equipment",
  classification: "business",
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-GB": "/en",
      "de-DE": "/de",
      "it-IT": "/it",
      "fr-FR": "/fr",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Tranluz | Equipos eléctricos, alquiler y soporte técnico",
    description:
      "Equipos, servicio técnico ITS, alquiler de cabrestantes, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones desde 1987. Sede en Sevilla.",
    url: BASE_URL,
    locale: "es_ES",
    alternateLocale: ["en_GB", "de_DE", "it_IT", "fr_FR"],
    siteName: "Tranluz",
    type: "website",
    images: [
      {
        url: `${BASE_URL}${assets.ogImage}`,
        width: 1536,
        height: 1024,
        alt: "Tranluz – Equipos y soporte técnico para obras eléctricas críticas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranluz | Equipos, alquiler y servicio técnico eléctrico",
    description:
      "Especialistas desde 1987: equipos, alquiler de cabrestantes, ITS, formación y trazabilidad. Atención nacional desde Sevilla.",
    images: [`${BASE_URL}${assets.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1116" },
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  let locale = defaultLocale;
  try {
    const requestHeaders = await headers();
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get("tranluz_locale")?.value;
    const headerLocale = requestHeaders.get("x-tranluz-locale");
    locale = isLocale(cookieLocale)
      ? cookieLocale
      : isLocale(headerLocale)
        ? headerLocale
        : defaultLocale;
  } catch {
    locale = defaultLocale;
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" hrefLang="es-ES" href="https://www.tranluz.es/" />
        <link rel="alternate" hrefLang="en-GB" href="https://www.tranluz.es/en" />
        <link rel="alternate" hrefLang="de-DE" href="https://www.tranluz.es/de" />
        <link rel="alternate" hrefLang="it-IT" href="https://www.tranluz.es/it" />
        <link rel="alternate" hrefLang="fr-FR" href="https://www.tranluz.es/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.tranluz.es/" />
        <meta name="geo.region" content="ES-AN" />
        <meta name="geo.placename" content="Sevilla" />
        <meta name="geo.position" content="37.389092;-5.984459" />
        <meta name="ICBM" content="37.389092, -5.984459" />
      </head>
      <body suppressHydrationWarning>
        {/* Skip link WCAG 2.1 — Client Component para poder usar onFocus/onBlur */}
        <SkipLink />
        <AutoTranslate />
        <StructuredData />
        <ActionDock />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
