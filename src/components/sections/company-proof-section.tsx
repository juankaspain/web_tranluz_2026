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

const partnerBrands: Array<{ name: string; bg: string; sub: string }> = [
  { name: "Tesmec",      bg: "#C8102E", sub: "GROUP" },
  { name: "Plumettaz",   bg: "#005BAC", sub: "TOOLS" },
  { name: "Work Italia", bg: "#C15000", sub: "SAFETY" },
  { name: "3M",          bg: "#B00000", sub: "SCIENCE" },
  { name: "Tractel",     bg: "#1A3F6F", sub: "LIFTING" },
  { name: "Cembre",      bg: "#004d26", sub: "CONNECT" },
];

export function CompanyProofSection() {
  return (
    <section
      aria-label="Confianza industrial Tranluz"
      style={{
        background: "var(--bg)",
        padding: "80px 0",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="company-proof-grid"
      >
        {/* Left: Stats panel */}
        <div
          style={{
            background: "linear-gradient(135deg, #0a0f1a 0%, #111827 100%)",
            borderRadius: "20px",
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, var(--brand), #e8700a)",
            }}
          />
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand)",
              marginBottom: "32px",
            }}
          >
            Tranluz en números
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {stats.map((s) => (
              <div key={s.value}>
                <p
                  style={{
                    fontSize: "2.6rem",
                    fontWeight: 900,
                    color: "#ffffff",
                    lineHeight: 1,
                    margin: 0,
                    fontFamily: "\"Archivo Variable\", sans-serif",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(238,243,245,0.6)",
                    margin: "4px 0 0",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <ul
            role="list"
            style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.text}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Icon size={16} color="var(--brand)" aria-hidden="true" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "rgba(238,243,245,0.8)" }}>{p.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Partners + CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brand)",
                marginBottom: "8px",
              }}
            >
              Marcas distribuidoras
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 900,
                color: "var(--text)",
                lineHeight: 1.15,
                margin: "0 0 16px",
              }}
            >
              Partner oficial de las marcas líderes del sector
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Colaboramos directamente con los principales fabricantes de equipos
              eléctricos, herramientas industriales y EPIs para ofrecerte garantía
              oficial, stock permanente y soporte técnico de primer nivel.
            </p>
          </div>
          <div
            role="list"
            aria-label="Marcas distribuidoras"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            {partnerBrands.map((b) => (
              <div
                key={b.name}
                role="listitem"
                aria-label={b.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: b.bg,
                  borderRadius: "8px",
                  padding: "10px 8px",
                  gap: "2px",
                  minHeight: "52px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontFamily: "\"Arial Black\", Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: b.name.length > 6 ? "0.75rem" : "0.95rem",
                    letterSpacing: "0.05em",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {b.name}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.55rem",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b.sub}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/empresa" className="button-primary" aria-label="Conocer la historia de Tranluz">
              Conoce nuestra historia
            </Link>
            <Link href="/empresa#partners" className="button-secondary" aria-label="Ver todos los partners de Tranluz">
              Ver todos los partners
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .company-proof-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
