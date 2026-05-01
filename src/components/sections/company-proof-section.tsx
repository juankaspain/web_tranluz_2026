import { Award, Building2, CheckCircle2 } from "lucide-react";
import { assets } from "@/content/assets";
import { partnerBrands } from "@/content/home";

export function CompanyProofSection() {
  return (
    <section className="company-proof">
      <div className="company-proof-media">
        <img src={assets.ceo} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="company-proof-copy">
        <p className="eyebrow">Confianza industrial</p>
        <h2>Desde Sevilla para empresas que necesitan precisión, respuesta y criterio técnico.</h2>
        <p>
          Tranluz nace en 1987 con el propósito de ser referente en equipos,
          máquinas y útiles especiales para el sector eléctrico y de
          telecomunicaciones. Más de 35 años de especialización avalan cada
          presupuesto, cada revisión y cada equipo alquilado.
        </p>
        <div className="proof-list">
          <span>
            <Award aria-hidden="true" size={18} />
            Calidad y servicio a precios competitivos
          </span>
          <span>
            <Building2 aria-hidden="true" size={18} />
            Polígono Industrial Calonge, Sevilla
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" size={18} />
            Acuerdos con fabricantes líderes del sector
          </span>
        </div>
        <div className="brand-row" aria-label="Partners oficiales">
          {partnerBrands.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
