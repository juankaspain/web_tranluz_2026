import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

// — Inline SVG icons para redes sociales —
function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="20" height="20">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="20" height="20">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const footerNav = [
  {
    heading: "Plataforma",
    links: [
      { label: "Productos", href: "/productos" },
      { label: "Alquiler", href: "/alquiler" },
      { label: "Servicios", href: "/servicios" },
      { label: "Formación", href: "/formacion" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Quiénes somos", href: "/empresa" },
      { label: "Partners", href: "/empresa#partners" },
      { label: "Trabaja con nosotros", href: "/empresa#empleo" },
      { label: "Blog técnico", href: "/blog" },
    ],
  },
];

/* Trust badges – AENOR / NextGenerationEU / Kit Digital */
const trustBadges = [
  {
    label: "AENOR",
    sub: "Calidad certificada",
    href: "https://www.aenor.com",
    bg: "#003087",
    line2: "ISO 9001",
  },
  {
    label: "NextGen EU",
    sub: "Plan Recuperación",
    href: "https://next-generation-eu.europa.eu",
    bg: "#003399",
    line2: "NextGeneration",
  },
  {
    label: "Kit Digital",
    sub: "Agente digitalizador",
    href: "https://www.acelerapyme.gob.es/kit-digital",
    bg: "#0066cc",
    line2: "Gob. España",
  },
];

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      aria-label="Pie de página Tranluz"
      className="site-footer"
    >
      {/* Main footer grid */}
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 10px",
              fontFamily: "\"Archivo Variable\", sans-serif",
            }}
          >
            {brand.name}
          </p>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 20px" }}>
            Equipos, servicio técnico, alquiler, formación y trazabilidad para
            trabajos eléctricos y de telecomunicaciones.
          </p>

          {/* Redes sociales */}
          <div className="social-links" aria-label="Redes sociales">
            {[
              { Icon: IconLinkedIn, href: brand.social?.linkedin ?? "https://linkedin.com", label: "LinkedIn" },
              { Icon: IconInstagram, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
              { Icon: IconYouTube, href: brand.social?.youtube ?? "https://youtube.com", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: "rgba(238,243,245,0.1)",
                  color: "rgba(238,243,245,0.75)",
                  transition: "background 160ms ease, color 160ms ease",
                }}
              >
                <Icon />
              </Link>
            ))}
          </div>

          {/* Trust badges */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}
            aria-label="Certificaciones y acreditaciones"
          >
            {trustBadges.map((b) => (
              <Link
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${b.label}: ${b.sub}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: b.bg,
                    borderRadius: "6px",
                    padding: "6px 10px",
                    minWidth: "80px",
                    gap: "1px",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontFamily: "\"Arial Black\", Arial, sans-serif",
                      fontWeight: 900,
                      fontSize: "0.72rem",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.label}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.55rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.sub}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={`${col.heading} navegación`}>
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(238,243,245,0.45)",
                marginBottom: "14px",
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(238,243,245,0.7)",
                      textDecoration: "none",
                      transition: "color 160ms ease",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact column */}
        <div className="footer-contact">
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(238,243,245,0.45)",
              marginBottom: "14px",
            }}
          >
            Contacto
          </p>
          <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ display: "flex", alignItems: "flex-start", gap: "8px", margin: 0, fontSize: "0.88rem" }}>
              <MapPin size={14} aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px", color: "var(--brand)" }} />
              Polígono Industrial Calonge – Calle Oro n.º 2, 41007 Sevilla
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "8px", margin: 0, fontSize: "0.88rem" }}>
              <PhoneCall size={14} aria-hidden="true" style={{ flexShrink: 0, color: "var(--brand)" }} />
              <a
                href={`tel:${brand.phone?.replace(/\s/g, "")}`}
                aria-label={`Llamar al ${brand.phone}`}
                style={{ color: "rgba(238,243,245,0.7)", textDecoration: "none" }}
              >
                {brand.phone}
              </a>
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "8px", margin: 0, fontSize: "0.88rem" }}>
              <Mail size={14} aria-hidden="true" style={{ flexShrink: 0, color: "var(--brand)" }} />
              <a
                href={`mailto:${brand.email}`}
                aria-label={`Enviar email a ${brand.email}`}
                style={{ color: "rgba(238,243,245,0.7)", textDecoration: "none" }}
              >
                {brand.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.
        </p>
        <nav aria-label="Legal">
          {[
            { href: "/accesibilidad", label: "Accesibilidad" },
            { href: "/privacidad", label: "Privacidad" },
            { href: "/cookies", label: "Cookies" },
            { href: "/aviso-legal", label: "Aviso legal" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "rgba(238,243,245,0.55)", textDecoration: "none", fontSize: "0.82rem" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
