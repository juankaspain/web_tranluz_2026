import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Package, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const heroMetrics = [
  { value: "+38", label: "años de especializ." },
  { value: "4",   label: "líneas de servicio" },
  { value: "B2B", label: "sector eléctrico" },
];

/* Métricas extendidas para el aside de confianza */
const asideMetrics = [
  { value: "+38", label: "Años de experiencia en sector eléctrico" },
  { value: "4",   label: "Líneas: producto, ITS, Revisa y formación" },
  { value: "B2B", label: "Especialistas en empresas eléctricas y telco" },
  { value: "Sevilla", label: "Atención técnica presencial en obra" },
];

const heroBrands: Array<{ name: string; bg: string }> = [
  { name: "Tesmec",      bg: "#C8102E" },
  { name: "Plumettaz",   bg: "#005BAC" },
  { name: "Work Italia", bg: "#C15000" },
  { name: "3M",          bg: "#B00000" },
  { name: "Tractel",     bg: "#1A3F6F" },
  { name: "Cembre",      bg: "#004d26" },
];

export function HeroSection() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        {/* Fondo */}
        <div className="hero-media" aria-hidden="true">
          <Image
            src={assets.hero}
            alt="Obras de tendido eléctrico con equipos Tranluz"
            fill
            priority
            sizes="100vw"
          />
        </div>

        {/* Columna izquierda: copy */}
        <div className="hero-copy">
          <p className="eyebrow">Especialistas desde {brand.founded} · Sevilla</p>
          <h1 id="hero-title">
            Equipos, alquiler y soporte técnico para obras eléctricas críticas.
          </h1>
          <p className="hero-desc">
            Catálogo técnico, servicio oficial, revisiones ITS, formación,{" "}
            alquiler y trazabilidad desde un único partner en Sevilla.
          </p>

          {/* Métricas */}
          <div className="hero-metrics" aria-label="Cifras clave Tranluz">
            {heroMetrics.map((m) => (
              <div key={m.label} className="metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Intent cards */}
          <div className="intent-cards" role="list" aria-label="Servicios principales">
            <Link href="/productos" className="intent-card" role="listitem">
              <Package size={20} aria-hidden="true" />
              <div>
                <strong>Comprar equipos</strong>
                <span>Catálogo por familias, marcas y referencias</span>
              </div>
            </Link>
            <Link href="/alquiler" className="intent-card" role="listitem">
              <Wrench size={20} aria-hidden="true" />
              <div>
                <strong>Solicitar alquiler</strong>
                <span>Cabrestantes y frenadoras para obra</span>
              </div>
            </Link>
            <Link href="/servicios/its-servicio-tecnico" className="intent-card" role="listitem">
              <ShieldCheck size={20} aria-hidden="true" />
              <div>
                <strong>Programar revisión / ITS</strong>
                <span>Mantenimiento preventivo y certificación</span>
              </div>
            </Link>
          </div>

          <div className="hero-actions">
            <Link href="/presupuesto" className="button-primary">
              Solicitar presupuesto
            </Link>
            <Link href={`tel:${brand.phone?.replace(/\s/g, "")}`} className="button-secondary">
              <PhoneCall size={16} aria-hidden="true" />
              Llamar ahora
            </Link>
          </div>

          {/* Partners – chips con colores corporativos */}
          <div
            className="partner-cloud"
            role="list"
            aria-label="Marcas distribuidoras"
          >
            {heroBrands.map((b) => (
              <span
                key={b.name}
                role="listitem"
                aria-label={b.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: b.bg,
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "5px 13px",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  fontFamily: '"Arial Black", Arial, sans-serif',
                  whiteSpace: "nowrap",
                }}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>

        {/* Columna derecha: panel de confianza */}
        <aside className="hero-aside" aria-label="Datos de confianza Tranluz">
          <div>
            <p className="eyebrow">Partner oficial desde {brand.founded}</p>
            <div className="metric-grid">
              {asideMetrics.map((m) => (
                <div key={m.value} className="metric-card">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            <div className="command-card">
              <MapPin size={20} aria-hidden="true" style={{ flexShrink: 0, color: "var(--brand)" }} />
              <div>
                <span>Ubicación</span>
                <strong>Polígono Industrial Calonge, Sevilla</strong>
              </div>
            </div>
            <div className="command-card">
              <Clock size={20} aria-hidden="true" style={{ flexShrink: 0, color: "var(--brand)" }} />
              <div>
                <span>Horario</span>
                <strong>Lun–Vie 8:00–18:00 · Urgencias 24h</strong>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
