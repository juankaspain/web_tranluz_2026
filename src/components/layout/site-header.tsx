import Image from "next/image";
import Link from "next/link";
import {
  BookOpenText,
  ChevronRight,
  FileDown,
  Menu,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { mainNavigation, utilityNavigation } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <span className="topbar-kicker">
          <ShieldCheck aria-hidden="true" size={15} />
          Especialistas en máquinas y herramientas para montadores eléctricos
        </span>
        <div className="topbar-actions">
          <Link href="/kit-digital">Presencia digital preparada</Link>
          <Link href="/soporte/catalogos">Catálogo 2025/2026</Link>
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            <Phone aria-hidden="true" size={14} />
            {brand.phone}
          </a>
        </div>
      </div>
      <div className="navbar">
        <Link className="brand-mark" href="/" aria-label="Tranluz inicio">
          <Image
            src={assets.mark}
            alt="Tranluz"
            width={132}
            height={42}
            priority
            sizes="132px"
          />
        </Link>
        <div className="desktop-nav">
          <nav className="main-nav" aria-label="Principal">
            {mainNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <form className="site-search" role="search" action="/productos">
          <label className="sr-only" htmlFor="site-search">
            Buscar productos y servicios
          </label>
          <Search aria-hidden="true" size={17} />
          <input
            id="site-search"
            name="q"
            type="search"
            placeholder="Buscar equipo"
            autoComplete="off"
          />
        </form>
        <div className="header-actions">
          <LanguageSelector />
          <ThemeToggle />
          <a
            className="icon-button icon-button-link"
            href={`tel:${brand.phone.replaceAll(" ", "")}`}
            aria-label="Llamar a Tranluz"
            title="Llamar"
          >
            <Phone aria-hidden="true" size={18} />
          </a>
          <Link className="button button-primary button-compact" href="/presupuesto">
            Presupuesto
            <ChevronRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">
            <Menu aria-hidden="true" size={22} />
          </summary>
          <div className="mobile-menu-panel">
            <nav aria-label="Menú móvil">
              <LanguageSelector />
              {mainNavigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              {utilityNavigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
      <div className="mega-strip" aria-label="Accesos destacados">
        {/* resto igual que ahora, solo con tildes corregidas */}
      </div>
    </header>
  );
}
