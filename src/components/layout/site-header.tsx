"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LifeBuoy, BookOpen, Building2, ChevronDown, Layers,
  Mail, Menu, Package, Phone, Search,
  Settings, ShieldCheck, ShoppingCart, Wrench, X, Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation } from "@/config/navigation";

/* ---- Nav icon ---------------------------------------------------- */
const navIcon = (href: string) => {
  if (href.startsWith("/productos"))         return <Package      size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/its"))      return <Wrench       size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/revisa"))   return <ShieldCheck  size={15} aria-hidden="true" />;
  if (href.startsWith("/soporte"))            return <LifeBuoy     size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios"))          return <Settings     size={15} aria-hidden="true" />;
  if (href.startsWith("/alquiler"))           return <Layers       size={15} aria-hidden="true" />;
  if (href.startsWith("/formacion"))          return <BookOpen     size={15} aria-hidden="true" />;
  if (href.startsWith("/soluciones"))         return <Zap          size={15} aria-hidden="true" />;
  if (href.startsWith("https://tienda"))      return <ShoppingCart size={15} aria-hidden="true" />;
  if (href.startsWith("/empresa"))            return <Building2    size={15} aria-hidden="true" />;
  return <Building2 size={15} aria-hidden="true" />;
};

/* ---- Search index ------------------------------------------------ */
const SEARCH_INDEX = [
  { label: "Productos",            href: "/productos" },
  { label: "Alquiler de equipos",  href: "/alquiler" },
  { label: "ITS Servicio T\u00e9cnico",  href: "/servicios/its-servicio-tecnico" },
  { label: "Revisa Trazabilidad",  href: "/servicios/revisa-trazabilidad" },
  { label: "Soporte t\u00e9cnico",       href: "/soporte" },
  { label: "Formaci\u00f3n",            href: "/formacion" },
  { label: "Soluciones el\u00e9ctricas", href: "/soluciones" },
  { label: "Empresa",              href: "/empresa" },
  { label: "Contacto",             href: "/contacto" },
];

