import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const heroMetrics = [
  { value: "+38", label: "años de especialización" },
  { value: "4", label: "líneas de servicio" },
  { value: "B2B", label: "sector eléctrico" },
];

const asideMetrics = [
  { value: "+38", label: "Años de experiencia" },
  { value: "4", label: "Producto, ITS, Revisa y formación" },
  { value: "B2B", label: "Empresas eléctricas y telco" },
  { value: "Sevilla", label: "Atención técnica en obra" },
];

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={assets.hero}
          alt="Obras de tendido eléctrico con equipos Tranluz"
          fill
          priority
          sizes="100vw"
          className="hero-bg"
        />
      </div>

      <div className="content-wrap">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span>Especialistas desde {brand.founded}</span> · Sevilla
          </p>
          <h1 id="hero-title" className="hero-title">
            Todo lo que necesitas para ejecutar obras eléctricas críticas, en
            un solo proveedor.
          </h1>
          <p className="hero-subtitle">
            Equipos, alquiler, servicio técnico, formación y trazabilidad con
            soporte real en obra.
          </p>

          <div className="hero-metrics">
            {heroMetrics.map((m) => (
              <div key={m.label} className="metric">
                <strong>{m.value}</strong> <span>{m.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link href="/presupuesto" className="btn-primary">
              Solicitar presupuesto <ArrowRight size={18} />
            </Link>
            <Link href="/alquiler" className="btn-secondary">
              Ver equipos en alquiler
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <p className="aside-label">PARTNER OFICIAL DESDE {brand.founded}</p>
          <div className="aside-metrics">
            {asideMetrics.map((m) => (
              <div key={m.label} className="metric">
                <strong>{m.value}</strong> <span>{m.label}</span>
              </div>
            ))}
          </div>

          <div className="aside-info">
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>
                <strong>Ubicación</strong> <br />
                Polígono Industrial Calonge, Sevilla
              </span>
            </p>
            <p>
              <Clock size={16} aria-hidden="true" />
              <span>
                <strong>Horario</strong> <br />
                Lun–Vie 8:00–18:00 · Urgencias 24h
              </span>
            </p>
          </div>

          <Link href="/presupuesto" className="btn-aside">
            Solicitar presupuesto
          </Link>
        </aside>
      </div>
    </section>
  );
}
