import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactExperience } from "@/components/sections/detail-sections";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Tranluz para producto, alquiler, servicio tecnico, formacion, compras o administracion."
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <ContactExperience />
      </main>
      <SiteFooter />
    </>
  );
}

