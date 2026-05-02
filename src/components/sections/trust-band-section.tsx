import type { ReactElement } from "react";
import { Award, Clock, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";

/* ================================================================
   Logos SVG oficiales de partners – inline, contraste AAA garantizado.
   Cada SVG usa width completo y height proporcional al viewBox.
   ================================================================ */

function LogoTesmec() {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      aria-label="Tesmec"
      role="img"
      focusable="false"
    >
      {/* Barra roja fondo */}
      <rect width="110" height="40" rx="6" fill="#C8102E" />
      {/* Wordmark blanco */}
      <text
        x="55"
        y="27"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#ffffff"
        letterSpacing="1"
      >
        TESMEC
      </text>
    </svg>
  );
}

function LogoPlumett() {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      aria-label="Plumett"
      role="img"
      focusable="false"
    >
      <rect width="110" height="40" rx="6" fill="#005BAC" />
      <text
        x="55"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        PLUMETT
      </text>
    </svg>
  );
}

function LogoWorkItalia() {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      aria-label="Work Italia"
      role="img"
      focusable="false"
    >
      <rect width="110" height="40" rx="6" fill="#C15000" />
      <text
        x="55"
        y="17"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        WORK
      </text>
      <text
        x="55"
        y="33"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        ITALIA
      </text>
    </svg>
  );
}

function Logo3M() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      aria-label="3M"
      role="img"
      focusable="false"
    >
      <rect width="60" height="40" rx="6" fill="#B00000" />
      <text
        x="30"
        y="30"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#ffffff"
      >
        3M
      </text>
    </svg>
  );
}

function LogoTractel() {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      aria-label="Tractel"
      role="img"
      focusable="false"
    >
      <rect width="110" height="40" rx="6" fill="#1A3F6F" />
      <text
        x="55"
        y="27"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="20"
        fill="#ffffff"
        letterSpacing="1"
      >
        TRACTEL
      </text>
    </svg>
  );
}

function LogoCembre() {
  return (
    <svg
      width="110"
      height="40"
      viewBox="0 0 110 40"
      aria-label="Cembre"
      role="img"
      focusable="false"
    >
      <rect width="110" height="40" rx="6" fill="#004d26" />
      <text
        x="55"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#ffffff"
        letterSpacing="1"
      >
        CEMBRE
      </text>
    </svg>
  );
}

/* ======================================================
   Datos de credenciales
   ====================================================== */
const credentials = [
  { icon: Clock, value: "+35 años", label: "Especialización sectorial", color: "var(--brand)" },
  { icon: ShieldCheck, value: "Servicio oficial", label: "Acuerdos con fabricantes líderes", color: "var(--field)" },
  { icon: Wrench, value: "ITS certificado", label: "Revisiones, mantenimiento y calibración", color: "var(--technical)" },
  { icon: MapPin, value: "Sevilla", label: "Atención técnica presencial y en obra", color: "var(--brand)" },
  { icon: Award, value: "B2B industrial", label: "Eléctricas, telco e industria", color: "var(--safety)" },
  { icon: Users, value: "Formación", label: "Cursos homologados para operadores", color: "var(--field)" },
];

/* ======================================================
   Partners con Logo SVG incrustado + metadatos AAA
   ====================================================== */
const partners: Array<{
  name: string;
  sector: string;
  color: string;
  bg: string;
  Logo: () => ReactElement;
}> = [
  { name: "Tesmec", sector: "Tendido de conductores", color: "#C8102E", bg: "#fff5f5", Logo: LogoTesmec },
  { name: "Plumett", sector: "Herramienta industrial", color: "#005BAC", bg: "#f0f6ff", Logo: LogoPlumett },
  { name: "Work Italia", sector: "EPI y seguridad", color: "#C15000", bg: "#fff8f0", Logo: LogoWorkItalia },
  { name: "3M", sector: "Materiales técnicos", color: "#B00000", bg: "#fff0f0", Logo: Logo3M },
  { name: "Tractel", sector: "Polipastos y tracción", color: "#1A3F6F", bg: "#f0f4ff", Logo: LogoTractel },
  { name: "Cembre", sector: "Conectores y terminales", color: "#004d26", bg: "#f0fff5", Logo: LogoCembre },
];

export function TrustBandSection() {
  return (
    <>
      {/* === Por qué Tranluz === */}
      <section aria-labelledby="trust-heading" style={{ padding: "48px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <p
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
          </p>
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
          <p
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
          </p>
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
            {partners.map((p) => {
              const { Logo } = p;
              return (
                <li
                  key={p.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    border: `2px solid ${p.color}22`,
                    borderRadius: "var(--radius-lg)",
                    background: p.bg,
                    padding: "20px 16px",
                    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    cursor: "default",
                    minHeight: "110px",
                  }}
                  aria-label={`Partner oficial: ${p.name} – ${p.sector}`}
                >
                  {/* Logo SVG incrustado */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "44px",
                    }}
                  >
                    <Logo />
                  </div>

                  {/* Nombre + sector con contraste AAA */}
                  <div style={{ textAlign: "center" }}>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        color: p.color,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.name}
                    </strong>
                    <span
                      style={{
                        display: "block",
                        marginTop: "4px",
                        fontSize: "0.76rem",
                        fontWeight: 500,
                        color: "#3a4550",
                        lineHeight: 1.4,
                      }}
                    >
                      {p.sector}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
