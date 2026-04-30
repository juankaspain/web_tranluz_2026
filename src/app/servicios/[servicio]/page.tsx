import type { Metadata } from "next";
import { ServiceFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceDetailView } from "@/components/sections/detail-sections";
import { serviceDetails } from "@/content/site-data";

export type ServicePageProps = {
  params: Promise<{ servicio: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { servicio } = await params;
  const data = serviceDetails[servicio];
  const defaultTitle = "Servicio técnico | Tranluz";
  const defaultDescription = "Servicio técnico integral, trazabilidad, revisiones certificadas y repuestos para equipos eléctricos.";

  if (!data) {
    return {
      title: defaultTitle,
      description: defaultDescription,
    };
  }

  return {
    title: data.title,
    description: data.intro,
    openGraph: {
      title: data.title,
      description: data.intro,
      type: "website",
    },
    twitter: {
      title: data.title,
      description: data.intro,
      card: "summary_large_image",
    },
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
