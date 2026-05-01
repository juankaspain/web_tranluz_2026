import { ArrowRight, ClipboardCheck, GraduationCap, Layers, PackageSearch, Wrench } from "lucide-react";

const ops = [
  {
    icon: PackageSearch,
    title: "Catálogo técnico",
    body: "Equipos y accesorios para tendido, altura, fibra óptica y trabajos eléctricos, con ficha técnica y referencia de fabricante.",
    href: "/productos",
    cta: "Ver productos"
  },
  {
    icon: Wrench,
    title: "Servicio técnico oficial",
    body: "Revisiones preventivas ITS, calibración y mantenimiento en instalaciones o en obra. Informes completos y certificación.",
    href: "/servicios/its-servicio-tecnico",
    cta: "Solicitar revisión"
  },
  {
    icon: ClipboardCheck,
    title: "Trazabilidad Revisa",
    body: "Control de EPIs, líneas de vida y equipos con alerta automática por caducidad o estado. Lectura desde móvil, tablet o PC.",
    href: "/servicios/revisa-trazabilidad",
    cta: "Conocer Revisa"
  },
  {
    icon: GraduationCap,
    title: "Formación especializada",
    body: "Cursos teórico-prácticos para operadores de tendido, trabajos en altura y fibra óptica. Formación in-company disponible.",
    href: "/formacion",
    cta: "Ver formación"
  },
  {
    icon: Layers,
    title: "Alquiler para obra",
    body: "Cabrestantes y frenadoras disponibles por día, semana o mes. Asistencia técnica incluida para proyectos puntuales.",
    href: "/alquiler",
    cta: "Consultar disponibilidad"
  }
];

export function OperationsSection() {
  return (
    <section className="section operations">
      <div className="section-heading">
        <p className="eyebrow">Líneas de negocio</p>
        <h2>Todo lo que necesita una empresa eléctrica o de telecomunicaciones, en un mismo lugar.</h2>
      </div>
      <div className="ops-grid">
        {ops.map((op) => {
          const Icon = op.icon;
          return (
            <a className="ops-card" href={op.href} key={op.href}>
              <Icon aria-hidden="true" size={24} />
              <h3>{op.title}</h3>
              <p>{op.body}</p>
              <span className="ops-cta">
                {op.cta}
                <ArrowRight aria-hidden="true" size={15} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
