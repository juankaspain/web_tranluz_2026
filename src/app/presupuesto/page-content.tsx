"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/config/brand";

const servicios = [
  "Compra de equipos",
  "Alquiler Rent Puller",
  "Servicio técnico ITS",
  "Formación",
  "Trazabilidad Revisa",
  "Kit Digital",
  "Otro",
];

export default function PresupuestoPageContent() {
  const [enviado, setEnviado] = useState(false);
  const [servicio, setServicio] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <section className="page-hero">
          <p className="eyebrow">Presupuesto personalizado</p>
          <h1>Cuéntanos qué necesitas</h1>
          <p>Respondemos en menos de 24 horas laborables con una propuesta adaptada a tu proyecto y presupuesto.</p>
        </section>

        <section className="section">
          <div className="presupuesto-layout">
            {/* Formulario */}
            <div className="presupuesto-form-col">
              {enviado ? (
                <div className="form-success" role="alert">
                  <CheckCircle2 size={40} aria-hidden="true" />
                  <h2>Solicitud recibida</h2>
                  <p>Nos pondremos en contacto contigo en menos de 24 horas laborables. Revisa tu bandeja de entrada o spam si no recibes noticias.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="presupuesto-form" noValidate>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="nombre">Nombre y apellidos <span aria-hidden="true">*</span></label>
                      <input id="nombre" name="nombre" type="text" required autoComplete="name" placeholder="Ana Martínez" />
                    </div>
                    <div className="field">
                      <label htmlFor="empresa">Empresa</label>
                      <input id="empresa" name="empresa" type="text" autoComplete="organization" placeholder="Instalaciones Eléctricas SL" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="ana@empresa.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="telefono">Teléfono</label>
                      <input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="+34 600 000 000" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="servicio">Tipo de consulta <span aria-hidden="true">*</span></label>
                    <select id="servicio" name="servicio" required value={servicio} onChange={(e) => setServicio(e.target.value)}>
                      <option value="">Selecciona una opción…</option>
                      {servicios.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="mensaje">Describe tu proyecto o consulta <span aria-hidden="true">*</span></label>
                    <textarea id="mensaje" name="mensaje" required rows={5} placeholder="Indica el tipo de equipo, la obra, los plazos o cualquier detalle relevante…" />
                  </div>
                  <button type="submit" className="button button-primary" style={{ width: "100%", justifyContent: "center" }}>
                    <Send size={16} aria-hidden="true" />
                    Enviar solicitud
                  </button>
                  <p className="form-legal">Tus datos serán tratados conforme a nuestra <a href="/privacidad">Política de privacidad</a>. No los compartiremos con terceros.</p>
                </form>
              )}
            </div>

            {/* Info lateral */}
            <aside className="presupuesto-info-col">
              <h2>Contacto directo</h2>
              <p>Si lo prefieres, contáctanos directamente:</p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12, marginTop: 16 }}>
                <li><a href={`tel:${brand.phone?.replace(/\s/g, "")}`} className="text-link"><strong>Teléfono</strong> &mdash; {brand.phone}</a></li>
                <li><a href={`mailto:${brand.email}`} className="text-link"><strong>Email</strong> &mdash; {brand.email}</a></li>
              </ul>
              <hr style={{ margin: "24px 0", borderColor: "var(--line)" }} />
              <h3>Horario</h3>
              <p>Lunes a viernes: 08:30&ndash;18:00<br />Sábados y festivos: cerrado</p>
              <hr style={{ margin: "24px 0", borderColor: "var(--line)" }} />
              <h3>Respuesta garantizada</h3>
              <p>Respondemos todas las solicitudes en menos de <strong>24 horas laborables</strong>. Para urgencias, llámanos.</p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
