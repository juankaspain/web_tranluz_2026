import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tranluz — Equipos eléctricos y servicio técnico",
    short_name: "Tranluz",
    description:
      "Especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, formación y trazabilidad para obras eléctricas críticas.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#f4f6f7",
    theme_color: "#bd500e",
    lang: "es",
    dir: "ltr",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ],
    shortcuts: [
      {
        name: "Solicitar presupuesto",
        short_name: "Presupuesto",
        description: "Envía una solicitud de presupuesto rápida",
        url: "/presupuesto",
        icons: [{ src: "/icons/shortcut-presupuesto.png", sizes: "96x96" }]
      },
      {
        name: "Catálogo de productos",
        short_name: "Catálogo",
        description: "Explora nuestro catálogo técnico completo",
        url: "/productos",
        icons: [{ src: "/icons/shortcut-catalogo.png", sizes: "96x96" }]
      },
      {
        name: "Alquiler de equipos",
        short_name: "Alquiler",
        description: "Rent Puller — alquiler rápido de equipos",
        url: "/alquiler",
        icons: [{ src: "/icons/shortcut-alquiler.png", sizes: "96x96" }]
      }
    ]
  };
}
