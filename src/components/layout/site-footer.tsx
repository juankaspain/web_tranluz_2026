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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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

/* ================================================================
   Trust badges – logos oficiales AENOR / NextGenerationEU / Kit Digital
   SVGs inline con contraste AAA garantizado.
   ================================================================ */
const trustBadges = [
  {
    label: "AENOR",
    sub: "Calidad certificada",
    href: "https://www.aenor.com",
    icon: (
      <svg viewBox="0 0 120 48" width="120" height="48" aria-label="AENOR - Calidad certificada" role="img" focusable="false">
        <rect width="120" height="48" rx="8" fill="#003087" />
        <text x="60" y="22" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="1">AENOR</text>
        <text x="60" y="38" textAnchor="middle" fill="#a8c4f0" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="0.5">ISO 9001 • CALIDAD</text>
      </svg>
    ),
  },
  {
    label: "NextGenerationEU",
    sub: "Plan de Recuperación",
    href: "https://next-generation-eu.europa.eu",
    icon: (
      <svg viewBox="0 0 120 48" width="120" height="48" aria-label="NextGenerationEU - Plan de Recuperación" role="img" focusable="false">
        <rect width="120" height="48" rx="8" fill="#003399" />
        {/* EU stars row */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const cx = 16 + Math.cos(angle) * 8;
          const cy = 24 + Math.sin(angle) * 8;
          return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#ffcc00" />;
        })}
        <text x="68" y="22" textAnchor="middle" fill="#ffcc00" fontSize="11" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="0.5">NextGeneration</text>
        <text x="68" y="36" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">EU</text>
      </svg>
    ),
  },
  {
    label: "Kit Digital",
    sub: "Agente digitalizador",
    href: "https://www.acelerapyme.gob.es/kit-digital",
    icon: (
      <svg viewBox="0 0 120 48" width="120" height="48" aria-label="Kit Digital - Agente digitalizador" role="img" focusable="false">
        <rect width="120" height="48" rx="8" fill="#0066cc" />
        <text x="60" y="22" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif" letterSpacing="1">KIT DIGITAL</text>
        <text x="60" y="38" textAnchor="middle" fill="#a8d4ff" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="0.5">AGENTE DIGITALIZADOR</text>
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      aria-label="Pie de página Tranluz"
      className="site-footer"
    >
      <div className="footer-inner">
        {/* Main footer grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <p className="footer-logo-name">{brand.name}</p>
            <p className="footer-tagline">
              Equipos, servicio técnico, alquiler, formación y trazabilidad para trabajos eléctricos y de telecomunicaciones.
            </p>

            {/* Redes sociales */}
            <div className="footer-social" role="list" aria-label="Redes sociales">
              {[
                { Icon: IconLinkedIn, href: brand.social?.linkedin ?? "https://linkedin.com", label: "LinkedIn" },
                { Icon: IconInstagram, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
                { Icon: IconYouTube, href: brand.social?.youtube ?? "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="footer-social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Badges de confianza */}
            <div
              className="footer-trust-badges"
              role="list"
              aria-label="Certificaciones y acreditaciones"
            >
              {trustBadges.map((b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className="footer-trust-badge"
                  aria-label={`${b.label}: ${b.sub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  {b.icon}
                  <span className="footer-trust-badge-text">
                    <strong>{b.label}</strong>
                    <span>{b.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <nav key={col.heading} aria-label={`${col.heading} navegación`}>
              <p className="footer-nav-heading">{col.heading}</p>
              <ul className="footer-nav-list" role="list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="footer-nav-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div>
            <p className="footer-nav-heading">Contacto</p>
            <address className="footer-address">
              <p>
                <MapPin size={14} aria-hidden="true" />
                Polígono Industrial Calonge – Calle Oro n.º 2, 41007 Sevilla
              </p>
              <p>
                <PhoneCall size={14} aria-hidden="true" />
                <a href={`tel:${brand.phone?.replace(/\s/g, "")}`} aria-label={`Llamar al ${brand.phone}`}>
                  {brand.phone}
                </a>
              </p>
              <p>
                <Mail size={14} aria-hidden="true" />
                <a href={`mailto:${brand.email}`} aria-label={`Enviar email a ${brand.email}`}>
                  {brand.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.
        </p>
        <nav aria-label="Legal">
          <ul className="footer-legal-links" role="list">
            {[
              { href: "/accesibilidad", label: "Accesibilidad" },
              { href: "/privacidad", label: "Privacidad" },
              { href: "/cookies", label: "Cookies" },
              { href: "/aviso-legal", label: "Aviso legal" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="footer-legal-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
