"use client";

import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";
import { defaultLocale, localeNames, locales, type Locale } from "@/i18n/config";

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

  useEffect(() => {
    setLocale(readLocale());
  }, []);

  function changeLocale(value: Locale) {
    document.cookie = `tranluz_locale=${value}; max-age=31536000; path=/; samesite=lax`;
    document.cookie = `NEXT_LOCALE=${value}; max-age=31536000; path=/; samesite=lax`;
    window.localStorage.setItem("tranluz_locale", value);
    setLocale(value);
    window.location.reload();
  }

  return (
    <label className="language-selector">
      <Globe2 aria-hidden="true" size={16} />
      <span className="sr-only">Seleccionar idioma</span>
      <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)}>
        {locales.map((item) => (
          <option value={item} key={item} title={localeNames[item]}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
