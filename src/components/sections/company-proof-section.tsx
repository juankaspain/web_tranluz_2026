import Link from "next/link";
import { Award, Building2, CheckCircle2, Factory, Users2 } from "lucide-react";

const stats = [
  { value: "1987", label: "Año de fundación" },
  { value: "+35", label: "Años de especialización" },
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

const partnerBrands = ["Tesmec", "Plumett", "Work Italia", "3M", "Tractel", "Cembre"];

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
          {/* Accent line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #E8820C, #ff9500)",
              borderRadius: "20px 20px 0 0",
            }}
          />
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#E8820C",
              marginBottom: "24px",
            }}
          >
            Tranluz en números
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.value}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/empresa"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "#E8820C",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.9rem",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Conocer Tranluz
          </Link>
        </div>

        {/* Right: Copy + proof points */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--brand, #E8820C)",
              marginBottom: "16px",
            }}
          >
            Confianza industrial
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "var(--heading)",
              lineHeight: 1.2,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Desde Sevilla para empresas que necesitan precisión, respuesta y criterio técnico.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Tranluz nace en 1987 con el propósito de ser referente en equipos, máquinas y útiles
            especiales para el sector eléctrico y de telecomunicaciones. Más de 35 años de
            especialización avalan cada presupuesto, cada revisión y cada equipo alquilado.
          </p>
          <ul
            role="list"
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 28px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.text}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.9rem",
                    color: "var(--text)",
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: "var(--brand, #E8820C)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  {p.text}
                </li>
              );
            })}
          </ul>
          <div
            aria-label="Partners oficiales"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {partnerBrands.map((brand) => (
              <span
                key={brand}
                style={{
                  padding: "4px 12px",
                  borderRadius: "20px",
                  border: "1px solid var(--line)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  background: "var(--surface)",
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
