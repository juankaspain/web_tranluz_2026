import { CompanyProofSection } from "@/components/sections/company-proof-section";
import { FeaturedEquipmentSection } from "@/components/sections/featured-equipment-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustBandSection } from "@/components/sections/trust-band-section";
import { OperationsSection } from "@/components/sections/operations-section";
import { QuickAccessSection } from "@/components/sections/quick-access-section";
import { ServiceGrid } from "@/components/sections/service-grid";
import { ProductCategoryGrid } from "@/components/sections/product-category-grid";
import { SupportBand } from "@/components/sections/support-band";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* 1. Hero con segmentación por intención */}
        <HeroSection />
        {/* 2. Franja de confianza: marcas, años, servicio oficial, ubicación */}
        <TrustBandSection />
        {/* 3. Accesos rápidos a las 4 líneas de negocio */}
        <QuickAccessSection />
        {/* 4. Líneas de negocio en detalle */}
        <OperationsSection />
        {/* 5. Categorías de producto */}
        <ProductCategoryGrid />
        {/* 6. Servicios diferenciales */}
        <ServiceGrid />
        {/* 7. Equipos destacados */}
        <FeaturedEquipmentSection />
        {/* 8. Credenciales y confianza corporativa */}
        <CompanyProofSection />
        {/* 9. Recursos técnicos */}
        <SupportBand />
        {/* 10. CTA final directo */}
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
