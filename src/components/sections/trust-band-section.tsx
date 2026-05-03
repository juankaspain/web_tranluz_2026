import { Award, Clock, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";

/* ================================================================
   Logo badges HTML puros - más fiables que SVG text en SSR/React.
   Cada logo usa un div con fondo de color corporativo y el nombre
   en tipografía blanca, simulando wordmark oficial.
   ================================================================ */

function LogoBadge({
  name,
  bg,
  textColor = "#ffffff",
  subtitle,
}: {
  name: string;
  bg: string;
  textColor?: string;
  subtitle?: string;
}) {
  return (
    <div
      aria-label={name}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        borderRadius: "6px",
        padding: subtitle ? "6px 14px" : "8px 16px",
        minWidth: "90px",
        gap: "2px",
      }}
    >
      <span
        style={{
          color: textColor,
          fontFamily: "\"Arial Black\", Arial, sans-serif",
          fontWeight: 900,
          fontSize: name.length > 6 ? "0.85rem" : "1.05rem",
          letterSpacing: "0.06em",
          lineHeight: 1.1,
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
      {subtitle && (
        <span
          style={{
            color: `${textColor}cc`,
            fontFamily: "Arial, sans-serif",
            fontWeight: 600,
            fontSize: "0.6rem",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

/* ======================================================
   Datos de credenciales
   ====================================================== */
const credentials = [
  { icon: Clock, value: "+38 años", label: "Especialización sectorial", color: "var(--brand)" },
  { icon: ShieldCheck, value: "Servicio oficial", label: "Acuerdos con fabricantes líderes", color: "var(--field)" },
  { icon: Wrench, value: "ITS certificado", label: "Revisiones, mantenimiento y calibración", color: "var(--technical)" },
  { icon: MapPin, value: "Sevilla", label: "Atención técnica presencial y en obra", color: "var(--brand)" },
  { icon: Award, value: "B2B industrial", label: "Eléctricas, telco e industria", color: "var(--safety)" },
  { icon: Users, value: "Formación", label: "Cursos homologados para operadores", color: "var(--field)" },
];

/* ======================================================
   Partners con Logo badge incrustado + metadatos AAA
   ====================================================== */
const partners = [
  { name: "Tesmec",       sector: "Tendido de conductores", color: "#C8102E", bg: "#fff5f5", logoBg: "#C8102E", logoSub: "GROUP" },
  { name: "Plumettaz",    sector: "Herramienta industrial",  color: "#005BAC", bg: "#f0f6ff", logoBg: "#005BAC", logoSub: "TOOLS" },
  { name: "Work Italia",  sector: "EPI y seguridad",         color: "#C15000", bg: "#fff8f0", logoBg: "#C15000", logoSub: "SAFETY" },
  { name: "3M",           sector: "Materiales técnicos",      color: "#B00000", bg: "#fff0f0", logoBg: "#B00000", logoSub: "SCIENCE" },
  { name: "Tractel",      sector: "Polipastos y tracción",   color: "#1A3F6F", bg: "#f0f4ff", logoBg: "#1A3F6F", logoSub: "LIFTING" },
  { name: "Cembre",       sector: "Conectores y terminales",  color: "#004d26", bg: "#f0fff5", logoBg: "#004d26", logoSub: "CONNECT" },
];

export function TrustBandSection() {
  return (
    <>
      {/* === Por qué Tranluz === */}
      <section aria-labelledby="trust-heading" style={{ padding: "48px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <h2
            id="trust-heading"
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--brand)",
              marginBottom: "28px",
            }}
          >
            Por qué Tranluz
          </h2>
          <ul
            role="list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.value}
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-lg)",
                    padding: "20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                  aria-label={`${c.value}: ${c.label}`}
                >
                  <Icon size={22} color={c.color} aria-hidden="true" />
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      color: "var(--text)",
                    }}
                  >
                    {c.value}
                  </strong>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {c.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* === Partners oficiales === */}
      <section aria-labelledby="partners-heading" style={{ padding: "48px 24px", background: "var(--bg-muted)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <h2
            id="partners-heading"
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--brand)",
              marginBottom: "28px",
            }}
          >
            Partners oficiales
          </h2>
          <ul
            role="list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {partners.map((p) => (
              <li
                key={p.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  border: `2px solid ${p.color}33`,
                  borderRadius: "var(--radius-lg)",
                  background: p.bg,
                  padding: "20px 16px",
                  minHeight: "120px",
                }}
                aria-label={`Partner oficial: ${p.name} – ${p.sector}`}
              >
                {/* Logo badge incrustado */}
                <LogoBadge
                  name={p.name}
                  bg={p.logoBg}
                  subtitle={p.logoSub}
                />

                {/* Sector con contraste AAA */}
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "0.76rem",
                    fontWeight: 500,
                    color: "#3a4550",
                    lineHeight: 1.4,
                  }}
                >
                  {p.sector}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
