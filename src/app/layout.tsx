import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import { AutoTranslate } from "@/components/i18n/auto-translate";
import { ActionDock } from "@/components/layout/action-dock";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeScript } from "@/components/theme/theme-script";
import { assets } from "@/content/assets";
import { defaultLocale, isLocale } from "@/i18n/config";
import "@fontsource-variable/manrope";
import "@fontsource-variable/archivo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tranluz.es"),
  applicationName: "Tranluz",
  creator: "Tranluz",
  publisher: "Tranluz",
  title: {
    default: "Tranluz | Equipos, servicio técnico, alquiler y formación",
    template: "%s | Tranluz"
  },
  description:
    "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas en Sevilla.",
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
    "Cembre"
  ],
  authors: [{ name: "Tranluz", url: "https://www.tranluz.es" }],
  category: "industrial equipment",
  classification: "business",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/" }
  },
  openGraph: {
    title: "Tranluz | Equipos eléctricos, alquiler y soporte técnico",
    description:
      "Equipos, servicio técnico, alquiler, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones desde 1987.",
    url: "https://www.tranluz.es",
    locale: "es_ES",
    siteName: "Tranluz",
    type: "website",
    images: [
      {
        url: assets.ogImage,
        width: 1536,
        height: 1024,
        alt: "Tranluz – Equipos y soporte técnico para obras eléctricas críticas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranluz | Equipos, alquiler y servicio técnico eléctrico",
    description:
      "Especialistas desde 1987: equipos, alquiler, ITS, formación y trazabilidad en Sevilla.",
    images: [assets.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  verification: {
    // Sustituir por el código real si se tiene Google Search Console
    // google: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1116" }
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1
};

export default async function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  const requestHeaders = await headers();
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("tranluz_locale")?.value;
  const headerLocale = requestHeaders.get("x-tranluz-locale");
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : isLocale(headerLocale)
      ? headerLocale
      : defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.tranluz.es" />
      </head>
      <body>
        <ThemeScript />
        <AutoTranslate locale={locale} />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <StructuredData />
        {children}
        <ActionDock />
      </body>
    </html>
  );
}
