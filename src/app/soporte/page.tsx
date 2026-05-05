import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Soporte técnico y catálogos — Tranluz",
  description: "Centro de soporte técnico Tranluz: descarga catálogos, manuales y fichas técnicas. Asistencia directa por teléfono y email para equipos eléctricos y de tendido.",
  path: "/soporte",
  ogImage: "/images/generated/tranluz-hero-ai.png",
});

export { default } from "./page-content";
