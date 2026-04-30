# Arquitectura tecnica

## Stack recomendado

```txt
Frontend: Next.js App Router + TypeScript
UI: CSS tokens + componentes propios
Contenido: CMS headless o PIM
Ecommerce: integracion con tienda actual o migracion progresiva
Busqueda: Meilisearch o Algolia
Forms: API propia + CRM
Analitica: GA4, Search Console, eventos B2B y dashboard
Hosting: Vercel, Cloudflare Pages o servidor propio con CDN
```

## Capas

```txt
src/app        Rutas y layouts
src/components Componentes UI y secciones
src/content    Datos semilla y mocks
src/config     Marca, navegacion y constantes
src/lib        Utilidades, rutas y adaptadores
src/styles     Tokens y estilos globales
```

## Integraciones futuras

- CRM para leads y presupuestos.
- ERP/PIM para productos, stock, tarifas y referencias.
- WooCommerce/PrestaShop/Shopify B2B si se mantiene tienda online.
- Revisa como producto digital y acceso cliente.
- Sistema de documentos versionados.
- Portal para clientes recurrentes.

## SEO tecnico

- Redirecciones 301 desde URLs actuales con `/index.php`.
- Canonical unico entre dominio principal y tienda.
- Schema: Organization, Product, Service, Course, FAQ, Breadcrumb, LocalBusiness.
- Hreflang para ES, EN, FR y PL si se mantienen idiomas.
- Sitemap XML por tipo: paginas, productos, documentos, noticias.
- Metadatos por categoria, producto y servicio.

## Rendimiento

- Imagenes optimizadas y responsive.
- Carga diferida de componentes pesados.
- Fuentes locales o con preload.
- CSS critico inicial pequeno.
- Cache por tipo de contenido.
- Medicion Core Web Vitals.

## Seguridad y operacion

- Staging separado de produccion.
- Backups diarios.
- Roles editoriales.
- Auditoria de formularios y consentimientos.
- Monitorizacion de errores.
- Versionado de contenido critico.

