"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  BookOpen,
  ChevronDown,
  Layers,
  Menu,
  MapPin,
  Package,
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
import { mainNavigation } from "@/config/navigation";

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

const megaItems = [
  { icon: <Wrench size={18} aria-hidden="true" />, label: "ITS Servicio Técnico", sub: "Revisiones e informes", href: "/servicios/its-servicio-tecnico" },
  { icon: <ShieldCheck size={18} aria-hidden="true" />, label: "Revisa trazabilidad", sub: "Control y alertas", href: "/servicios/revisa-trazabilidad" },
  { icon: <Layers size={18} aria-hidden="true" />, label: "Rent Puller", sub: "Alquiler para obra", href: "/alquiler" },
  { icon: <BookOpen size={18} aria-hidden="true" />, label: "Formación", sub: "Operadores y equipos", href: "/formacion" },
  { icon: <Package size={18} aria-hidden="true" />, label: "Catálogo técnico", sub: "Productos y referencias", href: "/productos" },
  { icon: <MapPin size={18} aria-hidden="true" />, label: "Sevilla", sub: "Atención técnica presencial", href: "/contacto" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const mobileMenuId = useId();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      {/* Topbar */}
      <div className="topbar">
        <span className="topbar-claim">{brand.claim}</span>
        <nav className="topbar-actions" aria-label="Información de contacto">
          <span>Catálogo 2025/2026</span>
          <a href={`tel:${brand.phone}`}>{brand.phone}</a>
        </nav>
      </div>

      {/* Navbar principal */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="navbar" ref={navRef}>

          {/* Logo – limpio, sin pastilla ni contenedor decorativo */}
          <Link href="/" className="brand-mark" aria-label="Tranluz inicio">
            <Image
              src={assets.logo}
              alt="Tranluz"
              width={120}
              height={34}
              priority
              style={{ display: "block", objectFit: "contain" }}
              unoptimized
            />
          </Link>

          {/* Nav escritorio */}
          <nav className="main-nav desktop-nav" aria-label="Navegación principal">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMega === item.href;
              return (
                <div key={item.href} className="nav-item">
                  {hasChildren ? (
                    <>
                      <button
                        className="nav-btn"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpenMega(isOpen ? null : item.href)}
                      >
                        {item.label}
                        <ChevronDown size={14} aria-hidden="true" className={isOpen ? "chevron open" : "chevron"} />
                      </button>
                      {isOpen && (
                        <div className="nav-dropdown" role="menu">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="nav-dropdown-item"
                              role="menuitem"
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
                    <Link href={item.href} className="nav-link">{item.label}</Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Buscador */}
          <div className="site-search">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar equipo…"
              aria-label="Buscar equipo"
              autoComplete="off"
            />
          </div>

          {/* Acciones */}
          <div className="header-actions">
            <ThemeToggle />
            <LanguageSelector />
            <Link href="/presupuesto" className="btn-brand">Presupuesto</Link>
          </div>

          {/* Hamburguesa */}
          <button
            className="hamburger mobile-only"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        {/* Mega-strip */}
        <div className="mega-strip">
          {megaItems.map((mi) => (
            <Link key={mi.href} href={mi.href} className="mega-card">
              <span className="mega-card-icon">{mi.icon}</span>
              <span className="mega-card-body">
                <strong>{mi.label}</strong>
                <span>{mi.sub}</span>
              </span>
            </Link>
          ))}
        </div>
      </header>

      {/* Menú móvil */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <nav aria-label="Navegación móvil">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-mega-grid">
            {megaItems.map((mi) => (
              <Link
                key={mi.href}
                href={mi.href}
                className="mobile-mega-item"
                onClick={() => setMobileOpen(false)}
              >
                {mi.icon}
                <span>
                  <strong>{mi.label}</strong>
                  <span>{mi.sub}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* CTA móvil */}
          <div style={{ padding: "20px 16px 0", borderTop: "1px solid var(--border)" }}>
            <Link
              href="/presupuesto"
              className="btn-brand"
              style={{ display: "block", textAlign: "center", width: "100%" }}
              onClick={() => setMobileOpen(false)}
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      )}

      {/* Overlay móvil */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
