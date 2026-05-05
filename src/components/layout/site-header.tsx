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

/* ---- PhoneTooltip ------------------------------------------------ */
function PhoneTooltip() {
  const [show, setShow] = useState(false);
  const phone     = brand.phone ?? "+34 954 367 290";
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;
  const wrapRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setShow(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={wrapRef} className="contact-icon-wrap">
      <button
        className="icon-button"
        onClick={() => setShow(!show)}
        onMouseEnter={() => setShow(true)}
        aria-label="Ver tel\u00e9fono de contacto"
        aria-expanded={show}
        aria-haspopup="true"
      >
        <Phone size={17} className="contact-icon-phone" />
      </button>
      {show && (
        <div className="contact-tooltip" role="tooltip">
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

  const phone      = brand.phone ?? "+34 954 367 290";
  const email      = brand.email ?? "info@tranluz.com";
  const phoneHref  = `tel:${phone.replace(/\s/g, "")}`;
  const emailHref  = `mailto:${email}`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

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

  useEffect(() => {
    const closeFloatingMenu = () => {
      setOpenMenu(null);
      setMenuPos(null);
    };
    window.addEventListener("resize", closeFloatingMenu);
    window.addEventListener("scroll", closeFloatingMenu, { passive: true });
    return () => {
      window.removeEventListener("resize", closeFloatingMenu);
      window.removeEventListener("scroll", closeFloatingMenu);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
                style={{ display: "block", maxHeight: 36, width: "auto" }}
              />
            </Link>

            {/* Desktop nav */}
            <div className="desktop-nav">
              <ul className="main-nav" role="menubar">
                {mainNavigation.map(item => (
                  <li key={item.href} role="none">
                    {item.children ? (
                      <>
                        <button
                          role="menuitem"
                          aria-haspopup="true"
                          aria-expanded={openMenu === item.href}
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
                          style={{
                            display: "inline-flex", alignItems: "center", gap: "5px",
                            padding: "8px 10px", border: "none", background: "transparent",
                            color: "var(--text-muted)", fontSize: "0.86rem",
                            fontWeight: 760, borderRadius: "999px",
                            cursor: "pointer", whiteSpace: "nowrap",
                          }}
                        >
                          {navIcon(item.href)}
                          {item.label}
                          <ChevronDown
                            size={13}
                            aria-hidden="true"
                            style={{
                              transition: "transform 180ms",
                              transform: openMenu === item.href ? "rotate(180deg)" : "none",
                            }}
                          />
                        </button>
                        {openMenu === item.href && (
                          <div
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
                                onClick={() => {
                                  setOpenMenu(null);
                                  setMenuPos(null);
                                }}
                                style={{
                                  display: "flex", alignItems: "center", gap: "8px",
                                  padding: "9px 12px", borderRadius: "var(--radius)",
                                  color: "var(--text-muted)", fontSize: "0.84rem",
                                  fontWeight: 600,
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
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "8px 10px", borderRadius: "999px",
                          color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 760,
                        }}
                      >
                        {navIcon(item.href)}
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        role="menuitem"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "8px 10px", borderRadius: "999px",
                          color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 760,
                        }}
                      >
                        {navIcon(item.href)}
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Actions: Search \u2192 Phone \u2192 Email \u2192 Theme \u2192 Language */}
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
                style={{ display: "block", width: "auto", maxHeight: 32 }}
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
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {mainNavigation.map(item => (
                <li key={item.href}>
                  {item.children ? (
                    <>
                      <div
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "12px 14px", color: "var(--text)",
                          fontSize: "0.9rem", fontWeight: 700,
                        }}
                      >
                        {navIcon(item.href)}
                        {item.label}
                      </div>
                      {item.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "10px 28px", borderRadius: "var(--radius)",
                            color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 600,
                          }}
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
                      style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "12px 14px", borderRadius: "var(--radius)",
                        color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600,
                      }}
                    >
                      {navIcon(item.href)}
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "12px 14px", borderRadius: "var(--radius)",
                        color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600,
                      }}
                    >
                      {navIcon(item.href)}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Footer m\u00f3vil */}
            <div style={{ marginTop: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={phoneHref}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "12px", borderRadius: "999px",
                  border: "1px solid var(--line)", color: "var(--text)",
                  fontWeight: 700, fontSize: "0.9rem",
                }}
              >
                <Phone size={16} aria-hidden="true" className="contact-icon-phone" />
                {phone}
              </a>
              <a
                href={emailHref}
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "12px", borderRadius: "999px",
                  border: "1px solid var(--line)", color: "var(--text)",
                  fontWeight: 700, fontSize: "0.9rem",
                }}
              >
                <Mail size={16} aria-hidden="true" className="contact-icon-email" />
                {email}
              </a>
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "12px", borderRadius: "999px",
                  background: "var(--brand)", color: "#fff",
                  fontWeight: 700, fontSize: "0.9rem",
                }}
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
