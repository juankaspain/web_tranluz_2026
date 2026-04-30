import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, PhoneCall, Search, ShieldCheck } from "lucide-react";
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
        <p className="eyebrow">Especialistas desde {brand.founded}</p>
        <h1 id="hero-title">Equipos, alquiler y soporte tecnico para obras electricas criticas.</h1>
        <p>
          Tranluz conecta catalogo tecnico, servicio oficial, revisiones,
          formacion, alquiler y trazabilidad para empresas electricas,
          telecomunicaciones e industria.
        </p>
        <form className="hero-search" role="search" action="/productos">
          <label className="sr-only" htmlFor="hero-search">
            Buscar referencia, producto o servicio
          </label>
          <Search aria-hidden="true" size={20} />
          <input
            id="hero-search"
            name="q"
            type="search"
            placeholder="Cabrestante, Revisa, fibra..."
          />
          <button type="submit">Buscar</button>
        </form>
        <div className="hero-actions">
          <Link className="button button-primary" href="/presupuesto">
            Solicitar presupuesto
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-secondary" href="/productos">
            Ver catalogo
            <FileText aria-hidden="true" size={18} />
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
            <span>Operacion segura</span>
            <strong>Compra, alquiler, revision y formacion desde un unico partner.</strong>
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
