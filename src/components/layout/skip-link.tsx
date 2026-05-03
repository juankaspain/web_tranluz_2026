"use client";

export function SkipLink() {
  return (
    <a
      href="#contenido"
      className="skip-link"
      style={{
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
        zIndex: 9999,
        background: "var(--color-primary, #01696f)",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "0 0 0.5rem 0",
        fontWeight: 600,
        fontSize: "1rem",
        textDecoration: "none",
        outline: "3px solid transparent",
      }}
      onFocus={(e) => {
        (e.target as HTMLAnchorElement).style.top = "0";
        (e.target as HTMLAnchorElement).style.left = "0";
      }}
      onBlur={(e) => {
        (e.target as HTMLAnchorElement).style.top = "-9999px";
        (e.target as HTMLAnchorElement).style.left = "-9999px";
      }}
    >
      Ir al contenido principal
    </a>
  );
}
