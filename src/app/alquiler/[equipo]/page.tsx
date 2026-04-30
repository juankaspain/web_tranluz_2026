import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RentalEquipmentDetail } from "@/components/sections/detail-sections";

type RentalEquipmentPageProps = {
  params: Promise<{ equipo: string }>;
};

export default async function RentalEquipmentPage({
  params
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
