"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = {
  analytics: boolean;
  decided: boolean;
};

const COOKIE_NAME = "tranluz_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
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
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-expect-error Google Consent Mode global.
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

    const timer = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(timer);
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
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-label="Gestion de cookies"
      aria-describedby="cookie-desc"
    >
      <div className="cookie-consent__content">
        <div className="cookie-consent__copy">
          <span className="cookie-consent__badge">Privacidad</span>
          <p id="cookie-desc">
            Usamos cookies tecnicas necesarias y, si lo consientes, cookies de analitica para mejorar la web.{" "}
            <Link href="/cookies">Politica de cookies</Link>
          </p>
        </div>

        <div className="cookie-consent__actions">
          <button
            type="button"
            className="cookie-consent__button cookie-consent__button--secondary"
            onClick={() => setShowDetails((value) => !value)}
            aria-expanded={showDetails}
          >
            Configurar
          </button>
          <button
            type="button"
            className="cookie-consent__button cookie-consent__button--secondary"
            onClick={rejectAll}
          >
            Solo necesarias
          </button>
          <button
            type="button"
            className="cookie-consent__button cookie-consent__button--primary"
            onClick={acceptAll}
          >
            Aceptar todas
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="cookie-consent__details">
          <label className="cookie-consent__option">
            <span>
              <strong>Cookies tecnicas</strong>
              <small>Necesarias para idioma, preferencias y funcionamiento basico.</small>
            </span>
            <input type="checkbox" checked disabled aria-label="Cookies tecnicas siempre activas" />
          </label>

          <label className="cookie-consent__option">
            <span>
              <strong>Cookies analiticas</strong>
              <small>Medicion anonima para entender el uso y mejorar la experiencia.</small>
            </span>
            <input
              type="checkbox"
              checked={analyticsChecked}
              onChange={(event) => setAnalyticsChecked(event.target.checked)}
              aria-label="Activar cookies analiticas"
            />
          </label>

          <button
            type="button"
            className="cookie-consent__button cookie-consent__button--primary cookie-consent__save"
            onClick={savePreferences}
          >
            Guardar preferencias
          </button>
        </div>
      )}
    </div>
  );
}
