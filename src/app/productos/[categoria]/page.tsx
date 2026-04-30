import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductCategoryDetail } from "@/components/sections/detail-sections";

type ProductCategoryPageProps = {
  params: Promise<{ categoria: string }>;
};

export default async function ProductCategoryPage({
  params
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
