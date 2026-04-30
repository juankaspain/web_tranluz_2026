import { CompanyProofSection } from "@/components/sections/company-proof-section";
import { FeaturedEquipmentSection } from "@/components/sections/featured-equipment-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
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
        <HeroSection />
        <QuickAccessSection />
        <OperationsSection />
        <ProductCategoryGrid />
        <ServiceGrid />
        <FeaturedEquipmentSection />
        <CompanyProofSection />
        <SupportBand />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
