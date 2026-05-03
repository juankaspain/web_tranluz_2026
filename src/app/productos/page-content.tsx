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
        {/* Hero */}
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
            <div className="filter-pills">
              <Filter size={14} aria-hidden="true" style={{ color: "var(--text-soft)", flexShrink: 0, alignSelf: "center" }} />
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
            <div className="product-grid">
              <div className="catalog-empty">
                <Package size={40} />
                <p>No se encontraron productos con esos criterios.</p>
              </div>
            </div>
          ) : (
            <div className="product-grid">
              {filtrados.map((p) => (
                <article key={p.nombre} className="product-card">
                  <div className="product-card-brand">
                    <Package size={16} aria-hidden="true" />
                    {p.marca}
                  </div>
                  <span className="product-card-cat">{p.cat}</span>
                  <h3>{p.nombre}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <div className="product-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="product-tag">{t}</span>
                    ))}
                  </div>
                  <Link href="/presupuesto" className="product-card-action">
                    Solicitar oferta  →
                  </Link>
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
