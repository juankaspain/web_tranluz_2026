import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CompanyStory } from "@/components/sections/detail-sections";

export const metadata: Metadata = {
  title: "Empresa",
  description:
        "Tranluz, especialista desde 1987 en equipos, máquinas y soluciones para el sector eléctrico y telecomunicaciones."};

export default function CompanyPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <CompanyStory />
      </main>
      <SiteFooter />
    </>
  );
}

