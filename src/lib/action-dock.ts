// src/lib/action-dock.ts
// Fix 2.3: Activar .action-dock en mobile tras 400px de scroll
// Usar con IntersectionObserver para performance óptima
// Importar y llamar initActionDock() en el layout client component

export function initActionDock() {
  if (typeof window === 'undefined') return;

  const dock = document.querySelector('.action-dock') as HTMLElement | null;
  const hero = document.querySelector('.hero-section') as HTMLElement | null;
  if (!dock) return;

  if (hero) {
    // Opción A: IntersectionObserver sobre el hero (más eficiente)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mostrar dock cuando el hero sale de vista
        dock.classList.toggle('visible', !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
  } else {
    // Opción B: fallback scroll listener con throttle
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          dock.classList.toggle('visible', window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}
