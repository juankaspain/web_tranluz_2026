import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LegalContent } from "@/components/sections/legal-content";

export const metadata: Metadata = {
    title: "Preparación Kit Digital",
    description: "Criterios técnicos de presencia web avanzada, SEO, accesibilidad y seguridad para Tranluz."
};

export default function KitDigitalPage() {
    return (
        <>
            <SiteHeader />
            <main id="contenido">
                <LegalContent page="kit-digital" />
            </main>
            <SiteFooter />
        </>
    );
}
