import Link from "next/link";

export function DecisionSection() {
  return (
    <section className="decision-section">
      <div className="container">
        <h2>Evita retrasos y sobrecostes en tu obra</h2>

        <p>
          Trabaja con un proveedor que garantiza equipos certificados y soporte técnico real desde el primer día.
        </p>

        <div className="cta-actions">
          <Link href="/presupuesto" className="button-primary">
            Presupuesto en 24h
          </Link>
          <a href="tel:+34954367290" className="button-secondary">
            Hablar con técnico
          </a>
        </div>
      </div>
    </section>
  );
}
