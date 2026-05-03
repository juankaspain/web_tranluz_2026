"use client";
import Link from "next/link";
import { Layers, CheckCircle2, PhoneCall, Wrench, Clock, Shield } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

const equipos = [
  {
    nombre: "Cabrestantes de tendido",
    sub: "Hasta 100 kN de tracción. Sistemas hidráulicos y eléctricos para tendido en alta y media tensión.",
    tags: ["Alta tensión", "Hidráulico", "Certificado ITS"],
  },
  {
    nombre: "Frenadoras de cable",
    sub: "Control de tensión y velocidad en tendidos de cable de potencia y fibra óptica.",
    tags: ["Control de tensión", "OPGW", "BT/MT/AT"],
  },
  {
    nombre: "Equipos de soplado de fibra",
    sub: "Soplado de microtubos y cables de fibra óptica con sistemas de aire comprimido de alta eficiencia.",
    tags: ["Fibra óptica", "FTTH", "Microtubo"],
  },
  {
    nombre: "Dinamométros y tensores",
    sub: "Medición y control de tracción para tendidos seguros. Certificación de cargas incluida.",
    tags: ["Medición", "Seguridad", "Trazabilidad"],
  },
];

export default function AlquilerPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* Hero */}
        <section className="page-hero-pro">
          <div className="page-hero-pro-copy">
            <p className="eyebrow">Rent Puller &mdash; Alquiler de equipos</p>
            <h1>Equipos de tendido eléctrico para cada obra</h1>
            <p>Cabrestantes, frenadoras y equipos de soplado de fibra óptica disponibles con asistencia técnica incluida. Sin compromiso de compra, con soporte telefónico 24/5.</p>
            <div className="hero-actions">
              <Link href="/presupuesto" className="button button-primary">Solicitar presupuesto</Link>
              <a href={`tel:${brand.phone}`} className="button button-secondary">
                <PhoneCall size={16} aria-hidden="true" />
                {brand.phone}
              </a>
            </div>
          </div>
          <div className="page-hero-pro-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.rentPuller} alt="Equipo de tendido eléctrico en obra" loading="eager" />
            <div className="visual-status-card">
              <Layers size={16} aria-hidden="true" />
              Equipos disponibles con asistencia técnica
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Por qué Rent Puller</p>
            <h2>La forma más ágil de tener el equipo que necesitas</h2>
          </div>
          <div className="quick-access">
            {[
              { icon: <Clock size={22} aria-hidden="true" />, title: "Disponibilidad rápida", sub: "Equipos listos en 24-48h. Gestión ágil para obras con plazo ajustado." },
              { icon: <Wrench size={22} aria-hidden="true" />, title: "Asistencia técnica", sub: "Soporte de nuestros técnicos antes, durante y después del tendido." },
              { icon: <Shield size={22} aria-hidden="true" />, title: "Equipos certificados", sub: "Todos los equipos pasan revisión ITS antes de cada alquiler." },
              { icon: <CheckCircle2 size={22} aria-hidden="true" />, title: "Sin inversión fija", sub: "Solo pagas lo que usas. Ideal para proyectos puntuales o estacionales." },
            ].map((v) => (
              <div key={v.title} className="quick-link" style={{ pointerEvents: "none" }}>
                <span className="quick-kicker">Rent Puller</span>
                {v.icon}
                <span><strong>{v.title}</strong><small>{v.sub}</small></span>
              </div>
            ))}
          </div>
        </section>

        {/* Catálogo de equipos */}
        <section className="section section-contrast">
          <div className="section-heading">
            <p className="eyebrow">Equipos disponibles</p>
            <h2>Catálogo de alquiler</h2>
          </div>
          <div className="equipment-grid">
            {equipos.map((eq) => (
              <article key={eq.nombre} className="equipment-card">
                <div className="equipment-card-head">
                  <Layers size={18} aria-hidden="true" />
                  <span style={{ fontSize: "0.78rem", fontWeight: 900 }}>Alquiler</span>
                </div>
                <div>
                  <h3>{eq.nombre}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0" }}>
                    <li style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.55 }}>{eq.sub}</li>
                  </ul>
                </div>
                <div className="pill-list" style={{ marginTop: 12 }}>
                  {eq.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Consulta sin compromiso</p>
              <h2>Cuéntanos tu proyecto y te asesoramos</h2>
              <p>Nuestro equipo técnico analiza tus necesidades y te propone el equipo más adecuado con el mejor coste.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Solicitar presupuesto</Link>
              <a href={`mailto:${brand.email}`} className="button button-secondary">{brand.email}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
