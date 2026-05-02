import type { Metadata } from "next";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import { AutoTranslate } from "@/components/i18n/auto-translate";
import { ActionDock } from "@/components/layout/action-dock";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeScript } from "@/components/theme/theme-script";
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
    default: "Tranluz | Equipos eléctricos, servicio técnico, alquiler y formación",
    template: "%s | Tranluz",
  },
  description:
    "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas. Sede en Madrid, atención nacional.",
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
    "Madrid",
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
  authors: [{ name: "Tranluz", url: "https://www.tranluz.es" }],
  category: "industrial equipment",
  classification: "business",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/" },
  },
  openGraph: {
    title: "Tranluz | Equipos eléctricos, alquiler y soporte técnico",
    description:
      "Equipos, servicio técnico ITS, alquiler de cabrestantes, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones desde 1987. Sede en Madrid.",
    url: "https://www.tranluz.es",
    locale: "es_ES",
    siteName: "Tranluz",
    type: "website",
    images: [
      {
        url: assets.ogImage,
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
      "Especialistas desde 1987: equipos, alquiler de cabrestantes, ITS, formación y trazabilidad. Atención nacional desde Madrid.",
    images: [assets.ogImage],
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
  verification: {
    // Sustituir por el código real de Google Search Console
    // google: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="ES-MD" />
        <meta name="geo.placename" content="Madrid" />
        <meta name="geo.position" content="40.416775;-3.703790" />
        <meta name="ICBM" content="40.416775, -3.703790" />
      </head>
      <body>
        
        <AutoTranslate />
        <StructuredData />
        <ActionDock />
                  {children}
      </body>
    </html>
  );
}
