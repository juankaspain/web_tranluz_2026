"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  LifeBuoy,
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
    if (href.startsWith("/soporte")) return <LifeBuoy aria-hidden="true" size={18} />;
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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const phoneHref = `tel:${brand.phone?.replace(/\s/g, "")}`;
  const phoneDisplay = brand.phone ?? "+34 954 367 290";

  return (
    <>
      {/* Top bar */}
      <div className="top-bar" role="banner" aria-label="Información de contacto">
        <span className="top-bar-left">{brand.claim}</span>
        <nav className="top-bar-right" aria-label="Accesos rápidos superiores">
          <Link href="/catalogo" className="top-bar-link">
            <BookOpen size={13} aria-hidden="true" />
            <span>· Catálogo 2026</span>
          </Link>
          <a href={phoneHref} className="top-bar-link">
            <Phone size={13} aria-hidden="true" />
            <span>{phoneDisplay}</span>
          </a>
        </nav>
      </div>

      {/* Main header */}
      <header
        ref={navRef}
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        role="banner"
      >
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="site-logo" aria-label="Tranluz – inicio">
            <img
              src={assets.logo}
              alt="Tranluz logo"
              width={120}
              height={36}
              className="logo-img"
            />
          </Link>

          {/* Mega nav trigger */}
          <button
            className="mega-trigger"
            aria-expanded={openMega === "mega"}
            aria-controls="mega-panel"
            onClick={() => setOpenMega(openMega === "mega" ? null : "mega")}
            aria-label="Menú de servicios"
          >
            <span className="mega-dot" aria-hidden="true" />
          </button>

          {/* Desktop navigation */}
          <nav className="main-nav" aria-label="Navegación principal">
            <ul className="nav-list" role="list">
              {mainNavigation.map((item) => (
                <li key={item.href} className="nav-item">
                  {item.children ? (
                    <>
                      <button
                        className="nav-link nav-link--dropdown"
                        aria-expanded={openMega === item.href}
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenMega(openMega === item.href ? null : item.href)
                        }
                      >
                        {navIcon(item.href)}
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`nav-chevron${openMega === item.href ? " nav-chevron--open" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {openMega === item.href && (
                        <ul className="dropdown-menu" role="list">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="dropdown-item" onClick={() => setOpenMega(null)}>
                                {navIcon(child.href)}
                                <span>{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="nav-link">
                      {navIcon(item.href)}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search */}
          <div className="header-search" role="search">
            <Search size={16} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              className="search-input"
              placeholder="Buscar equipo…"
              aria-label="Buscar equipo en Tranluz"
            />
          </div>

          {/* Header actions */}
          <div className="header-actions">
            <ThemeToggle />
            <LanguageSelector />

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

            {/* Mobile menu toggle */}
            <button
              className="mobile-menu-btn"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mega panel */}
        {openMega === "mega" && (
          <div id="mega-panel" className="mega-panel" role="dialog" aria-label="Menú rápido de servicios">
            <ul className="mega-grid" role="list">
              {megaItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mega-item" onClick={() => setOpenMega(null)}>
                    <span className="mega-icon" aria-hidden="true">{item.icon}</span>
                    <span className="mega-label">{item.label}</span>
                    <span className="mega-sub">{item.sub}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className="mobile-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil de navegación"
            id={mobileMenuId}
          >
            <div className="mobile-header">
              <Link href="/" className="site-logo" onClick={() => setMobileOpen(false)} aria-label="Tranluz – inicio">
                <img src={assets.logo} alt="Tranluz" width={100} height={30} className="logo-img" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="mobile-close-btn"
                aria-label="Cerrar menú móvil"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navegación móvil">
              <ul className="mobile-nav" role="list">
                {mainNavigation.map((item) => (
                  <li key={item.href} className="mobile-nav-item">
                    {item.children ? (
                      <details className="mobile-details">
                        <summary className="mobile-summary">
                          {navIcon(item.href)}
                          {item.label}
                          <ChevronDown size={14} className="mobile-chevron" aria-hidden="true" />
                        </summary>
                        <ul className="mobile-sub" role="list">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="mobile-sub-link"
                                onClick={() => setMobileOpen(false)}
                              >
                                {navIcon(child.href)}
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-footer">
              <a href={phoneHref} className="mobile-contact-btn mobile-contact-btn--phone">
                <Phone size={16} aria-hidden="true" />
                {phoneDisplay}
              </a>
              <Link href="/presupuesto" className="mobile-contact-btn mobile-contact-btn--email" onClick={() => setMobileOpen(false)}>
                <Mail size={16} aria-hidden="true" />
                Solicitar presupuesto
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
