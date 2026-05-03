import Link from "next/link";
import { Award, Building2, CheckCircle2, Factory, Users2 } from "lucide-react";

const stats = [
  { value: "1987", label: "Año de fundación" },
  { value: "+38", label: "Años de especialización" },
  { value: "4", label: "Líneas de negocio" },
  { value: "B2B", label: "Exclusivamente industrial" },
];

const proofPoints = [
  { icon: Award, text: "Calidad y servicio a precios competitivos" },
  { icon: Building2, text: "Polígono Industrial Calonge, Sevilla" },
  { icon: CheckCircle2, text: "Acuerdos con fabricantes líderes del sector" },
  { icon: Factory, text: "Distribuidor oficial para empresas eléctricas y telco" },
  { icon: Users2, text: "Equipo técnico cualificado y formación especializada" },
];

const partnerBrands = [
  { name: "Tesmec",      sub: "GROUP",   bg: "#C8102E" },
  { name: "Plumettaz",  sub: "TOOLS",   bg: "#005BAC" },
  { name: "Work Italia",sub: "SAFETY",  bg: "#C15000" },
  { name: "3M",         sub: "SCIENCE", bg: "#B00000" },
  { name: "Tractel",    sub: "LIFTING", bg: "#1A3F6F" },
  { name: "Cembre",     sub: "CONNECT", bg: "#004d26" },
];

export function CompanyProofSection() {
  return (
    <section className="company-proof" aria-labelledby="proof-heading">
      <div className="company-proof-grid">
        {/* Izquierda: stats + proof points */}
        <div className="proof-panel-dark">
          <p className="eyebrow proof-eyebrow">Tranluz en números</p>
          <div className="proof-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="proof-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <ul className="proof-points">
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.text}>
                  <Icon size={16} aria-hidden="true" />
                  {p.text}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Derecha: partners + CTA */}
        <div className="proof-panel-light">
          <p className="eyebrow">Marcas distribuidoras</p>
          <h2 id="proof-heading">Partner oficial de las marcas líderes del sector</h2>
          <p className="proof-intro">
            Colaboramos directamente con los principales fabricantes de equipos eléctricos,
            herramientas industriales y EPIs para ofrecerte garantía oficial, stock permanente
            y soporte técnico de primer nivel.
          </p>
          <div className="proof-brands-grid">
            {partnerBrands.map((b) => (
              <div
                key={b.name}
                className="proof-brand-chip"
                style={{ "--chip-bg": b.bg } as React.CSSProperties}
              >
                <span className="proof-brand-name">{b.name}</span>
                <span className="proof-brand-sub">{b.sub}</span>
              </div>
            ))}
          </div>
          <div className="proof-cta">
            <Link href="/empresa" className="button button-primary">
              Conoce nuestra historia
            </Link>
            <Link href="/productos" className="button button-ghost">
              Ver todos los partners
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
