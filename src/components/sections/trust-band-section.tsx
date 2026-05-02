import { Award, Clock, MapPin, ShieldCheck, Wrench, Users } from "lucide-react";

const credentials = [
  {
    icon: Clock,
    value: "+35 años",
    label: "Especialización sectorial",
    color: "var(--brand)",
  },
  {
    icon: ShieldCheck,
    value: "Servicio oficial",
    label: "Acuerdos con fabricantes líderes",
    color: "var(--field)",
  },
  {
    icon: Wrench,
    value: "ITS certificado",
    label: "Revisiones, mantenimiento y calibración",
    color: "var(--technical)",
  },
  {
    icon: MapPin,
    value: "Sevilla",
    label: "Atención técnica presencial y en obra",
    color: "var(--brand)",
  },
  {
    icon: Award,
    value: "B2B industrial",
    label: "Eléctricas, telco e industria",
    color: "var(--safety)",
  },
  {
    icon: Users,
    value: "Formación",
    label: "Cursos homologados para operadores",
    color: "var(--field)",
  },
];

const partners = [
  { name: "Tesmec", sector: "Tendido de conductores", color: "#C8102E", bg: "#fff5f5" },
  { name: "Plumett", sector: "Herramienta industrial", color: "#005BAC", bg: "#f0f6ff" },
  { name: "Work Italia", sector: "EPI y seguridad", color: "#E8820C", bg: "#fff8f0" },
  { name: "3M", sector: "Materiales técnicos", color: "#FF0000", bg: "#fff0f0" },
  { name: "Tractel", sector: "Polipastos y tracción", color: "#1A3F6F", bg: "#f0f4ff" },
  { name: "Cembre", sector: "Conectores y terminales", color: "#006633", bg: "#f0fff5" },
];

export function TrustBandSection() {
  return (
    <section
      aria-label="Credenciales y partners"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "48px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Credentials column */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "20px",
            }}
          >
            Por qué Tranluz
          </p>
          <ul
            role="list"
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.value}
                  role="listitem"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: c.color, flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: "0.85rem", color: "var(--text)" }}>
                    <strong style={{ color: "var(--heading)", marginRight: "6px" }}>
                      {c.value}
                    </strong>
                    {c.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Partners column */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "20px",
            }}
          >
            Partners oficiales
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {partners.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 10px",
                  borderRadius: "10px",
                  background: p.bg,
                  border: `1.5px solid ${p.color}22`,
                  gap: "4px",
                  minHeight: "70px",
                  transition: "box-shadow 0.2s",
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: p.color,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    color: "#666",
                    textAlign: "center",
                    lineHeight: 1.2,
                    marginTop: "2px",
                  }}
                >
                  {p.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
