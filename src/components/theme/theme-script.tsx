export function ThemeScript() {
  const code = `
    (() => {
      try {
        var stored = null;
        try { stored = localStorage.getItem("tranluz-theme"); } catch (e) {}
        var preferred = "light";
        try {
          preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch (e) {}
        var theme = stored || preferred;
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (e) {
        try {
          document.documentElement.dataset.theme = "light";
          document.documentElement.style.colorScheme = "light";
        } catch (e2) {}
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
