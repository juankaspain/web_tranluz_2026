import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const heroMetrics = [
  { value: "+38", label: "a\u00f1os" },
  { value: "4", label: "servicios" },
  { value: "B2B", label: "sector" },
];

const asideMetrics = [
  { value: "+38", label: "A\u00f1os de experiencia" },
  { value: "4", label: "L\u00edneas de servicio" },
  { value: "B2B", label: "Empresas el\u00e9ctricas y telco" },
  { value: "Sevilla", label: "Atenci\u00f3n t\u00e9cnica en obra" },
];

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Background image */}
      <div className="hero-media" aria-hidden="true">
        <Image
          src={assets.hero}
          alt="Obras de tendido el\u00e9ctrico con equipos Tranluz"
          fill
          priority
          sizes="100vw"
          className="hero-bg"
        />
      </div>

      {/* Main hero copy */}
      <div className="content-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Especialistas desde {brand.founded}</span>
            {" \u00b7 "}
            Sevilla
          </p>

          <h1 id="hero-title" className="hero-title">
            Todo lo que necesitas para ejecutar obras el\u00e9ctricas cr\u00edticas, en un solo proveedor.
          </h1>

          <p>
            Equipos, alquiler, servicio t\u00e9cnico, formaci\u00f3n y trazabilidad con soporte real en obra.
          </p>

          {/* Metric pills */}
          <div className="hero-metrics">
            {heroMetrics.map((m) => (
              <div key={m.label} className="metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
            <Link
              href="/presupuesto"
              className="btn btn-brand"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              Solicitar presupuesto
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/alquiler"
              className="btn btn-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              Ver equipos en alquiler
            </Link>
          </div>
        </div>
      </div>

      {/* Aside card */}
      <aside className="hero-aside" aria-label="Informaci\u00f3n de partner">
        {/* Badge */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "4px",
        }}>
          <ShieldCheck size={15} style={{ color: "var(--brand)", flexShrink: 0 }} aria-hidden="true" />
          <span style={{
            fontSize: "0.7rem",
            fontWeight: 820,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}>
            Partner oficial desde {brand.founded}
          </span>
        </div>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          margin: "12px 0",
        }}>
          {asideMetrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "12px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <strong style={{ fontSize: "1.25rem", fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>
                {m.value}
              </strong>
              <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.3 }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Location & hours */}
        <div className="hero-aside-info">
          <div className="hero-aside-row">
            <MapPin size={14} style={{ color: "var(--brand)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
            <div>
              <span className="hero-aside-label">Ubicaci\u00f3n</span>
              <strong>Pol\u00edgono Industrial Calonge, Sevilla</strong>
            </div>
          </div>
          <div className="hero-aside-row">
            <Clock size={14} style={{ color: "var(--brand)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
            <div>
              <span className="hero-aside-label">Horario</span>
              <strong>Lun\u2013Vie 8:00\u201318:00 \u00b7 Urgencias 24h</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/presupuesto"
          className="btn btn-brand"
          style={{ display: "flex", justifyContent: "center", marginTop: "4px", width: "100%" }}
        >
          Solicitar presupuesto
        </Link>
      </aside>
    </section>
  );
}
