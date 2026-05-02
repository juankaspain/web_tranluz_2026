import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

// — Inline SVG icons for social media —
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
      { label: "Cat\u00e1logos", href: "/soporte" },
      { label: "Centro t\u00e9cnico", href: "/servicios/its-servicio-tecnico" },
      { label: "Presupuesto", href: "/presupuesto" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      aria-label="Pie de p\u00e1gina"
      style={{
        background: "var(--footer-bg, #0a0f1a)",
        color: "var(--footer-text, #e2e8f0)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "240px repeat(3, 1fr) 220px",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Brand column */}
        <div>
          <Link
            href="/"
            aria-label={`${brand.name} – Inicio`}
            style={{ display: "inline-block", marginBottom: "16px" }}
          >
            <img
              src="/tranluz-logo.svg"
              alt={brand.name}
              width={120}
              height={36}
              style={{ height: "36px", width: "auto" }}
            />
          </Link>
          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              marginBottom: "20px",
            }}
          >
            Equipos, servicio t\u00e9cnico, alquiler, formaci\u00f3n y trazabilidad para trabajos el\u00e9ctricos y de telecomunicaciones.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { Icon: IconLinkedIn, href: brand.social?.linkedin ?? "#", label: "LinkedIn" },
              { Icon: IconInstagram, href: brand.social?.instagram ?? "#", label: "Instagram" },
              { Icon: IconYouTube, href: brand.social?.youtube ?? "#", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tranluz en ${label}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.6)",
                  transition: "background 0.2s",
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <div key={col.heading}>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}
            >
              {col.heading}
            </h4>
            <ul role="list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.links.map((l) => (
                <li key={l.href} role="listitem">
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "16px",
            }}
          >
            Contacto
          </h4>
          <ul role="list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <li role="listitem" style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <MapPin size={15} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                Pol\u00edgono Industrial Calonge – Calle Oro n. 2, 41007 Sevilla
              </span>
            </li>
            <li role="listitem" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <PhoneCall size={15} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }} aria-hidden="true" />
              <a
                href={`tel:${brand.phone.replaceAll(" ", "")}`}
                style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                {brand.phone}
              </a>
            </li>
            <li role="listitem" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Mail size={15} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }} aria-hidden="true" />
              <a
                href={`mailto:${brand.email}`}
                style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust badges */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 500,
            }}
          >
            Confianza y cumplimiento – Calidad, financiaci\u00f3n europea, accesibilidad y criterios Kit Digital.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {/* AENOR badge */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius)",
                background: "#ffffff",
                padding: "6px 12px",
                minWidth: "90px",
                minHeight: "44px",
                gap: 2,
              }}
            >
              <span style={{ color: "#003DA5", fontWeight: 900, fontSize: "0.78rem", lineHeight: 1 }}>AENOR</span>
              <span style={{ color: "#888", fontWeight: 700, fontSize: "0.58rem", lineHeight: 1 }}>Calidad</span>
            </div>
            {/* NextGenerationEU badge */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius)",
                background: "#ffffff",
                padding: "6px 14px",
                minWidth: "100px",
                minHeight: "44px",
                gap: 2,
              }}
            >
              <span style={{ color: "#003DA5", fontWeight: 800, fontSize: "0.68rem", lineHeight: 1 }}>NextGenerationEU</span>
              <span style={{ color: "#888", fontWeight: 600, fontSize: "0.55rem", lineHeight: 1 }}>Plan de Recuperaci\u00f3n</span>
            </div>
            {/* Kit Digital badge */}
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius)",
                background: "#ffffff",
                padding: "6px 12px",
                minWidth: "80px",
                minHeight: "44px",
                gap: 2,
              }}
            >
              <span style={{ color: "#003DA5", fontWeight: 900, fontSize: "0.78rem", lineHeight: 1 }}>Kit Digital</span>
              <span style={{ color: "#888", fontWeight: 700, fontSize: "0.58rem", lineHeight: 1 }}>Agente Digitalizador</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            \u00a9 {new Date().getFullYear()} Tranluz, S.L. Todos los derechos reservados.
          </p>
          <nav aria-label="Navegaci\u00f3n legal" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { href: "/accesibilidad", label: "Accesibilidad" },
              { href: "/privacidad", label: "Privacidad" },
              { href: "/cookies", label: "Cookies" },
              { href: "/aviso-legal", label: "Aviso legal" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
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
