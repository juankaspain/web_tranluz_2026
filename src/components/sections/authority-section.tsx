import Link from "next/link";
import { brand } from "@/config/brand";

const metrics = [
  { value: "+38", label: "Años en el sector eléctrico" },
  { value: "Oficial", label: "Distribuidor Tesmec y Plumettaz" },
  { value: "B2B", label: "Infraestructura eléctrica y telecom" },
];

export function AuthoritySection() {
  return (
    <section className="authority-section" aria-labelledby="authority-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Confianza industrial</p>
          <h2 id="authority-heading">Empresas eléctricas confían en Tranluz para obra crítica</h2>
        </div>

        <div className="authority-metrics">
          {metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="authority-brands" aria-label="Marcas asociadas">
          {brand.partners.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
