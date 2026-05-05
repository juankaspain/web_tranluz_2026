"use client";

import { useRef } from "react";
import { brand } from "@/config/brand";
import { useCountUp } from "@/hooks/use-count-up";

interface MetricItem {
  /** Número final a animar; null para valores no puramente numéricos */
  numericEnd: number | null;
  prefix?: string;
  staticValue: string;
  label: string;
}

const metrics: MetricItem[] = [
  { numericEnd: 38, prefix: "+", staticValue: "+38", label: "Años en el sector eléctrico" },
  { numericEnd: null, prefix: "",  staticValue: "Oficial", label: "Distribuidor Tesmec y Plumettaz" },
  { numericEnd: null, prefix: "",  staticValue: "B2B",     label: "Infraestructura eléctrica y telecom" },
];

function AnimatedMetric({ metric }: { metric: MetricItem }) {
  const { count, nodeRef } = useCountUp(
    metric.numericEnd !== null
      ? { end: metric.numericEnd, duration: 1400 }
      : { end: 0, duration: 0 }
  );

  const displayValue =
    metric.numericEnd !== null
      ? `${metric.prefix ?? ""}${count}`
      : metric.staticValue;

  return (
    <li
      // @ts-expect-error — ref genérico para el observer
      ref={metric.numericEnd !== null ? nodeRef : undefined}
    >
      <strong aria-live="polite">{displayValue}</strong>
      <span>{metric.label}</span>
    </li>
  );
}

export function AuthoritySection() {
  return (
    <section className="authority-section" aria-labelledby="authority-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Confianza industrial</p>
          <h2 id="authority-heading">Empresas eléctricas confían en Tranluz para obra crítica</h2>
        </div>

        <ul className="authority-metrics" role="list">
          {metrics.map((m) => (
            <AnimatedMetric key={m.label} metric={m} />
          ))}
        </ul>

        <ul className="authority-brands" aria-label="Marcas asociadas" role="list">
          {brand.partners.map((p) => (
            <li key={p.name}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
