"use client";

import { useEffect, useRef, useState } from "react";
import { defaultLocale, localeNames, locales, type Locale } from "@/i18n/config";

const LOCALE_META: Record<Locale, { flag: string; short: string }> = {
  es: { flag: "ES", short: "ES" },
  en: { flag: "EN", short: "EN" },
  de: { flag: "DE", short: "DE" },
  it: { flag: "IT", short: "IT" },
  fr: { flag: "FR", short: "FR" },
};

function readLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const cookie = document.cookie
    .split("; ")
    .find((r) => r.startsWith("tranluz_locale="))
    ?.split("=")[1] as Locale | undefined;
  if (cookie && locales.includes(cookie)) return cookie;
  const stored = window.localStorage.getItem("tranluz_locale") as Locale | null;
  if (stored && locales.includes(stored)) return stored;
  const browser = navigator.language.slice(0, 2) as Locale;
  return locales.includes(browser) ? browser : defaultLocale;
}

export function LanguageSelector() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setLocale(readLocale()); }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function changeLocale(next: Locale) {
    document.cookie = `tranluz_locale=${next}; max-age=31536000; path=/; samesite=lax`;
    document.cookie = `NEXT_LOCALE=${next}; max-age=31536000; path=/; samesite=lax`;
    window.localStorage.setItem("tranluz_locale", next);
    setLocale(next);
    setOpen(false);
    window.location.reload();
  }

  const current = LOCALE_META[locale];

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Seleccionar idioma"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 10px",
          borderRadius: "8px",
          border: "1px solid var(--line, rgba(0,0,0,0.12))",
          background: "var(--bg-elevated, #fff)",
          color: "var(--text, #111820)",
          cursor: "pointer",
          fontSize: "0.8rem",
          fontWeight: 650,
          lineHeight: 1,
          transition: "box-shadow 0.15s, border-color 0.15s",
          boxShadow: open ? "0 0 0 2px var(--brand, #bd500e)" : "none",
          borderColor: open ? "var(--brand, #bd500e)" : undefined,
          whiteSpace: "nowrap",
        }}
      >
        {/* Language code badge */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "22px",
            height: "16px",
            borderRadius: "3px",
            background: "var(--brand, #bd500e)",
            color: "#fff",
            fontSize: "0.62rem",
            fontWeight: 800,
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {current.short}
        </span>
        {/* Language name - visible on md+ */}
        <span style={{ maxWidth: "80px", overflow: "hidden", textOverflow: "ellipsis" }}>
          {localeNames[locale]}
        </span>
        {/* Chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            opacity: 0.5,
            flexShrink: 0,
          }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-label="Idioma"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            zIndex: 9999,
            margin: 0,
            padding: "4px",
            listStyle: "none",
            minWidth: "160px",
            background: "var(--bg-elevated, #fff)",
            border: "1px solid var(--line, rgba(0,0,0,0.12))",
            borderRadius: "10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {locales.map((item) => {
            const meta = LOCALE_META[item];
            const isActive = item === locale;
            return (
              <li key={item} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => changeLocale(item)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "7px",
                    border: "none",
                    background: isActive ? "var(--brand-soft, rgba(189,80,14,0.08))" : "transparent",
                    color: isActive ? "var(--brand, #bd500e)" : "var(--text, #111820)",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 700 : 500,
                    textAlign: "left",
                    transition: "background 0.12s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-muted, #f0f0f0)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {/* Code badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "26px",
                      height: "18px",
                      borderRadius: "4px",
                      background: isActive ? "var(--brand, #bd500e)" : "var(--bg-muted, #e5eaee)",
                      color: isActive ? "#fff" : "var(--text-muted, #4a5668)",
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                    }}
                  >
                    {meta.short}
                  </span>
                  {/* Full name */}
                  <span style={{ flex: 1 }}>{localeNames[item]}</span>
                  {/* Active check */}
                  {isActive && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--brand, #bd500e)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
