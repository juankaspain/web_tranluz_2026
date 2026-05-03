"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  BookOpen,
  ChevronDown,
  Layers,
  Mail,
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
  const [phoneVisible, setPhoneVisible] = useState(false);
  const mobileMenuId = useId();
  const navRef = useRef<HTMLElement>(null);

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

  const phoneHref = `tel:${brand.phone?.replace(/\s/g, "")}`;
  const phoneDisplay = brand.phone ?? "+34 954 367 290";

  return (
    <>
      {/* Topbar */}
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} ref={navRef}>
        <div className="topbar">
          <span className="topbar-kicker">
            <Zap size={14} aria-hidden="true" />
            {brand.claim}
          </span>
          <nav className="topbar-actions" aria-label="Acciones r\u00e1pidas">
            <span>\u00b7 Cat\u00e1logo 2026</span>
            <a href={phoneHref}>{phoneDisplay}</a>
          </nav>
        </div>

        <nav className="navbar" aria-label="Navegaci\u00f3n principal">
          {/* Logo */}
          <Link href="/" className="brand-mark" aria-label="Tranluz - Inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.logo} alt="Tranluz" width={104} height={27} />
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
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          onClick={() => setOpenMega(isOpen ? null : item.href)}
                        >
                          {item.label}
                          <ChevronDown size={14} aria-hidden="true" style={{ transition: "transform 200ms", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </button>
                        {isOpen && (
                          <ul className="mega-dropdown-list" role="list">
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link href={child.href} onClick={() => setOpenMega(null)}>
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

            {/* Search */}
            <div className="site-search" role="search">
              <Search size={16} aria-hidden="true" />
              <input type="search" placeholder="Buscar equipo\u2026" aria-label="Buscar equipo" autoComplete="off" />
            </div>
          </div>

          {/* Header actions */}
          <div className="header-actions">
            <ThemeToggle />
            <LanguageSelector />

            {/* Icono tel\u00e9fono con tooltip */}
            <div className="contact-icon-wrap" onMouseEnter={() => setPhoneVisible(true)} onMouseLeave={() => setPhoneVisible(false)}>
              <a
                href={phoneHref}
                className="icon-button icon-button-link contact-icon-phone"
                aria-label={`Llamar a Tranluz: ${phoneDisplay}`}
                title={phoneDisplay}
              >
                <Phone size={18} aria-hidden="true" />
              </a>
              {phoneVisible && (
                <div className="contact-tooltip" role="tooltip">
                  <Phone size={13} aria-hidden="true" />
                  <span>{phoneDisplay}</span>
                </div>
              )}
            </div>

            {/* Icono email \u2192 formulario de presupuesto */}
            <Link
              href="/presupuesto"
              className="icon-button icon-button-link contact-icon-email"
              aria-label="Solicitar presupuesto por email"
              title="Solicitar presupuesto"
            >
              <Mail size={18} aria-hidden="true" />
            </Link>

            {/* Bot\u00f3n men\u00fa m\u00f3vil */}
            <button
              className="icon-button mobile-menu-toggle"
              aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mega strip */}
        <div className="mega-strip" aria-label="Acceso r\u00e1pido a servicios">
          {megaItems.map((mi) => (
            <Link key={mi.href} href={mi.href}>
              <span className="mega-icon" aria-hidden="true">{mi.icon}</span>
              <span>
                <strong>{mi.label}</strong>
                <small>{mi.sub}</small>
              </span>
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="mobile-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Men\u00fa de navegaci\u00f3n"
        >
          <button
            className="icon-button"
            style={{ marginLeft: "auto", display: "flex" }}
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar men\u00fa"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <nav style={{ marginTop: 12 }}>
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 12, marginTop: 12, display: "grid", gap: 6 }}>
            {megaItems.map((mi) => (
              <Link key={mi.href} href={mi.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "var(--radius)", color: "var(--text-muted)", fontWeight: 720 }}>
                {mi.icon}
                <span>
                  <strong style={{ display: "block", fontSize: "0.88rem" }}>{mi.label}</strong>
                  <small style={{ color: "var(--text-soft)", fontSize: "0.78rem" }}>{mi.sub}</small>
                </span>
              </Link>
            ))}
          </div>
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 12, marginTop: 12, display: "flex", gap: 10 }}>
            <a href={phoneHref} className="button button-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setMobileOpen(false)}>
              <Phone size={16} aria-hidden="true" />
              Llamar
            </a>
            <Link href="/presupuesto" className="button button-secondary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setMobileOpen(false)}>
              <Mail size={16} aria-hidden="true" />
              Presupuesto
            </Link>
          </div>
          <div style={{ marginTop: 12 }}>
            <LanguageSelector />
          </div>
        </div>
      )}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
