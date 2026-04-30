import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal y condiciones de uso del sitio corporativo Tranluz."
};

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <LegalContent page="aviso-legal" />
      </main>
      <SiteFooter />
    </>
  );
}
