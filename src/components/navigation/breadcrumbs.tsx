import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  /** Texto visible del enlace */
  label: string;
  /** Ruta relativa (e.g. "/productos"). Undefined para el último ítem (actual) */
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** URL base absoluta para el JSON-LD (por defecto https://www.tranluz.es) */
  baseUrl?: string;
  className?: string;
}

/**
 * Breadcrumbs — E3
 * - Navegación semántica con <nav aria-label="Ruta de navegación">
 * - JSON-LD BreadcrumbList inline con Schema.org
 * - Diseño visual minimalista usando clases CSS existentes
 */
export function Breadcrumbs({
  items,
  baseUrl = "https://www.tranluz.es",
  className,
}: BreadcrumbsProps) {
  // Siempre incluimos Inicio como primer elemento
  const allItems: BreadcrumbItem[] = [
    { label: "Inicio", href: "/" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      {/* JSON-LD estructurado para buscadores */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navegación visual */}
      <nav
        aria-label="Ruta de navegación"
        className={["breadcrumbs", className].filter(Boolean).join(" ")}
      >
        <ol className="breadcrumbs-list" role="list">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.label} className="breadcrumbs-item">
                {index === 0 && (
                  <Home
                    size={13}
                    className="breadcrumbs-home-icon"
                    aria-hidden="true"
                  />
                )}

                {!isLast && item.href ? (
                  <Link href={item.href} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="breadcrumbs-current"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight
                    size={12}
                    className="breadcrumbs-separator"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
