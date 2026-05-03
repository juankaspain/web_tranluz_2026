"use client";
import Link from "next/link";
import { Zap, Radio, ShieldCheck, RefreshCw } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/config/brand";

const soluciones = [
  {
    icon: <Zap size={24} aria-hidden="true" />,
    titulo: "Tendido eléctrico en alta y media tensión",
    desc: "Suministro y alquiler de cabrestantes, frenadoras y accesorios para tendidos de conductor en líneas AT y MT. Con asistencia técnica en obra.",
    href: "/alquiler",
    cta: "Ver equipos de alquiler",
    tags: ["AT", "MT", "Cabrestantes", "Frenadoras"],
  },
  {
    icon: <Radio size={24} aria-hidden="true" />,
    titulo: "Tendido de fibra óptica y telecomunicaciones",
    desc: "Equipos de soplado para microtubos y cables FTTH, accesorios de conexión y herramientas de empalme para redes de telecomunicaciones.",
    href: "/productos",
    cta: "Ver catálogo",
    tags: ["FTTH", "Microtubo", "Soplado", "OPGW"],
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    titulo: "Seguridad y protección en obras eléctricas",
    desc: "Guantes dieléctricos, mástiles telescópicos, puestas a tierra y EPI certificados. Trazabilidad de revisiones con la plataforma Revisa.",
    href: "/servicios/revisa-trazabilidad",
    cta: "Ver Revisa",
    tags: ["EPI", "Dieléctrico", "Trazabilidad", "PRL"],
  },
  {
    icon: <RefreshCw size={24} aria-hidden="true" />,
    titulo: "Mantenimiento y ciclo de vida del equipo",
    desc: "Servicio técnico integral ITS: reparación, calibración, certificación y mantenimiento preventivo con cobertura nacional.",
    href: "/servicios/its-servicio-tecnico",
    cta: "Ver servicio ITS",
    tags: ["Mantenimiento", "Calibración", "ITS", "Nacional"],
  },
];

export default function SolucionesPageContent() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Soluciones integrales</p>
          <h1>Para cada obra eléctrica, una solución Tranluz</h1>
          <p>Desde el tendido hasta el mantenimiento, cubrimos todas las necesidades de equipos, seguridad y servicio técnico para instaladores y empresas del sector eléctrico.</p>
        </section>

        <section className="section">
          <div className="soluciones-grid">
            {soluciones.map((s) => (
              <article key={s.titulo} className="solucion-card">
                <div className="solucion-icon">{s.icon}</div>
                <div className="solucion-body">
                  <h2>{s.titulo}</h2>
                  <p>{s.desc}</p>
                  <div className="pill-list" style={{ margin: "12px 0" }}>
                    {s.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <Link href={s.href} className="text-link">{s.cta} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Un único proveedor</p>
              <h2>Equipo, servicio y formación desde un solo punto</h2>
              <p>Simplifica tu cadena de proveedores. Tranluz cubre todo el ciclo de vida de tus equipos eléctricos con atención nacional.</p>
            </div>
            <div className="final-cta-actions">
              <Link href="/presupuesto" className="button button-primary">Solicitar presupuesto</Link>
              <a href={`tel:${brand.phone}`} className="button button-secondary">{brand.phone}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
