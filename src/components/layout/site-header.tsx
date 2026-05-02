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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined}>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      {/* —— Topbar —— */}
      <div className="topbar">
        <span className="topbar-kicker">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          {brand.claim}
        </span>
        <span className="topbar-actions">
          <Link href="/soporte/catalogos">Catálogo 2025/2026</Link>
          <Link href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            <Phone size={13} aria-hidden="true" />
            {brand.phone}
          </Link>
        </span>
      </div>

      {/* —— Navbar —— */}
      <nav className="navbar" ref={navRef} aria-label="Navegación principal">
        {/* Logo */}
        <Link href="/" className="brand-mark" aria-label="Tranluz – inicio">
          <Image
            src={assets.logo}
            alt="Tranluz"
            width={104}
            height={27}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav">
          <ul className="main-nav" role="list">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMega === item.href;
              return (
                <li key={item.href} style={{ position: "relative" }}>
                  {hasChildren ? (
                    <>
                      <button
                        className="main-nav-btn"
                        style={{ display: "inline-flex", alignItems: "center", gap: "4px", border: 0, background: "transparent", cursor: "pointer", borderRadius: "999px", padding: "10px 7px", fontSize: "0.86rem", fontWeight: 760, color: "var(--text-muted)", whiteSpace: "nowrap" }}
                        aria-expanded={isOpen}
                        onClick={() => setOpenMega(isOpen ? null : item.href)}
                      >
                        {item.label}
                        <ChevronDown size={14} aria-hidden="true" style={{ transition: "transform 180ms", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      {isOpen && (
                        <ul
                          role="list"
                          style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, minWidth: "200px", border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", background: "var(--bg-elevated)", boxShadow: "var(--shadow)", padding: "8px", zIndex: 100, listStyle: "none", margin: 0 }}
                        >
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "var(--radius)", color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 720 }}
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
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>

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
        </div>

        {/* Acciones header */}
        <div className="header-actions">
          <ThemeToggle />
          <LanguageSelector />
          <Link href={`tel:${brand.phone.replaceAll(" ", "")}`} className="icon-button icon-button-link" aria-label="Llamar">
            <Phone size={17} aria-hidden="true" />
          </Link>
          <Link href="/presupuesto" className="button button-primary button-compact">
            Presupuesto
          </Link>

          {/* Botón hamburguesa móvil */}
          <button
            className="icon-button mobile-menu-btn"
            style={{ display: "none" }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* —— Mega-strip: accesos directos clave —— */}
      <nav className="mega-strip" aria-label="Accesos rápidos">
        {megaItems.map((mi) => (
          <Link key={mi.href} href={mi.href}>
            <span className="mega-icon" aria-hidden="true">{mi.icon}</span>
            <span>
              <strong>{mi.label}</strong>
              <small>{mi.sub}</small>
            </span>
          </Link>
        ))}
      </nav>

      {/* —— Menú móvil —— */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="mobile-menu-panel"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, background: "var(--bg-elevated)", padding: "24px", overflowY: "auto" }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
            <button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
              <X size={20} />
            </button>
          </div>
          <nav>
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ marginTop: "24px", display: "grid", gap: "8px" }}>
            {megaItems.map((mi) => (
              <Link
                key={mi.href}
                href={mi.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", border: "1px solid var(--line)", borderRadius: "var(--radius)", color: "var(--text-muted)" }}
              >
                <span className="mega-icon" aria-hidden="true">{mi.icon}</span>
                <span>
                  <strong style={{ display: "block" }}>{mi.label}</strong>
                  <small style={{ color: "var(--text-soft)" }}>{mi.sub}</small>
                </span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <LanguageSelector />
          </div>
        </div>
      )}
      {/* Overlay */}
      {mobileOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 199, background: "rgba(0,0,0,0.5)" }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
