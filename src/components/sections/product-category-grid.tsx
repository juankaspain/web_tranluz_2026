import { ArrowRight } from "lucide-react";
import { productCategories } from "@/content/product-categories";

type ProductCategoryGridProps = {
  query?: string;
};

export function ProductCategoryGrid({ query = "" }: ProductCategoryGridProps) {
  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = normalizedQuery
    ? productCategories.filter((category) =>
        `${category.title} ${category.summary}`.toLowerCase().includes(normalizedQuery)
      )
    : productCategories;

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Catálogo técnico</p>
        <h2>Productos organizados por aplicación, no por burocracia interna.</h2>
        <p>
          Alta tensión, tendido, fibra, seguridad, hidráulica y herramientas en
          una taxonomía preparada para búsqueda, filtros y ficha técnica.
        </p>
      </div>
      {query ? (
        <div className="search-feedback" role="status">
          <strong>Búsqueda activa</strong>
          <span>
            {visibleCategories.length > 0
              ? `Resultados para «${query}» en categorías técnicas.`
              : `No hay coincidencia directa para «${query}». Te mostramos categorías relacionadas y acceso a presupuesto técnico.`}
          </span>
          <a className="button button-secondary" href="/presupuesto">
            Pedir ayuda técnica
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      ) : null}
      <div className="grid grid-three">
        {(visibleCategories.length > 0 ? visibleCategories : productCategories).map((category, index) => (
          <a className="content-card" href={category.href} key={category.href}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <strong>
              Explorar
              <ArrowRight aria-hidden="true" size={16} />
            </strong>
          </a>
        ))}
      </div>
    </section>
  );
}
