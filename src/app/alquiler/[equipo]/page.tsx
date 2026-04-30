import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RentalEquipmentDetail } from "@/components/sections/detail-sections";
import { rentalEquipment } from "@/content/site-data";

export type RentalEquipmentPageProps = {
  params: Promise<{ equipo: string }>;
};

export async function generateMetadata({ params }: RentalEquipmentPageProps): Promise<Metadata> {
  const { equipo } = await params;
  const data = rentalEquipment.find((item) => item.slug === equipo);
  const defaultTitle = "Alquiler de equipos de tendido | Tranluz";
  const defaultDescription = "Cabrestantes, frenadoras y equipos de tendido con asistencia técnica.";

  if (!data) {
    return {
      title: defaultTitle,
      description: defaultDescription,
    };
  }

  return {
    title: `${data.name} · ${data.capacity} | Tranluz`,
    description: data.description,
    openGraph: {
      title: `${data.name} · ${data.capacity} | Tranluz`,
      description: data.description,
      type: "website",
    },
    twitter: {
      title: `${data.name} · ${data.capacity} | Tranluz`,
      description: data.description,
      card: "summary_large_image",
    },
  };
}

export default async function RentalEquipmentPage({
  params,
}: RentalEquipmentPageProps) {
  const { equipo } = await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <RentalEquipmentDetail slug={equipo} />
      </main>
      <SiteFooter />
    </>
  );
}
