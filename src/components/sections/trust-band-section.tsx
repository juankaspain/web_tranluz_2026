import { Award, Clock, MapPin, ShieldCheck, Wrench } from "lucide-react";

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
];

// Partners con nombre tipográfico estilizado
const partners = [
  { name: "Tesmec", color: "#0050A0", bg: "#EEF4FF" },
  { name: "Plumett", color: "#1A1A1A", bg: "#F5F5F5" },
  { name: "Work Italia", color: "#C8000A", bg: "#FFF2F2" },
  { name: "3M", color: "#FF0000", bg: "#FFF5F5" },
  { name: "Tractel", color: "#004990", bg: "#EEF3FF" },
  { name: "Cembre", color: "#E31E24", bg: "#FFF2F2" },
];

export function TrustBandSection() {
  return (
    <section
      className="trust-band"
      aria-label="Credenciales Tranluz"
      style={{ paddingTop: "24px", paddingBottom: "24px" }}
    >
      {/* Credenciales izquierda */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {credentials.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.value}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid var(--line)",
                borderRadius: "999px",
                background: "var(--bg-elevated)",
                padding: "7px 13px",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <Icon
                aria-hidden="true"
                size={16}
                style={{ color: item.color, flexShrink: 0 }}
              />
              <span>
                <strong style={{ fontSize: "0.84rem", fontWeight: 800 }}>
                  {item.value}
                </strong>
                <small
                  style={{
                    display: "inline",
                    marginLeft: "4px",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </small>
              </span>
            </div>
          );
        })}
      </div>

      {/* Partners derecha */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        aria-label="Fabricantes partners"
      >
        <span
          style={{
            fontSize: "0.74rem",
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginRight: "4px",
          }}
        >
          Partners oficiales:
        </span>
        {partners.map((p) => (
          <span
            key={p.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px 14px",
              border: `1px solid ${p.color}30`,
              borderRadius: "6px",
              background: p.bg,
              color: p.color,
              fontSize: "0.82rem",
              fontWeight: 900,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-display)",
              minWidth: "56px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            {p.name}
          </span>
        ))}
      </div>
    </section>
  );
}
