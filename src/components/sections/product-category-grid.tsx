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
        <p className="eyebrow">Catalogo tecnico</p>
        <h2>Productos organizados por aplicacion, no por burocracia interna.</h2>
        <p>
          Alta tension, tendido, fibra, seguridad, hidraulica y herramientas en
          una taxonomia preparada para busqueda, filtros y ficha tecnica.
        </p>
      </div>
      {query ? (
        <div className="search-feedback" role="status">
          <strong>Busqueda activa</strong>
          <span>
            {visibleCategories.length > 0
              ? `Resultados para "${query}" en categorias tecnicas.`
              : `No hay coincidencia directa para "${query}". Te mostramos categorias relacionadas y acceso a presupuesto tecnico.`}
          </span>
          <a className="button button-secondary" href="/presupuesto">
            Pedir ayuda tecnica
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
