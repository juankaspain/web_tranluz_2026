import { ArrowRight, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div>
        <p className="eyebrow">¿Listo para empezar?</p>
        <h2>Cuéntanos qué necesitas. Te respondemos en menos de 24 horas.</h2>
        <p>
          Presupuesto de producto, disponibilidad de alquiler, programa de revisión
          o consulta técnica: un solo equipo lo gestiona todo desde Sevilla.
        </p>
      </div>
      <div className="final-cta-actions">
        <a className="button button-primary" href="/presupuesto">
          Solicitar presupuesto
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
