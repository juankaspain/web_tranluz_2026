// src/lib/theme-script.ts
// Fix 3.4: Script inline para evitar FOUC en dark/light mode
// Incluir en <head> de layout.tsx como dangerouslySetInnerHTML
// El script se ejecuta ANTES del paint — NO puede usar módulos ESM

export const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('tranluz-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    // localStorage bloqueado (iframe sandbox, etc) — usar preferencia del sistema
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
})();
`;

// Uso en layout.tsx:
// import { themeScript } from '@/lib/theme-script';
// <script dangerouslySetInnerHTML={{ __html: themeScript }} />
// Colocar como PRIMER elemento dentro de <head>
