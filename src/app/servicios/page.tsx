import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de traducción técnica e interpretación",
  description: "Servicios profesionales de traducción técnica, interpretación simultánea, revisión y trazabilidad de documentos para empresas. Sede en Sevilla, atención nacional.",
  path: "/servicios",
  ogImage: "/images/generated/tranluz-service-ai.png",
});

export { default } from "./page-content";
