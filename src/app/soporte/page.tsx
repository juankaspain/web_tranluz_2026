import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CatalogLibrary, PageHeroPro } from "@/components/sections/detail-sections";
import { assets } from "@/content/assets";

export const metadata: Metadata = {
    title: "Centro técnico",
    description:
        "Catálogos, manuales, guías, normativa y soporte técnico para productos y servicios Tranluz."
};

export default function SupportPage() {
    return (
        <>
            <SiteHeader />
            <main id="contenido">
                <PageHeroPro
                    eyebrow="Centro técnico"
                    title="Catálogos, manuales, guías, normativa y soporte técnico."
                    text="El soporte evoluciona desde una zona de descarga a una base de conocimiento técnica con documentos versionados y búsqueda."
                    image={assets.catalogBanner}
                    actions={[
                        { label: "Ver catálogos", href: "/soporte/catalogos" },
                        { label: "Solicitar soporte", href: "/presupuesto", variant: "secondary" }
                    ]}
                />
                <CatalogLibrary />
            </main>
            <SiteFooter />
        </>
    );
}
