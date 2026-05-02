import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

// — Inline SVG icons para redes sociales —
function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" width="20" height="20">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function IconYouTube({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" width="20" height="20">
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
  {
    heading: "Soporte",
    links: [
      { label: "Catálogos", href: "/soporte" },
      { label: "Centro técnico", href: "/servicios/its-servicio-tecnico" },
      { label: "Presupuesto", href: "/presupuesto" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

const trustBadges = [
  {
    label: "AENOR",
    sub: "Calidad certificada",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#003087" />
        <text x="20" y="26" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">AE</text>
      </svg>
    ),
  },
  {
    label: "NextGenerationEU",
    sub: "Plan de Recuperación",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#003399" />
        <text x="20" y="24" textAnchor="middle" fill="#ffcc00" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EU</text>
        <text x="20" y="34" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">NextGen</text>
      </svg>
    ),
  },
  {
    label: "Kit Digital",
    sub: "Agente digitalizador",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <rect width="40" height="40" rx="6" fill="#0066cc" />
        <text x="20" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">KD</text>
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      {/* Main footer grid */}
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <strong style={{ fontSize: "1.15rem", color: "#ffffff", letterSpacing: "0.02em" }}>
            {brand.name}
          </strong>
          <p style={{ marginTop: "10px" }}>
            Equipos, servicio técnico, alquiler, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones.
          </p>

          {/* Redes sociales */}
          <div className="social-links" aria-label="Redes sociales">
            {[
              { Icon: IconLinkedIn, href: brand.social?.linkedin ?? "https://linkedin.com", label: "LinkedIn" },
              { Icon: IconInstagram, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
              { Icon: IconYouTube, href: brand.social?.youtube ?? "https://youtube.com", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <Link key={label} href={href} aria-label={`Tranluz en ${label}`} target="_blank" rel="noopener noreferrer">
                <Icon />
              </Link>
            ))}
          </div>

          {/* Badges de confianza */}
          <div className="footer-certifications" aria-label="Certificaciones y programas">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(238,243,245,0.16)",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.07)",
                  padding: "8px 12px",
                }}
                title={b.sub}
              >
                {b.icon}
                <div style={{ lineHeight: 1.3 }}>
                  <strong style={{ display: "block", fontSize: "0.78rem", color: "#ffffff" }}>{b.label}</strong>
                  <span style={{ fontSize: "0.68rem", color: "rgba(238,243,245,0.6)" }}>{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <nav key={col.heading}>
            <strong>{col.heading}</strong>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
        ))}

        {/* Contact column */}
        <div className="footer-contact">
          <strong>Contacto</strong>
          <address>
            <span>
              <MapPin size={16} aria-hidden="true" />
              Polígono Industrial Calonge – Calle Oro n.º 2, 41007 Sevilla
            </span>
            <Link href={`tel:${brand.phone.replaceAll(" ", "")}`}>
              <PhoneCall size={16} aria-hidden="true" />
              {brand.phone}
            </Link>
            <Link href={`mailto:${brand.email}`}>
              <Mail size={16} aria-hidden="true" />
              {brand.email}
            </Link>
          </address>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.
        </span>
        <nav aria-label="Legal">
          {[
            { href: "/accesibilidad", label: "Accesibilidad" },
            { href: "/privacidad", label: "Privacidad" },
            { href: "/cookies", label: "Cookies" },
            { href: "/aviso-legal", label: "Aviso legal" },
          ].map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
