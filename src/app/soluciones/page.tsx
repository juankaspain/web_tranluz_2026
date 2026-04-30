import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHeroPro, SolutionsContent } from "@/components/sections/detail-sections";
import { OperationsSection } from "@/components/sections/operations-section";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Soluciones por aplicacion",
  description:
    "Soluciones por industria y caso de uso para empresas electricas, telecomunicaciones, industria, obra y mantenimiento."
};

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <PageHeroPro
          eyebrow="Soluciones"
          title="Arquitectura por aplicacion para comprar, alquilar y mantener con menos friccion."
          text="Tranluz se organiza por industrias y casos de uso: empresas electricas, telecomunicaciones, industria, obra y mantenimiento."
          image={assets.hero}
          actions={[{ label: "Hablar con un experto", href: "/presupuesto" }]}
        />
        <SolutionsContent />
        <OperationsSection />
      </main>
      <SiteFooter />
    </>
  );
}
