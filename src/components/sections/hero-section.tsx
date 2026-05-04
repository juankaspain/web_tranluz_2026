"use client";

import { useState, useRef, useCallback } from "react";
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

const asideMetrics = [
  { value: "+38", label: "años de experiencia" },
  { value: "4", label: "Líneas de servicio" },
  { value: "B2B", label: "Empresas eléctricas y telco" },
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
      className="phone-popup-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 200ms ease",
      }}
    >
      <div
        className="phone-popup"
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(420px, 92vw)",
          background: "linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)",
          borderRadius: "20px",
          padding: "32px 28px",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          animation: "slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "24px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: "12px",
                boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
              }}
            >
              <Phone size={13} />
              Atención directa
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#f3f4f6",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Llámanos ahora
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 180ms",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#9ca3af";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Phone number */}
        <a
          href={phoneHref}
          style={{
            display: "block",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#fff",
            textDecoration: "none",
            marginBottom: "12px",
            letterSpacing: "0.5px",
            transition: "color 180ms",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#f59e0b")}
          onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
        >
          {phone}
        </a>
        <p style={{ color: "#9ca3af", fontSize: "0.85rem", margin: "0 0 24px 0", fontWeight: 500 }}>
          Lun–Vie 8:00–18:00 · Urgencias 24h
        </p>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href={phoneHref}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 20px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(245, 158, 11, 0.4)",
              transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(245, 158, 11, 0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(245, 158, 11, 0.4)";
            }}
          >
            <Phone size={18} />
            Llamar ahora
          </a>
          <button
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 20px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 180ms",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.14)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            }}
          >
            {copied ? <><CheckCheck size={16} /> Copiado</> : <><Copy size={16} /> Copiar</>}
          </button>
        </div>

        {/* Arrow indicator */}
        <div
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid rgba(31, 41, 55, 0.98)",
          }}
        />
      </div>
    </div>
  );
}

/* ---- HeroSection ------------------------------------------------- */
export function HeroSection() {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "min(780px, 90vh)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src={assets.hero}
          alt="Obras de tendido eléctrico con equipos Tranluz"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.85) 50%, rgba(51, 65, 85, 0.78) 100%)",
          }}
        />
        {/* Subtle gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at top right, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.06) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Main hero content */}
          <div style={{ maxWidth: "720px" }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.08) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                padding: "10px 18px",
                borderRadius: "999px",
                marginBottom: "32px",
                animation: "fadeInUp 600ms ease 100ms backwards",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src={assets.logo}
                  alt="Tranluz"
                  width={24}
                  height={24}
                  style={{ display: "block" }}
                />
              </div>
              <span style={{ color: "#f3f4f6", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.3px" }}>
                Especialistas desde {brand.founded} · Sevilla
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "24px",
                letterSpacing: "-0.02em",
                animation: "fadeInUp 600ms ease 200ms backwards",
              }}
            >
              Todo lo que necesitas para{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ejecutar obras eléctricas críticas
              </span>
              , en un solo proveedor.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "#cbd5e1",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "620px",
                fontWeight: 500,
                animation: "fadeInUp 600ms ease 300ms backwards",
              }}
            >
              Equipos, alquiler, servicio técnico, formación y trazabilidad con soporte real en obra.
            </p>

            {/* Metric pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "40px",
                animation: "fadeInUp 600ms ease 400ms backwards",
              }}
            >
              {heroMetrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      padding: "12px 20px",
                      borderRadius: "999px",
                      transition: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.1) 100%)";
                      e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.4)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      <Icon size={14} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: 3 }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 600, textTransform: "lowercase" }}>
                        {m.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                animation: "fadeInUp 600ms ease 500ms backwards",
              }}
            >
              <Link
                href="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(245, 158, 11, 0.4)",
                  transition: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(245, 158, 11, 0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(245, 158, 11, 0.4)";
                }}
              >
                Solicitar presupuesto
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/alquiler"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 28px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 250ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Ver equipos en alquiler
              </Link>

              {/* Phone button */}
              <div ref={phoneRef} style={{ position: "relative", display: "inline-block" }}>
                <button
                  onClick={() => setPhoneOpen(v => !v)}
                  onMouseEnter={() => setPhoneOpen(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 180ms",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.24)";
                  }}
                  onMouseLeave={e => {
                    const related = (e as unknown as React.MouseEvent).relatedTarget as Node;
                    if (phoneRef.current && !phoneRef.current.contains(related)) {
                      setPhoneOpen(false);
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                    }
                  }}
                  aria-expanded={phoneOpen}
                  aria-haspopup="dialog"
                  aria-label="Ver teléfono de contacto"
                >
                  <Phone size={18} />
                  {brand.phone ?? "+34 954 367 290"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone popup */}
      {phoneOpen && <PhonePopup onClose={() => setPhoneOpen(false)} />}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
