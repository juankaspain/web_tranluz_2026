import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, PhoneCall, ShieldCheck, Wrench, Package } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";
import { partnerBrands, proofPoints } from "@/content/home";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={assets.hero}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Especialistas desde {brand.founded} · Sevilla</p>
        <h1 id="hero-title">Equipos, alquiler y soporte técnico para obras eléctricas críticas.</h1>
        <p>
          Catálogo técnico, servicio oficial, revisiones ITS, formación,
          alquiler y trazabilidad desde un único partner en Sevilla.
        </p>
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
            <FileText aria-hidden="true" size={22} />
            <span>
              <strong>Solicitar alquiler</strong>
              <small>Cabrestantes y frenadoras para obra</small>
            </span>
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link className="intent-card" href="/servicios/its-servicio-tecnico">
            <Wrench aria-hidden="true" size={22} />
            <span>
              <strong>Programar revisión / ITS</strong>
              <small>Mantenimiento preventivo y certificación</small>
            </span>
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </nav>
        <div className="hero-actions">
          <Link className="button button-primary" href="/presupuesto">
            Solicitar presupuesto
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a className="button button-ghost" href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            Llamar ahora
            <PhoneCall aria-hidden="true" size={18} />
          </a>
        </div>
        <div className="brand-row" aria-label="Fabricantes y partners destacados">
          {partnerBrands.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </div>
      <aside className="hero-command" aria-label="Resumen operativo">
        <div className="command-label">Panel operativo Tranluz</div>
        <div className="command-card command-card-main">
          <ShieldCheck aria-hidden="true" size={20} />
          <div>
            <span>Operación segura</span>
            <strong>Compra, alquiler, revisión y formación desde un único partner.</strong>
          </div>
        </div>
        <div className="metric-grid">
          {proofPoints.map((point) => (
            <div className="metric-card" key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
