// src/app/sitemap.ts
// Fix C5 + 1.1: Sitemap dinámico con hreflang para ES/EN
// Generado por Next.js 14+ App Router

import { MetadataRoute } from 'next';

const BASE_URL = 'https://tranluz.com';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/productos', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/formacion', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/kit-digital', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contacto', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/presupuesto', priority: 0.9, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${BASE_URL}/es${path}`,
        en: `${BASE_URL}/en${path}`,
      },
    },
  }));
}
