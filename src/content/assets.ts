/**
 * assets.ts – Rutas centralizadas de todos los recursos visuales.
 * Logo oficial: /images/Tranluz/Logo-Tranluz-PM.svg
 */

const SITE_URL = "https://www.tranluz.es";
const LOGO = "/images/Tranluz/Logo-Tranluz-PM.svg";

// ─── Imágenes AI provisionales (Pollinations.ai – seed fijo = reproducibles) ───
const aiImg = {
  hero:
    "https://image.pollinations.ai/prompt/professional%20electrician%20technician%20installing%20high%20voltage%20cable%20tower%20Spain%20photorealistic%20industrial%208k?width=1200&height=800&model=flux&nologo=true&seed=101",
  service:
    "https://image.pollinations.ai/prompt/electrical%20technician%20inspecting%20industrial%20equipment%20ITS%20service%20certification%20professional%20photorealistic%208k?width=1200&height=800&model=flux&nologo=true&seed=202",
  training:
    "https://image.pollinations.ai/prompt/professional%20electrical%20training%20workshop%20technicians%20learning%20equipment%20industrial%20Spain%20photorealistic%208k?width=1200&height=800&model=flux&nologo=true&seed=303",
  empresa:
    "https://image.pollinations.ai/prompt/professional%20electrical%20industrial%20company%20headquarters%20Spain%20technicians%20working%20electrical%20equipment%20B2B%20corporate%20photorealistic%208k?width=1200&height=800&model=flux&nologo=true&seed=42",
  ceo:
    "https://image.pollinations.ai/prompt/professional%20senior%20engineer%20executive%20portrait%20electrical%20company%20Spain%20industrial%20confident%20suit%20photorealistic%20corporate%208k?width=800&height=900&model=flux&nologo=true&seed=77",
  rental:
    "https://image.pollinations.ai/prompt/cable%20pulling%20machine%20rent%20puller%20electrical%20construction%20site%20Spain%20professional%20equipment%20photorealistic%208k?width=1200&height=800&model=flux&nologo=true&seed=404",
  catalog:
    "https://image.pollinations.ai/prompt/professional%20electrical%20equipment%20catalog%20products%20industrial%20tools%20B2B%20Spain%20photorealistic%208k?width=1200&height=600&model=flux&nologo=true&seed=505",
};

export const assets = {
  // ─── Logotipos – TODOS apuntan a Logo-Tranluz-PM.svg ─────────────────────
  logo:         LOGO,
  logoWhite:    LOGO,
  mark:         LOGO,
  logoAbsolute: `${SITE_URL}${LOGO}`,

  // ─── Footer ────────────────────────────────────────────────────
  footerLogo:    LOGO,
  footerFunding: `${SITE_URL}/images/Tranluz/logos-financiacion.webp`,
  footerMoves:   `${SITE_URL}/images/Tranluz/moves-iii-tranluz.webp`,

  // ─── OG / Social ──────────────────────────────────────────────────
  ogImage:          "/images/generated/tranluz-hero-ai.png",
  hero:             "/images/generated/tranluz-hero-ai.png",
  generatedHero:    "/images/generated/tranluz-hero-ai.png",
  generatedService: "/images/generated/tranluz-service-ai.png",
  generatedTraining:"/images/generated/tranluz-training-ai.png",

  // ─── Logos de terceros ──────────────────────────────────────────────
  signature:   `${SITE_URL}/images/Tranluz/Firma-Manuel-Ramos.svg`,
  quality:     `${SITE_URL}/images/Tranluz/AenorTranluz.svg`,
  itsLogo:     `${SITE_URL}/images/Tranluz/Logo_ITS_TRANLUZ.svg`,

  // ─── Personas ──────────────────────────────────────────────────────
  ceo: aiImg.ceo,

  // ─── Catálogo ────────────────────────────────────────────────────
  catalogBanner:     aiImg.catalog,
  presentationCover: aiImg.catalog,
  catalogUrl:        "/soporte/catalogos",

  // ─── Servicios ───────────────────────────────────────────────────
  its:           "/images/generated/tranluz-service-ai.png",
  itsTechnician: "/images/generated/tranluz-service-ai.png",
  revisa:         aiImg.service,

  // ─── Alquiler ────────────────────────────────────────────────────────
  rentPuller: aiImg.rental,

  // ─── Empresa ─────────────────────────────────────────────────────────
  empresa: aiImg.empresa,

  // ─── Formación ───────────────────────────────────────────────────────
  training:    "/images/generated/tranluz-training-ai.png",
  trainingOne: "/images/generated/tranluz-training-ai.png",
  trainingTwo:  aiImg.training,
  trainingLogo: `${SITE_URL}/images/Tranluz/logo-formate-tranluz.webp`,
};
