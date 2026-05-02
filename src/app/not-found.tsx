import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">404</p>
          <h1>No hemos encontrado esta ruta técnica.</h1>
          <p>
            Puedes volver al catálogo, solicitar presupuesto o entrar en el{" "}
            centro técnico para encontrar documentación.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/productos">
              Ver catálogo
            </Link>
            <Link className="button button-secondary" href="/presupuesto">
              Solicitar presupuesto
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
