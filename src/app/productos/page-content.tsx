"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Package, Filter } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const categorias = ["Todos", "Cabrestantes", "Frenadoras", "Fibra óptica", "Herramientas AT", "Seguridad", "Trazabilidad"];

const productos = [
  { nombre: "Cabrestante hidráulico TC-120", cat: "Cabrestantes", marca: "Tesmec", desc: "Cabrestante de tendido de 120 kN con control electrónico de tracción y velocidad. Homologado para AT y MAT.", tags: ["120 kN", "Hidráulico", "AT/MAT"] },
  { nombre: "Frenadora de cable FC-80", cat: "Frenadoras", marca: "Plumettaz", desc: "Frenadora de 80 kN de freno máximo. Sistema automático de control de tensión para tendidos de cable de potencia.", tags: ["80 kN", "Automática", "Control tensión"] },
  { nombre: "Equipo de soplado SF-200", cat: "Fibra óptica", marca: "Plumettaz", desc: "Soplado de microtubos hasta Ø20 mm y cables FTTH. Presión máxima de trabajo 15 bar.", tags: ["FTTH", "Microtubo", "15 bar"] },
  { nombre: "Tensor dinámico TD-50", cat: "Cabrestantes", marca: "Tesmec", desc: "Tensor dinámico para tendidos de conductor en media tensión. Sistema de control por PLC.", tags: ["50 kN", "PLC", "MT"] },
  { nombre: "Guante dieléctrico Clase 4", cat: "Seguridad", marca: "Cembre", desc: "Guante de protección dieléctrica clase 4 (36 kV). Certificado EN 60903. Con funda de cuero incluida.", tags: ["36 kV", "EN 60903", "EPI"] },
  { nombre: "Mástil telescópico MT-10", cat: "Herramientas AT", marca: "Cembre", desc: "Mástil telescópico de fibra de vidrio para trabajos en alta tensión. Longitud máxima 10 m. Certificado EN 60900.", tags: ["10 m", "Fibra vidrio", "EN 60900"] },
  { nombre: "Plataforma Revisa EPI", cat: "Trazabilidad", marca: "Tranluz", desc: "Software de trazabilidad para la gestión de revisiones, alertas de caducidad y certificación de EPI y herramientas.", tags: ["SaaS", "Trazabilidad", "Normativa"] },
  { nombre: "Conector de compresión CC-150", cat: "Herramientas AT", marca: "Cembre", desc: "Conector de compresión bimetales para cable de aluminio-cobre hasta 150 mm². Herramienta de compresión incluida.", tags: ["150 mm²", "Bimetales", "Compresión"] },
];

export default function ProductosPageContent() {
  const [cat, setCat] = useState("Todos");
  const [q, setQ] = useState("");

  const filtrados = productos.filter(
    (p) =>
      (cat === "Todos" || p.cat === cat) &&
      (q === "" || p.nombre.toLowerCase().includes(q.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(q.toLowerCase())))
  );

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Catálogo técnico</p>
          <h1>Equipos y herramientas para obras eléctricas</h1>
          <p>Distribuidor oficial de Tesmec, Plumettaz, Tractel y Cembre. Consulta disponibilidad y solicita oferta.</p>
        </section>

        <section className="section">
          {/* Buscador y filtros */}
          <div className="catalog-controls">
            <div className="search-field">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar por nombre o característica…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Buscar producto"
              />
            </div>
            <div className="filter-pills" role="group" aria-label="Filtrar por categoría">
              <Filter size={14} aria-hidden="true" />
              {categorias.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`pill-btn${cat === c ? " pill-btn-active" : ""}`}
                  aria-pressed={cat === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de productos */}
          {filtrados.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "48px 0" }}>No se encontraron productos con esos criterios.</p>
          ) : (
            <div className="equipment-grid">
              {filtrados.map((p) => (
                <article key={p.nombre} className="equipment-card">
                  <div className="equipment-card-head">
                    <Package size={16} aria-hidden="true" />
                    <span style={{ fontSize: "0.78rem", fontWeight: 900 }}>{p.marca}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.cat}</span>
                    <h3 style={{ marginTop: 4 }}>{p.nombre}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.55, marginTop: 8 }}>{p.desc}</p>
                  </div>
                  <div>
                    <div className="pill-list" style={{ marginBottom: 12 }}>
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                    <Link href="/presupuesto" className="text-link">Solicitar oferta <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
