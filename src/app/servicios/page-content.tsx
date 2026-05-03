"use client";
import Link from "next/link";
import { Wrench, RefreshCw, ClipboardCheck, Award } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

const servicios = [
  {
    id: "its",
    icon: <Wrench size={22} aria-hidden="true" />,
    titulo: "ITS — Servicio Técnico Integral",
    sub: "Mantenimiento preventivo, correctivo, calibración y certificación de equipos eléctricos y herramientas de protección.",
    href: "/servicios/its-servicio-tecnico",
    tags: ["Preventivo", "Correctivo", "Calibración", "Certificación"],
  },
  {
    id: "revisa",
    icon: <ClipboardCheck size={22} aria-hidden="true" />,
    titulo: "Revisa — Trazabilidad de EPI",
    sub: "Plataforma digital para la gestión de revisiones, alertas de caducidad y trazabilidad completa de herramientas y EPI.",
    href: "/servicios/revisa-trazabilidad",
    tags: ["Trazabilidad", "EPI", "Digital", "Normativa"],
  },
  {
    id: "rent",
    icon: <RefreshCw size={22} aria-hidden="true" />,
    titulo: "Rent Puller — Alquiler de equipos",
    sub: "Alquiler ágil de cabrestantes, frenadoras y equipos de soplado con asistencia técnica incluida para cada obra.",
    href: "/alquiler",
    tags: ["Alquiler", "Soporte 24/5", "Flexible"],
  },
  {
    id: "formate",
    icon: <Award size={22} aria-hidden="true" />,
    titulo: "Formación técnica certificada",
    sub: "Cursos prácticos para operadores de equipos eléctricos y de tendido, impartidos por técnicos en activo de Tranluz.",
    href: "/formacion",
    tags: ["Certificación", "Práctico", "PRL"],
  },
];

export default function ServiciosPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* Hero */}
        <section className="page-hero-pro">
          <div className="page-hero-pro-copy">
            <p className="eyebrow">Servicios Tranluz</p>
            <h1>Todo el soporte que necesita tu equipo eléctrico</h1>
            <p>Servicio técnico integral, trazabilidad digital, alquiler de maquinaria y formación especializada. Un único proveedor para todo el ciclo de vida de tu equipo.</p>
            <div className="hero-actions">
              <Link href="/presupuesto" className="button button-primary">Solicitar presupuesto</Link>
              <a href={`tel:${brand.phone}`} className="button button-secondary">{brand.phone}</a>
            </div>
          </div>
          <div className="page-hero-pro-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.its} alt="Técnico ITS Tranluz" loading="eager" />
          </div>
        </section>

        {/* Servicios */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Qué ofrecemos</p>
            <h2>Catálogo de servicios</h2>
          </div>
          <div className="services-list">
            {servicios.map((s) => (
              <article key={s.id} className="service-row">
                <div className="service-row-icon">{s.icon}</div>
                <div className="service-row-body">
                  <h3>{s.titulo}</h3>
                  <p>{s.sub}</p>
                  <div className="pill-list">
                    {s.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <Link href={s.href} className="button button-ghost" style={{ flexShrink: 0 }}>Ver más</Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Sin compromiso</p>
              <h2>¿No sabes qué servicio necesitas?</h2>
              <p>Llámanos o escríbenos y nuestro equipo técnico te orienta sin coste.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Consultar</Link>
              <a href={`mailto:${brand.email}`} className="button button-secondary">{brand.email}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
