import type { ReactNode } from "react";

interface EmptyStateProps {
  /** Icono o ilustración opcional (componente React) */
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Acción principal (botón o enlace) */
  action?: ReactNode;
  className?: string;
}

/**
 * EmptyState — E5
 * Estado vacío reutilizable para catálogo, búsqueda y listas.
 * Ejemplo de uso:
 *
 * <EmptyState
 *   icon={<PackageSearch size={40} />}
 *   title="Sin resultados"
 *   description="Prueba con otros términos de búsqueda."
 *   action={<Link href="/productos" className="button button-primary">Ver catálogo</Link>}
 * />
 */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={["empty-state", className].filter(Boolean).join(" ")}
      role="status"
      aria-live="polite"
    >
      {icon && (
        <div className="empty-state-icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="empty-state-title">{title}</h3>
      {description && (
        <p className="empty-state-description">{description}</p>
      )}
      {action && <div className="empty-state-action">{action}</div>}
    </div>
  );
}
