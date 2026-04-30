import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Politica de cookies del sitio web Tranluz."
};

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <LegalContent page="cookies" />
      </main>
      <SiteFooter />
    </>
  );
}
