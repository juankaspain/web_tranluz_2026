export function ThemeScript() {
  const code = `
    (() => {
      try {
        const stored = localStorage.getItem("tranluz-theme");
        const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const theme = stored || preferred;
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

