"use client";

import { Search, X, Loader2 } from "lucide-react";

interface SearchStateProps {
  /** Valor actual del input de búsqueda */
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  /** Estado de carga mientras se busca */
  isLoading?: boolean;
  className?: string;
  /** ID para label externo */
  id?: string;
  /** Aria-label si no hay label externo */
  ariaLabel?: string;
}

/**
 * SearchState — E5
 * Input de búsqueda con estados: idle, loading, con valor (botón limpiar).
 * Aplica aria-busy durante la carga y aria-label descriptivo.
 */
export function SearchInput({
  value,
  onChange,
  onClear,
  placeholder = "Buscar equipos…",
  isLoading = false,
  className,
  id,
  ariaLabel = "Buscar",
}: SearchStateProps) {
  return (
    <div
      className={["search-input-wrapper", className].filter(Boolean).join(" ")}
      aria-busy={isLoading}
    >
      <span className="search-input-icon" aria-hidden="true">
        {isLoading ? (
          <Loader2 size={16} className="search-loading-spinner" />
        ) : (
          <Search size={16} />
        )}
      </span>

      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={id ? undefined : ariaLabel}
        className="search-input"
        autoComplete="off"
        spellCheck={false}
      />

      {value && !isLoading && (
        <button
          type="button"
          onClick={onClear ?? (() => onChange(""))}
          className="search-clear-btn"
          aria-label="Limpiar búsqueda"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
