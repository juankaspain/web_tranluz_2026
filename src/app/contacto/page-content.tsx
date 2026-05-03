"use client";
import Link from "next/link";
import { Mail, MapPin, PhoneCall, Clock, MessageSquare } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/config/brand";

export default function ContactoPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Contacto</p>
          <h1>Estamos en Sevilla, atendemos en toda España</h1>
          <p>Consultas técnicas, presupuestos, alquiler de equipos y formación. Respondemos en menos de 24 horas laborables.</p>
        </section>

        <section className="section">
          <div className="contact-grid">
            {/* Departamentos */}
            <div className="contact-panel contact-panel-strong">
              <p className="eyebrow">Dónde estamos</p>
              <h2>Contacto directo</h2>
              <p>Elige el canal que mejor se adapte a tu necesidad.</p>
              <nav className="department-list" aria-label="Canales de contacto">
                <a href={`tel:${brand.phone?.replace(/\s/g, "")}`}>
                  <PhoneCall size={18} aria-hidden="true" />
                  <span><strong>Teléfono</strong><small>{brand.phone}</small></span>
                  <span style={{ color: "var(--brand)", fontSize: "0.8rem", fontWeight: 900 }}>Llamar</span>
                </a>
                <a href={`mailto:${brand.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  <span><strong>Email</strong><small>{brand.email}</small></span>
                  <span style={{ color: "var(--brand)", fontSize: "0.8rem", fontWeight: 900 }}>Escribir</span>
                </a>
                <Link href="/presupuesto">
                  <MessageSquare size={18} aria-hidden="true" />
                  <span><strong>Formulario</strong><small>Presupuesto rápido online</small></span>
                  <span style={{ color: "var(--brand)", fontSize: "0.8rem", fontWeight: 900 }}>Abrir</span>
                </Link>
              </nav>
            </div>

            {/* Dirección */}
            <div className="contact-panel">
              <p className="eyebrow">Sede</p>
              <h2 style={{ margin: "0 0 16px" }}>Sevilla</h2>
              <address style={{ fontStyle: "normal", display: "grid", gap: 12 }}>
                <p style={{ display: "flex", gap: 10, margin: 0 }}>
                  <MapPin size={18} aria-hidden="true" style={{ color: "var(--brand)", flexShrink: 0, marginTop: 2 }} />
                  <span>{brand.address}</span>
                </p>
              </address>
              <a
                href="https://maps.google.com/?q=Pol%C3%ADgono+Industrial+Calonge+Calle+Oro+2+Sevilla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                style={{ marginTop: 16 }}
              >
                Ver en Google Maps
              </a>
            </div>

            {/* Horario */}
            <div className="contact-panel">
              <p className="eyebrow">Horario</p>
              <h2 style={{ margin: "0 0 16px" }}>Atención al cliente</h2>
              <div className="schedule-list">
                <div>
                  <Clock size={18} aria-hidden="true" style={{ color: "var(--brand)" }} />
                  <div>
                    <strong>Lunes a viernes</strong>
                    <small>08:30 &ndash; 18:00</small>
                  </div>
                </div>
                <div>
                  <Clock size={18} aria-hidden="true" style={{ color: "var(--text-soft)" }} />
                  <div>
                    <strong>Sábados y festivos</strong>
                    <small>Cerrado</small>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: 18, color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Para urgencias técnicas fuera de horario, contacta por email y te responderemos a primera hora.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
