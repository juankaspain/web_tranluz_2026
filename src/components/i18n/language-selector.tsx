"use client";

import { useEffect, useRef, useState } from "react";
import { Globe2, ChevronDown } from "lucide-react";
import { defaultLocale, localeNames, locales, type Locale } from "@/i18n/config";

const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  de: "🇩🇪",
  it: "🇮🇹",
  fr: "🇫🇷",
};

function readLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("tranluz_locale="))
    ?.split("=")[1] as Locale | undefined;
  if (cookie && locales.includes(cookie)) return cookie;
  const stored = window.localStorage.getItem("tranluz_locale") as Locale | null;
  if (stored && locales.includes(stored)) return stored;
  const browserLocale = navigator.language.slice(0, 2) as Locale;
  return locales.includes(browserLocale) ? browserLocale : defaultLocale;
}

export function LanguageSelector() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocale(readLocale());
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function changeLocale(value: Locale) {
    document.cookie = `tranluz_locale=${value}; max-age=31536000; path=/; samesite=lax`;
    document.cookie = `NEXT_LOCALE=${value}; max-age=31536000; path=/; samesite=lax`;
    window.localStorage.setItem("tranluz_locale", value);
    setLocale(value);
    setOpen(false);
    window.location.reload();
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Seleccionar idioma"
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe2 size={15} className="shrink-0 opacity-70" aria-hidden="true" />
        <span className="hidden sm:inline">{localeFlags[locale]}</span>
        <span className="hidden sm:inline font-semibold uppercase tracking-wide">{locale}</span>
        <ChevronDown
          size={13}
          className={`shrink-0 opacity-60 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Idioma"
          className="absolute right-0 z-50 mt-1 min-w-[9rem] overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-lg"
        >
          {locales.map((item) => (
            <li key={item} role="option" aria-selected={item === locale}>
              <button
                type="button"
                onClick={() => changeLocale(item)}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                  item === locale
                    ? "bg-accent/50 font-semibold text-accent-foreground"
                    : "text-popover-foreground"
                }`}
              >
                <span className="text-base leading-none" aria-hidden="true">
                  {localeFlags[item]}
                </span>
                <span>{localeNames[item]}</span>
                {item === locale && (
                  <span className="ml-auto text-xs opacity-60">✓</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
