import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceDetailView } from "@/components/sections/detail-sections";
import { serviceDetails } from "@/content/site-data";

type ServiceSlug = keyof typeof serviceDetails;

type ServicePageProps = {
  params: Promise<{
    servicio: ServiceSlug;
  }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { servicio } = await params;
  const data = serviceDetails[servicio];

  const defaultTitle = "Servicio técnico | Tranluz";
  const defaultDescription =
    "Servicio técnico integral, trazabilidad, revisiones certificadas y repuestos para tacógrafos.";

  return {
    title: data?.title ?? defaultTitle,
    description: data?.intro ?? defaultDescription,
  };
}

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
