import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CatalogLibrary, PageHeroPro } from "@/components/sections/detail-sections";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Centro tecnico",
  description:
    "Catalogos, manuales, guias, normativa y soporte tecnico para productos y servicios Tranluz."
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <PageHeroPro
          eyebrow="Centro tecnico"
          title="Catalogos, manuales, guias, normativa y soporte tecnico."
          text="El soporte evoluciona desde una zona de descarga a una base de conocimiento tecnica con documentos versionados y busqueda."
          image={assets.catalogBanner}
          actions={[
            { label: "Ver catalogos", href: "/soporte/catalogos" },
            { label: "Solicitar soporte", href: "/presupuesto", variant: "secondary" }
          ]}
        />
        <CatalogLibrary />
      </main>
      <SiteFooter />
    </>
  );
}

