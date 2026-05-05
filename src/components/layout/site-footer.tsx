"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

/* ------------------------------------------------------------------ */
/* Social SVGs                                                           */
/* ------------------------------------------------------------------ */
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-4.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */
const NAV_COLS = [
  {
    heading: "Plataforma",
    links: [
      { label: "Productos",  href: "/productos" },
      { label: "Alquiler",   href: "/alquiler" },
      { label: "Servicios",  href: "/servicios" },
      { label: "Formación",  href: "/formacion" },
      { label: "Soluciones", href: "/soluciones" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Quiénes somos",        href: "/empresa" },
      { label: "Soporte",              href: "/soporte" },
      { label: "Trabaja con nosotros", href: "/empresa#empleo" },
    ],
  },
];

const SOCIALS = [
  { Icon: LinkedInIcon,  href: brand.social?.linkedin  ?? "https://linkedin.com",  label: "LinkedIn" },
  { Icon: InstagramIcon, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
  { Icon: YouTubeIcon,   href: brand.social?.youtube   ?? "https://youtube.com",   label: "YouTube" },
];

/**
 * Logos de certificaciones — todos con mix-blend-mode: screen + opacity
 * para que sean visibles sobre el fondo oscuro sin filtros agresivos.
 * Los PNG con fondo blanco se fusionan naturalmente con el fondo oscuro
 * mediante screen (blanco×oscuro → colores del logo).
 */
const ACCREDITATIONS: {
  src: string; alt: string; href: string; w: number; h: number;
}[] = [
  { src: "/images/Otros/Aenor_Logo.svg",        alt: "AENOR",             href: "https://www.aenor.com",       w: 80,  h: 40 },
  { src: "/images/Otros/Logos_Financiacion.png", alt: "Financiación EU",   href: "#",                          w: 160, h: 44 },
  { src: "/images/Otros/Moves_III_Logo.png",     alt: "Programa MOVES III", href: "https://www.miteco.gob.es", w: 96,  h: 40 },
];

const COPYRIGHT_YEAR = 2026;

/* ------------------------------------------------------------------ */
/* Design tokens — footer-scoped                                        */
/* ------------------------------------------------------------------ */
const T = {
  bg:           "#0f1923",
  surface:      "#162130",
  divider:      "rgba(255,255,255,0.07)",
  textPrimary:  "#e8edf2",
  textMuted:    "#7a92a8",
  textFaint:    "#4a6070",
  accent:       "#f97316",
  accentHover:  "#fb923c",
} as const;

const S = {
  footer: {
    background: T.bg,
    color: T.textMuted,
    fontFamily: "inherit",
    fontSize: "14px",
    lineHeight: "1.6",
  } as React.CSSProperties,
  topStripe: {
    height: "3px",
    background: `linear-gradient(90deg, ${T.accent} 0%, #fb923c 60%, transparent 100%)`,
  } as React.CSSProperties,
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "56px 32px 48px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
    gap: "48px",
  } as React.CSSProperties,
  brandLogo: { display: "block", marginBottom: "20px" } as React.CSSProperties,
  brandLogoImg: { height: "44px", width: "auto", objectFit: "contain" as const } as React.CSSProperties,
  brandTagline: {
    fontSize: "13px",
    color: T.textMuted,
    lineHeight: "1.75",
    marginBottom: "24px",
    maxWidth: "270px",
  } as React.CSSProperties,
  socials: { display: "flex", gap: "8px", marginBottom: "32px" } as React.CSSProperties,
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${T.divider}`,
    color: T.textMuted,
    textDecoration: "none",
    transition: "background 180ms ease, color 180ms ease, border-color 180ms ease",
  } as React.CSSProperties,
  socialLinkHover: {
    background: `rgba(249,115,22,0.15)`,
    borderColor: `rgba(249,115,22,0.35)`,
    color: T.accent,
  } as React.CSSProperties,
  accrSection: { marginTop: "4px" } as React.CSSProperties,
  accrLabel: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: T.accent,
    marginBottom: "12px",
  } as React.CSSProperties,
  accrLogos: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  /* mix-blend-mode: screen hace visibles los logos sobre fondo oscuro.
     Los SVG/PNG con fondo blanco se fusionan con el background:
     blanco × oscuro → colores del logo. opacity 0.80 da presencia
     sin dominar sobre el contenido principal del footer. */
  accrImg: {
    objectFit: "contain" as const,
    display: "block",
    opacity: 0.80,
    mixBlendMode: "screen" as const,
  } as React.CSSProperties,
  navHeading: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: T.textPrimary,
    marginBottom: "16px",
    paddingBottom: "10px",
    borderBottom: `1px solid ${T.divider}`,
  } as React.CSSProperties,
  navList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "9px" } as React.CSSProperties,
  navLink: { color: T.textMuted, textDecoration: "none", fontSize: "13.5px", display: "block", transition: "color 150ms ease" } as React.CSSProperties,
  contactRow: {
    display: "flex", alignItems: "flex-start", gap: "10px",
    marginBottom: "14px", fontSize: "13.5px", color: T.textMuted,
  } as React.CSSProperties,
  contactIcon: { color: T.accent, flexShrink: 0, marginTop: "3px" } as React.CSSProperties,
  contactLink: { color: T.textMuted, textDecoration: "none" } as React.CSSProperties,
  bottomBar: {
    borderTop: `1px solid ${T.divider}`,
    background: "rgba(0,0,0,0.25)",
    padding: "14px 0",
  } as React.CSSProperties,
  bottomInner: {
    maxWidth: "1200px", margin: "0 auto", padding: "0 32px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap" as const, gap: "12px",
  } as React.CSSProperties,
  bottomCopy: { fontSize: "12px", color: T.textFaint, margin: 0 } as React.CSSProperties,
  legalNav: { display: "flex", gap: "20px", flexWrap: "wrap" as const } as React.CSSProperties,
  legalLink: { fontSize: "12px", color: T.textFaint, textDecoration: "none" } as React.CSSProperties,
} as const;

/* ------------------------------------------------------------------ */
/* SocialButton — necesita useState para el hover, requiere "use client" */
/* ------------------------------------------------------------------ */
function SocialButton({ Icon, href, label }: { Icon: React.FC; href: string; label: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      style={{ ...S.socialLink, ...(hovered ? S.socialLinkHover : {}) }}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* SiteFooter                                                            */
/* ------------------------------------------------------------------ */
export function SiteFooter() {
  const phoneHref = `tel:${brand.phone?.replace(/\s/g, "") ?? ""}`;

  return (
    <footer style={S.footer}>
      {/* Franja naranja superior */}
      <div style={S.topStripe} aria-hidden="true" />

      <div style={S.main}>

        {/* Brand column */}
        <div>
          <Link href="/" style={S.brandLogo} aria-label="Tranluz — inicio">
            <img src={assets.logoWhite ?? assets.logo} alt="Tranluz" style={S.brandLogoImg} />
          </Link>
          <p style={S.brandTagline}>
            Especialistas en máquinas y herramientas para montadores
            eléctricos desde <strong style={{ color: T.textPrimary }}>{brand.founded}</strong>.
            <br />
            Servicio técnico, alquiler, formación y trazabilidad.
          </p>
          <div style={S.socials}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <SocialButton key={label} Icon={Icon} href={href} label={label} />
            ))}
          </div>
          <div style={S.accrSection}>
            <p style={S.accrLabel}>Certificaciones y acreditaciones</p>
            <div style={S.accrLogos}>
              {ACCREDITATIONS.map(({ src, alt, href, w, h }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={alt}
                  style={{ lineHeight: 0 }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    style={S.accrImg}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Nav columns */}
        {NAV_COLS.map((col) => (
          <div key={col.heading}>
            <p style={S.navHeading}>{col.heading}</p>
            <ul style={S.navList}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={S.navLink}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <p style={S.navHeading}>Contacto</p>
          <div style={S.contactRow}>
            <MapPin size={15} style={S.contactIcon} />
            <span>
              Polígono Industrial Calonge<br />
              Calle Oro n.º 2, 41007 Sevilla
            </span>
          </div>
          <div style={S.contactRow}>
            <Phone size={15} style={S.contactIcon} />
            <a href={phoneHref} style={S.contactLink}>
              {brand.phone ?? "+34 954 367 290"}
            </a>
          </div>
          <div style={S.contactRow}>
            <Mail size={15} style={S.contactIcon} />
            <a href={`mailto:${brand.email ?? "info@tranluz.com"}`} style={S.contactLink}>
              {brand.email ?? "info@tranluz.com"}
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={S.bottomBar}>
        <div style={S.bottomInner}>
          <p style={S.bottomCopy}>
            &copy; {COPYRIGHT_YEAR} Tranluz, S.L. &mdash; Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" style={S.legalNav}>
            {[
              { href: "/accesibilidad", label: "Accesibilidad" },
              { href: "/privacidad",    label: "Privacidad" },
              { href: "/cookies",       label: "Cookies" },
              { href: "/aviso-legal",   label: "Aviso legal" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={S.legalLink}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
