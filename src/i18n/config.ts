export const locales = ["es", "en", "de", "it", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  fr: "Français"
};

export function isLocale(value: string | undefined | null): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function localeFromCountry(country: string | undefined | null): Locale | undefined {
  const code = country?.toUpperCase();

  if (!code) return undefined;
  if (["ES", "MX", "AR", "CO", "CL", "PE", "UY", "EC", "BO", "PY", "CR", "PA", "DO", "GT", "HN", "NI", "SV"].includes(code)) return "es";
  if (["DE", "AT"].includes(code)) return "de";
  if (["IT", "SM", "VA"].includes(code)) return "it";
  if (["FR", "BE", "LU", "MC"].includes(code)) return "fr";
  if (["GB", "IE", "US", "CA", "AU", "NZ"].includes(code)) return "en";

  return undefined;
}

export function localeFromAcceptLanguage(value: string | undefined | null): Locale | undefined {
  if (!value) return undefined;

  for (const part of value.split(",")) {
    const language = part.trim().split(";")[0]?.slice(0, 2).toLowerCase();
    if (isLocale(language)) return language;
  }

  return undefined;
}
