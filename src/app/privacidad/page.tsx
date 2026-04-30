import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description: "Politica de privacidad y proteccion de datos del sitio Tranluz."
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <LegalContent page="privacidad" />
      </main>
      <SiteFooter />
    </>
  );
}
