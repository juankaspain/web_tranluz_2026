"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Phone, X, Copy, CheckCheck, Sparkles, Award, TrendingUp } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

const heroMetrics = [
  { value: "+38", label: "años", icon: Award },
  { value: "4", label: "servicios", icon: TrendingUp },
  { value: "B2B", label: "sector", icon: Sparkles },
];

/* ---- Phone Popup ------------------------------------------------- */
// C3 fix: el popup SOLO se abre con onClick, nunca con hover
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

  // Cerrar con Escape
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  return (
    // C1 fix: todos los estilos movidos a clases CSS en globals.css
    <div
      className="phone-popup-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Información de contacto telefónico"
    >
      <div
        className="phone-popup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="phone-popup-header">
          <div>
            <div className="phone-popup-badge">
              <Phone size={13} />
              Atención directa
            </div>
            <h3 className="phone-popup-title">Llámanos ahora</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="phone-popup-close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Phone number */}
        <a href={phoneHref} className="phone-popup-number">
          {phone}
        </a>
        <p className="phone-popup-hours">
          Lun–Vie 8:00–18:00 · Urgencias 24h
        </p>

        {/* Actions */}
        <div className="phone-popup-actions">
          <a href={phoneHref} className="phone-popup-call-btn">
            <Phone size={18} />
            Llamar ahora
          </a>
          <button onClick={handleCopy} className="phone-popup-copy-btn">
            {copied ? (
              <><CheckCheck size={16} /> Copiado</>
            ) : (
              <><Copy size={16} /> Copiar</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- HeroSection ------------------------------------------------- */
export function HeroSection() {
  const [phoneOpen, setPhoneOpen] = useState(false);

  return (
    // C1 fix: position/min-height/overflow/background movidos a .hero-section-full en globals.css
    <section className="hero-section hero-section-full">
      {/* Background image with overlay */}
      <div className="hero-bg">
        <Image
          src={assets.hero}
          alt="Obras de tendido eléctrico con equipos Tranluz"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-glow-amber" />
        <div className="hero-bg-glow-blue" />
      </div>

      <div className="container hero-container">
        <div className="hero-content-grid">
          {/* Main hero content */}
          <div className="hero-main">
            {/* Badge */}
            <div className="hero-badge" aria-hidden="true">
              <div className="hero-badge-logo">
                <Image
                  src={assets.logo}
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <span className="hero-badge-text">
                Especialistas desde {brand.founded} · Sevilla
              </span>
            </div>

            {/* C2 fix: gradiente con @supports + fallback forced-colors */}
            {/* Headline */}
            <h1 className="hero-h1">
              Todo lo que necesitas para{" "}
              <span className="hero-gradient-text">
                ejecutar obras eléctricas críticas
              </span>
              , en un solo proveedor.
            </h1>

            {/* Subheadline */}
            <p className="hero-sub">
              Equipos, alquiler, servicio técnico, formación y trazabilidad con soporte real en obra.
            </p>

            {/* Metric pills */}
            <div className="hero-metrics-row" role="list" aria-label="Datos clave de Tranluz">
              {heroMetrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="hero-metric-pill" role="listitem">
                    <div className="hero-metric-icon" aria-hidden="true">
                      <Icon size={14} color="#fff" />
                    </div>
                    <div>
                      <div className="hero-metric-value">{m.value}</div>
                      <div className="hero-metric-label">{m.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link href="/contacto" className="hero-cta-primary">
                Solicitar presupuesto
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/alquiler" className="hero-cta-secondary">
                Ver equipos en alquiler
              </Link>

              {/* C3 fix: phone popup SOLO con onClick */}
              <button
                onClick={() => setPhoneOpen((v) => !v)}
                className="hero-phone-btn"
                aria-expanded={phoneOpen}
                aria-haspopup="dialog"
                aria-label="Ver teléfono de contacto"
              >
                <Phone size={18} aria-hidden="true" />
                {brand.phone ?? "+34 954 367 290"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phone popup — C3: solo se monta cuando phoneOpen === true */}
      {phoneOpen && <PhonePopup onClose={() => setPhoneOpen(false)} />}
    </section>
  );
}
