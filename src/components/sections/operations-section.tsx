import { Activity, ArrowRight, DatabaseZap, Route, ShieldCheck } from "lucide-react";

const operations = [
  {
    icon: Route,
    title: "Elegir el equipo correcto",
    text: "Rutas por aplicacion, filtros tecnicos y fichas conectadas a accesorios, documentos y asistencia."
  },
  {
    icon: Activity,
    title: "Mantener la obra activa",
    text: "Alquiler y soporte para cubrir picos de demanda sin inmovilizar capital en maquinaria puntual."
  },
  {
    icon: ShieldCheck,
    title: "Acreditar seguridad",
    text: "ITS y revisiones certificadas para mantener equipos en estado operativo y documentado."
  },
  {
    icon: DatabaseZap,
    title: "Controlar trazabilidad",
    text: "Revisa permite consultar estado, ubicacion e informes desde movil, tablet o PC."
  }
];

export function OperationsSection() {
  return (
    <section className="section operations-section">
      <div className="section-heading">
        <p className="eyebrow">UX por flujo de trabajo</p>
        <h2>La nueva web acompana la decision tecnica completa.</h2>
        <p>
          Un comprador B2B no navega por secciones decorativas: busca resolver
          una obra, una revision, una urgencia, una referencia o una formacion.
        </p>
      </div>
      <div className="operations-timeline">
        {operations.map((item) => {
          const Icon = item.icon;
          return (
            <article className="operation-step" key={item.title}>
              <span className="operation-icon">
                <Icon aria-hidden="true" size={20} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
      <a className="text-link" href="/soluciones">
        Ver arquitectura por soluciones
        <ArrowRight aria-hidden="true" size={17} />
      </a>
    </section>
  );
}

