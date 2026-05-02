import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Package, PhoneCall, Wrench } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";
import { partnerBrands } from "@/content/home";

const heroMetrics = [
  { value: "+35", label: "años de especializ." },
  { value: "4", label: "líneas de servicio" },
  { value: "B2B", label: "sector eléctrico" },
];

export function HeroSection() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            src={assets.hero}
            alt="Obras de tendido eléctrico con equipos Tranluz"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Especialistas desde {brand.founded} · Sevilla</p>
          <h1 id="hero-title">Equipos, alquiler y soporte técnico para obras eléctricas críticas.</h1>
          <p>
            Catálogo técnico, servicio oficial, revisiones ITS, formación,{" "}
            alquiler y trazabilidad desde un único partner en Sevilla.
          </p>

          <div className="hero-metrics" aria-label="Datos clave Tranluz">
            {heroMetrics.map((m) => (
              <div className="hero-metric" key={m.label}>
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

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
              <FileText aria-hidden="true" size={22} />
              <span>
                <strong>Programar revisión / ITS</strong>
                <small>Mantenimiento preventivo y certificación</small>
              </span>
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </nav>

          <div className="hero-actions">
            <Link className="button button-secondary" href="/presupuesto">
              Solicitar presupuesto
            </Link>
            <a className="button button-ghost" href={`tel:${brand.phone.replaceAll(" ", "")}`}>
              <PhoneCall aria-hidden="true" size={18} />
              Llamar ahora
            </a>
          </div>

          <div className="brand-row" aria-label="Partners oficiales">
            {partnerBrands.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
