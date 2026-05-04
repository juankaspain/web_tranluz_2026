"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Phone, X, Copy, CheckCheck } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const heroMetrics = [
  { value: "+38", label: "años" },
  { value: "4",   label: "servicios" },
  { value: "B2B", label: "sector" },
];

const asideMetrics = [
  { value: "+38",     label: "años de experiencia" },
  { value: "4",       label: "Líneas de servicio" },
  { value: "B2B",     label: "Empresas eléctricas y telco" },
  { value: "Sevilla", label: "Atención técnica en obra" },
];

/* ---- Phone Popup ------------------------------------------------- */
function PhonePopup({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const phone = brand.phone ?? "+34 954 367 290";
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [phone]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        minWidth: "280px",
        background: "rgba(10, 14, 20, 0.96)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "16px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(189,80,14,0.15)",
        overflow: "hidden",
        animation: "fadeSlideDown 180ms ease",
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 16px 10px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "28px", height: "28px", borderRadius: "50%",
            background: "rgba(189,80,14,0.2)",
          }}>
            <Phone size={13} style={{ color: "#f97316" }} />
          </div>
          <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
            Atención directa
          </span>
        </div>
        <button
          type="button" onClick={onClose}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "24px", height: "24px", border: "none",
            background: "rgba(255,255,255,0.08)", borderRadius: "50%",
            color: "rgba(255,255,255,0.6)", cursor: "pointer",
          }}
        >
          <X size={12} />
        </button>
      </div>

      {/* Phone number */}
      <div style={{ padding: "16px" }}>
        <a
          href={phoneHref}
          style={{
            display: "block",
            fontSize: "1.55rem", fontWeight: 800,
            color: "#ffffff", letterSpacing: "-0.02em",
            textDecoration: "none", lineHeight: 1.1,
            marginBottom: "4px",
          }}
        >
          {phone}
        </a>
        <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
          Lun–Vie 8:00–18:00 &middot; Urgencias 24h
        </p>
      </div>

      {/* Actions */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "8px", padding: "0 16px 16px",
      }}>
        <a
          href={phoneHref}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "6px", padding: "10px", borderRadius: "10px",
            background: "#bd500e", color: "#fff",
            fontWeight: 700, fontSize: "0.84rem",
            textDecoration: "none",
          }}
        >
          <Phone size={14} /> Llamar ahora
        </a>
        <button
          type="button" onClick={handleCopy}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "6px", padding: "10px", borderRadius: "10px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: copied ? "#4ade80" : "rgba(255,255,255,0.8)",
            fontWeight: 600, fontSize: "0.84rem", cursor: "pointer",
            transition: "color 200ms",
          }}
        >
          {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      {/* Arrow */}
      <div style={{
        position: "absolute", bottom: "-7px", left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
        width: "13px", height: "13px",
        background: "rgba(10,14,20,0.96)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderTop: "none", borderLeft: "none",
      }} />
    </div>
  );
}

/* ---- HeroSection ------------------------------------------------- */
export function HeroSection() {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      {/* Background image */}
      <div className="hero-media" aria-hidden="true">
        <Image
          src={assets.hero}
          alt="Obras de tendido eléctrico con equipos Tranluz"
          fill priority sizes="100vw"
          className="hero-bg"
        />
      </div>

      {/* Main hero copy */}
      <div className="content-wrap">
        <div className="hero-copy">
          {/* Logo Tranluz */}
          <div className="hero-logo-wrap">
            <img
              src={assets.logo}
              alt="Tranluz"
              width={160} height={60}
              style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
            />
          </div>

          <p className="eyebrow">
            Especialistas desde {brand.founded}
            {" · "}
            Sevilla
          </p>

          <h1 id="hero-title">
            Todo lo que necesitas para ejecutar obras eléctricas críticas, en un solo proveedor.
          </h1>

          <p className="hero-desc">
            Equipos, alquiler, servicio técnico, formación y trazabilidad con soporte real en obra.
          </p>

          {/* Metric pills */}
          <div className="hero-metrics">
            {heroMetrics.map((m) => (
              <div key={m.label} className="metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary">
              Solicitar presupuesto <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/alquiler" className="button button-ghost">
              Ver equipos en alquiler
            </Link>

            {/* Phone button con popup profesional */}
            <div
              ref={phoneRef}
              style={{ position: "relative", display: "inline-flex" }}
            >
              <button
                type="button"
                onClick={() => setPhoneOpen(v => !v)}
                onMouseEnter={() => setPhoneOpen(true)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "0 18px", height: "46px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.13)",
                  border: "1px solid rgba(255,255,255,0.26)",
                  color: "#ffffff", fontWeight: 700, fontSize: "0.9rem",
                  cursor: "pointer", backdropFilter: "blur(12px)",
                  transition: "background 180ms ease, border-color 180ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseLeave={e => {
                  // keep open if mouse goes to popup
                  const related = (e as React.MouseEvent).relatedTarget as Node;
                  if (phoneRef.current && !phoneRef.current.contains(related)) {
                    setPhoneOpen(false);
                  }
                }}
                aria-expanded={phoneOpen}
                aria-haspopup="dialog"
                aria-label="Ver teléfono de contacto"
              >
                <Phone size={16} aria-hidden="true" />
                {brand.phone ?? "+34 954 367 290"}
              </button>

              {phoneOpen && (
                <>
                  {/* Overlay para cerrar */}
                  <div
                    style={{ position: "fixed", inset: 0, zIndex: 99 }}
                    onClick={() => setPhoneOpen(false)}
                  />
                  <PhonePopup onClose={() => setPhoneOpen(false)} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Aside card */}
        <aside className="hero-aside" aria-label="Datos clave de Tranluz">
          {/* Badge */}
          <div className="command-label">
            Partner oficial desde {brand.founded}
          </div>

          {/* Stats grid */}
          <div className="metric-grid">
            {asideMetrics.map((m) => (
              <div key={m.label} className="metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Location & hours */}
          <div style={{ display: "grid", gap: "10px", marginTop: "4px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px",
              fontSize: "0.84rem", color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={14} style={{ marginTop: "2px", color: "#f97316", flexShrink: 0 }} />
              <div>
                <span style={{ display: "block", fontSize: "9px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)" }}>Ubicación</span>
                <strong style={{ color: "#fff", fontWeight: 700 }}>Polígono Industrial Calonge, Sevilla</strong>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px",
              fontSize: "0.84rem", color: "rgba(255,255,255,0.7)" }}>
              <Clock size={14} style={{ marginTop: "2px", color: "#f97316", flexShrink: 0 }} />
              <div>
                <span style={{ display: "block", fontSize: "9px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)" }}>Horario</span>
                <strong style={{ color: "#fff", fontWeight: 700 }}>Lun–Vie 8:00–18:00 · Urgencias 24h</strong>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/contacto" className="button button-primary" style={{ marginTop: "4px" }}>
            Solicitar presupuesto <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
}
