// src/lib/mobile-menu.ts
// Fix 2.1 / A5: Menú móvil accesible — trampa de foco, Escape, click-outside
// Sustituye el elemento <details>/<summary> por lógica controlada

export function initMobileMenu() {
  if (typeof window === 'undefined') return;

  const toggleBtn = document.querySelector('[data-mobile-toggle]') as HTMLButtonElement | null;
  const panel = document.querySelector('.mobile-panel') as HTMLElement | null;
  const closeBtn = document.querySelector('[data-mobile-close]') as HTMLButtonElement | null;
  const overlay = document.querySelector('.mobile-overlay') as HTMLElement | null;

  if (!toggleBtn || !panel) return;

  const focusableSelectors =
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function getFocusables() {
    return Array.from(panel!.querySelectorAll<HTMLElement>(focusableSelectors));
  }

  function openMenu() {
    panel!.setAttribute('aria-hidden', 'false');
    panel!.classList.add('open');
    toggleBtn!.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Foco al primer elemento del panel
    const first = getFocusables()[0];
    if (first) setTimeout(() => first.focus(), 50);
  }

  function closeMenu() {
    panel!.setAttribute('aria-hidden', 'true');
    panel!.classList.remove('open');
    toggleBtn!.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggleBtn!.focus(); // devolver foco al botón
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = panel.getAttribute('aria-hidden') === 'false';
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closeMenu();
    }
  });

  // Trampa de foco
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = getFocusables();
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
