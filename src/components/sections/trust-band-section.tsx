import { Award, Clock, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { partnerBrands } from "@/content/home";
import { brand } from "@/config/brand";

const credentials = [
  {
    icon: Clock,
    value: "+35 años",
    label: "Especialización sectorial"
  },
  {
    icon: ShieldCheck,
    value: "Servicio oficial",
    label: "Acuerdos con fabricantes líderes"
  },
  {
    icon: Wrench,
    value: "ITS certificado",
    label: "Revisiones, mantenimiento y calibración"
  },
  {
    icon: MapPin,
    value: "Sevilla",
    label: "Atención técnica presencial y en obra"
  },
  {
    icon: Award,
    value: "B2B industrial",
    label: "Eléctricas, telco e industria"
  }
];

export function TrustBandSection() {
  return (
    <section className="trust-band" aria-label="Credenciales Tranluz">
      <div className="trust-credentials">
        {credentials.map((item) => {
          const Icon = item.icon;
          return (
            <div className="trust-item" key={item.value}>
              <Icon aria-hidden="true" size={20} />
              <span>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </span>
            </div>
          );
        })}
      </div>
      <div className="trust-brands" aria-label="Fabricantes partners">
        <span className="trust-brands-label">Partners oficiales:</span>
        {partnerBrands.map((p) => (
          <span className="trust-brand-chip" key={p}>{p}</span>
        ))}
      </div>
    </section>
  );
}
