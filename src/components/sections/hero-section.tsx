"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, X, Copy, CheckCheck, Sparkles, Award, TrendingUp } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";
import { useCountUp } from "@/hooks/use-count-up";

// ── Metric con animación numérica ──────────────────────────────────────────
interface HeroMetricItem {
  /** Número final a animar (null para valores no numéricos como "B2B") */
  numericEnd: number | null;
  /** Prefijo estático delante del número (e.g. "+") */
  prefix?: string;
  /** Texto estático cuando numericEnd es null */
  staticValue: string;
  label: string;
  icon: React.ElementType;
}

const heroMetrics: HeroMetricItem[] = [
  { numericEnd: 38, prefix: "+", staticValue: "+38", label: "años", icon: Award },
  { numericEnd: 4, prefix: "",  staticValue: "4",   label: "servicios", icon: TrendingUp },
  { numericEnd: null, prefix: "", staticValue: "B2B", label: "sector", icon: Sparkles },
];

// Componente individual que usa el hook
function AnimatedMetricPill({ metric }: { metric: HeroMetricItem }) {
  const { count, nodeRef } = useCountUp(
    metric.numericEnd !== null
      ? { end: metric.numericEnd, duration: 1400 }
      : { end: 0, duration: 0 }
  );
  const Icon = metric.icon;
  const displayValue =
    metric.numericEnd !== null
      ? `${metric.prefix ?? ""}${count}`
      : metric.staticValue;

  return (
    <div
      className="hero-metric-pill"
      role="listitem"
      // @ts-expect-error — ref genérico para el observer
      ref={metric.numericEnd !== null ? nodeRef : undefined}
    >
      <div className="hero-metric-icon" aria-hidden="true">
        <Icon size={14} color="#fff" />
      </div>
      <div>
        <div className="hero-metric-value" aria-live="polite">
          {displayValue}
        </div>
        <div className="hero-metric-label">{metric.label}</div>
      </div>
    </div>
  );
}

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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  return (
    <div
      className="phone-popup-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Información de contacto telefónico"
    >
      <div className="phone-popup" onClick={(e) => e.stopPropagation()}>
        <div className="phone-popup-header">
          <div>
            <div className="phone-popup-badge">
              <Phone size={13} />
              Atención directa
            </div>
            <h3 className="phone-popup-title">Llámanos ahora</h3>
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="phone-popup-close">
            <X size={18} />
          </button>
        </div>
        <a href={phoneHref} className="phone-popup-number">{phone}</a>
        <p className="phone-popup-hours">Lun–Vie 8:00–18:00 · Urgencias 24h</p>
        <div className="phone-popup-actions">
          <a href={phoneHref} className="phone-popup-call-btn">
            <Phone size={18} />
            Llamar ahora
          </a>
          <button onClick={handleCopy} className="phone-popup-copy-btn">
            {copied ? <><CheckCheck size={16} /> Copiado</> : <><Copy size={16} /> Copiar</>}
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
    <section className="hero-section hero-section-full">
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
          <div className="hero-main">
            <div className="hero-badge" aria-hidden="true">
              <div className="hero-badge-logo">
                <Image src={assets.logo} alt="" width={24} height={24} aria-hidden="true" />
              </div>
              <span className="hero-badge-text">
                Especialistas desde {brand.founded} · Sevilla
              </span>
            </div>

            <h1 className="hero-h1">
              Todo lo que necesitas para{" "}
              <span className="hero-gradient-text">ejecutar obras eléctricas críticas</span>
              , en un solo proveedor.
            </h1>

            <p className="hero-sub">
              Equipos, alquiler, servicio técnico, formación y trazabilidad con soporte real en obra.
            </p>

            {/* Metric pills — contador animado */}
            <div className="hero-metrics-row" role="list" aria-label="Datos clave de Tranluz">
              {heroMetrics.map((m) => (
                <AnimatedMetricPill key={m.label} metric={m} />
              ))}
            </div>

            <div className="hero-ctas">
              <Link href="/contacto" className="hero-cta-primary">
                Solicitar presupuesto
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/alquiler" className="hero-cta-secondary">
                Ver equipos en alquiler
              </Link>
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

      {phoneOpen && <PhonePopup onClose={() => setPhoneOpen(false)} />}
    </section>
  );
}
