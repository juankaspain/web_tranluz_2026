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
    "Plataforma técnico-comercial para productos eléctricos, tendido, alquiler, servicio técnico, trazabilidad y formación profesional.",
  keywords: [
    "Tranluz",
    "equipos eléctricos",
    "alquiler de cabrestantes",
    "servicio técnico eléctrico",
    "tendido eléctrico",
    "formación técnica",
    "trazabilidad de equipos"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/"
    }
  },
  openGraph: {
    title: "Tranluz | Equipos, servicio técnico, alquiler y formación",
    description:
      "Equipos, servicio técnico, alquiler, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones.",
    url: "https://www.tranluz.es",
    locale: "es_ES",
    siteName: "Tranluz",
    type: "website",
    images: [
      {
        url: assets.ogImage,
        width: 1536,
        height: 1024,
        alt: "Tranluz equipos y soporte técnico para obras eléctricas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranluz | Equipos, servicio técnico, alquiler y formación",
    description:
      "Equipos, alquiler, servicio técnico y formación para trabajos eléctricos y telecomunicaciones.",
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
  }
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1116" }
  ],
  width: "device-width",
  initialScale: 1
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
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
      </head>
      <body>
        <AutoTranslate />
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <StructuredData />
        <ActionDock />
        {children}
      </body>
    </html>
  );
}
