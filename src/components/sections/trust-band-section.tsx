import { Award, Clock, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";

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
        background: "var(--bg-muted)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "48px 0",
      }}
    >
      {/* Credenciales */}
      <div
        style={{
          width: "min(100%, var(--max-width))",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>
          Por qué Tranluz
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.value}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-elevated)",
                  padding: "16px",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    background: `color-mix(in srgb, ${c.color} 14%, transparent)`,
                    color: c.color,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.94rem", lineHeight: 1.2 }}>
                    {c.value}
                  </strong>
                  <span style={{ display: "block", marginTop: "4px", color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.45 }}>
                    {c.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners */}
        <p className="eyebrow" style={{ marginBottom: "16px", textAlign: "center" }}>
          Partners oficiales
        </p>
        <div
          aria-label="Partners oficiales"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
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
                gap: "6px",
                border: `1px solid ${p.color}33`,
                borderRadius: "var(--radius-lg)",
                background: p.bg,
                padding: "18px 12px",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                cursor: "default",
              }}
            >
              <strong style={{ color: p.color, fontSize: "1.1rem", fontWeight: 900, letterSpacing: "0.01em" }}>
                {p.name}
              </strong>
              <span style={{ color: "#52606d", fontSize: "0.76rem", textAlign: "center" }}>
                {p.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
