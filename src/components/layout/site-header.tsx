"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId, useCallback } from "react";
import { useRouter } from "next/navigation";
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
  ShoppingCart,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation } from "@/config/navigation";

// ─── Nav icon helper ───────────────────────────────────────────────────
const navIcon = (href: string) => {
  if (href.startsWith("/productos"))         return <Package     aria-hidden="true" size={16} />;
  if (href.startsWith("/servicios/its"))      return <Wrench      aria-hidden="true" size={16} />;
  if (href.startsWith("/servicios/revisa"))   return <ShieldCheck aria-hidden="true" size={16} />;
  if (href.startsWith("/soporte"))            return <LifeBuoy    aria-hidden="true" size={16} />;
  if (href.startsWith("/servicios"))          return <Settings    aria-hidden="true" size={16} />;
  if (href.startsWith("/alquiler"))           return <Layers      aria-hidden="true" size={16} />;
  if (href.startsWith("/formacion"))          return <BookOpen    aria-hidden="true" size={16} />;
  if (href.startsWith("/soluciones"))         return <Zap         aria-hidden="true" size={16} />;
  if (href.startsWith("https://tienda"))      return <ShoppingCart aria-hidden="true" size={16} />;
  if (href.startsWith("/empresa"))            return <Building2   aria-hidden="true" size={16} />;
  if (href.startsWith("/contacto"))           return <MapPin      aria-hidden="true" size={16} />;
  return <Building2 aria-hidden="true" size={16} />;
};

// ─── Search suggestions ───────────────────────────────────────────────
const SEARCH_INDEX = [
  { label: "Productos",               href: "/productos" },
  { label: "Alquiler de equipos",      href: "/alquiler" },
  { label: "ITS Servicio Técnico",     href: "/servicios/its-servicio-tecnico" },
  { label: "Revisa Trazabilidad",      href: "/servicios/revisa-trazabilidad" },
  { label: "Soporte técnico",          href: "/soporte" },
  { label: "Formación",               href: "/formacion" },
  { label: "Soluciones eléctricas",   href: "/soluciones" },
  { label: "Empresa / Quiénes somos",  href: "/empresa" },
  { label: "Kit Digital",              href: "/kit-digital" },
  { label: "Tienda online",            href: "https://tienda.tranluz.es" },
  { label: "Contacto",                 href: "/contacto" },
  { label: "Cabrestantes eléctricos",  href: "/productos" },
  { label: "Certificación ITS",        href: "/servicios/its-servicio-tecnico" },
  { label: "Trazabilidad de equipos",  href: "/servicios/revisa-trazabilidad" },
];

// ─── HeaderSearch component ───────────────────────────────────────────
function HeaderSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].href);
      setQuery("");
      setOpen(false);
    }
  }, [results, router]);

  const handleSelect = useCallback((href: string) => {
    router.push(href);
    setQuery("");
    setOpen(false);
  }, [router]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapRef} className={`hs-wrap${focused ? " hs-wrap--focused" : ""}`}>
      <form onSubmit={handleSubmit} role="search" className="hs-form">
        <Search size={14} className="hs-icon" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { setFocused(true); setOpen(true); }}
          onBlur={() => setFocused(false)}
          placeholder="Buscar..."
          aria-label="Buscar en Tranluz"
          autoComplete="off"
          className="hs-input"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setOpen(false); }}
            className="hs-clear"
            aria-label="Limpiar búsqueda"
          >
            <X size={12} />
          </button>
        )}
      </form>
      {open && results.length > 0 && (
        <ul className="hs-dropdown" role="listbox">
          {results.map((item) => (
            <li key={item.href} role="option">
              <button
                type="button"
                className="hs-dropdown__item"
                onMouseDown={() => handleSelect(item.href)}
              >
                <Search size={12} className="hs-dropdown__icon" aria-hidden="true" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── SiteHeader ─────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [openMega, setOpenMega]       = useState<string | null>(null);
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

  const phoneHref    = `tel:${brand.phone?.replace(/\s/g, "")}`;
  const phoneDisplay = brand.phone ?? "+34 954 367 290";

  return (
    <>
      {/* ── Main header ── */}
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        aria-label="Cabecera principal"
      >
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" aria-label="Tranluz – inicio" className="header-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.logo}
              alt="Tranluz logo"
              width={140}
              height={46}
              className="header-logo__img"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            ref={navRef}
            className="header-nav"
            aria-label="Navegación principal"
          >
            {mainNavigation.map((item) => (
              <div key={item.href} className="nav-item">
                {item.children ? (
                  <>
                    <button
                      className="nav-link"
                      aria-expanded={openMega === item.href}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMega(openMega === item.href ? null : item.href)
                      }
                    >
                      {navIcon(item.href)}
                      <span>{item.label}</span>
                      <ChevronDown
                        size={13}
                        className={`nav-chevron${openMega === item.href ? " nav-chevron--open" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {openMega === item.href && (
                      <ul className="nav-dropdown" role="menu">
                        {item.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              role="menuitem"
                              className="nav-dropdown__item"
                              onClick={() => setOpenMega(null)}
                            >
                              {navIcon(child.href)}
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {navIcon(item.href)}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {navIcon(item.href)}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search – compact + functional */}
          <HeaderSearch />

          {/* Header actions */}
          <div className="header-actions">

            {/* Phone */}
            <div
              className="header-action-wrap"
              onMouseEnter={() => setPhoneVisible(true)}
              onMouseLeave={() => setPhoneVisible(false)}
            >
              <a
                href={phoneHref}
                className="header-action-btn"
                aria-label="Llamar a Tranluz"
              >
                <Phone size={17} />
              </a>
              {phoneVisible && (
                <div className="header-tooltip">{phoneDisplay}</div>
              )}
            </div>

            {/* Email */}
            <a
              href={`mailto:${brand.email}`}
              className="header-action-btn"
              aria-label="Enviar email a Tranluz"
            >
              <Mail size={17} />
            </a>

            {/* Language */}
            <LanguageSelector />

            {/* Theme toggle – last */}
            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              className="header-action-btn header-mobile-toggle"
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>{/* /header-actions */}
        </div>{/* /header-inner */}
      </header>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div className="mobile-overlay" id={mobileMenuId} aria-modal="true" role="dialog">
          <div className="mobile-overlay__header">
            <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Tranluz – inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.logo} alt="Tranluz" width={120} height={40} className="header-logo__img" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="mobile-close-btn"
              aria-label="Cerrar menú móvil"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav">
            {mainNavigation.map((item) => (
              <div key={item.href} className="mobile-nav__section">
                {item.children ? (
                  <>
                    <div className="mobile-nav__group-label">
                      {navIcon(item.href)}
                      <span>{item.label}</span>
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="mobile-nav__child"
                        onClick={() => setMobileOpen(false)}
                      >
                        {navIcon(child.href)}
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </>
                ) : item.href.startsWith("http") ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {navIcon(item.href)}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {navIcon(item.href)}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mobile-overlay__footer">
            <a href={phoneHref} className="mobile-cta-btn mobile-cta-btn--phone">
              <Phone size={16} /> {phoneDisplay}
            </a>
            <Link
              href="/contacto"
              className="mobile-cta-btn mobile-cta-btn--contact"
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
