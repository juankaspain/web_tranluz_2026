# Modelo de contenido

## Entidades principales

### Product

```ts
type Product = {
  id: string;
  slug: string;
  reference?: string;
  name: string;
  category: ProductCategoryId;
  summary: string;
  description: string;
  images: Asset[];
  specs: SpecificationGroup[];
  applications: string[];
  documents: DocumentAsset[];
  relatedProducts: string[];
  compatibleAccessories: string[];
  availableForSale: boolean;
  availableForQuote: boolean;
  availableForRental: boolean;
  serviceableByIts: boolean;
};
```

### ProductCategory

```ts
type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  parentId?: string;
  heroImage?: Asset;
  seo: SeoFields;
};
```

### Service

```ts
type Service = {
  id: string;
  slug: string;
  name: string;
  promise: string;
  audience: string[];
  benefits: string[];
  process: ProcessStep[];
  deliverables: string[];
  relatedProducts: string[];
  documents: DocumentAsset[];
  primaryCta: Cta;
};
```

### RentalEquipment

```ts
type RentalEquipment = {
  id: string;
  productId?: string;
  slug: string;
  name: string;
  pullForceKn?: number;
  useCases: string[];
  rentalPeriods: string[];
  supportIncluded: boolean;
  quoteRequiredFields: string[];
};
```

### Course

```ts
type Course = {
  id: string;
  slug: string;
  title: string;
  durationHours: number;
  audience: string[];
  objectives: string[];
  syllabus: string[];
  certification: string;
  format: "in-company" | "tranluz-center" | "mixed";
};
```

### Download

```ts
type Download = {
  id: string;
  slug: string;
  title: string;
  type: "catalog" | "manual" | "brochure" | "certificate" | "guide";
  version: string;
  publishedAt: string;
  fileSize: string;
  fileUrl: string;
  relatedCategories: string[];
};
```

## Reglas editoriales

- No duplicar texto institucional en todas las paginas.
- Cada pagina debe tener una tarea de usuario clara.
- Los PDFs deben complementar, no sustituir, la informacion web.
- Versionar documentos con fecha visible.
- Separar contenido actual de archivo historico.
- Evitar textos largos sin estructura tecnica.

