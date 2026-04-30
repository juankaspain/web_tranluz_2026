import type { Metadata } from "next";
import { ProductCategoryGrid } from "@/components/sections/product-category-grid";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageHeroPro, ProductsLandingContent } from "@/components/sections/detail-sections";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
  title: "Catalogo tecnico de productos",
  description:
    "Productos para trabajos electricos, telecomunicaciones, tendido, seguridad, fibra optica e industria."
};

type ProductsPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q.trim() : "";

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <PageHeroPro
          eyebrow="Catalogo tecnico"
          title="Productos para trabajos electricos, telecomunicaciones y obra industrial."
          text="Una arquitectura preparada para busqueda, filtros, fichas tecnicas, documentos, presupuesto, compra y alquiler."
          image={assets.presentationCover}
          actions={[
            { label: "Solicitar producto", href: "/presupuesto" },
            { label: "Ver catalogos", href: "/soporte/catalogos", variant: "secondary" }
          ]}
        />
        <ProductsLandingContent />
        <ProductCategoryGrid query={query} />
      </main>
      <SiteFooter />
    </>
  );
}

