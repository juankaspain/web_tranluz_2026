import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Download,
  Factory,
  FileText,
  GraduationCap,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import {
  catalogGroups,
  companyHighlights,
  contactDepartments,
  courses,
  rentalEquipment,
  rentalIntro,
  schedule,
  serviceDetails,
  trainingIntro
} from "@/content/site-data";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";
import { QuoteForm } from "@/components/forms/quote-form";

type ServiceKey = keyof typeof serviceDetails;

type PageHeroProProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  actions?: Array<{ label: string; href: string; variant?: "primary" | "secondary" }>;
};

export function PageHeroPro({ eyebrow, title, text, image, actions = [] }: PageHeroProProps) {
  return (
    <section className="page-hero-pro">
      <div className="page-hero-pro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {actions.length > 0 ? (
          <div className="hero-actions">
            {actions.map((action) => (
              <Link
                className={`button ${action.variant === "secondary" ? "button-secondary" : "button-primary"}`}
                href={action.href}
                key={action.href}
              >
                {action.label}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <div className="page-hero-pro-visual" aria-hidden="true">
        <Image
          src={image ?? assets.hero}
          alt=""
          fill
          priority
          sizes="(max-width: 1120px) 100vw, 40vw"
        />
        <div className="visual-status-card">
          <BadgeCheck aria-hidden="true" size={20} />
          <span>Arquitectura tecnica B2B</span>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailView({ serviceSlug }: { serviceSlug: string }) {
  const service =
    serviceDetails[serviceSlug as ServiceKey] ?? serviceDetails["its-servicio-tecnico"];

  return (
    <>
      <PageHeroPro
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.intro}
        image={service.image}
        actions={[
          { label: service.cta, href: "/presupuesto" },
          { label: "Hablar con servicio tecnico", href: "/contacto", variant: "secondary" }
        ]}
      />
      <section className="section detail-layout">
        <aside className="detail-aside">
          {"logo" in service && service.logo ? (
            <img className="service-logo" src={service.logo} alt="" loading="lazy" />
          ) : null}
          <h2>Alcance operativo</h2>
          <div className="pill-list">
            {service.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </aside>
        <div className="detail-main">
          <div className="feature-list">
            {service.benefits.map((benefit) => (
              <article className="feature-row" key={benefit}>
                <CheckCircle2 aria-hidden="true" size={21} />
                <p>{benefit}</p>
              </article>
            ))}
          </div>
          <ProcessPanel items={service.process} />
          <div className="extras-panel">
            <p className="eyebrow">Tambien cubre</p>
            <div className="pill-list">
              {service.extras.map((extra) => (
                <span key={extra}>{extra}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Servicios Tranluz</p>
        <h2>Servicios productizados, con proceso, entregables y accion clara.</h2>
        <p>
          Cada servicio se orienta a una necesidad real: mantener, revisar,
          controlar, alquilar, formar o documentar.
        </p>
      </div>
      <div className="overview-grid">
        {Object.entries(serviceDetails).map(([slug, service]) => (
          <Link className="overview-card" href={`/servicios/${slug}`} key={slug}>
            <span>{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{service.intro}</p>
            <strong>
              Ver detalle
              <ArrowRight aria-hidden="true" size={16} />
            </strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RentalLanding() {
  return (
    <>
      <PageHeroPro
        eyebrow="Rent Puller"
        title={rentalIntro.title}
        text={rentalIntro.text}
        image={rentalIntro.image}
        actions={[
          { label: "Solicitar alquiler", href: "/presupuesto" },
          { label: rentalIntro.phone, href: `tel:${rentalIntro.phone.replaceAll(" ", "")}`, variant: "secondary" }
        ]}
      />
      <section className="section equipment-lab">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Equipos disponibles</p>
            <h2>Fichas orientadas a seleccion rapida en obra.</h2>
          </div>
          <Link className="button button-secondary" href="/contacto">
            Asesoria tecnica
            <PhoneCall aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="equipment-spec-grid">
          {rentalEquipment.map((equipment) => (
            <EquipmentSpecCard equipment={equipment} key={equipment.slug} />
          ))}
        </div>
      </section>
    </>
  );
}

export function RentalEquipmentDetail({ slug }: { slug: string }) {
  const equipment = rentalEquipment.find((item) => item.slug === slug) ?? rentalEquipment[0];

  return (
    <>
      <PageHeroPro
        eyebrow="Equipo en alquiler"
        title={`${equipment.name} · ${equipment.capacity}`}
        text={equipment.description}
        image={rentalIntro.image}
        actions={[
          { label: "Solicitar disponibilidad", href: "/presupuesto" },
          { label: "Llamar a Rent Puller", href: `tel:${rentalIntro.phone.replaceAll(" ", "")}`, variant: "secondary" }
        ]}
      />
      <section className="section detail-layout">
        <aside className="detail-aside">
          <h2>Datos principales</h2>
          <div className="spec-stack">
            {equipment.specs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
        </aside>
        <div className="detail-main">
          <ProcessPanel items={["Confirmar obra", "Validar capacidad", "Preparar equipo", "Asistencia tecnica"]} />
          <div className="extras-panel">
            <p className="eyebrow">Accesorios disponibles</p>
            <div className="pill-list">
              {equipment.accessories.map((accessory) => (
                <span key={accessory}>{accessory}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function TrainingLanding() {
  return (
    <>
      <PageHeroPro
        eyebrow="Formate Tranluz"
        title={trainingIntro.title}
        text={trainingIntro.text}
        image={trainingIntro.imageOne}
        actions={[
          { label: "Solicitar curso para empresa", href: "/presupuesto" },
          { label: "Ver catalogo de cursos", href: "#cursos", variant: "secondary" }
        ]}
      />
      <section className="section training-showcase">
        <div className="training-media">
          <img src={trainingIntro.logo} alt="" loading="lazy" decoding="async" />
          <img src={trainingIntro.imageTwo} alt="" loading="lazy" decoding="async" />
        </div>
        <div id="cursos" className="course-grid">
          {courses.map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
        </div>
      </section>
    </>
  );
}

export function CourseDetail({ slug }: { slug: string }) {
  const course = courses.find((item) => item.slug === slug) ?? courses[0];

  return (
    <>
      <PageHeroPro
        eyebrow={`REF:${course.ref}`}
        title={course.title}
        text={`${course.goal} Tiempo de formacion: ${course.duration}.`}
        image={trainingIntro.imageOne}
        actions={[
          { label: "Pedir informacion", href: "/presupuesto" },
          { label: "Ver todos los cursos", href: "/formacion", variant: "secondary" }
        ]}
      />
      <section className="section syllabus-panel">
        <div className="section-heading">
          <p className="eyebrow">Contenido</p>
          <h2>Temario tecnico-practico.</h2>
        </div>
        <div className="syllabus-grid">
          {course.syllabus.map((item, index) => (
            <article className="syllabus-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function CatalogLibrary() {
  return (
    <section className="section catalog-library">
      {catalogGroups.map((group) => (
        <article className="catalog-group" key={group.title}>
          <div>
            <p className="eyebrow">{group.title}</p>
            <h2>{group.description}</h2>
          </div>
          <div className="catalog-table" role="list">
            {group.items.map((item) => (
              <a className="catalog-row" href="/presupuesto" key={`${group.title}-${item.name}`}>
                <Download aria-hidden="true" size={18} />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.version}</small>
                </span>
                <em>{item.status}</em>
                <b>{item.size}</b>
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export function CompanyStory() {
  return (
    <>
      <PageHeroPro
        eyebrow="Nuestra historia"
        title="Esfuerzo, capacidad, servicio y calidad desde 1987."
        text="Tranluz ha crecido como punto de encuentro para profesionales del sector electrico y de telecomunicaciones, aportando soluciones innovadoras, sostenibles y cercanas a la realidad de obra."
        image={assets.ceo}
        actions={[
          { label: "Contactar", href: "/contacto" },
          { label: "Ver servicios", href: "/servicios", variant: "secondary" }
        ]}
      />
      <section className="section">
        <div className="story-grid">
          {companyHighlights.map((highlight) => (
            <article className="story-card" key={highlight.title}>
              <Sparkles aria-hidden="true" size={20} />
              <h2>{highlight.title}</h2>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function ContactExperience() {
  return (
    <>
      <PageHeroPro
        eyebrow="Contacto"
        title="Conecta con el departamento adecuado desde el primer paso."
        text="Si no encuentras lo que necesitas o quieres ampliar informacion, Tranluz orienta la consulta hacia el equipo correcto: comercial, administracion, compras, servicio tecnico o almacen."
        image={assets.hero}
        actions={[
          { label: "Solicitar presupuesto", href: "/presupuesto" },
          { label: brand.phone, href: `tel:${brand.phone.replaceAll(" ", "")}`, variant: "secondary" }
        ]}
      />
      <section className="section contact-grid">
        <div className="contact-panel">
          <p className="eyebrow">Departamentos</p>
          <div className="department-list">
            {contactDepartments.map((department) => (
              <a href="/presupuesto" key={department}>
                <Factory aria-hidden="true" size={18} />
                {department}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="contact-panel">
          <p className="eyebrow">Horario España</p>
          <div className="schedule-list">
            {schedule.map((item) => (
              <div key={item.label}>
                <Clock3 aria-hidden="true" size={18} />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.value}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-panel contact-panel-strong">
          <MapPin aria-hidden="true" size={22} />
          <h2>Sevilla</h2>
          <p>{brand.address}</p>
          <a className="button button-primary" href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            {brand.phone}
          </a>
        </div>
      </section>
    </>
  );
}

export function QuoteExperience() {
  return (
    <>
      <PageHeroPro
        eyebrow="Solicitud tecnica"
        title="Presupuesto con contexto: producto, alquiler, revision o formacion."
        text="El flujo esta preparado para capturar la necesidad real y derivarla al departamento correcto con datos utiles desde el primer contacto."
        image={assets.rentPuller}
        actions={[{ label: "Llamar", href: `tel:${brand.phone.replaceAll(" ", "")}`, variant: "secondary" }]}
      />
      <section className="section quote-layout">
        <QuoteForm />
        <aside className="quote-aside">
          <h2>Datos que aceleran la respuesta</h2>
          <ul>
            <li>Referencia o familia de producto.</li>
            <li>Tipo de obra o aplicacion.</li>
            <li>Fecha prevista o urgencia.</li>
            <li>Si necesitas compra, alquiler, revision o formacion.</li>
          </ul>
        </aside>
      </section>
    </>
  );
}

function ProcessPanel({ items }: { items: string[] }) {
  return (
    <div className="process-panel">
      <p className="eyebrow">Proceso</p>
      <div>
        {items.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

function EquipmentSpecCard({ equipment }: { equipment: (typeof rentalEquipment)[number] }) {
  return (
    <Link className="equipment-spec-card" href={`/alquiler/${equipment.slug}`}>
      <div>
        <span>{equipment.capacity}</span>
        <Wrench aria-hidden="true" size={20} />
      </div>
      <h3>{equipment.name}</h3>
      <p>{equipment.description}</p>
      <ul>
        {equipment.specs.slice(0, 3).map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
      <strong>
        Ver ficha
        <ArrowRight aria-hidden="true" size={16} />
      </strong>
    </Link>
  );
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return (
    <Link className="course-card" href={`/formacion/${course.slug}`}>
      <div className="course-card-top">
        <span>REF:{course.ref}</span>
        <GraduationCap aria-hidden="true" size={20} />
      </div>
      <h3>{course.title}</h3>
      <p>{course.goal}</p>
      <div className="course-meta">
        <CalendarClock aria-hidden="true" size={16} />
        {course.duration}
      </div>
      <strong>
        Ver temario
        <ArrowRight aria-hidden="true" size={16} />
      </strong>
    </Link>
  );
}

export function ProductsLandingContent() {
  const productPillars = [
    "Alta Tension",
    "Tendidos Subterraneos",
    "Proteccion Laboral",
    "Seguridad Electrica",
    "Hidraulica",
    "Fibra Optica",
    "Pelado de Cables",
    "Escaleras y Andamios",
    "Aparatos de Medida",
    "Herramientas Electricas y Manuales"
  ];

  return (
    <section className="section product-command">
      <div className="command-surface">
        <div>
          <p className="eyebrow">Catalogo General 2025-2026</p>
          <h2>El catalogo se convierte en una experiencia consultable.</h2>
          <p>
            La nueva arquitectura deja preparada la migracion desde PDF hacia
            fichas de producto con busqueda, filtros, accesorios, descargas,
            compra, presupuesto y alquiler cuando aplique.
          </p>
        </div>
        <div className="pillar-cloud">
          {productPillars.map((pillar) => (
            <span key={pillar}>{pillar}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCategoryDetail({ slug }: { slug: string }) {
  const title = slug.replaceAll("-", " ");

  return (
    <>
      <PageHeroPro
        eyebrow="Categoria de producto"
        title={`Productos para ${title}`}
        text="Categoria preparada para filtros por aplicacion, documentos tecnicos, compatibilidades, accesorios, compra, presupuesto y alquiler cuando proceda."
        image={assets.presentationCover}
        actions={[
          { label: "Solicitar producto", href: "/presupuesto" },
          { label: "Ver catalogos", href: "/soporte/catalogos", variant: "secondary" }
        ]}
      />
      <ProductsLandingContent />
    </>
  );
}

export function ProductDetailExperience({
  category,
  product
}: {
  category: string;
  product: string;
}) {
  const productName = product.replaceAll("-", " ");
  const categoryName = category.replaceAll("-", " ");

  return (
    <>
      <PageHeroPro
        eyebrow={categoryName}
        title={productName}
        text="Ficha de producto preparada para datos tecnicos, aplicaciones, documentos, accesorios compatibles, servicio tecnico, alquiler y presupuesto."
        image={assets.presentationCover}
        actions={[
          { label: "Solicitar presupuesto", href: "/presupuesto" },
          { label: "Hablar con comercial", href: "/contacto", variant: "secondary" }
        ]}
      />
      <section className="section detail-layout">
        <aside className="detail-aside">
          <h2>Ficha preparada</h2>
          <div className="spec-stack">
            <span>Datos tecnicos estructurados</span>
            <span>Aplicaciones y compatibilidades</span>
            <span>Documentos descargables</span>
            <span>Servicio tecnico asociado</span>
          </div>
        </aside>
        <div className="detail-main">
          <div className="feature-list">
            {[
              "Las referencias migraran desde catalogo y tienda hacia una ficha unica.",
              "Cada producto podra conectar compra, presupuesto, alquiler y revision.",
              "Los documentos se versionaran para evitar descargas obsoletas.",
              "El buscador podra resolver por referencia, familia, aplicacion o accesorio."
            ].map((item) => (
              <article className="feature-row" key={item}>
                <CheckCircle2 aria-hidden="true" size={21} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function SolutionsContent() {
  const solutions = [
    { icon: ShieldCheck, title: "Empresas electricas", text: "Alta tension, seguridad, tendido y soporte documental." },
    { icon: ClipboardList, title: "Telecomunicaciones", text: "Fibra optica, equipos de tendido y formacion especifica." },
    { icon: Wrench, title: "Industria", text: "Mantenimiento, herramientas hidraulicas y servicio tecnico." },
    { icon: FileText, title: "Obra y mantenimiento", text: "Alquiler, revisiones y trazabilidad durante el proyecto." }
  ];

  return (
    <section className="section">
      <div className="solution-grid">
        {solutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <article className="solution-card" key={solution.title}>
              <Icon aria-hidden="true" size={22} />
              <h2>{solution.title}</h2>
              <p>{solution.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
