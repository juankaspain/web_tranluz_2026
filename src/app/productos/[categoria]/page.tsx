import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductCategoryDetail } from "@/components/sections/detail-sections";
import { productCategories } from "@/content/product-categories";

export type ProductCategoryPageProps = {
  params: Promise<{ categoria: string }>;
};

export async function generateMetadata({ params }: ProductCategoryPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const data = productCategories.find((item) => item.href === `/productos/${categoria}`);
  const defaultTitle = "Catálogo técnico de productos | Tranluz";
  const defaultDescription = "Equipos y herramientas para trabajos eléctricos, telecomunicaciones, tendido, seguridad, fibra óptica e industria.";

  if (!data) {
    return {
      title: defaultTitle,
      description: defaultDescription,
    };
  }

  return {
    title: `${data.title} | Tranluz`,
    description: data.summary,
    openGraph: {
      title: `${data.title} | Tranluz`,
      description: data.summary,
      type: "website",
    },
    twitter: {
      title: `${data.title} | Tranluz`,
      description: data.summary,
      card: "summary_large_image",
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { categoria } = await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <ProductCategoryDetail slug={categoria} />
      </main>
      <SiteFooter />
    </>
  );
}
