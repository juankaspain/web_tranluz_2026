import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tranluz",
    short_name: "Tranluz",
    description:
      "Equipos, servicio tecnico, alquiler, formacion y trazabilidad para trabajos electricos y de telecomunicaciones.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6f7",
    theme_color: "#bd500e",
    lang: "es"
  };
}
