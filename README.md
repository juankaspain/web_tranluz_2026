# web_tranluz_2026

Plátaforma técnico-comercial de **[Tranluz](https://www.tranluz.es)** — especialistas desde 1987 en equipos eléctricos, alquiler de cabrestantes, servicio técnico ITS, trazabilidad y formación para obras eléctricas críticas.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | CSS custom (design tokens, dark mode) |
| Tipografías | Manrope Variable + Archivo Variable |
| Imágenes | WebP / AVIF – generadas + servidas vía `next/image` |
| Despliegue | Hostinger (produccion) |

## Estructura

```
src/
  app/           ← rutas de página (App Router)
  components/    ← UI: sections, layout, seo, theme, i18n
  content/       ← datos: assets.ts, home.ts, services.ts...
  styles/        ← globals.css (design system completo)
  i18n/          ← configuración de idioma
  lib/           ← utilidades compartidas
  types/         ← definiciones TypeScript
public/
  images/        ← assets estáticos (WebP, SVG)
```

## Iteraciones UI/UX aplicadas (mayo 2026)

### Iteración 1 — Fundamentos: Performance + Seguridad

- **`next.config.mjs`**: formatos AVIF+WebP, `deviceSizes` optimizados, `minimumCacheTTL` 31 días, `poweredByHeader: false`, `reactStrictMode: true`
- **Security headers** para todas las rutas: `CSP`, `HSTS`, `X-Frame-Options: SAMEORIGIN`, `Permissions-Policy`, `Referrer-Policy`, `Cross-Origin-*`, cache immutable para estáticos
- **`globals.css`**: animaciones `fadeInUp` con `animation-timeline: view()`, hover spring (`cubic-bezier(0.34,1.56,0.64,1)`), botón primario con gradiente y sombra de color, scrollbar personalizada, `mix-blend-mode: luminosity` en hero, overlay en `company-proof-media`, `focus-visible` mejorado, `::selection` consistente

### Iteración 2 — Assets + SEO

- **`assets.ts`**: todos los recursos migrados a WebP/AVIF; logos sustituidos por SVG nativo (peso ≈0); GIF de banner → WebP estático; JPG de personas/productos → WebP; rutas limpias y documentadas
- **`layout.tsx`**: keywords enriquecidas (18 términos), `authors`, `category`, `classification`, descripción más precisa, `minimumScale: 1` en viewport, `<link rel="preconnect">` para fonts, `<link rel="dns-prefetch">` para dominio

### Iteración 3 — Contenido + Conversión

- **`home.ts`**: copy de servicios más persuasivo y orientado a conversión, `meta` de equipos enriquecida con kN, textos de `quickActions` con propuesta de valor explícita, `proofPoints` actualizados (+38 años), título catalog correcto `Catálogo general vigente`

## Pendiente (próximas iteraciones)

- [ ] Generar y subir imágenes WebP reales a `public/images/generated/`
- [ ] Sustituir imágenes heredadas del servidor por las nuevas rutas en `assets.ts`
- [ ] Implementar `sitemap.xml` y `robots.txt` dinámicos
- [ ] Conectar Google Search Console y añadir verification token
- [ ] Auditoría Lighthouse post-despliegue y ajuste de LCP
- [ ] Structured Data (LocalBusiness + Product) en `structured-data.tsx`

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Contacto

Traanluz · Polígono Industrial Calonge, Calle Oro n.º 2, 41007 Sevilla  
+34 954 367 290 · info@tranluz.com
