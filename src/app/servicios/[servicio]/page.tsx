import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceDetailView } from "@/components/sections/detail-sections";

type ServicePageProps = {
  params: Promise<{ servicio: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { servicio } = await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <ServiceDetailView serviceSlug={servicio} />
      </main>
      <SiteFooter />
    </>
  );
}
