"use client";
import Link from "next/link";
import { CheckCircle2, Award, Users, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

const hitos = [
  { year: "1987", text: "Fundación de Tranluz en Sevilla como distribuidor especializado en equipos eléctricos." },
  { year: "2005", text: "Lanzamiento del Servicio Técnico Integral (ITS), con cobertura nacional." },
  { year: "2015", text: "Incorporación del servicio Rent Puller de alquiler de equipos de tendido." },
  { year: "2020", text: "Lanzamiento de Revisa, plataforma digital de trazabilidad de EPI y herramientas." },
  { year: "2024", text: "Incorporación al programa Kit Digital como agente digitalizador homologado." },
];

export default function EmpresaPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* Hero */}
        <section className="page-hero-pro">
          <div className="page-hero-pro-copy">
            <p className="eyebrow">Sobre nosotros</p>
            <h1>Especialistas en equipos eléctricos desde {brand.founded}</h1>
            <p>Más de 35 años acompañando a instaladores y empresas del sector eléctrico y de telecomunicaciones con equipos de calidad, servicio técnico y formación especializada.</p>
            <div className="hero-actions">
              <Link href="/presupuesto" className="button button-primary">Contactar con nosotros</Link>
              <Link href="/servicios" className="button button-secondary">Ver servicios</Link>
            </div>
          </div>
          <div className="page-hero-pro-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.empresa} alt="Sede Tranluz Sevilla" loading="eager" />
          </div>
        </section>

        {/* Valores */}
        <section className="section section-contrast">
          <div className="section-heading">
            <p className="eyebrow">Nuestros valores</p>
            <h2>Lo que nos define</h2>
          </div>
          <div className="quick-access">
            {[
              { icon: <Award size={22} aria-hidden="true" />, title: "Calidad certificada", sub: "Distribuidor oficial de fabricantes líderes europeos. Todos los equipos con certificación ITS." },
              { icon: <Users size={22} aria-hidden="true" />, title: "Equipo técnico propio", sub: "Técnicos especializados con formación continua en equipos de alta y media tensión." },
              { icon: <CheckCircle2 size={22} aria-hidden="true" />, title: "Trazabilidad total", sub: "Plataforma Revisa para el control y seguimiento de EPI y herramientas de protección." },
              { icon: <Calendar size={22} aria-hidden="true" />, title: "35+ años de experiencia", sub: "Desde {brand.founded}, siendo referencia para instaladores eléctricos y empresas de telecomunicaciones.".replace("{brand.founded}", brand.founded) },
            ].map((v) => (
              <div key={v.title} className="quick-link" style={{ pointerEvents: "none" }}>
                <span className="quick-kicker">Tranluz</span>
                {v.icon}
                              <div className="quick-text"><strong>{v.title}</strong><span>{v.sub}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* Historia */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Historia</p>
            <h2>El camino de Tranluz</h2>
          </div>
          <div className="operations-timeline">
            {hitos.map((h) => (
              <article key={h.year} className="operation-step">
                <div className="operation-icon"><Calendar size={18} aria-hidden="true" /></div>
                <h3>{h.year}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Trabaja con nosotros</p>
              <h2>Si buscas un socio técnico de confianza</h2>
              <p>Cubrimos todo el ciclo de vida del equipo: suministro, mantenimiento, alquiler y formación. Todo desde un único interlocutor.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Solicitar presupuesto</Link>
              <Link href="/contacto" className="button button-secondary">Contactar</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
