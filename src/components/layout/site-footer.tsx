import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

// ── Iconos SVG modernos para RRSS (inline, sin dependencia externa) ──
function IconLinkedIn({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function IconYouTube({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
    >
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
      { label: "Empresa", href: "/empresa" },
    ],
  },
  {
    heading: "Soporte",
    links: [
      { label: "Catálogos", href: "/soporte/catalogos" },
      { label: "Centro técnico", href: "/soporte" },
      { label: "Presupuesto", href: "/presupuesto" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Accesibilidad", href: "/accesibilidad" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
      { label: "Aviso legal", href: "/aviso-legal" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Pie de página Tranluz">

      {/* ── CTA Band ── */}
      <section
        className="footer-cta"
        aria-labelledby="footer-cta-heading"
      >
        <div className="footer-cta-inner">
          <div>
            <p className="eyebrow" aria-hidden="true">Respuesta profesional</p>
            <h2 id="footer-cta-heading">
              Producto, alquiler, servicio técnico y formación desde un único partner.
            </h2>
          </div>
          <div className="footer-cta-actions" role="group" aria-label="Acciones de contacto">
            <Link
              className="button button-primary"
              href="/presupuesto"
              aria-label="Solicitar presupuesto técnico a Tranluz"
            >
              Solicitar presupuesto técnico
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              className="button button-secondary"
              href={`tel:${brand.phone.replaceAll(" ", "")}`}
              aria-label={`Llamar a Tranluz al ${brand.phone}`}
            >
              Hablar con Tranluz
              <PhoneCall aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Footer ── */}
      <div className="footer-main" role="navigation" aria-label="Navegación del pie de página">

        {/* Brand col */}
        <div className="footer-brand">
          <Link href="/" aria-label="Tranluz – Inicio">
            <Image
              src={assets.footerLogo}
              alt="Tranluz – Especialistas en maquinaria eléctrica desde 1987"
              width={176}
              height={54}
              loading="lazy"
              decoding="async"
              className="footer-logo"
            />
          </Link>
          <p className="footer-claim">{brand.claim}</p>

          {/* RRSS con iconos SVG modernos */}
          <div className="social-links" role="list" aria-label="Redes sociales de Tranluz">
            <div role="listitem">
              <a
                href={brand.social.linkedin}
                aria-label="Tranluz en LinkedIn (abre en nueva pestaña)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <IconLinkedIn />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div role="listitem">
              <a
                href={brand.social.instagram}
                aria-label="Tranluz en Instagram (abre en nueva pestaña)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <IconInstagram />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <div role="listitem">
              <a
                href={brand.social.youtube}
                aria-label="Tranluz en YouTube (abre en nueva pestaña)"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <IconYouTube />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={`Footer ${col.heading}`}>
            <strong className="footer-nav-heading" id={`footer-nav-${col.heading.toLowerCase()}`}>
              {col.heading}
            </strong>
            <ul
              role="list"
              aria-labelledby={`footer-nav-${col.heading.toLowerCase()}`}
            >
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contacto col */}
        <address className="footer-contact" aria-label="Información de contacto">
          <strong className="footer-nav-heading">Contacto</strong>
          <ul role="list">
            <li>
              <MapPin aria-hidden="true" size={15} className="footer-contact-icon" />
              <span>{brand.address}</span>
            </li>
            <li>
              <PhoneCall aria-hidden="true" size={15} className="footer-contact-icon" />
              <a
                href={`tel:${brand.phone.replaceAll(" ", "")}`}
                aria-label={`Teléfono: ${brand.phone}`}
                className="footer-contact-link"
              >
                {brand.phone}
              </a>
            </li>
            <li>
              <Mail aria-hidden="true" size={15} className="footer-contact-icon" />
              <a
                href={`mailto:${brand.email}`}
                aria-label={`Correo electrónico: ${brand.email}`}
                className="footer-contact-link"
              >
                {brand.email}
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* ── Footer Bottom Bar ── */}
      <div className="footer-bottom" role="contentinfo">
        <p className="footer-copy">
          <small>
            &copy; {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.
          </small>
        </p>
        <nav aria-label="Navegación legal" className="footer-legal-nav">
          <ul role="list">
            <li><Link href="/accesibilidad" className="footer-legal-link">Accesibilidad</Link></li>
            <li><Link href="/privacidad" className="footer-legal-link">Privacidad</Link></li>
            <li><Link href="/cookies" className="footer-legal-link">Cookies</Link></li>
            <li><Link href="/aviso-legal" className="footer-legal-link">Aviso legal</Link></li>
          </ul>
        </nav>
      </div>

    </footer>
  );
}
