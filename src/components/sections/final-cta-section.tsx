import { ArrowRight, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div>
        <p className="eyebrow">Siguiente paso</p>
        <h2>Convierte la web en un canal comercial tecnico, no en un escaparate pasivo.</h2>
        <p>
          La estructura ya esta preparada para producto, servicio, alquiler,
          soporte, formacion, SEO, analitica y captacion B2B.
        </p>
      </div>
      <div className="final-cta-actions">
        <a className="button button-primary" href="/presupuesto">
          Crear solicitud
          <ArrowRight aria-hidden="true" size={18} />
        </a>
        <a className="button button-secondary" href={`tel:${brand.phone.replaceAll(" ", "")}`}>
          {brand.phone}
          <PhoneCall aria-hidden="true" size={18} />
        </a>
      </div>
    </section>
  );
}

