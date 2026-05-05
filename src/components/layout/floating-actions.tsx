const PHONE = "+34 954 367 290";
const PHONE_HREF = `tel:${PHONE.replace(/\s/g, "")}`;

export function FloatingActions() {
  return (
    <>
      <aside id="floating-actions" className="floating-actions" aria-label="Acciones rapidas">
        <button
          id="floating-actions-toggle"
          type="button"
          className="floating-actions__tab"
          aria-label="Abrir acciones de contacto"
          aria-expanded="false"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="floating-actions__panel" aria-hidden="true">
          <a className="floating-actions__button" href={PHONE_HREF} tabIndex={-1} aria-label={`Llamar a Tranluz ${PHONE}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.89.7 2.78a2 2 0 0 1-.45 2.11L8.09 9.88a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.82.57 2.78.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Llamar</span>
          </a>
          <a className="floating-actions__button" href="/contacto" tabIndex={-1} aria-label="Ir a contacto">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>Contacto</span>
          </a>
        </div>
      </aside>

      <button id="scroll-top" type="button" className="scroll-top" aria-label="Volver arriba">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      <script
        dangerouslySetInnerHTML={{
          __html: `
window.setTimeout(() => {
  const root = document.getElementById("floating-actions");
  const toggle = document.getElementById("floating-actions-toggle");
  const panel = root?.querySelector(".floating-actions__panel");
  const links = root?.querySelectorAll(".floating-actions__button");
  const topButton = document.getElementById("scroll-top");
  if (!root || !toggle || !panel || !links || !topButton) return;

  const setOpen = (open) => {
    root.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar acciones de contacto" : "Abrir acciones de contacto");
    panel.setAttribute("aria-hidden", String(!open));
    links.forEach((link) => link.tabIndex = open ? 0 : -1);
  };

  toggle.addEventListener("click", () => setOpen(!root.classList.contains("is-open")));
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const onScroll = () => topButton.classList.toggle("is-visible", window.scrollY > 360);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}, 1200);
          `.trim(),
        }}
      />
    </>
  );
}
