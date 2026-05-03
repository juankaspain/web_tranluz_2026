import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Catálogo de equipos de tendido eléctrico",
  description: "Equipos eléctricos especializados: cabrestantes, frenadoras, herramientas de alta tensión, fibra óptica y seguridad eléctrica. Catálogo técnico completo.",
  path: "/productos",
  ogImage: "/og/productos.jpg",
});

export { default } from "./page-content";
