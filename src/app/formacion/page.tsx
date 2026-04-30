import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TrainingLanding } from "@/components/sections/detail-sections";

export const metadata: Metadata = {
  title: "Formación técnica",
  description:
    "Cursos técnico-prácticos para operadores de equipos eléctricos, tendido, fibra óptica y seguridad."
};

export default function TrainingPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <TrainingLanding />
      </main>
      <SiteFooter />
    </>
  );
}

