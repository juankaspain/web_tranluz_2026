import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, FileText, MapPin, Package, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";
import { partnerBrands } from "@/content/home";

const heroMetrics = [
  { value: "+35", label: "años de especializ." },
  { value: "4", label: "líneas de servicio" },
  { value: "B2B", label: "sector eléctrico" },
];

const commandItems = [
  {
    icon: <Package aria-hidden="true" size={20} />,
    label: "Equipos y catálogo",
    sub: "Cabrestantes, frenadoras, EPIs y herramientas",
    href: "/productos",
  },
  {
    icon: <Wrench aria-hidden="true" size={20} />,
    label: "ITS Servicio técnico",
    sub: "Revisiones, calibración y certificación",
    href: "/servicios/its-servicio-tecnico",
  },
  {
    icon: <ShieldCheck aria-hidden="true" size={20} />,
    label: "Revisa trazabilidad",
    sub: "Control de EPIs con alertas automáticas",
    href: "/servicios/revisa-trazabilidad",
  },
  {
    icon: <FileText aria-hidden="true" size={20} />,
    label: "Catálogo 2025/2026",
    sub: "Descarga el catálogo general actualizado",
    href: "/soporte/catalogos",
  },
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
          <p>
            Catálogo técnico, servicio oficial, revisiones ITS, formación,{" "}
            alquiler y trazabilidad desde un único partner en Sevilla.
          </p>

          {/* Métricas */}
          <div className="hero-metrics" aria-label="Datos clave Tranluz">
            {heroMetrics.map((m) => (
              <div className="hero-metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Intent cards */}
          <nav className="hero-intent" aria-label="¿Qué necesitas hoy?">
            <Link className="intent-card intent-card-primary" href="/productos">
              <Package aria-hidden="true" size={22} />
              <span>
                <strong>Comprar equipos</strong>
                <small>Catálogo por familias, marcas y referencias</small>
              </span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>

            <Link className="intent-card" href="/alquiler">
              <Wrench aria-hidden="true" size={22} />
              <span>
                <strong>Solicitar alquiler</strong>
                <small>Cabrestantes y frenadoras para obra</small>
              </span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>

            <Link className="intent-card" href="/servicios/its-servicio-tecnico">
              <ShieldCheck aria-hidden="true" size={22} />
              <span>
                <strong>Programar revisión / ITS</strong>
                <small>Mantenimiento preventivo y certificación</small>
              </span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </nav>

          <div className="hero-actions">
            <Link href="/presupuesto" className="button button-secondary">
              Solicitar presupuesto
            </Link>
            <Link href={`tel:${brand.phone.replaceAll(" ", "")}`} className="button button-ghost">
              <PhoneCall aria-hidden="true" size={16} />
              Llamar ahora
            </Link>
          </div>

          {/* Partners */}
          <div className="brand-row" aria-label="Marcas distribuidoras">
            {partnerBrands.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>

        {/* Columna derecha: panel de confianza */}
        <aside className="hero-command" aria-label="Indicadores Tranluz">
          <div className="command-label">
            <CheckCircle size={14} aria-hidden="true" style={{ marginRight: "6px" }} />
            Partner oficial desde {brand.founded}
          </div>

          <div className="metric-grid">
            <div className="metric-card">
              <strong>+35</strong>
              <span>Años de experiencia en sector eléctrico</span>
            </div>
            <div className="metric-card">
              <strong>4</strong>
              <span>Líneas: producto, ITS, Revisa y formación</span>
            </div>
            <div className="metric-card">
              <strong>B2B</strong>
              <span>Especialistas en empresas eléctricas y telco</span>
            </div>
            <div className="metric-card">
              <strong>Sevilla</strong>
              <span>Atención técnica presencial en obra</span>
            </div>
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
        </aside>
      </section>
    </>
  );
}
