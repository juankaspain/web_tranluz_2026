import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Formación técnica para operadores de equipos eléctricos",
  description: "Cursos especializados para operadores de equipos eléctricos y de tendido de fibra óptica. Formación certificada orientada a la prevención de riesgos laborales.",
  path: "/formacion",
  ogImage: "/og/formacion.jpg",
});

export { default } from "./page-content";
