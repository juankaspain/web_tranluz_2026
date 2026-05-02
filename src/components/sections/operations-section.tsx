import Link from "next/link";
import { ArrowRight, ClipboardCheck, GraduationCap, Layers, PackageSearch, Wrench } from "lucide-react";

const ops = [
  {
    icon: PackageSearch,
    title: "Catálogo técnico",
    body: "Equipos y accesorios para tendido, altura, fibra óptica y trabajos eléctricos, con ficha técnica y referencia de fabricante.",
    href: "/productos",
    cta: "Ver productos",
    color: "var(--brand)",
  },
  {
    icon: Wrench,
    title: "Servicio técnico oficial",
    body: "Revisiones preventivas ITS, calibración y mantenimiento en instalaciones o en obra. Informes completos y certificación.",
    href: "/servicios/its-servicio-tecnico",
    cta: "Solicitar revisión",
    color: "var(--field)",
  },
  {
    icon: ClipboardCheck,
    title: "Trazabilidad Revisa",
    body: "Control de EPIs, líneas de vida y equipos con alerta automática por caducidad o estado. Lectura desde móvil, tablet o PC.",
    href: "/servicios/revisa-trazabilidad",
    cta: "Conocer Revisa",
    color: "var(--safety)",
  },
  {
    icon: GraduationCap,
    title: "Formación especializada",
    body: "Cursos teórico-prácticos para operadores de tendido, trabajos en altura y fibra óptica. Formación in-company disponible.",
    href: "/formacion",
    cta: "Ver formación",
    color: "var(--technical)",
  },
  {
    icon: Layers,
    title: "Alquiler para obra",
    body: "Cabrestantes y frenadoras disponibles por día, semana o mes. Asistencia técnica incluida para proyectos puntuales.",
    href: "/alquiler",
    cta: "Consultar disponibilidad",
    color: "var(--brand)",
  },
];

export function OperationsSection() {
  return (
    <section className="section" aria-labelledby="ops-heading">
      <div className="section-heading">
        <p className="eyebrow">Líneas de negocio</p>
        <h2 id="ops-heading">Todo lo que necesita una empresa eléctrica o de telecomunicaciones, en un mismo lugar.</h2>
        <p>Cinco servicios integrados. Un único partner en Sevilla.</p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          paddingTop: "28px",
        }}
        role="list"
      >
        {ops.map((op) => {
          const Icon = op.icon;
          return (
            <Link
              key={op.href}
              href={op.href}
              role="listitem"
              style={{
                display: "grid",
                alignContent: "space-between",
                minHeight: "200px",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-elevated)",
                padding: "22px",
                boxShadow: "var(--shadow-soft)",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.18s ease, border-color 0.18s ease",
              }}
            >
              <div>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "999px",
                    background: "var(--brand-soft)",
                    color: op.color,
                    marginBottom: "14px",
                  }}
                >
                  <Icon aria-hidden="true" size={22} />
                </div>
                <strong style={{ fontSize: "1rem", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                  {op.title}
                </strong>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
                  {op.body}
                </p>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "16px",
                  color: "var(--brand)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {op.cta}
                <ArrowRight aria-hidden="true" size={14} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
