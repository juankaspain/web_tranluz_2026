import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto — Tranluz Sevilla",
  description: "Contacta con Tranluz en Sevilla para presupuestos, consultas técnicas, alquiler de equipos o formación. Teléfono, email y ubicación disponibles.",
  path: "/contacto",
  ogImage: "/og/contacto.jpg",
});

export { default } from "./page-content";
