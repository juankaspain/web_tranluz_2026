import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";
import { assets } from "@/content/assets";

// ─── Social SVG Icons ─────────────────────────────────────────────────────────
function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-4.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-4.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" width="18" height="18">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
const footerNav = [
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
      { label: "Quiénes somos",       href: "/empresa" },
      { label: "Kit Digital",          href: "/kit-digital" },
      { label: "Soporte",              href: "/soporte" },
      { label: "Trabaja con nosotros", href: "/empresa#empleo" },
    ],
  },
];

const socials = [
  { Icon: IconLinkedIn,  href: brand.social?.linkedin  ?? "https://linkedin.com",  label: "LinkedIn" },
  { Icon: IconInstagram, href: brand.social?.instagram ?? "https://instagram.com", label: "Instagram" },
  { Icon: IconYouTube,   href: brand.social?.youtube   ?? "https://youtube.com",   label: "YouTube" },
];

// ─── Accreditations ───────────────────────────────────────────────────────────
const accreditations = [
  {
    src: "/images/Otros/Aenor_Logo.svg",
    alt: "AENOR – Certificación de calidad",
    href: "https://www.aenor.com",
    width: 80,
    height: 40,
  },
  {
    src: "/images/Otros/Logos_Financiacion.png",
    alt: "Logos de financiación europea",
    href: "#",
    width: 180,
    height: 44,
  },
  {
    src: "/images/Otros/Moves_III_Logo.png",
    alt: "Programa MOVES III",
    href: "https://www.miteco.gob.es/es/ministerio/planes-estrategias/moves-iii.html",
    width: 110,
    height: 44,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Pie de página">

      {/* ── Accreditations bar ── */}
      <div className="footer-accreditations">
        <div className="footer-accreditations__inner">
          <span className="footer-accreditations__label">Certificaciones y acreditaciones</span>
          <div className="footer-accreditations__logos">
            {accreditations.map(({ src, alt, href, width, height }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="footer-accreditations__logo-link"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} width={width} height={height} loading="lazy" className="footer-accreditations__logo-img" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="footer-main">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" aria-label="Tranluz – inicio" className="footer-brand__logo-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.logo}
                alt="Tranluz"
                width={160}
                height={52}
                className="footer-brand__logo"
                loading="lazy"
              />
            </Link>
            <p className="footer-brand__tagline">
              Especialistas en máquinas y herramientas para montadores eléctricos desde{" "}
              <strong>{brand.founded}</strong>. Servicio técnico, alquiler, formación y trazabilidad.
            </p>
            <div className="footer-brand__socials">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-brand__social-link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading} className="footer-nav-col">
              <h3 className="footer-nav-col__heading">{col.heading}</h3>
              <ul className="footer-nav-col__list">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-nav-col__link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer-contact">
            <h3 className="footer-contact__heading">Contacto</h3>
            <address className="footer-contact__address">
              <div className="footer-contact__row">
                <MapPin size={15} aria-hidden="true" />
                <span>Polígono Industrial Calonge<br />Calle Oro n.º 2, 41007 Sevilla</span>
              </div>
              <div className="footer-contact__row">
                <PhoneCall size={15} aria-hidden="true" />
                <a href={`tel:${brand.phone?.replace(/\s/g, "")}`} className="footer-contact__link">
                  {brand.phone}
                </a>
              </div>
              <div className="footer-contact__row">
                <Mail size={15} aria-hidden="true" />
                <a href={`mailto:${brand.email}`} className="footer-contact__link">
                  {brand.email}
                </a>
              </div>
            </address>
          </div>

        </div>{/* /footer-grid */}
      </div>{/* /footer-main */}

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <p className="footer-bottom__copy">
            &copy; {new Date().getFullYear()} Tranluz, S.L. — Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="footer-bottom__legal">
            {[
              { href: "/accesibilidad", label: "Accesibilidad" },
              { href: "/privacidad",    label: "Privacidad" },
              { href: "/cookies",       label: "Cookies" },
              { href: "/aviso-legal",   label: "Aviso legal" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-bottom__legal-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
}
