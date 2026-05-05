import Link from "next/link";
import Image from "next/image";
import { Award, Building2, CheckCircle2, Factory, Users2 } from "lucide-react";

const stats = [
  { value: "1987", label: "Año de fundación" },
  { value: "+38", label: "Años de especialización" },
  { value: "4", label: "Líneas de negocio" },
  { value: "B2B", label: "Exclusivamente industrial" },
];

const proofPoints = [
  { icon: Award,        text: "Calidad y servicio a precios competitivos" },
  { icon: Building2,    text: "Polígono Industrial Calonge, Sevilla" },
  { icon: CheckCircle2, text: "Acuerdos con fabricantes líderes del sector" },
  { icon: Factory,      text: "Distribuidor oficial para empresas eléctricas y telco" },
  { icon: Users2,       text: "Equipo técnico cualificado y formación especializada" },
];

/**
 * Marcas partner con sus logos SVG locales.
 * Los archivos viven en /public/images/partners/ y Next.js los sirve
 * desde la raíz como /images/partners/<archivo>.svg
 *
 * bg: color de fondo del chip (idéntico al color corporativo de la marca)
 * useLogo: si true → renderiza <Image>, si false → muestra texto fallback
 */
const partnerBrands: {
  name: string;
  logo: string;
  href: string;
  bg: string;
  w: number;
  h: number;
}[] = [
  {
    name: "Tesmec",
    logo: "/images/partners/tesmec.svg",
    href: "https://www.tesmec.com/es",
    bg: "#C8102E",
    w: 120,
    h: 36,
  },
  {
    name: "Plumettaz",
    logo: "/images/partners/plumettaz.svg",
    href: "https://www.plumettaz.com",
    bg: "#005BAC",
    w: 140,
    h: 36,
  },
  {
    name: "Work Italia",
    logo: "/images/partners/work-italia.svg",
    href: "https://www.workitalia.it",
    bg: "#C15000",
    w: 140,
    h: 36,
  },
  {
    name: "3M",
    logo: "/images/partners/3m.svg",
    href: "https://www.3m.com/3M/es_ES/",
    bg: "#B00000",
    w: 48,
    h: 36,
  },
  {
    name: "Tractel",
    logo: "/images/partners/tractel.svg",
    href: "https://www.tractel.com",
    bg: "#1A3F6F",
    w: 130,
    h: 36,
  },
  {
    name: "Cembre",
    logo: "/images/partners/cembre.svg",
    href: "https://www.cembre.com",
    bg: "#004d26",
    w: 120,
    h: 36,
  },
];

export function CompanyProofSection() {
  return (
    <section className="company-proof" aria-labelledby="proof-heading">
      <div className="company-proof-grid">
        {/* ── Izquierda: stats + proof points ─────────────────── */}
        <div className="proof-panel-dark">
          <p className="eyebrow proof-eyebrow">Tranluz en números</p>
          <div className="proof-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="proof-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <ul className="proof-points">
            {proofPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.text}>
                  <Icon size={16} aria-hidden="true" />
                  {p.text}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Derecha: partners + CTA ──────────────────────────── */}
        <div className="proof-panel-light">
          <p className="eyebrow">Marcas distribuidoras</p>
          <h2 id="proof-heading">Partner oficial de las marcas líderes del sector</h2>
          <p className="proof-intro">
            Colaboramos directamente con los principales fabricantes de equipos eléctricos,
            herramientas industriales y EPIs para ofrecerte garantía oficial, stock permanente
            y soporte técnico de primer nivel.
          </p>

          {/* ── Grid de logos ──────────────────────────────────── */}
          <div className="proof-brands-grid">
            {partnerBrands.map((b) => (
              <a
                key={b.name}
                href={b.href}
                className="proof-brand-chip"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir al sitio web de ${b.name}`}
                style={{ "--chip-bg": b.bg } as React.CSSProperties}
              >
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={b.w}
                  height={b.h}
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "36px",
                    width: "auto",
                  }}
                  loading="lazy"
                  unoptimized
                />
              </a>
            ))}
          </div>

          <div className="proof-cta">
            <Link href="/empresa" className="button button-primary">
              Conoce nuestra historia
            </Link>
            <Link href="/productos" className="button button-ghost">
              Ver todos los partners
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
