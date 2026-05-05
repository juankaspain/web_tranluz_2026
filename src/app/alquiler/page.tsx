import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Alquiler de equipos de tendido — Rent Puller",
  description: "Alquiler rápido de cabrestantes, frenadoras y equipos de soplado de fibra óptica con asistencia técnica incluida. Solución flexible para obras eléctricas.",
  path: "/alquiler",
  ogImage: "/images/generated/tranluz-service-ai.png",
});

export { default } from "./page-content";
