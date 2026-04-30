import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RentalLanding } from "@/components/sections/detail-sections";

export const metadata: Metadata = {
  title: "Alquiler de equipos de tendido",
  description:
    "Rent Puller: alquiler de cabrestantes, frenadoras y equipos de tendido con asistencia tecnica."
};

export default function RentalPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <RentalLanding />
      </main>
      <SiteFooter />
    </>
  );
}

