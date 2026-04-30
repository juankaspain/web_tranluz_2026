import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Declaracion de accesibilidad",
  description: "Declaracion de accesibilidad del sitio corporativo Tranluz."
};

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <LegalContent page="accesibilidad" />
      </main>
      <SiteFooter />
    </>
  );
}
