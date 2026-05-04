"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useId, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LifeBuoy, BookOpen, Building2, ChevronDown, Layers,
  Menu, Package, Search,
  Settings, ShieldCheck, ShoppingCart, Wrench, X, Zap,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation } from "@/config/navigation";

/* ---- Nav icon ---------------------------------------------------- */
const navIcon = (href: string) => {
  if (href.startsWith("/productos"))           return <Package      size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/its"))        return <Wrench       size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios/revisa"))     return <ShieldCheck  size={15} aria-hidden="true" />;
  if (href.startsWith("/soporte"))              return <LifeBuoy     size={15} aria-hidden="true" />;
  if (href.startsWith("/servicios"))            return <Settings     size={15} aria-hidden="true" />;
  if (href.startsWith("/alquiler"))             return <Layers       size={15} aria-hidden="true" />;
  if (href.startsWith("/formacion"))            return <BookOpen     size={15} aria-hidden="true" />;
  if (href.startsWith("/soluciones"))           return <Zap          size={15} aria-hidden="true" />;
  if (href.startsWith("https://tienda"))        return <ShoppingCart size={15} aria-hidden="true" />;
  if (href.startsWith("/empresa"))              return <Building2    size={15} aria-hidden="true" />;
  return <Building2 size={15} aria-hidden="true" />;
};

/* ---- Search index ------------------------------------------------ */
const SEARCH_INDEX = [
  { label: "Productos",             href: "/productos" },
  { label: "Alquiler de equipos",   href: "/alquiler" },
  { label: "ITS Servicio T\u00e9cnico",  href: "/servicios/its-servicio-tecnico" },
  { label: "Revisa Trazabilidad",   href: "/servicios/revisa-trazabilidad" },
  { label: "Soporte t\u00e9cnico",       href: "/soporte" },
  { label: "Formaci\u00f3n",            href: "/formacion" },
  { label: "Soluciones el\u00e9ctricas", href: "/soluciones" },
  { label: "Empresa",               href: "/empresa" },
  { label: "Kit Digital",           href: "/kit-digital" },
  { label: "Contacto",              href: "/contacto" },
];

