"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  LifeBuoy,
  BookOpen,
  Building2,
  ChevronDown,
  Layers,
  Mail,
    MapPin,
  Menu,
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
  if (href.startsWith("/soporte")) return <LifeBuoy aria-hidden="true" size={18} />;
  if (href.startsWith("/servicios")) return <Settings aria-hidden="true" size={18} />;
  if (href.startsWith("/alquiler")) return <Layers aria-hidden="true" size={18} />;
  if (href.startsWith("/formacion")) return <BookOpen aria-hidden="true" size={18} />;
  if (href.startsWith("/soluciones")) return <Zap aria-hidden="true" size={18} />;
  if (href.startsWith("/empresa")) return <Building2 aria-hidden="true" size={18} />;
    if (href.startsWith("/contacto")) return <MapPin aria-hidden="true" size={18} />;
  return <Building2 aria-hidden="true" size={18} />;
};

const megaItems = [
  { icon: <Wrench size={18} aria-hidden="true" />, label: "ITS Servicio Técnico", sub: "Revisiones e informes", href: "/servicios/its-servicio-tecnico" },
  { icon: <ShieldCheck size={18} aria-hidden="true" />, label: "Revisa trazabilidad", sub: "Control y alertas", href: "/servicios/revisa-trazabilidad" },
  { icon: <Layers size={18} aria-hidden="true" />, label: "Rent Puller", sub: "Alquiler para obra", href: "/alquiler" },
  { icon: <BookOpen size={18} aria-hidden="true" />, label: "Formación", sub: "Operadores y equipos", href: "/formacion" },
  { icon: <Package size={18} aria-hidden="true" />, label: "Catálogo técnico", sub: "Productos y referencias", href: "/productos" },
  { icon: <Building2 size={18} aria-hidden="true" />, label: "Sevilla", sub: "Atención técnica presencial", href: "/contacto" },
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const phoneHref = `tel:${brand.phone?.replace(/\s/g, "")}`;
  const phoneDisplay = brand.phone ?? "+34 954 367 290";

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="topbar">
          <span className="top-bar-claim">{brand.claim}</span>
          <span className="top-bar-sep">· Catálogo 2026 ·</span>
          <a href={phoneHref} className="top-bar-phone">{phoneDisplay}</a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        ref={navRef}
      >
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo" aria-label="Tranluz – inicio">
            <img
              src={assets.logo}
              alt="Tranluz logo"
              width={120}
              height={40}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="main-nav" aria-label="Navegación principal">
            {mainNavigation.map((item) => (
              <div key={item.href} className="nav-item">
                {item.children ? (
                  <>
                    <button
                      className={`nav-link${openMega === item.href ? " nav-link--open" : ""}`}
                      onClick={() =>
                        setOpenMega(openMega === item.href ? null : item.href)
                      }
                    >
                      {navIcon(item.href)}
                      <span>{item.label}</span>
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>
                    {openMega === item.href && (
                      <div className="nav-dropdown">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="nav-dropdown-item"
                            onClick={() => setOpenMega(null)}
                          >
                            {navIcon(child.href)}
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {navIcon(item.href)}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="header-search">
            <Search size={16} aria-hidden="true" className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Buscar equipo…"
              aria-label="Buscar equipo en Tranluz"
            />
          </div>

          {/* Header actions: Phone > Email > Language > Theme > Mobile toggle */}
          <div className="header-actions">
            {/* Phone icon with tooltip */}
            <div
              className="contact-icon-wrap"
              onMouseEnter={() => setPhoneVisible(true)}
              onMouseLeave={() => setPhoneVisible(false)}
            >
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

            {/* Email / presupuesto icon */}
            <Link
              href="/presupuesto"
              className="icon-button icon-button-link contact-icon-email"
              aria-label="Solicitar presupuesto por email"
              title="Solicitar presupuesto"
            >
              <Mail size={18} aria-hidden="true" />
            </Link>

            {/* Language selector */}
            <LanguageSelector />

            {/* Theme toggle - last */}
            <ThemeToggle />

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-btn"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mega panel */}
        {openMega === "mega" && (
          <div className="mega-panel">
            <div className="topbar">
              {megaItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mega-item"
                  onClick={() => setOpenMega(null)}
                >
                  <span className="mega-item-icon">{item.icon}</span>
                  <span className="mega-item-body">
                    <span className="mega-item-label">{item.label}</span>
                    <span className="mega-item-sub">{item.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" id={mobileMenuId}>
          <div className="mobile-header">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Tranluz – inicio">
              Tranluz
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="mobile-close-btn"
              aria-label="Cerrar menú móvil"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav className="mobile-nav">
            {mainNavigation.map((item) => (
              <div key={item.href} className="mobile-nav-item">
                {item.children ? (
                  <details>
                    <summary className="mobile-nav-summary">
                      {navIcon(item.href)}
                      {item.label}
                    </summary>
                    <div className="mobile-nav-children">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="mobile-nav-child"
                          onClick={() => setMobileOpen(false)}
                        >
                          {navIcon(child.href)}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {navIcon(item.href)}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mobile-footer">
            <a href={phoneHref} className="mobile-phone">{phoneDisplay}</a>
            <Link
              href="/presupuesto"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
