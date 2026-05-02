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

  // Bloquear scroll del body al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      {/* —— Topbar —— */}
      <div className="topbar">
        <span>{brand.claim}</span>
        <nav aria-label="Utilidades" className="topbar-nav">
          <a href={assets.catalogUrl} className="topbar-link">
            Catálogo 2025/2026
          </a>
          <a href={`tel:${brand.phone}`} className="topbar-link topbar-phone">
            {brand.phone}
          </a>
        </nav>
      </div>

      {/* —— Navbar —— */}
      <header
        ref={navRef}
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
        role="banner"
      >
        {/* Logo */}
        <Link href="/" aria-label="Tranluz – inicio" className="navbar-logo">
          <Image
            src={assets.logo}
            alt="Tranluz"
            width={120}
            height={36}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Principal" className="navbar-nav">
          {mainNavigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openMega === item.href;
            return (
              <div key={item.href} className="nav-item">
                {hasChildren ? (
                  <>
                    <button
                      className="nav-btn"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMega(isOpen ? null : item.href)}
                    >
                      {item.label}
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <ul className="mega-menu" role="menu">
                        {item.children!.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              role="menuitem"
                              className="mega-menu-item"
                              onClick={() => setOpenMega(null)}
                            >
                              {navIcon(child.href)}
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Buscador */}
        <form role="search" className="navbar-search">
          <Search size={16} aria-hidden="true" className="search-icon" />
          <input
            type="search"
            placeholder="Buscar equipo…"
            aria-label="Buscar equipo"
            autoComplete="off"
            className="search-input"
          />
        </form>

        {/* Acciones header */}
        <div className="navbar-actions">
          <ThemeToggle />
          <LanguageSelector />
          <a href="/presupuesto" className="btn-presupuesto">
            Presupuesto
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="hamburger"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls={mobileMenuId}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {/* —— Mega-strip: accesos directos clave —— */}
      <nav aria-label="Accesos rápidos" className="mega-strip">
        {megaItems.map((mi) => (
          <Link key={mi.href} href={mi.href} className="mega-strip-item">
            {mi.icon}
            <span>
              <strong>{mi.label}</strong>
              <span>{mi.sub}</span>
            </span>
          </Link>
        ))}
      </nav>

      {/* —— Menú móvil —— */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            <X aria-hidden="true" />
          </button>
          <nav aria-label="Menú móvil principal">
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
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", color: "var(--text-muted)" }}
              >
                {mi.icon}
                <span>
                  <strong>{mi.label}</strong>
                  <span>{mi.sub}</span>
                </span>
              </Link>
            ))}
          </div>
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
    </>
  );
}
