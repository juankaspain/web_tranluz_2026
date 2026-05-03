import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kit Digital para empresas eléctricas — Tranluz",
  description: "Aprovecha las ayudas Kit Digital del Gobierno de España para digitalizar tu empresa eléctrica. Tranluz te acompaña en la solicitud y la implantación.",
  path: "/kit-digital",
  ogImage: "/og/kit-digital.jpg",
});

export { default } from "./page-content";
