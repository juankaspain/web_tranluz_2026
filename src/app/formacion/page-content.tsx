"use client";
import Link from "next/link";
import { BookOpen, CheckCircle2, Clock, Users, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

const cursos = [
  {
    titulo: "Operador de equipos eléctricos",
    duracion: "16 horas",
    modalidad: "Presencial — Sevilla",
    desc: "Formación completa para operar cabrestantes, frenadoras y equipos de tendido en obras de alta y media tensión. Incluye prácticas con equipo real.",
    tags: ["Alta tensión", "Cabrestantes", "PRL"],
  },
  {
    titulo: "Operador de equipos de soplado de fibra óptica",
    duracion: "8 horas",
    modalidad: "Presencial — Sevilla",
    desc: "Manejo de equipos de soplado de microtubos y cables FTTH. Normativa de seguridad y configuración de parámetros de presión.",
    tags: ["Fibra óptica", "FTTH", "Microtubo"],
  },
  {
    titulo: "Prevención de riesgos en obras eléctricas",
    duracion: "8 horas",
    modalidad: "Presencial — Sevilla",
    desc: "Identificación y control de riesgos en trabajos eléctricos. Uso correcto de EPI y herramientas de protección. Certificación propia Tranluz.",
    tags: ["PRL", "EPI", "Seguridad"],
  },
  {
    titulo: "Trazabilidad y gestión de EPI con Revisa",
    duracion: "4 horas",
    modalidad: "Online o presencial",
    desc: "Uso de la plataforma Revisa para la gestión de revisiones, alertas de caducidad y trazabilidad documental de herramientas y EPI.",
    tags: ["Revisa", "Digital", "Normativa"],
  },
];

export default function FormacionPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* Hero */}
        <section className="page-hero-pro">
          <div className="page-hero-pro-copy">
            <p className="eyebrow">Fórmate con Tranluz</p>
            <h1>Formación técnica especializada para obras eléctricas</h1>
            <p>Cursos prácticos para operadores de equipos eléctricos, tendido de fibra óptica y prevención de riesgos. Impartidos por nuestro equipo técnico con equipos reales.</p>
            <div className="hero-actions">
              <Link href="/presupuesto" className="button button-primary">Consultar disponibilidad</Link>
              <a href={`tel:${brand.phone}`} className="button button-secondary">{brand.phone}</a>
            </div>
          </div>
          <div className="page-hero-pro-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.training} alt="Formación técnica Tranluz" loading="eager" />
          </div>
        </section>

        {/* Por qué */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Por qué formarse con nosotros</p>
            <h2>Formación que viene de la práctica real</h2>
          </div>
          <div className="quick-access">
            {[
              { icon: <Users size={22} aria-hidden="true" />, title: "Formadores técnicos", sub: "Todos nuestros formadores son técnicos en activo con experiencia en obra." },
              { icon: <ShieldCheck size={22} aria-hidden="true" />, title: "Certificación propia", sub: "Certificado de asistencia y aprovechamiento reconocido por fabricantes distribuídos." },
              { icon: <Clock size={22} aria-hidden="true" />, title: "Cursos cortos y efectivos", sub: "De 4 a 16 horas. Diseñados para encajar en la agenda de un profesional en activo." },
              { icon: <CheckCircle2 size={22} aria-hidden="true" />, title: "Práctica con equipo real", sub: "Acceso a nuestro parque de equipos para prácticas supervisadas." },
            ].map((v) => (
              <div key={v.title} className="quick-link" style={{ pointerEvents: "none" }}>
                <span className="quick-kicker">Formación</span>
                {v.icon}
                <span><strong>{v.title}</strong><small>{v.sub}</small></span>
              </div>
            ))}
          </div>
        </section>

        {/* Catálogo de cursos */}
        <section className="section section-contrast">
          <div className="section-heading">
            <p className="eyebrow">Catálogo de cursos</p>
            <h2>Oferta formativa 2025/2026</h2>
          </div>
          <div className="course-grid">
            {cursos.map((c) => (
              <article key={c.titulo} className="course-card">
                <div className="course-card-top">
                  <span><BookOpen size={16} aria-hidden="true" style={{ display: "inline", marginRight: 6 }} />Formación</span>
                  <span className="course-meta"><Clock size={14} aria-hidden="true" />{c.duracion}</span>
                </div>
                <div>
                  <h3>{c.titulo}</h3>
                  <p>{c.desc}</p>
                </div>
                <div>
                  <div className="pill-list" style={{ marginBottom: 12 }}>
                    {c.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <Link href="/presupuesto" className="text-link">Consultar plaza <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Próximas convocatorias</p>
              <h2>¿Quieres reservar plaza en un curso?</h2>
              <p>Escríbenos o llámanos y te informamos de las próximas fechas disponibles y condiciones de grupo.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Consultar disponibilidad</Link>
              <a href={`mailto:${brand.email}`} className="button button-secondary">{brand.email}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
