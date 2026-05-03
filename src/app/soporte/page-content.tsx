"use client";
import Link from "next/link";
import { FileText, Download, PhoneCall, Mail, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/config/brand";

const catalogos = [
  { nombre: "Catálogo general Tranluz 2025", tipo: "PDF", size: "8.4 MB", href: "/soporte/catalogos/tranluz-2025.pdf" },
  { nombre: "Ficha técnica cabrestante TC-120", tipo: "PDF", size: "1.2 MB", href: "/soporte/catalogos/tc-120.pdf" },
  { nombre: "Ficha técnica frenadora FC-80", tipo: "PDF", size: "980 KB", href: "/soporte/catalogos/fc-80.pdf" },
  { nombre: "Manual equipo de soplado SF-200", tipo: "PDF", size: "2.1 MB", href: "/soporte/catalogos/sf-200-manual.pdf" },
  { nombre: "Guía de uso Revisa EPI", tipo: "PDF", size: "1.5 MB", href: "/soporte/catalogos/revisa-guia.pdf" },
  { nombre: "Catálogo Rent Puller 2025", tipo: "PDF", size: "3.8 MB", href: "/soporte/catalogos/rent-puller-2025.pdf" },
];

export default function SoportePageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Centro de soporte</p>
          <h1>Documentación técnica y asistencia directa</h1>
          <p>Descarga catálogos, fichas técnicas y manuales, o contáctanos directamente para asistencia especializada.</p>
        </section>

        <section className="section">
          <div className="support-layout">
            {/* Documentación */}
            <div className="support-docs">
              <div className="section-heading" style={{ textAlign: "left" }}>
                <p className="eyebrow">Documentación</p>
                <h2>Catálogos y fichas técnicas</h2>
              </div>
              <ul className="doc-list" role="list">
                {catalogos.map((doc) => (
                  <li key={doc.nombre}>
                    <FileText size={18} aria-hidden="true" />
                    <div>
                      <strong>{doc.nombre}</strong>
                      <small>{doc.tipo} &mdash; {doc.size}</small>
                    </div>
                    <a
                      href={doc.href}
                      className="button button-ghost"
                      download
                      aria-label={`Descargar ${doc.nombre}`}
                    >
                      <Download size={14} aria-hidden="true" />
                      Descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Asistencia */}
            <aside className="support-contact">
              <p className="eyebrow">Asistencia directa</p>
              <h2>Habla con nuestro equipo</h2>
              <p>Para consultas técnicas urgentes, incidencias o solicitudes de revisión:</p>
              <nav aria-label="Canales de asistencia" style={{ display: "grid", gap: 12, marginTop: 16 }}>
                <a href={`tel:${brand.phone?.replace(/\s/g, "")}`} className="support-contact-row">
                  <PhoneCall size={18} aria-hidden="true" />
                  <span><strong>Teléfono</strong><small>{brand.phone}</small></span>
                </a>
                <a href={`mailto:${brand.email}`} className="support-contact-row">
                  <Mail size={18} aria-hidden="true" />
                  <span><strong>Email</strong><small>{brand.email}</small></span>
                </a>
                <Link href="/presupuesto" className="support-contact-row">
                  <BookOpen size={18} aria-hidden="true" />
                  <span><strong>Formulario</strong><small>Consulta o presupuesto rápido</small></span>
                </Link>
              </nav>
              <hr style={{ margin: "24px 0", borderColor: "var(--border)" }} />
              <p className="caption">Atención técnica de lunes a viernes, 08:30&ndash;18:00. Respondemos email fuera de horario.</p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
