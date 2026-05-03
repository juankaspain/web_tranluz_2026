import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solicitar presupuesto — Tranluz",
  description: "Solicita un presupuesto personalizado para equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS o formación. Respuesta en menos de 24 horas.",
  path: "/presupuesto",
  ogImage: "/og/presupuesto.jpg",
});

export { default } from "./page-content";
