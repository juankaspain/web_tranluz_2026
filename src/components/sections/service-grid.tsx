import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Settings,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    kicker: "REVISIÓN, MANTENIMIENTO Y CALIBRACIÓN",
    title: "ITS Servicio Técnico Integral",
    summary:
      "Programa preventivo para acreditar que el equipo mantiene su punto óptimo de funcionamiento y seguridad.",
    bullets: [
      "Informes completos y trazados",
      "Servicio técnico oficial",
      "Actuación en instalaciones u obra",
    ],
    href: "/servicios/its-servicio-tecnico",
    icon: ShieldCheck,
    gradient: "linear-gradient(135deg, #0b5f7a 0%, #073d4f 100%)",
    accentColor: "#4ba9c4",
  },
  {
    kicker: "TRAZABILIDAD EN TIEMPO REAL",
    title: "Revisa",
    summary:
      "Sistema para controlar EPIs, líneas de vida, cabrestantes y equipos que requieren revisión periódica.",
    bullets: [
      "Lectura por móvil, tablet o PC",
      "Alertas por estado y caducidad",
      "Informes por equipo y ubicación",
    ],
    href: "/servicios/revisa-trazabilidad",
    icon: Settings,
    gradient: "linear-gradient(135deg, #247451 0%, #163f2e 100%)",
    accentColor: "#4fab78",
  },
  {
    kicker: "ALQUILER PARA OBRA",
    title: "Rent Puller",
    summary:
      "Equipos de tendido para necesidades puntuales, desde tiradas pequeñas hasta proyectos de mayor escala.",
    bullets: [
      "Cabrestantes y frenadoras",
      "Asistencia técnica incluida",
      "Alquiler diario, semanal o mensual",
    ],
    href: "/alquiler",
    icon: Layers,
    gradient: "linear-gradient(135deg, #bd500e 0%, #7a3208 100%)",
    accentColor: "#f47c3c",
  },
  {
    kicker: "CURSOS PARA EMPRESAS",
    title: "Formación Tranluz",
    summary:
      "Formación teórico-práctica para que operadores y técnicos trabajen con seguridad y criterio.",
    bullets: [
      "Operador de tendido eléctrico",
      "Fibra óptica y FTTH",
      "Trabajos en altura y EPIs",
    ],
    href: "/formacion",
    icon: BookOpen,
    gradient: "linear-gradient(135deg, #c99122 0%, #8a6316 100%)",
    accentColor: "#d9ad44",
  },
];

export function ServiceGrid() {
  return (
    <section className="section section-contrast" aria-labelledby="services-heading">
      <div className="section-heading">
        <p className="eyebrow">Servicios diferenciales</p>
        <h2 id="services-heading">
          Más que suministro: soporte durante todo el ciclo de vida del equipo.
        </h2>
        <p>
          ITS, Revisa, Rent Puller y Formación son servicios de alto valor,
          medibles y contratables directamente desde esta página.
        </p>
      </div>

      <div
        role="list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "16px",
        }}
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              href={service.href}
              role="listitem"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) 220px",
                overflow: "hidden",
                minHeight: "300px",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                background: "var(--bg-elevated)",
                boxShadow: "var(--shadow-soft)",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.18s ease, border-color 0.18s ease",
              }}
            >
              <div
                style={{
                  display: "grid",
                  alignContent: "space-between",
                  gap: "12px",
                  padding: "26px",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "var(--brand)",
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.kicker}
                  </span>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "1.35rem",
                      fontWeight: 760,
                      lineHeight: 1.15,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.summary}
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gap: "8px" }}>
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.875rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <CheckCircle2 aria-hidden="true" size={15} style={{ color: "var(--field)", flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px",
                    color: "var(--brand)",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                  }}
                >
                  Contratar servicio
                  <ArrowRight aria-hidden="true" size={14} />
                </span>
              </div>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: service.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "240px",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "-20px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {service.kicker}
                  </span>
                </div>
                <Icon size={72} style={{ color: "rgba(255,255,255,0.22)", strokeWidth: 1.2 }} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
