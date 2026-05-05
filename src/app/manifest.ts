import type { MetadataRoute } from "next";

const logo = "/images/Tranluz/Tranluz_Logo.svg";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tranluz - Equipos electricos y servicio tecnico",
    short_name: "Tranluz",
    description:
      "Especialistas desde 1987 en equipos electricos, alquiler de cabrestantes, servicio tecnico ITS, formacion y trazabilidad para obras electricas criticas.",
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
        src: logo,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ],
    shortcuts: [
      {
        name: "Solicitar presupuesto",
        short_name: "Presupuesto",
        description: "Enviar una solicitud de presupuesto rapida",
        url: "/presupuesto",
        icons: [{ src: logo, sizes: "any", type: "image/svg+xml" }]
      },
      {
        name: "Catalogo de productos",
        short_name: "Catalogo",
        description: "Explorar el catalogo tecnico completo",
        url: "/productos",
        icons: [{ src: logo, sizes: "any", type: "image/svg+xml" }]
      },
      {
        name: "Alquiler de equipos",
        short_name: "Alquiler",
        description: "Rent Puller - alquiler rapido de equipos",
        url: "/alquiler",
        icons: [{ src: logo, sizes: "any", type: "image/svg+xml" }]
      }
    ]
  };
}
