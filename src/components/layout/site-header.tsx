"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LifeBuoy, BookOpen, Building2, ChevronDown, Layers,
  Mail, MapPin, Menu, Package, Phone, Search,
  Settings, ShieldCheck, ShoppingCart, Wrench, X, Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation } from "@/config/navigation";

/* ---- Nav icon ---------------------------------------------------- */
const navIcon = (href: string) => {
  if (href.startsWith("/productos"))        return <Package      size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/its"))     return <Wrench       size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/revisa"))  return <ShieldCheck  size={15} aria-hidden="true" />;
  if (href.startsWith("/soporte"))           return <LifeBuoy     size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios"))         return <Settings     size={15} aria-hidden="true" />;
  if (href.startsWith("/alquiler"))          return <Layers       size={15} aria-hidden="true" />;
  if (href.startsWith("/formacion"))         return <BookOpen     size={15} aria-hidden="true" />;
  if (href.startsWith("/soluciones"))        return <Zap          size={15} aria-hidden="true" />;
  if (href.startsWith("https://tienda"))     return <ShoppingCart size={15} aria-hidden="true" />;
  if (href.startsWith("/empresa"))           return <Building2    size={15} aria-hidden="true" />;
  if (href.startsWith("/contacto"))          return <MapPin       size={15} aria-hidden="true" />;
  return <Building2 size={15} aria-hidden="true" />;
};

/* ---- Search index ------------------------------------------------ */
const SEARCH_INDEX = [
  { label: "Productos",              href: "/productos" },
  { label: "Alquiler de equipos",    href: "/alquiler" },
  { label: "ITS Servicio T\u00e9cnico",   href: "/servicios/its-servicio-tecnico" },
  { label: "Revisa Trazabilidad",    href: "/servicios/revisa-trazabilidad" },
  { label: "Soporte t\u00e9cnico",        href: "/soporte" },
  { label: "Formaci\u00f3n",             href: "/formacion" },
  { label: "Soluciones el\u00e9ctricas", href: "/soluciones" },
  { label: "Empresa",                href: "/empresa" },
  { label: "Kit Digital",            href: "/kit-digital" },
  { label: "Contacto",               href: "/contacto" },
];

/* ---- HeaderSearch ------------------------------------------------ */
function HeaderSearch() {
  const router = useRouter();
  const [query, setQuery]   = useState("");
  const [open, setOpen]     = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter(i => i.label.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  const go = useCallback((href: string) => {
    router.push(href); setQuery(""); setOpen(false);
  }, [router]);

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) go(results[0].href);
  }, [results, go]);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={wrapRef} className={`hs-wrap${focused ? " hs-wrap--focused" : ""}`}>
      <form onSubmit={onSubmit} role="search" className="hs-form">
        <Search size={13} className="hs-icon" aria-hidden="true" />
        <input
          type="search" value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { setFocused(true); setOpen(true); }}
          onBlur={() => setFocused(false)}
          placeholder="Buscar..."
          aria-label="Buscar en Tranluz"
          autoComplete="off"
          className="hs-input"
        />
        {query && (
          <button type="button" onClick={() => { setQuery(""); setOpen(false); }} className="hs-clear" aria-label="Limpiar">
            <X size={11} />
          </button>
        )}
      </form>
      {open && results.length > 0 && (
        <ul className="hs-dropdown" role="listbox">
          {results.map(item => (
            <li key={item.href} role="option">
              <button type="button" className="hs-dropdown__item" onMouseDown={() => go(item.href)}>
                <Search size={11} style={{ opacity: 0.4, flexShrink: 0 }} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---- SiteHeader -------------------------------------------------- */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openMenu, setOpenMenu]     = useState<string | null>(null);
  const [showPhone, setShowPhone]   = useState(false);
  const mobileMenuId = useId();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const phoneHref    = `tel:${brand.phone?.replace(/\s/g, "") ?? ""}`;
  const phoneDisplay = brand.phone ?? "+34 954 367 290";

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" aria-label="Tranluz" className="header-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.logo} alt="Tranluz" width={140} height={46} className="header-logo__img" />
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="header-nav" aria-label="Navegaci\u00f3n principal">
            {mainNavigation.map(item => (
              <div key={item.href} className="nav-item">
                {item.children ? (
                  <>
                    <button
                      className="nav-link"
                      aria-expanded={openMenu === item.href}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(openMenu === item.href ? null : item.href)}
                    >
                      {navIcon(item.href)}
                      <span>{item.label}</span>
                      <ChevronDown size={12} className={`nav-chevron${openMenu === item.href ? " nav-chevron--open" : ""}`} aria-hidden="true" />
                    </button>

                    {openMenu === item.href && (
                      <div className="nav-panel" role="menu">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="nav-panel__item"
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="nav-panel__icon">{navIcon(child.href)}</span>
                            <span className="nav-panel__label">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.href.startsWith("http") ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                    {navIcon(item.href)}<span>{item.label}</span>
                  </a>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {navIcon(item.href)}<span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search */}
          <HeaderSearch />

          {/* Actions */}
          <div className="header-actions">

            {/* Phone — tooltip below */}
            <div
              className="haction-wrap"
              onMouseEnter={() => setShowPhone(true)}
              onMouseLeave={() => setShowPhone(false)}
            >
              <a href={phoneHref} className="haction-btn" aria-label="Llamar">
                <Phone size={17} />
              </a>
              {showPhone && (
                <div className="haction-tooltip">{phoneDisplay}</div>
              )}
            </div>

            {/* Email */}
            <a href={`mailto:${brand.email ?? "info@tranluz.com"}`} className="haction-btn" aria-label="Email">
              <Mail size={17} />
            </a>

            {/* Language */}
            <LanguageSelector />

            {/* Theme */}
            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              className="haction-btn header-mobile-toggle"
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" id={mobileMenuId} aria-modal="true" role="dialog">
          <div className="mobile-overlay__top">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.logo} alt="Tranluz" width={110} height={36} className="header-logo__img" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="haction-btn" aria-label="Cerrar">
              <X size={22} />
            </button>
          </div>
          <nav className="mobile-nav">
            {mainNavigation.map(item => (
              <div key={item.href} className="mobile-nav__block">
                {item.children ? (
                  <>
                    <div className="mobile-nav__group">{navIcon(item.href)}<span>{item.label}</span></div>
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href} className="mobile-nav__child" onClick={() => setMobileOpen(false)}>
                        {navIcon(child.href)}<span>{child.label}</span>
                      </Link>
                    ))}
                  </>
                ) : item.href.startsWith("http") ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
                    {navIcon(item.href)}<span>{item.label}</span>
                  </a>
                ) : (
                  <Link href={item.href} className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
                    {navIcon(item.href)}<span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mobile-overlay__foot">
            <a href={phoneHref} className="mobile-cta mobile-cta--phone"><Phone size={15} />{phoneDisplay}</a>
            <Link href="/contacto" className="mobile-cta mobile-cta--cta" onClick={() => setMobileOpen(false)}>Solicitar presupuesto</Link>
          </div>
        </div>
      )}
    </>
  );
}
