"use client";

import { useEffect } from "react";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { translations } from "@/i18n/translations";

function getLocale(): Locale {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("tranluz_locale="))
    ?.split("=")[1] as Locale | undefined;
  const stored = window.localStorage.getItem("tranluz_locale") as Locale | null;
  const browserLocale = navigator.language.slice(0, 2) as Locale;

  if (cookie && locales.includes(cookie)) return cookie;
  if (stored && locales.includes(stored)) return stored;
  if (locales.includes(browserLocale)) return browserLocale;

  return defaultLocale;
}

function normalize(value: string) {
        return value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ")
            .trim();}

export function AutoTranslate() {
  useEffect(() => {
    const locale = getLocale();
    document.documentElement.lang = locale;
    if (locale === "es") return;

    const table = translations[locale];
    const translateText = (value: string) => table[normalize(value)] ?? value;
    const blocked = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"]);

    function translateElement(element: Element) {
      if (blocked.has(element.tagName)) return;

      for (const attribute of ["placeholder", "aria-label", "title", "alt"]) {
        const current = element.getAttribute(attribute);
        if (current) {
          const translated = translateText(current);
          if (translated !== current) element.setAttribute(attribute, translated);
        }
      }

      for (const node of Array.from(element.childNodes)) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          const current = node.textContent;
          const translated = translateText(current);
          if (translated !== current) node.textContent = current.replace(normalize(current), translated);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          translateElement(node as Element);
        }
      }
    }

    translateElement(document.body);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
