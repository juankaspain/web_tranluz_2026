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
        <h2>Desde Sevilla para empresas que necesitan precision, respuesta y criterio tecnico.</h2>
        <p>
          Tranluz nace en 1987 con el proposito de ser referente en equipos,
          maquinas y utiles especiales para el sector electrico y de
          telecomunicaciones.
        </p>
        <div className="proof-list">
          <span>
            <Award aria-hidden="true" size={18} />
            Calidad y servicio a precios competitivos
          </span>
          <span>
            <Building2 aria-hidden="true" size={18} />
            Poligono Industrial Calonge, Sevilla
          </span>
          <span>
            <CheckCircle2 aria-hidden="true" size={18} />
            Acuerdos con fabricantes de referencia
          </span>
        </div>
        <div className="partner-cloud" aria-label="Fabricantes mencionados por Tranluz">
          {partnerBrands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

