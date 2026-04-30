import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHeroPro, ServicesOverview } from "@/components/sections/detail-sections";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Servicios tecnicos",
  description:
    "Servicio tecnico integral, trazabilidad Revisa, revisiones certificadas y repuestos para equipos electricos."
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <PageHeroPro
          eyebrow="Servicios"
          title="Servicio tecnico, trazabilidad, revisiones y soporte durante todo el ciclo de vida."
          text="Los servicios se presentan como soluciones premium con alcance claro, proceso, entregables, documentos y conversion B2B propia."
          image={assets.its}
          actions={[
            { label: "Solicitar soporte", href: "/presupuesto" },
            { label: "Ver ITS", href: "/servicios/its-servicio-tecnico", variant: "secondary" }
          ]}
        />
        <ServicesOverview />
      </main>
      <SiteFooter />
    </>
  );
}

