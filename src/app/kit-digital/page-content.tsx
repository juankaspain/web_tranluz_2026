"use client";
import Link from "next/link";
import { Zap, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/config/brand";

const soluciones = [
  {
    titulo: "Trazabilidad digital de equipos",
    desc: "Implementa la plataforma Revisa para el control de EPI, herramientas y equipos de protección con trazabilidad documental completa.",
    bono: "Gestión de procesos",
    importe: "Hasta 6.000 €",
  },
  {
    titulo: "Sitio web y presencia digital",
    desc: "Desarrollo de web corporativa optimizada para SEO y dispositivos móviles para empresas del sector eléctrico.",
    bono: "Presencia en internet",
    importe: "Hasta 2.000 €",
  },
  {
    titulo: "Gestión de clientes (CRM)",
    desc: "Implantación de herramientas CRM adaptadas al ciclo comercial de empresas de instalación eléctrica.",
    bono: "Gestión de clientes",
    importe: "Hasta 4.000 €",
  },
];

const pasos = [
  { n: "01", titulo: "Consulta gratuita", desc: "Evaluamos tu empresa y te indicamos a qué catálogos de soluciones puedes acceder." },
  { n: "02", titulo: "Solicitud de bono", desc: "Te ayudamos a tramitar el bono Kit Digital en el portal Acelera Pyme." },
  { n: "03", titulo: "Implantación", desc: "Desplegamos la solución digital elegida con seguimiento continuo." },
  { n: "04", titulo: "Justificación", desc: "Gestionamos toda la documentación necesaria para la justificación de la ayuda." },
];

export default function KitDigitalPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        {/* Hero */}
        <section className="page-hero">
          <p className="eyebrow">Programa Kit Digital</p>
          <h1>Digitaliza tu empresa eléctrica con ayudas del Gobierno</h1>
          <p>Tranluz es agente digitalizador homologado. Te acompañamos en todo el proceso: desde la solicitud del bono hasta la implantación y justificación.</p>
          <div className="hero-actions" style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/presupuesto" className="button button-primary">Solicitar información</Link>
            <a href={`tel:${brand.phone}`} className="button button-secondary">{brand.phone}</a>
          </div>
        </section>

        {/* Soluciones */}
        <section className="section section-contrast">
          <div className="section-heading">
            <p className="eyebrow">Catálogo de soluciones</p>
            <h2>Qué puedes financiar con Kit Digital</h2>
          </div>
          <div className="grid grid-three">
            {soluciones.map((s) => (
              <article key={s.titulo} className="content-card">
                <div>
                  <span className="card-index"><Zap size={14} aria-hidden="true" style={{ display: "inline", marginRight: 6 }} />{s.bono}</span>
                  <h3>{s.titulo}</h3>
                  <p>{s.desc}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong><CheckCircle2 size={15} aria-hidden="true" />{s.importe}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Cómo funciona</p>
            <h2>El proceso, paso a paso</h2>
          </div>
          <div className="operations-timeline">
            {pasos.map((p) => (
              <article key={p.n} className="operation-step">
                <div className="operation-icon"><FileText size={18} aria-hidden="true" /></div>
                <h3>{p.n} &mdash; {p.titulo}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Sin coste inicial</p>
              <h2>La consulta es gratuita y sin compromiso</h2>
              <p>Analizamos tu situación, comprobamos si cumples los requisitos y te orientamos sobre las soluciones más adecuadas para tu empresa.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Consultar ahora <ArrowRight size={16} aria-hidden="true" /></Link>
              <a href={`mailto:${brand.email}`} className="button button-secondary">{brand.email}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