/* ---- HeaderSearch ------------------------------------------------ */
function HeaderSearch() {
  const router    = useRouter();
  const [query,   setQuery]   = useState("");
  const [open,    setOpen]    = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapRef   = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 0
    ? SEARCH_INDEX.filter(i =>
        i.label.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const go = useCallback((href: string) => {
    router.push(href);
    setQuery("");
    setOpen(false);
    setFocused(false);
  }, [router]);

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) go(results[0].href);
  }, [results, go]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={wrapRef} className={`hs-wrap${focused ? " hs-wrap--focused" : ""}`} role="search">
      <form onSubmit={onSubmit} style={{ display: "contents" }}>
        <div className="hs-form">
          <Search size={15} className="hs-icon" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={e => { setQuery(e.target.value); setOpen(true); }}
            onFocus={() => { setOpen(true); setFocused(true); }}
            onBlur={() => { setTimeout(() => setFocused(false), 150); }}
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
              aria-label="Limpiar"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </form>
      {open && results.length > 0 && (
        <div className="hs-dropdown" role="listbox">
          {results.map(item => (
            <button
              key={item.href}
              role="option"
              aria-selected="false"
              onClick={() => go(item.href)}
              className="hs-dropdown__item"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- PhoneTooltip — C3: SOLO click, nunca hover ------------------ */
function PhoneTooltip() {
  const [show, setShow] = useState(false);
  const phone     = brand.phone ?? "+34 954 367 290";
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;
  const wrapRef   = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setShow(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    if (!show) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setShow(false); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [show]);

  return (
    <div ref={wrapRef} className="contact-icon-wrap">
      <button
        className="icon-button"
        onClick={() => setShow(s => !s)}
        aria-label="Ver tel\u00e9fono de contacto"
        aria-expanded={show}
        aria-haspopup="true"
        aria-controls={tooltipId}
      >
        <Phone size={17} className="contact-icon-phone" />
      </button>
      {show && (
        <div
          id={tooltipId}
          className="contact-tooltip"
          role="tooltip"
        >
          <a href={phoneHref}>{phone}</a>
        </div>
      )}
    </div>
  );
}

/* ---- SiteHeader -------------------------------------------------- */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [openMenu,   setOpenMenu]   = useState<string | null>(null);
  const [menuPos,    setMenuPos]    = useState<{ left: number; top: number } | null>(null);
  const mobileMenuId = useId();
  const navRef       = useRef<HTMLElement>(null);
  const dropdownRef  = useRef<HTMLDivElement>(null);

  const phone      = brand.phone ?? "+34 954 367 290";
  const email      = brand.email ?? "info@tranluz.com";
  const phoneHref  = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref  = `mailto:${email}`;

  /* Scrolled state para header shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Cerrar dropdown al hacer click fuera del nav */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMenuPos(null);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* M6: scroll con threshold 20px — evita cerrar dropdown en micro-scroll
     El listener trackea el scrollY anterior y solo cierra si el
     desplazamiento acumulado supera 20px. */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 20) {
        setOpenMenu(null);
        setMenuPos(null);
      }
      lastScrollY = window.scrollY;
    };

    const onResize = () => {
      setOpenMenu(null);
      setMenuPos(null);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* Bloquear scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Escape global — cierra mobile y dropdown */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        setMenuPos(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  /* A5: cuando el dropdown se abre, mueve foco al primer item */
  useEffect(() => {
    if (openMenu && dropdownRef.current) {
      const first = dropdownRef.current.querySelector<HTMLElement>("[role='menuitem']");
      first?.focus();
    }
  }, [openMenu]);

  /* A5: keydown handler para botones de menú con submenu */
  const handleMenuTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, href: string, rect: DOMRect) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (openMenu !== href) {
          const dropdownWidth = 260;
          const gutter = 16;
          const left = Math.min(
            Math.max(rect.left, gutter),
            window.innerWidth - dropdownWidth - gutter
          );
          setMenuPos({ left, top: rect.bottom + 10 });
          setOpenMenu(href);
        }
      } else if (e.key === "Escape") {
        setOpenMenu(null);
        setMenuPos(null);
        e.currentTarget.focus();
      }
    },
    [openMenu]
  );

  /* A5: keydown en items del dropdown — Arrow Up/Down + Escape */
  const handleDropdownItemKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (!dropdownRef.current) return;
      const items = Array.from(
        dropdownRef.current.querySelectorAll<HTMLElement>("[role='menuitem']")
      );
      const idx = items.indexOf(e.currentTarget);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        items[(idx + 1) % items.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        items[(idx - 1 + items.length) % items.length]?.focus();
      } else if (e.key === "Escape") {
        setOpenMenu(null);
        setMenuPos(null);
      }
    },
    []
  );

  return (
    <>
      <header
        className={`site-header${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="container">
          <nav
            ref={navRef}
            className="navbar"
            aria-label="Navegaci\u00f3n principal"
          >
            {/* Logo */}
            <Link href="/" className="logo-link" aria-label="Tranluz \u2013 inicio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.logo}
                alt="Tranluz"
                width={110}
                height={36}
                className="logo-img"
              />
            </Link>

            {/* Desktop nav */}
            <div className="desktop-nav">
              <ul className="main-nav" role="menubar">
                {mainNavigation.map(item => (
                  <li key={item.href} role="none" className="nav-item">
                    {item.children ? (
                      <>
                        <button
                          role="menuitem"
                          aria-haspopup="true"
                          aria-expanded={openMenu === item.href}
                          className="nav-link nav-link--trigger"
                          onClick={(event) => {
                            if (openMenu === item.href) {
                              setOpenMenu(null);
                              setMenuPos(null);
                              return;
                            }
                            const rect = event.currentTarget.getBoundingClientRect();
                            const dropdownWidth = 260;
                            const gutter = 16;
                            const left = Math.min(
                              Math.max(rect.left, gutter),
                              window.innerWidth - dropdownWidth - gutter
                            );
                            setMenuPos({ left, top: rect.bottom + 10 });
                            setOpenMenu(item.href);
                          }}
                          onKeyDown={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            handleMenuTriggerKeyDown(e, item.href, rect);
                          }}
                        >
                          {navIcon(item.href)}
                          {item.label}
                          <ChevronDown
                            size={13}
                            aria-hidden="true"
                            className={`nav-chevron${openMenu === item.href ? " nav-chevron--open" : ""}`}
                          />
                        </button>
                        {openMenu === item.href && (
                          <div
                            ref={dropdownRef}
                            className="nav-dropdown"
                            role="menu"
                            aria-label={item.label}
                            style={menuPos ? { left: menuPos.left, top: menuPos.top } : undefined}
                          >
                            {item.children.map(child => (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                className="nav-dropdown__link"
                                tabIndex={-1}
                                onKeyDown={handleDropdownItemKeyDown}
                                onClick={() => {
                                  setOpenMenu(null);
                                  setMenuPos(null);
                                }}
                              >
                                {navIcon(child.href)}
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        className="nav-link"
                      >
                        {navIcon(item.href)}
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="nav-link"
                      >
                        {navIcon(item.href)}
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="header-actions">
                <HeaderSearch />
                <PhoneTooltip />
                <Link href="/contacto" className="icon-button" aria-label="Contacto">
                  <Mail size={17} className="contact-icon-email" />
                </Link>
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile toggle */}
            <button
              className="mobile-toggle icon-button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* ---- Mobile overlay ---- */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Men\u00fa de navegaci\u00f3n"
          onClick={() => setMobileOpen(false)}
        >
          <div
            id={mobileMenuId}
            className="mobile-panel"
            onClick={e => e.stopPropagation()}
          >
            {/* Top */}
            <div className="mobile-panel-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.logo}
                alt="Tranluz"
                width={100}
                height={32}
                className="logo-img"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="haction-btn"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav */}
            <ul className="mobile-nav-list">
              {mainNavigation.map(item => (
                <li key={item.href}>
                  {item.children ? (
                    <>
                      <div className="mobile-nav-section-title">
                        {navIcon(item.href)}
                        {item.label}
                      </div>
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="mobile-nav-link mobile-nav-link--child"
                        >
                          {navIcon(child.href)}
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="mobile-nav-link"
                    >
                      {navIcon(item.href)}
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="mobile-nav-link"
                    >
                      {navIcon(item.href)}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Footer móvil */}
            <div className="mobile-footer">
              <a href={phoneHref} className="mobile-footer-link">
                <Phone size={16} aria-hidden="true" className="contact-icon-phone" />
                {phone}
              </a>
              <a href={emailHref} className="mobile-footer-link">
                <Mail size={16} aria-hidden="true" className="contact-icon-email" />
                {email}
              </a>
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="mobile-footer-cta"
              >
                Solicitar presupuesto
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
