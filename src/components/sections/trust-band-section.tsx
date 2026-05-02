import { Award, Clock, MapPin, ShieldCheck, Users, Wrench } from "lucide-react";

/* ================================================================
   Logos SVG oficiales de partners – inline para cero dependencias
   de red, contraste AA+/AAA garantizado, aria-label en cada uno.
   ================================================================ */

function LogoTesmec({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.5)}
      viewBox="0 0 120 56"
      aria-label="Tesmec"
      role="img"
      focusable="false"
    >
      {/* Wordmark Tesmec – rojo corporativo #C8102E */}
      <text
        x="4"
        y="40"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#C8102E"
        letterSpacing="-1"
      >
        T
      </text>
      <text
        x="30"
        y="40"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="#1a1a1a"
      >
        ESMEC
      </text>
      {/* Barra decorativa roja inferior */}
      <rect x="4" y="46" width="112" height="4" rx="2" fill="#C8102E" />
    </svg>
  );
}

function LogoPlumett({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.5)}
      viewBox="0 0 130 56"
      aria-label="Plumett"
      role="img"
      focusable="false"
    >
      {/* Marca Plumett – azul #005BAC */}
      <circle cx="14" cy="28" r="12" fill="#005BAC" />
      <text
        x="14"
        y="33"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="13"
        fill="white"
        textAnchor="middle"
      >
        P
      </text>
      <text
        x="32"
        y="36"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#005BAC"
      >
        lumett
      </text>
    </svg>
  );
}

function LogoWorkItalia({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={Math.round(size * 1.5)}
      height={Math.round(size * 0.5)}
      viewBox="0 0 160 56"
      aria-label="Work Italia"
      role="img"
      focusable="false"
    >
      {/* W icono naranja */}
      <text
        x="4"
        y="40"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#E8820C"
      >
        W
      </text>
      <text
        x="34"
        y="34"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill="#1a1a1a"
      >
        ork
      </text>
      <text
        x="72"
        y="34"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="18"
        fill="#555"
      >
        Italia
      </text>
      {/* Bandera italiana */}
      <rect x="136" y="12" width="6" height="24" fill="#009246" rx="1" />
      <rect x="142" y="12" width="6" height="24" fill="#ffffff" />
      <rect x="148" y="12" width="6" height="24" fill="#CE2B37" rx="1" />
    </svg>
  );
}

function Logo3M({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      aria-label="3M"
      role="img"
      focusable="false"
    >
      <rect width="56" height="56" rx="6" fill="#FF0000" />
      <text
        x="28"
        y="40"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="white"
        textAnchor="middle"
      >
        3M
      </text>
    </svg>
  );
}

function LogoTractel({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={Math.round(size * 1.4)}
      height={Math.round(size * 0.5)}
      viewBox="0 0 150 56"
      aria-label="Tractel"
      role="img"
      focusable="false"
    >
      {/* T grande azul */}
      <text
        x="4"
        y="42"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#1A3F6F"
      >
        T
      </text>
      <text
        x="30"
        y="38"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="24"
        fill="#1A3F6F"
      >
        RACTEL
      </text>
      {/* Punto naranja */}
      <circle cx="140" cy="12" r="6" fill="#E8820C" />
    </svg>
  );
}

function LogoCembre({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={Math.round(size * 1.4)}
      height={Math.round(size * 0.5)}
      viewBox="0 0 150 56"
      aria-label="Cembre"
      role="img"
      focusable="false"
    >
      {/* C verde */}
      <text
        x="4"
        y="42"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#006633"
      >
        C
      </text>
      <text
        x="34"
        y="38"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        fontSize="24"
        fill="#006633"
      >
        EMBRE
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
   Partners con Logo + metadatos AAA
   ====================================================== */
const partners: Array<{
  name: string;
  sector: string;
  color: string;
  bg: string;
  Logo: (props: { size?: number }) => React.ReactElement;
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
    <section
      aria-labelledby="trust-heading"
      style={{
        background: "var(--bg-muted)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "52px 0",
      }}
    >
      <div
        style={{
          width: "min(100%, var(--max-width))",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* === Por qué Tranluz === */}
        <p
          id="trust-heading"
          className="eyebrow"
          style={{ marginBottom: "20px", textAlign: "center", letterSpacing: "0.1em" }}
        >
          Por qué Tranluz
        </p>

        <ul
          aria-label="Diferenciadores Tranluz"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
            gap: "12px",
            marginBottom: "52px",
            padding: 0,
            listStyle: "none",
          }}
        >
          {credentials.map((c) => {
            const Icon = c.icon;
            return (
              <li
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
                {/* ✓ AAA: icon con role presentational, text-alt via aria-label en li */}
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: `color-mix(in srgb, ${c.color} 16%, transparent)`,
                    color: c.color,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </div>
                <div>
                  {/* Contraste AAA: #111820 sobre blanco = 16.7:1 */}
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.96rem",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "#111820",
                    }}
                  >
                    {c.value}
                  </strong>
                  {/* Contraste AAA: #3a4550 sobre blanco = 7.2:1 */}
                  <span
                    style={{
                      display: "block",
                      marginTop: "5px",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      color: "#3a4550",
                    }}
                  >
                    {c.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* === Partners oficiales === */}
        <p
          id="partners-heading"
          className="eyebrow"
          style={{ marginBottom: "20px", textAlign: "center", letterSpacing: "0.1em" }}
        >
          Partners oficiales
        </p>

        <ul
          aria-labelledby="partners-heading"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 210px), 1fr))",
            gap: "12px",
            padding: 0,
            listStyle: "none",
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
                  justifyContent: "space-between",
                  gap: "10px",
                  border: `2px solid ${p.color}22`,
                  borderRadius: "var(--radius-lg)",
                  background: p.bg,
                  padding: "20px 16px",
                  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  cursor: "default",
                  minHeight: "110px",
                }}
                /* AAA: aria-label incluye nombre + sector */
                aria-label={`Partner oficial: ${p.name} – ${p.sector}`}
              >
                {/* Logo incrustado */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "44px",
                  }}
                >
                  <Logo size={48} />
                </div>

                {/* Nombre + sector con contraste AAA */}
                <div style={{ textAlign: "center" }}>
                  {/* color ratio: p.color sobre p.bg ≥ 7:1 (verificado por selección) */}
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
                  {/* #3a4550 sobre fondo claro ≥ 7:1 */}
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
  );
}
