/**
 * assets.ts – Rutas centralizadas de todos los recursos visuales.
 * ITER-2: Se reemplazan los formatos legacy (jpg, gif, png cachadas)
 * por versiones WebP/AVIF generadas y rutas limpias para mejorar
 * el Core Web Vitals (LCP, CLS) y reducir el payload de red.
 */

const baseUrl = "https://www.tranluz.es";

export const assets = {
  // ─── Imágenes generadas (WebP/AVIF – optimizadas por IA) ──────────
  generatedHero:     "/images/generated/tranluz-hero-ai.webp",
  generatedService:  "/images/generated/tranluz-service-ai.webp",
  generatedTraining: "/images/generated/tranluz-training-ai.webp",

  // ─── OG / Social ─────────────────────────────────────────────────
  ogImage: "/images/generated/tranluz-hero-ai.webp",

  // ─── Logotipos (SVG nativo – vector, peso mínimo) ──────────────
  logo:      `${baseUrl}/images/Tranluz/Logo-Tranluz-PM.svg`,
  mark:      `${baseUrl}/images/Tranluz/Logo-Tranluz.svg`,
  signature: `${baseUrl}/images/Tranluz/Firma-Manuel-Ramos.svg`,
  quality:   `${baseUrl}/images/Tranluz/AenorTranluz.svg`,
  itsLogo:   `${baseUrl}/images/Tranluz/Logo_ITS_TRANLUZ.svg`,

  // ─── Hero ─────────────────────────────────────────────────────────
  hero: "/images/generated/tranluz-hero-ai.webp",

  // ─── Footer ──────────────────────────────────────────────────────
  // ANTES: Logo-Tranluz-P-2dae6ecf.png  → sustituido por SVG
  footerLogo: `${baseUrl}/images/Tranluz/Logo-Tranluz-PM.svg`,

  // ANTES: Logos-Financiacion-32c7e87a.png  → WebP equivalente
  footerFunding: `${baseUrl}/images/Tranluz/logos-financiacion.webp`,

  // ANTES: moves_iii_Tranluz.png  → WebP equivalente
  footerMoves: `${baseUrl}/images/Tranluz/moves-iii-tranluz.webp`,

  // ─── Personas ────────────────────────────────────────────────────
  // ANTES: Manuel-Ramos-Tranluz.jpg  → WebP con compr. sin pérdida
  ceo: `${baseUrl}/images/Tranluz/manuel-ramos-tranluz.webp`,

  // ─── Catálogo ──────────────────────────────────────────────────
  // ANTES: Banner-Catalogo-Tranluz-eef137dd.gif  → WebP estático
  catalogBanner: `${baseUrl}/images/Tranluz/banner-catalogo-tranluz.webp`,

  // ANTES: Tranluz-Presentación-2021-Portada-Esp-ac914674.jpg  → WebP
  presentationCover: `${baseUrl}/images/Tranluz/tranluz-presentacion-portada.webp`,

  // ─── Servicios ───────────────────────────────────────────────────
  its:          "/images/generated/tranluz-service-ai.webp",
  itsTechnician: "/images/generated/tranluz-service-ai.webp",

  // ANTES: TRANLUZ_revisa-1d464521.jpg  → WebP
  revisa: `${baseUrl}/images/Tranluz/tranluz-revisa.webp`,

  rentPuller: "/images/generated/tranluz-hero-ai.webp",

  // ─── Formación ───────────────────────────────────────────────────
  training:     "/images/generated/tranluz-training-ai.webp",
  trainingOne:  "/images/generated/tranluz-training-ai.webp",

  // ANTES: forma-2.jpg  → WebP
  trainingTwo: `${baseUrl}/images/Tranluz/tranluz-formacion.webp`,

  // ANTES: Logo_Formate_Tranluz-9a46c893.png  → WebP
  trainingLogo: `${baseUrl}/images/Tranluz/logo-formate-tranluz.webp`,
  
  // — Catálogo PDF URL
  catalogUrl: "/soporte/catalogos",
};
