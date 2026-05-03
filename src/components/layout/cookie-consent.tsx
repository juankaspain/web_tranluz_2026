"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ───────────────────────────────────────────────────────────────────────────
// CookieConsent — Banner LSSI/RGPD con consentimiento granular
// Soporta Google Consent Mode v2 para GA4
// Persiste decisión en cookie tranluz_cookie_consent (1 año)
// ───────────────────────────────────────────────────────────────────────────

type ConsentState = {
  analytics: boolean;
  decided: boolean;
};

const COOKIE_NAME = "tranluz_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 año en segundos

function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((r) => r.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1]));
  } catch {
    return null;
  }
}

function writeConsent(state: ConsentState) {
  const value = encodeURIComponent(JSON.stringify(state));
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax; Secure`;
}

function applyGoogleConsent(analytics: boolean) {
  // Google Consent Mode v2
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-expect-error gtag global
    window.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (saved?.decided) {
      applyGoogleConsent(saved.analytics);
      return;
    }
    // Mostrar banner con pequeño retardo para no interferir con LCP
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function acceptAll() {
    const state: ConsentState = { analytics: true, decided: true };
    writeConsent(state);
    applyGoogleConsent(true);
    setVisible(false);
  }

  function rejectAll() {
    const state: ConsentState = { analytics: false, decided: true };
    writeConsent(state);
    applyGoogleConsent(false);
    setVisible(false);
  }

  function savePreferences() {
    const state: ConsentState = { analytics: analyticsChecked, decided: true };
    writeConsent(state);
    applyGoogleConsent(analyticsChecked);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Gestión de cookies"
      aria-describedby="cookie-desc"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        background: "var(--color-surface, #fff)",
        borderTop: "1px solid var(--color-border, #e0e0e0)",
        padding: "1.25rem 1.5rem",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.10)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: "100%",
      }}
    >
      {/* Texto principal */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "0.5rem",
          justifyContent: "space-between",
        }}
      >
        <p
          id="cookie-desc"
          style={{ fontSize: "0.9rem", maxWidth: "680px", margin: 0 }}
        >
          Usamos cookies técnicas (necesarias) y, si lo consientes, cookies de analítica para mejorar la web.{" "}
          <Link href="/cookies" style={{ textDecoration: "underline", color: "inherit" }}>
            Política de cookies
          </Link>
          .
        </p>
        {/* Botones principales */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: "transparent",
              border: "1px solid var(--color-border, #ccc)",
              borderRadius: "0.375rem",
              padding: "0.45rem 1rem",
              fontSize: "0.875rem",
              cursor: "pointer",
              color: "var(--color-text, #222)",
            }}
            aria-expanded={showDetails}
          >
            Configurar
          </button>
          <button
            onClick={rejectAll}
            style={{
              background: "transparent",
              border: "1px solid var(--color-border, #ccc)",
              borderRadius: "0.375rem",
              padding: "0.45rem 1rem",
              fontSize: "0.875rem",
              cursor: "pointer",
              color: "var(--color-text, #222)",
            }}
          >
            Solo necesarias
          </button>
          <button
            onClick={acceptAll}
            style={{
              background: "var(--color-primary, #01696f)",
              border: "none",
              borderRadius: "0.375rem",
              padding: "0.45rem 1.25rem",
              fontSize: "0.875rem",
              cursor: "pointer",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Aceptar todas
          </button>
        </div>
      </div>

      {/* Panel de configuración granular */}
      {showDetails && (
        <div
          style={{
            background: "var(--color-surface-offset, #f5f5f5)",
            borderRadius: "0.5rem",
            padding: "1rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {/* Cookie técnica: bloqueada */}
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "0.875rem" }}>
              <strong>Cookies técnicas</strong>
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted, #666)",
                }}
              >
                Siempre activas
              </span>
              <br />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted, #666)",
                }}
              >
                Necesarias para el funcionamiento del sitio (idioma, tema, sesión).
              </span>
            </span>
            <input
              type="checkbox"
              checked
              disabled
              aria-label="Cookies técnicas: siempre activas"
              style={{ width: "1.1rem", height: "1.1rem", cursor: "not-allowed" }}
            />
          </label>

          {/* Cookie analítica: opcional */}
          <label
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "0.875rem" }}>
              <strong>Cookies analíticas</strong>
              <br />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted, #666)",
                }}
              >
                Google Analytics 4 con IP anonimizada. Nos ayudan a mejorar la web.
              </span>
            </span>
            <input
              type="checkbox"
              checked={analyticsChecked}
              onChange={(e) => setAnalyticsChecked(e.target.checked)}
              aria-label="Activar cookies analíticas"
              style={{ width: "1.1rem", height: "1.1rem", cursor: "pointer" }}
            />
          </label>

          <button
            onClick={savePreferences}
            style={{
              alignSelf: "flex-end",
              background: "var(--color-primary, #01696f)",
              border: "none",
              borderRadius: "0.375rem",
              padding: "0.5rem 1.25rem",
              fontSize: "0.875rem",
              cursor: "pointer",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Guardar preferencias
          </button>
        </div>
      )}
    </div>
  );
}
