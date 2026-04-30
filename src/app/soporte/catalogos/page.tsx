import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CatalogLibrary, PageHeroPro } from "@/components/sections/detail-sections";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Catalogos y folletos",
  description:
    "Biblioteca de catalogos, capitulos y folletos Tranluz con documentacion versionada."
};

export default function CatalogsPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <PageHeroPro
          eyebrow="Catalogos y folletos"
          title="Documentacion versionada para productos, servicios y soporte tecnico."
          text="La antigua zona de descarga se transforma en una biblioteca tecnica con versiones, pesos, categorias, busqueda y relacion con cada ficha."
          image={assets.catalogBanner}
          actions={[{ label: "Solicitar documento", href: "/presupuesto" }]}
        />
        <CatalogLibrary />
      </main>
      <SiteFooter />
    </>
  );
}
