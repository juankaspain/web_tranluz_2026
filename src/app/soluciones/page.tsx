import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Soluciones para obras eléctricas — Tranluz",
  description: "Soluciones integrales para tendido eléctrico, fibra óptica, alta tensión y seguridad eléctrica: equipos, alquiler, formación y servicio técnico en un solo proveedor.",
  path: "/soluciones",
  ogImage: "/images/generated/tranluz-hero-ai.png",
});

export { default } from "./page-content";
