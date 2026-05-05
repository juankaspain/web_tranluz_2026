import React from "react";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

/* ------------------------------------------------------------------ */
/* Social icon SVGs                                                      */
/* ------------------------------------------------------------------ */
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-4.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
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
      { label: "Productos", href: "/productos" },
      { label: "Alquiler", href: "/alquiler" },
      { label: "Servicios", href: "/servicios" },
      { label: "Formacion", href: "/formacion" },
      { label: "Soluciones", href: "/soluciones" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Quienes somos", href: "/empresa" },
      { label: "Soporte", href: "/soporte" },
      { label: "Trabaja con nosotros", href: "/empresa#empleo" },
    ],
  },
];

const SOCIALS = [
  { Icon: LinkedInIcon, href: brand.social?.linkedin ?? "https://linkedin.com", label: "LinkedIn" },
  { Icon: InstagramIcon, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
  { Icon: YouTubeIcon, href: brand.social?.youtube ?? "https://youtube.com", label: "YouTube" },
];

const ACCREDITATIONS = [
  { src: "/images/Otros/Aenor_Logo.svg", alt: "AENOR", href: "https://www.aenor.com", w: 64, h: 32 },
  { src: "/images/Otros/Logos_Financiacion.png", alt: "Financiacion EU", href: "#", w: 160, h: 40 },
  { src: "/images/Otros/Moves_III_Logo.png", alt: "Programa MOVES III", href: "https://www.miteco.gob.es", w: 96, h: 40 },
];

const COPYRIGHT_YEAR = 2026;

/* ------------------------------------------------------------------ */
/* Styles                                                                */
/* ------------------------------------------------------------------ */
const S = {
  footer: {
    background: "linear-gradient(160deg, #0a1628 0%, #0d2444 40%, #0a3060 70%, #0d1f3c 100%)",
    color: "#94a3b8",
    fontFamily: "inherit",
    fontSize: "14px",
    lineHeight: "1.6",
    position: "relative" as const,
  } as React.CSSProperties,
  main: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "56px 32px 48px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
    gap: "48px",
  } as React.CSSProperties,
  brandLogo: {
    display: "block",
    marginBottom: "16px",
  } as React.CSSProperties,
  brandLogoImg: {
    height: "48px",
    width: "auto",
    objectFit: "contain" as const,
  } as React.CSSProperties,
  brandTagline: {
    fontSize: "13px",
    color: "#93b5d6",
    lineHeight: "1.7",
    marginBottom: "20px",
    maxWidth: "280px",
  } as React.CSSProperties,
  socials: {
    display: "flex",
    gap: "8px",
    marginBottom: "28px",
  } as React.CSSProperties,
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.10)",
    color: "#cbd5e1",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
  } as React.CSSProperties,
  accrSection: {
    marginTop: "8px",
  } as React.CSSProperties,
  accrLabel: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#f97316",
    marginBottom: "12px",
  } as React.CSSProperties,
  accrLogos: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  accrImg: {
    objectFit: "contain" as const,
    opacity: 0.85,
    filter: "brightness(0) invert(1)",
  } as React.CSSProperties,
  navHeading: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#e2e8f0",
    marginBottom: "16px",
    paddingBottom: "10px",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
  } as React.CSSProperties,
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
  } as React.CSSProperties,
  navLink: {
    color: "#93b5d6",
    textDecoration: "none",
    fontSize: "13.5px",
    display: "block",
  } as React.CSSProperties,
  contactRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "14px",
    fontSize: "13.5px",
    color: "#93b5d6",
  } as React.CSSProperties,
  contactIcon: {
    color: "#f97316",
    flexShrink: 0,
    marginTop: "2px",
  } as React.CSSProperties,
  contactLink: {
    color: "#93b5d6",
    textDecoration: "none",
  } as React.CSSProperties,
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(5,15,35,0.60)",
    padding: "16px 0",
  } as React.CSSProperties,
  bottomInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: "12px",
  } as React.CSSProperties,
  bottomCopy: {
    fontSize: "12px",
    color: "#64748b",
    margin: 0,
  } as React.CSSProperties,
  legalNav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  legalLink: {
    fontSize: "12px",
    color: "#64748b",
    textDecoration: "none",
  } as React.CSSProperties,
} as const;

/* ------------------------------------------------------------------ */
/* Component                                                             */
/* ------------------------------------------------------------------ */
export function SiteFooter() {
  const phoneHref = `tel:${brand.phone?.replace(/\s/g, "") ?? ""}`;
  return (
    <footer style={S.footer}>

      {/* Main grid */}
      <div style={S.main}>

        {/* Brand column */}
        <div>
          <Link href="/" style={S.brandLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.logoWhite ?? assets.logo}
              alt="Tranluz"
              style={S.brandLogoImg}
            />
          </Link>
          <p style={S.brandTagline}>
            Especialistas en maquinas y herramientas para montadores electricos desde{" "}
            <strong>{brand.founded}</strong>.<br />
            Servicio tecnico, alquiler, formacion y trazabilidad.
          </p>

          {/* Social icons */}
          <div style={S.socials}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} style={S.socialLink} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            ))}
          </div>

          {/* Accreditations */}
          <div style={S.accrSection}>
            <p style={S.accrLabel}>Certificaciones y acreditaciones</p>
            <div style={S.accrLogos}>
              {ACCREDITATIONS.map(({ src, alt, href, w, h }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} width={w} height={h} style={S.accrImg} />
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
            <MapPin size={16} style={S.contactIcon} />
            <span>
              Poligono Industrial Calonge<br />
              Calle Oro n. 2, 41007 Sevilla
            </span>
          </div>
          <div style={S.contactRow}>
            <PhoneCall size={16} style={S.contactIcon} />
            <a href={phoneHref} style={S.contactLink}>
              {brand.phone ?? "+34 954 367 290"}
            </a>
          </div>
          <div style={S.contactRow}>
            <Mail size={16} style={S.contactIcon} />
            <a href={`mailto:${brand.email ?? "info@tranluz.com"}`} style={S.contactLink}>
              {brand.email ?? "info@tranluz.com"}
            </a>
          </div>
        </div>

      </div>{/* /main grid */}

      {/* Bottom bar */}
      <div style={S.bottomBar}>
        <div style={S.bottomInner}>
          <p style={S.bottomCopy}>
            &copy; {COPYRIGHT_YEAR} Tranluz, S.L. &mdash; Todos los derechos reservados.
          </p>
          <nav style={S.legalNav}>
            {[
              { href: "/accesibilidad", label: "Accesibilidad" },
              { href: "/privacidad", label: "Privacidad" },
              { href: "/cookies", label: "Cookies" },
              { href: "/aviso-legal", label: "Aviso legal" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={S.legalLink}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
