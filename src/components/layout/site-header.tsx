"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  BookOpen,
  ChevronDown,
  FileDown,
  Layers,
  Menu,
  MapPin,
  Package,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation, utilityNavigation } from "@/config/navigation";

// Icono por href de ítem de navegación
const navIcon = (href: string) => {
  if (href.startsWith("/productos")) return <Package aria-hidden="true" size={18} />;
  if (href.startsWith("/servicios/its")) return <Wrench aria-hidden="true" size={18} />;
  if (href.startsWith("/servicios/revisa")) return <ShieldCheck aria-hidden="true" size={18} />;
  if (href.startsWith("/servicios")) return <Settings aria-hidden="true" size={18} />;
  if (href.startsWith("/alquiler")) return <Layers aria-hidden="true" size={18} />;
  if (href.startsWith("/formacion")) return <BookOpen aria-hidden="true" size={18} />;
  if (href.startsWith("/soluciones")) return <Zap aria-hidden="true" size={18} />;
  return <MapPin aria-hidden="true" size={18} />;
};

// Ítem de mega-strip: icon, label, sub
const megaItems = [
  { icon: <Wrench size={18} aria-hidden="true" />, label: "ITS Servicio T\u00e9cnico", sub: "Revisiones e informes", href: "/servicios/its-servicio-tecnico" },
  { icon: <ShieldCheck size={18} aria-hidden="true" />, label: "Revisa trazabilidad", sub: "Control y alertas", href: "/servicios/revisa-trazabilidad" },
  { icon: <Layers size={18} aria-hidden="true" />, label: "Rent Puller", sub: "Alquiler para obra", href: "/alquiler" },
  { icon: <BookOpen size={18} aria-hidden="true" />, label: "Formaci\u00f3n", sub: "Operadores y equipos", href: "/formacion" },
  { icon: <Package size={18} aria-hidden="true" />, label: "Cat\u00e1logo t\u00e9cnico", sub: "Productos y referencias", href: "/productos" },
  { icon: <MapPin size={18} aria-hidden="true" />, label: "Sevilla", sub: "Atenci\u00f3n t\u00e9cnica presencial", href: "/contacto" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const mobileMenuId = useId();
  const navRef = useRef<HTMLDivElement>(null);

  // Detectar scroll para shadow en navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar mega-menu al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Bloquear scroll del body al abrir men\u00fa m\u00f3vil
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      role="banner"
    >
      {/* \u2500\u2500 Topbar \u2500\u2500 */}
      <div className="topbar" aria-label="Barra de informaci\u00f3n r\u00e1pida">
        <span className="topbar-kicker">
          <ShieldCheck size={14} aria-hidden="true" />
          {brand.tagline}
        </span>
        <div className="topbar-actions">
          <a href="/soporte/catalogos">
            <FileDown size={14} aria-hidden="true" />
            Cat\u00e1logo 2025/2026
          </a>
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            <Phone size={14} aria-hidden="true" />
            {brand.phone}
          </a>
        </div>
      </div>

      {/* \u2500\u2500 Navbar \u2500\u2500 */}
      <div className="navbar" ref={navRef}>
        {/* Logo */}
        <Link className="brand-mark" href="/" aria-label="Tranluz inicio">
          <Image
            src={assets.logo}
            alt="Tranluz"
            width={104}
            height={27}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" aria-label="Navegaci\u00f3n principal">
          <ul className="main-nav" role="list">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMega === item.href;
              return (
                <li key={item.href} style={{ listStyle: "none", position: "relative" }}>
                  {hasChildren ? (
                    <>
                      <button
                        className="main-nav a"
                        style={{ background: "none", border: "none", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer", padding: "10px 7px", borderRadius: 999, fontSize: "0.86rem", fontWeight: 760, color: "var(--text-muted)", whiteSpace: "nowrap" }}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setOpenMega(isOpen ? null : item.href)}
                      >
                        {item.label}
                        <ChevronDown size={14} aria-hidden="true" style={{ transition: "transform 180ms", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            position: "absolute", top: "calc(100% + 8px)", left: 0,
                            minWidth: 220, border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
                            background: "var(--bg-elevated)", boxShadow: "var(--shadow)", padding: 8, zIndex: 100,
                          }}
                          role="menu"
                        >
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: "var(--radius)", color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: 750 }}
                              onClick={() => setOpenMega(null)}
                            >
                              {navIcon(child.href)}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link className="main-nav a" href={item.href} style={{ display: "inline-flex", alignItems: "center", padding: "10px 7px", borderRadius: 999, fontSize: "0.86rem", fontWeight: 760, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Buscador */}
        <div className="site-search" role="search">
          <Search size={16} aria-hidden="true" />
          <input
            type="search"
            placeholder="Buscar equipo\u2026"
            aria-label="Buscar equipo"
            autoComplete="off"
          />
        </div>

        {/* Acciones header */}
        <div className="header-actions">
          <ThemeToggle />
          <LanguageSelector />
          <a
            className="icon-button icon-button-link"
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
            aria-label={`Llamar a Tranluz: ${brand.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <Link
            className="button button-primary button-compact"
            href="/presupuesto"
          >
            Presupuesto
          </Link>

          {/* Bot\u00f3n hamburguesa m\u00f3vil */}
          <button
            className="icon-button mobile-menu"
            aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* \u2500\u2500 Mega-strip: accesos directos clave \u2500\u2500 */}
      <nav className="mega-strip" aria-label="Accesos r\u00e1pidos">
        {megaItems.map((mi) => (
          <Link key={mi.href} href={mi.href} className="mega-strip a">
            <span className="mega-icon">{mi.icon}</span>
            <span>
              <strong>{mi.label}</strong>
              <small>{mi.sub}</small>
            </span>
          </Link>
        ))}
      </nav>

      {/* \u2500\u2500 Men\u00fa m\u00f3vil \u2500\u2500 */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Men\u00fa de navegaci\u00f3n"
        >
          <nav aria-label="Navegaci\u00f3n m\u00f3vil">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-menu-panel a"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
            <LanguageSelector />
          </div>

          {/* Mega-strip info \u2013 sin Kit Digital */}
          <dl className="mobile-mega-strip" aria-label="Informaci\u00f3n de contacto r\u00e1pido" style={{ display: "grid", gap: 8, marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
            {megaItems.slice(0, 4).map((mi) => (
              <div key={mi.href} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, alignItems: "center" }}>
                <dt style={{ color: "var(--brand)" }}>{mi.icon}</dt>
                <dd style={{ margin: 0 }}>
                  <strong style={{ display: "block", fontSize: "0.88rem" }}>{mi.label}</strong>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{mi.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
