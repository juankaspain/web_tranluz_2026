import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuoteExperience } from "@/components/sections/detail-sections";

export const metadata: Metadata = {
  title: "Solicitar presupuesto tecnico",
  description:
    "Formulario para solicitar producto, alquiler, revision, certificacion, formacion o soporte tecnico Tranluz."
};

export default function QuotePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <QuoteExperience />
      </main>
      <SiteFooter />
    </>
  );
}

