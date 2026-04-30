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
import "@fontsource-variable/manrope/index.css";
import "@fontsource-variable/archivo/index.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tranluz.es"),
  applicationName: "Tranluz",
  creator: "Tranluz",
  publisher: "Tranluz",
  title: {
    default: "Tranluz | Equipos, servicio tecnico, alquiler y formacion",
    template: "%s | Tranluz"
  },
  description:
    "Plataforma tecnico-comercial para productos electricos, tendido, alquiler, servicio tecnico, trazabilidad y formacion profesional.",
  keywords: [
    "Tranluz",
    "equipos electricos",
    "alquiler de cabrestantes",
    "servicio tecnico electrico",
    "tendido electrico",
    "formacion tecnica",
    "trazabilidad de equipos"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/"
    }
  },
  openGraph: {
    title: "Tranluz | Equipos, servicio tecnico, alquiler y formacion",
    description:
      "Equipos, servicio tecnico, alquiler, formacion y trazabilidad para trabajos electricos y de telecomunicaciones.",
    url: "https://www.tranluz.es",
    locale: "es_ES",
    siteName: "Tranluz",
    type: "website",
    images: [
      {
        url: assets.ogImage,
        width: 1536,
        height: 1024,
        alt: "Tranluz equipos y soporte tecnico para obras electricas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranluz | Equipos, servicio tecnico, alquiler y formacion",
    description:
      "Equipos, alquiler, servicio tecnico y formacion para trabajos electricos y telecomunicaciones.",
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
  const locale = isLocale(cookieLocale) ? cookieLocale : isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale}>
      <body>
        <ThemeScript />
        <StructuredData />
        <AutoTranslate />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <ActionDock />
      </body>
    </html>
  );
}
