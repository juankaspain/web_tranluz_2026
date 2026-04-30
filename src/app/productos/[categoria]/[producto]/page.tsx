import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductDetailExperience } from "@/components/sections/detail-sections";

type ProductPageProps = {
  params: Promise<{ categoria: string; producto: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { categoria, producto } = await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <ProductDetailExperience category={categoria} product={producto} />
      </main>
      <SiteFooter />
    </>
  );
}