/* ---- HeaderSearch ------------------------------------------------ */
function HeaderSearch() {
  const router   = useRouter();
  const [query,   setQuery]   = useState("");
  const [open,    setOpen]    = useState(false);
  const wrapRef  = useRef<HTMLDivElement>(null);

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
    const h = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", flexShrink: 0 }}>
      <form onSubmit={onSubmit} style={{
        display: "flex", alignItems: "center", gap: "6px",
        height: "34px", padding: "0 10px", borderRadius: "999px",
        border: "1px solid var(--line)",
        background: "color-mix(in srgb, var(--bg-muted) 80%, transparent)",
      }}>
        <Search size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
        <input
          type="search" value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Buscar..." aria-label="Buscar en Tranluz"
          autoComplete="off" className="hs-input"
        />
        {query && (
          <button type="button" onClick={() => { setQuery(""); setOpen(false); }}
            className="hs-clear" aria-label="Limpiar">
            <X size={12} />
          </button>
        )}
      </form>
      {open && results.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0,
          minWidth: "220px", background: "var(--bg-elevated)",
          border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow)", padding: "6px", zIndex: 60,
        }}>
          {results.map(item => (
            <button key={item.href} type="button"
              onClick={() => go(item.href)}
              style={{
                display: "block", width: "100%", padding: "8px 10px",
                borderRadius: "var(--radius)", border: "none",
                background: "transparent", color: "var(--text)",
                fontSize: "0.85rem", textAlign: "left", cursor: "pointer",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-muted)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >{item.label}</button>
          ))}
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

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled}
        aria-label="Cabecera principal"
      >
        <nav
          ref={navRef}
          className="navbar"
          aria-label="Navegaci\u00f3n principal"
        >
          {/* Logo */}
          <Link href="/" className="brand-mark" aria-label="Tranluz — inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assets.logo} alt="Tranluz" width={104} height={27} />
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav">
            <ul className="main-nav" role="list">
              {mainNavigation.map(item => (
                <li key={item.href} style={{ position: "relative" }}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setOpenMenu(openMenu === item.href ? null : item.href)}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "8px 10px", border: "none", background: "transparent",
                          color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 760,
                          borderRadius: "999px", cursor: "pointer", whiteSpace: "nowrap",
                        }}
                      >
                        {navIcon(item.href)}&nbsp;{item.label}
                        <ChevronDown size={13} style={{
                          transition: "transform 200ms",
                          transform: openMenu === item.href ? "rotate(180deg)" : "none",
                        }} />
                      </button>
                      {openMenu === item.href && (
                        <div style={{
                          position: "absolute", top: "calc(100% + 6px)", left: 0,
                          minWidth: "200px", background: "var(--bg-elevated)",
                          border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
                          boxShadow: "var(--shadow)", padding: "6px", zIndex: 60,
                        }}>
                          {item.children.map(child => (
                            <Link key={child.href} href={child.href}
                              onClick={() => setOpenMenu(null)}
                              style={{
                                display: "flex", alignItems: "center", gap: "8px",
                                padding: "9px 12px", borderRadius: "var(--radius)",
                                color: "var(--text-muted)", fontSize: "0.84rem", fontWeight: 600,
                              }}
                            >
                              {navIcon(child.href)}&nbsp;{child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "8px 10px", borderRadius: "999px",
                        color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 760 }}
                    >{navIcon(item.href)}&nbsp;{item.label}</a>
                  ) : (
                    <Link href={item.href}
                      style={{ display: "inline-flex", alignItems: "center", gap: "5px",
                        padding: "8px 10px", borderRadius: "999px",
                        color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 760 }}
                    >{navIcon(item.href)}&nbsp;{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Search */}
          <div className="desktop-nav" style={{ flex: "0 1 auto" }}>
            <HeaderSearch />
          </div>

          {/* Actions: ThemeToggle → LanguageSelector (al final) */}
          <div className="header-actions">
            <ThemeToggle />
            <LanguageSelector />

            {/* Mobile toggle */}
            <button
              type="button"
              className="icon-button"
              aria-label={mobileOpen ? "Cerrar men\u00fa" : "Abrir men\u00fa"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              style={{ display: "none" }}
              id="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div
            id={mobileMenuId}
            style={{
              position: "fixed", top: 0, right: 0, bottom: 0,
              width: "min(85vw, 340px)",
              background: "var(--bg-elevated)",
              boxShadow: "var(--shadow)",
              display: "flex", flexDirection: "column",
              zIndex: 49,
              overflowY: "auto",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid var(--line)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assets.logo} alt="Tranluz" width={90} height={23} />
              <button type="button" onClick={() => setMobileOpen(false)}
                className="haction-btn" aria-label="Cerrar">
                <X size={18} />
              </button>
            </div>

            {/* Nav */}
            <nav style={{ flex: 1, padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {mainNavigation.map(item => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "12px 14px", color: "var(--text)",
                        fontWeight: 700, fontSize: "0.92rem",
                      }}>
                        {navIcon(item.href)}&nbsp;{item.label}
                      </div>
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "10px 28px", borderRadius: "var(--radius)",
                            color: "var(--text-muted)", fontSize: "0.86rem", fontWeight: 600,
                          }}
                        >{navIcon(child.href)}&nbsp;{child.label}</Link>
                      ))}
                    </>
                  ) : item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "12px 14px", borderRadius: "var(--radius)",
                        color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600,
                      }}
                    >{navIcon(item.href)}&nbsp;{item.label}</a>
                  ) : (
                    <Link href={item.href} onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        padding: "12px 14px", borderRadius: "var(--radius)",
                        color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 600,
                      }}
                    >{navIcon(item.href)}&nbsp;{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer móvil */}
            <div style={{
              padding: "16px 20px",
              borderTop: "1px solid var(--line)",
              display: "flex", flexDirection: "column", gap: "10px",
            }}>
              <a href={`tel:${brand.phone?.replace(/\s/g, "") ?? ""}`}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "12px",
                  borderRadius: "999px", background: "var(--brand)",
                  color: "#fff", fontWeight: 760, fontSize: "0.9rem",
                }}
              >
                {brand.phone ?? "+34 954 367 290"}
              </a>
              <Link href="/contacto" onClick={() => setMobileOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", padding: "12px",
                  borderRadius: "999px",
                  border: "1px solid var(--line)",
                  color: "var(--text)", fontWeight: 700, fontSize: "0.9rem",
                }}
              >Solicitar presupuesto</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
