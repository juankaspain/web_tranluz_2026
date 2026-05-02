import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

// \u2500\u2500 Iconos SVG para RRSS (inline, sin dependencia externa) \u2500\u2500
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
      { label: "Formaci\u00f3n", href: "/formacion" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Qui\u00e9nes somos", href: "/empresa" },
      { label: "Partners", href: "/empresa#partners" },
      { label: "Trabaja con nosotros", href: "/empresa#empleo" },
      { label: "Blog t\u00e9cnico", href: "/blog" },
    ],
  },
  {
    heading: "Soporte",
    links: [
      { label: "Cat\u00e1logos", href: "/soporte/catalogos" },
      { label: "Centro t\u00e9cnico", href: "/soporte" },
      { label: "Presupuesto", href: "/presupuesto" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

// Logos de certificaci\u00f3n: solo los que tienen imagen v\u00e1lida
const certLogos = [
  {
    src: assets.footerLogo,
    alt: "Tranluz - Logo oficial",
    width: 120,
    height: 48,
  },
  {
    src: assets.footerFunding,
    alt: "Financiaci\u00f3n europea - Next Generation EU",
    width: 180,
    height: 48,
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">

      {/* \u2500\u2500 CTA Band \u2500\u2500 */}
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Respuesta profesional</p>
          <h2>Producto, alquiler, servicio t\u00e9cnico y formaci\u00f3n desde un \u00fanico partner.</h2>
        </div>
        <div className="footer-cta-actions">
          <Link className="button button-primary" href="/presupuesto">
            Solicitar presupuesto t\u00e9cnico
          </Link>
          <a
            className="button button-secondary"
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
          >
            <PhoneCall aria-hidden="true" size={18} />
            Hablar con Tranluz
          </a>
        </div>
      </div>

      {/* \u2500\u2500 Main Footer \u2500\u2500 */}
      <div className="footer-main">

        {/* Brand col */}
        <div className="footer-brand">
          <Image
            src={assets.footerLogo}
            alt="Tranluz \u2013 Especialistas en maquinaria el\u00e9ctrica desde 1987"
            width={176}
            height={56}
            className="footer-brand img"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
          <p>{brand.claim}</p>

          {/* RRSS */}
          <div className="social-links">
            <a
              href={brand.social.linkedin}
              aria-label="Tranluz en LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedIn />
            </a>
            <a
              href={brand.social.instagram}
              aria-label="Tranluz en Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram />
            </a>
            <a
              href={brand.social.youtube}
              aria-label="Tranluz en YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconYouTube />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <strong>{col.heading}</strong>
            {col.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ))}

        {/* Contacto col */}
        <address className="footer-contact">
          <strong>Contacto</strong>
          <span>
            <MapPin size={16} aria-hidden="true" />
            {brand.address}
          </span>
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            <PhoneCall size={16} aria-hidden="true" />
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`}>
            <Mail size={16} aria-hidden="true" />
            {brand.email}
          </a>
        </address>
      </div>

      {/* \u2500\u2500 Trust / Certificaciones \u2500\u2500 */}
      <div className="footer-trust">
        <div>
          <strong>Confianza y cumplimiento</strong>
          <p>Calidad, financiaci\u00f3n europea, accesibilidad, privacidad y criterios web para Kit Digital.</p>
        </div>
        <div className="footer-certifications">
          {certLogos.map((cert) => (
            <div
              key={cert.alt}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                background: "#ffffff",
                padding: 8,
                minWidth: 80,
                minHeight: 50,
              }}
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                style={{ objectFit: "contain", maxWidth: cert.width, height: "auto", maxHeight: 46 }}
                unoptimized
              />
            </div>
          ))}
          {/* Badge textual Kit Digital (sin imagen externa) */}
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius)",
              background: "#ffffff",
              padding: "8px 12px",
              minWidth: 80,
              minHeight: 50,
              gap: 2,
            }}
          >
            <span style={{ color: "#003DA5", fontWeight: 900, fontSize: "0.78rem", lineHeight: 1 }}>Kit Digital</span>
            <span style={{ color: "#888", fontWeight: 700, fontSize: "0.68rem", lineHeight: 1 }}>Agente Digitalizador</span>
          </div>
        </div>
      </div>

      {/* \u2500\u2500 Footer Bottom Bar \u2500\u2500 */}
      <div className="footer-bottom">
        <p>\u00a9 {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.</p>
        <nav aria-label="Navegaci\u00f3n legal">
          <Link href="/accesibilidad">Accesibilidad</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </nav>
      </div>
    </footer>
  );
}
