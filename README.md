# Tranluz Web Modernization

Arquitectura inicial para una nueva web corporativa y comercial de Tranluz con ambicion tier 1: catalogo tecnico vivo, servicios productizados, alquiler, formacion, soporte y captacion B2B en un unico ecosistema.

## Objetivo

Convertir la web de Tranluz en una plataforma tecnico-comercial capaz de competir con referentes globales del sector: Condux Tesmec, Plumettaz, Cembre y Tractel.

La propuesta no se limita a una portada nueva. El sistema se organiza alrededor de los trabajos reales del cliente:

- Comprar productos tecnicos.
- Alquilar equipos para obra.
- Revisar, calibrar y certificar equipos.
- Formar operadores y tecnicos.
- Descargar documentacion fiable.
- Solicitar presupuesto o soporte con baja friccion.

## Estructura

```txt
docs/
  architecture/
    01-product-vision.md
    02-information-architecture.md
    03-content-model.md
    04-design-system.md
    05-technical-architecture.md
    06-implementation-roadmap.md
src/
  app/
    page.tsx
    layout.tsx
  components/
    layout/
    sections/
    ui/
  config/
  content/
  lib/
  styles/
```

## Stack propuesto

- Frontend: Next.js con App Router y TypeScript.
- Estilos: CSS moderno con tokens de marca, preparado para migrar a Tailwind si se decide.
- Contenido: modelo preparado para CMS headless, PIM o integracion con ecommerce.
- Busqueda futura: Meilisearch o Algolia para productos, documentos y guias.
- Integraciones futuras: CRM, analitica, ecommerce, formularios B2B, portal cliente y Revisa.

## Primeros entregables incluidos

- Vision de producto y posicionamiento.
- Arquitectura de informacion top tier.
- Modelo de contenido para productos, servicios, cursos, descargas y soporte.
- Direccion visual y sistema de diseno.
- Arquitectura tecnica recomendada.
- Roadmap por fases.
- Scaffold inicial de aplicacion.

