import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Solicita presupuesto y te llamamos hoy mismo</h2>

        <p>Asesoramiento técnico real para tu obra. Sin compromiso.</p>

        <ul className="cta-benefits">
          <li>✔ Respuesta en el mismo día</li>
          <li>✔ Equipos certificados</li>
          <li>✔ Soporte técnico en obra</li>
        </ul>

        <div className="cta-actions">
                    <Link href="/presupuesto" className="button button-primary">
            Solicitar presupuesto
          </Link>
                    <a href="tel:+34954367290" className="button button-ghost">
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
