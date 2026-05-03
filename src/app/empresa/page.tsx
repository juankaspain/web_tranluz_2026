import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Tranluz — Especialistas desde 1987",
  description: "Conoce a Tranluz: más de 35 años especializados en equipos eléctricos, alquiler de maquinaria de tendido y servicio técnico para obras eléctricas críticas en España.",
  path: "/empresa",
  ogImage: "/og/empresa.jpg",
});

export { default } from "./page-content";
