"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useId } from "react";
import {
  ChevronDown,
  FileDown,
  Menu,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation, utilityNavigation } from "@/config/navigation";

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
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      role="banner"
    >
      {/* ── Topbar ── */}
      <div className="topbar" aria-label="Barra de información rápida">
        <span className="topbar-kicker">
          <ShieldCheck aria-hidden="true" size={14} />
          Especialistas en máquinas y herramientas para montadores eléctricos
        </span>
        <div className="topbar-actions">
          <Link
            href="/soporte/catalogos"
            className="topbar-link"
            aria-label="Descargar catálogo 2025/2026"
          >
            <FileDown aria-hidden="true" size={13} />
            Catálogo 2025/2026
          </Link>
          <a
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
            className="topbar-link"
            aria-label={`Llamar a Tranluz: ${brand.phone}`}
          >
            <Phone aria-hidden="true" size={13} />
            {brand.phone}
          </a>
        </div>
      </div>

      {/* ── Navbar principal ── */}
      <div
        className="navbar"
        ref={navRef}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          className="brand-mark"
          href="/"
          aria-label="Tranluz – Ir al inicio"
        >
          <Image
            src={assets.mark}
            alt="Tranluz"
            width={132}
            height={42}
            priority
            sizes="132px"
            className="header-logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          aria-label="Menú principal"
          id="main-nav"
        >
          <ul className="main-nav" role="menubar" aria-label="Navegación">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMega === item.href;
              return (
                <li
                  key={item.href}
                  className={`nav-item${hasChildren ? " nav-item--has-dropdown" : ""}${isOpen ? " nav-item--open" : ""}`}
                  role="none"
                >
                  {hasChildren ? (
                    <>
                      <button
                        className="nav-link nav-link--trigger"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-controls={`dropdown-${item.href.replace("/", "")}`}
                        onClick={() => setOpenMega(isOpen ? null : item.href)}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          size={14}
                          className={`nav-chevron${isOpen ? " nav-chevron--open" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div
                          className="nav-dropdown"
                          id={`dropdown-${item.href.replace("/", "")}`}
                          role="menu"
                          aria-label={`Submenú ${item.label}`}
                        >
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="nav-dropdown-link"
                              role="menuitem"
                              onClick={() => setOpenMega(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-link"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Search */}
        <form
          className="site-search"
          role="search"
          action="/productos"
          aria-label="Buscar productos"
        >
          <label className="sr-only" htmlFor="site-search-input">
            Buscar productos y servicios
          </label>
          <Search
            aria-hidden="true"
            size={16}
            className="site-search-icon"
          />
          <input
            id="site-search-input"
            name="q"
            type="search"
            placeholder="Buscar equipo…"
            autoComplete="off"
            className="site-search-input"
            aria-label="Buscar productos y servicios Tranluz"
          />
        </form>

        {/* Utility actions */}
        <div className="header-actions" role="group" aria-label="Acciones de cabecera">
          <a
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
            className="header-cta-phone"
            aria-label={`Llamar a Tranluz al ${brand.phone}`}
          >
            <Phone aria-hidden="true" size={15} />
            <span className="sr-only">Llamar</span>
          </a>
          <Link
            href="/presupuesto"
            className="button button-primary header-cta"
            aria-label="Solicitar presupuesto técnico"
          >
            Presupuesto
          </Link>
          <ThemeToggle />
          <LanguageSelector />

          {/* Mobile burger */}
          <button
            className="mobile-menu-btn"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <X aria-hidden="true" size={22} />
              : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id={mobileMenuId}
        className={`mobile-menu${mobileOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        <nav aria-label="Menú móvil">
          <ul role="list">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ul className="mobile-subnav" role="list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="mobile-subnav-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            {utilityNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-utility-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mega-strip info — sin Kit Digital — */}
        <dl className="mobile-mega-strip" aria-label="Información de contacto rápido">
          <div>
            <dt><Wrench aria-hidden="true" size={14} /> ITS Servicio Técnico</dt>
            <dd>Revisiones e informes</dd>
          </div>
          <div>
            <dt><ShieldCheck aria-hidden="true" size={14} /> Revisiones EPI</dt>
            <dd>Control y alertas</dd>
          </div>
          <div>
            <dt><MapPin aria-hidden="true" size={14} /> Madrid</dt>
            <dd>Atención técnica nacional</dd>
          </div>
        </dl>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
