import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, PhoneCall } from "lucide-react";
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
        />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Especialistas desde {brand.founded} · Sevilla</p>

        <h1 id="hero-title">
          Todo lo que necesitas para ejecutar obras eléctricas críticas, en un solo proveedor.
        </h1>

        <p className="hero-desc">
          Equipos, alquiler, servicio técnico, formación y trazabilidad con soporte real en obra.
        </p>

        <div className="hero-metrics" aria-label="Cifras clave Tranluz">
          {heroMetrics.map((m) => (
            <div key={m.label} className="metric-card">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <Link href="/presupuesto" className="button-primary">
            Solicitar presupuesto
          </Link>
          <Link href="/alquiler" className="button-secondary">
            Ver equipos en alquiler
          </Link>
        </div>
      </div>

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
            <MapPin size={20} aria-hidden="true" />
            <div>
              <span>Ubicación</span>
              <strong>Polígono Industrial Calonge, Sevilla</strong>
            </div>
          </div>
          <div className="command-card">
            <Clock size={20} aria-hidden="true" />
            <div>
              <span>Horario</span>
              <strong>Lun–Vie 8:00–18:00 · Urgencias 24h</strong>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
