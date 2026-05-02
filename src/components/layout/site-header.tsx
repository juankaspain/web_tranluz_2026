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

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      <div
        ref={navRef}
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--line)",
          background: "var(--bg-elevated)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Topbar */}
        <div
          className="topbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            padding: "8px 24px",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            borderBottom: "1px solid color-mix(in srgb, var(--line) 72%, transparent)",
          }}
        >
          <span>{brand.claim}</span>
          <nav aria-label="Utilidades" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href={assets.catalogUrl} target="_blank" rel="noopener">Catálogo 2025/2026</Link>
            <a href={`tel:${brand.phone}`}>{brand.phone}</a>
          </nav>
        </div>

        {/* Navbar principal */}
        <header
          className="navbar"
          role="banner"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            minHeight: "var(--header-height, 78px)",
            padding: "0 24px",
            width: "min(100%, var(--max-width, 1240px))",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Tranluz - inicio"
            className="navbar-logo"
            style={{
              display: "inline-flex",
              flex: "0 0 auto",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--line)",
              borderRadius: "999px",
              padding: "7px 12px",
              background: "var(--bg-elevated)",
            }}
          >
            <Image
              src={assets.logo}
              alt="Tranluz"
              width={120}
              height={36}
              priority
            />
          </Link>

          {/* Nav escritorio */}
          <nav
            aria-label="Principal"
            className="navbar-nav"
            style={{
              display: "flex",
              flex: "1 1 auto",
              alignItems: "center",
              gap: "4px",
              flexWrap: "nowrap",
              minWidth: 0,
            }}
          >
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMega === item.href;
              return (
                <div key={item.href} style={{ position: "relative" }}>
                  {hasChildren ? (
                    <>
                      <button
                        className="nav-btn"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setOpenMega(isOpen ? null : item.href)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "10px 7px",
                          borderRadius: "999px",
                          fontSize: "0.86rem",
                          fontWeight: 760,
                          color: "var(--text-muted)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.label}
                        <ChevronDown size={14} aria-hidden="true" />
                      </button>
                      {isOpen && (
                        <ul
                          role="menu"
                          style={{
                            position: "absolute",
                            top: "calc(100% + 8px)",
                            left: 0,
                            minWidth: "200px",
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--line)",
                            borderRadius: "var(--radius-lg, 14px)",
                            boxShadow: "var(--shadow)",
                            padding: "8px",
                            listStyle: "none",
                            zIndex: 100,
                            margin: 0,
                          }}
                        >
                          {item.children!.map((child) => (
                            <li key={child.href} role="none">
                              <Link
                                href={child.href}
                                role="menuitem"
                                onClick={() => setOpenMega(null)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  padding: "8px 12px",
                                  borderRadius: "var(--radius, 8px)",
                                  fontSize: "0.85rem",
                                  color: "var(--text-muted)",
                                }}
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
                    <Link
                      href={item.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "10px 7px",
                        borderRadius: "999px",
                        fontSize: "0.86rem",
                        fontWeight: 760,
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Buscador */}
          <form
            role="search"
            className="navbar-search"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--line)",
              borderRadius: "999px",
              padding: "0 14px",
              height: "44px",
              flex: "0 1 290px",
              minWidth: "180px",
            }}
          >
            <Search size={16} aria-hidden="true" style={{ color: "var(--text-muted)", flexShrink: 0 }} />
            <input
              type="search"
              placeholder="Buscar equipo…"
              aria-label="Buscar equipo"
              autoComplete="off"
              style={{
                border: "none",
                background: "none",
                outline: "none",
                width: "100%",
                fontSize: "0.875rem",
                color: "var(--text)",
              }}
            />
          </form>

          {/* Acciones */}
          <div
            className="navbar-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
            }}
          >
            <ThemeToggle />
            <LanguageSelector />
            <Link
              href="/presupuesto"
              className="btn-presupuesto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "42px",
                borderRadius: "999px",
                padding: "0 18px",
                background: "var(--brand)",
                color: "#ffffff",
                fontWeight: 760,
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
              }}
            >
              Presupuesto
            </Link>
          </div>

          {/* Hamburguesa */}
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

        {/* Mega-strip */}
        <nav
          aria-label="Accesos rápidos"
          className="mega-strip"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
            gap: "8px",
            padding: "0 24px 14px",
            width: "min(100%, var(--max-width, 1240px))",
            margin: "0 auto",
          }}
        >
          {megaItems.map((mi) => (
            <Link
              key={mi.href}
              href={mi.href}
              style={{
                display: "grid",
                gridTemplateColumns: "auto minmax(0, 1fr)",
                alignItems: "center",
                gap: "10px",
                minHeight: "54px",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-lg, 14px)",
                padding: "9px 12px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "999px",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                  flexShrink: 0,
                }}
              >
                {mi.icon}
              </span>
              <span style={{ minWidth: 0 }}>
                <strong style={{ display: "block", color: "var(--text)", fontSize: "0.85rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mi.label}</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>{mi.sub}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Menú móvil */}
        {mobileOpen && (
          <div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(82vw, 340px)",
              background: "var(--bg-elevated)",
              borderLeft: "1px solid var(--line)",
              zIndex: 200,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              style={{
                alignSelf: "flex-end",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                border: "1px solid var(--line)",
                borderRadius: "999px",
                background: "none",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              <X aria-hidden="true" />
            </button>
            <nav aria-label="Menú móvil" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: "var(--radius, 8px)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
              {megaItems.map((mi) => (
                <Link
                  key={mi.href}
                  href={mi.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius, 8px)",
                    color: "var(--text-muted)",
                  }}
                >
                  {mi.icon}
                  <span>
                    <strong style={{ display: "block", color: "var(--text)" }}>{mi.label}</strong>
                    <span style={{ fontSize: "0.8rem" }}>{mi.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Overlay móvil */}
        {mobileOpen && (
          <div
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 190,
            }}
          />
        )}
      </div>
    </>
  );
}
