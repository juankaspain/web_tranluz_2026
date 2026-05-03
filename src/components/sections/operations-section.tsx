import Link from "next/link";
import { ArrowRight, ClipboardCheck, GraduationCap, Layers, PackageSearch, Wrench } from "lucide-react";

const ops = [
  {
    icon: PackageSearch,
    title: "Catálogo técnico",
    body: "Equipos y accesorios para tendido, altura, fibra óptica y trabajos eléctricos, con ficha técnica y referencia de fabricante.",
    href: "/productos",
    cta: "Ver productos",
    accent: "brand",
  },
  {
    icon: Wrench,
    title: "Servicio técnico oficial",
    body: "Revisiones preventivas ITS, calibración y mantenimiento en instalaciones o en obra. Informes completos y certificación.",
    href: "/servicios/its-servicio-tecnico",
    cta: "Solicitar revisión",
    accent: "field",
  },
  {
    icon: ClipboardCheck,
    title: "Trazabilidad Revisa",
    body: "Control de EPIs, líneas de vida y equipos con alerta automática por caducidad o estado. Lectura desde móvil, tablet o PC.",
    href: "/servicios/revisa-trazabilidad",
    cta: "Conocer Revisa",
    accent: "safety",
  },
  {
    icon: GraduationCap,
    title: "Formación especializada",
    body: "Cursos teórico-prácticos para operadores de tendido, trabajos en altura y fibra óptica. Formación in-company disponible.",
    href: "/formacion",
    cta: "Ver formación",
    accent: "technical",
  },
  {
    icon: Layers,
    title: "Alquiler para obra",
    body: "Cabrestantes y frenadoras disponibles por día, semana o mes. Asistencia técnica incluida para proyectos puntuales.",
    href: "/alquiler",
    cta: "Consultar disponibilidad",
    accent: "brand",
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
      <div className="ops-grid">
        {ops.map((op) => {
          const Icon = op.icon;
          return (
            <article key={op.title} className="op-card" data-accent={op.accent}>
              <div className="op-card-icon">
                <Icon size={22} aria-hidden="true" focusable="false" />
              </div>
              <strong className="op-card-title">{op.title}</strong>
              <p className="op-card-body">{op.body}</p>
              <Link href={op.href} className="op-card-cta">
                {op.cta}
                <ArrowRight size={15} aria-hidden="true" focusable="false" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
