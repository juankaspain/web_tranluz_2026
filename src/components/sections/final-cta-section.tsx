import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

const benefits = [
  "Respuesta en el mismo día",
  "Equipos certificados",
  "Soporte técnico en obra",
];

export function FinalCtaSection() {
  return (
    <section className="final-cta" aria-labelledby="cta-heading">
      <div className="cta-copy">
        <p className="eyebrow">Empieza hoy</p>
        <h2 id="cta-heading">Solicita presupuesto y te llamamos hoy mismo</h2>
        <p className="cta-lead">Asesoramiento técnico real para tu obra. Sin compromiso.</p>
        <ul className="cta-benefits">
          {benefits.map((b) => (
            <li key={b}>
              <CheckCircle2 size={18} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <div className="cta-actions">
          <Link href="/presupuesto" className="button button-primary">
            Solicitar presupuesto <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="button button-ghost">
            <PhoneCall size={16} aria-hidden="true" />
            Llamar ahora
          </a>
        </div>
      </div>

      <div className="cta-visual" aria-hidden="true">
        <div className="cta-stat">
          <strong>24h</strong>
          <span>Tiempo de respuesta</span>
        </div>
        <div className="cta-stat">
          <strong>+38</strong>
          <span>Años de experiencia</span>
        </div>
        <div className="cta-stat">
          <strong>B2B</strong>
          <span>Exclusivamente industrial</span>
        </div>
        <div className="cta-badge">
          <CheckCircle2 size={24} />
          <span>Partner oficial Tesmec &amp; Plumettaz</span>
        </div>
      </div>
    </section>
  );
}
