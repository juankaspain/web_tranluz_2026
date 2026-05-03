"use client";

import { useId, useMemo, useState } from "react";
import { CheckCircle2, ClipboardCopy, Mail, ShieldCheck } from "lucide-react";
import { brand } from "@/config/brand";

const needs = [
  "Comprar producto",
  "Alquilar equipo",
  "Revision o certificacion",
  "Formacion",
  "Soporte tecnico"
];

type Errors = {
  need?: string;
  company?: string;
  contact?: string;
  details?: string;
};

export function QuoteForm() {
  const id = useId();
  const [need, setNeed] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const needId = `${id}-need`;
  const companyId = `${id}-company`;
  const contactId = `${id}-contact`;
  const detailsId = `${id}-details`;
  const needErrId = `${id}-need-err`;
  const companyErrId = `${id}-company-err`;
  const contactErrId = `${id}-contact-err`;
  const detailsErrId = `${id}-details-err`;
  const statusId = `${id}-status`;

  const summary = useMemo(
    () =>
      [
        `Necesidad: ${need || "Sin seleccionar"}`,
        `Empresa: ${company || "Pendiente"}`,
        `Contacto: ${contact || "Pendiente"}`,
        "Detalle tecnico:",
        details || "Pendiente"
      ].join("\n"),
    [company, contact, details, need]
  );

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Solicitud tecnica Tranluz - ${need || "nueva consulta"}`);
    const body = encodeURIComponent(summary);
    return `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }, [need, summary]);

  const ready = Boolean(need && company && contact && details);

  function validate(): boolean {
    const e: Errors = {};
    if (!need) e.need = "Selecciona una necesidad";
    if (!company.trim()) e.company = "Introduce el nombre de la empresa";
    if (!contact.trim()) e.contact = "Introduce un email o teléfono de contacto";
    if (!details.trim()) e.details = "Describe el detalle técnico de tu solicitud";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.location.href = mailto;
    }
  }

  return (
    <form
      className="quote-form"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={statusId}
    >
      {/* Estado live para lectores de pantalla */}
      <div
        id={statusId}
        className="quote-form-status"
        aria-live="polite"
        aria-atomic="true"
      >
        <ShieldCheck aria-hidden="true" size={18} />
        <span>
          {submitted
            ? "Solicitud enviada correctamente"
            : ready
            ? "Solicitud lista para enviar"
            : "Completa los campos clave"}
        </span>
      </div>

      {/* Errores globales */}
      {Object.keys(errors).length > 0 && (
        <div role="alert" aria-live="assertive" className="quote-form-errors">
          <strong>Corrige los siguientes errores antes de continuar:</strong>
          <ul>
            {errors.need && <li><a href={`#${needId}`}>{errors.need}</a></li>}
            {errors.company && <li><a href={`#${companyId}`}>{errors.company}</a></li>}
            {errors.contact && <li><a href={`#${contactId}`}>{errors.contact}</a></li>}
            {errors.details && <li><a href={`#${detailsId}`}>{errors.details}</a></li>}
          </ul>
        </div>
      )}

      <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
        <legend className="sr-only">Datos de la solicitud de presupuesto</legend>

        {/* Necesidad */}
        <div className="quote-field-group">
          <label htmlFor={needId} className="quote-label">
            Necesidad <span aria-hidden="true">*</span>
          </label>
          <select
            id={needId}
            name="need"
            value={need}
            onChange={(e) => { setNeed(e.target.value); setErrors((prev) => ({ ...prev, need: undefined })); }}
            required
            aria-required="true"
            aria-invalid={errors.need ? "true" : "false"}
            aria-describedby={errors.need ? needErrId : undefined}
          >
            <option value="" disabled>Selecciona una opcion</option>
            {needs.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          {errors.need && (
            <span id={needErrId} role="alert" className="quote-field-error">
              {errors.need}
            </span>
          )}
        </div>

        {/* Empresa */}
        <div className="quote-field-group">
          <label htmlFor={companyId} className="quote-label">
            Empresa <span aria-hidden="true">*</span>
          </label>
          <input
            id={companyId}
            name="company"
            type="text"
            placeholder="Nombre de empresa"
            value={company}
            onChange={(e) => { setCompany(e.target.value); setErrors((prev) => ({ ...prev, company: undefined })); }}
            required
            aria-required="true"
            aria-invalid={errors.company ? "true" : "false"}
            aria-describedby={errors.company ? companyErrId : undefined}
            autoComplete="organization"
          />
          {errors.company && (
            <span id={companyErrId} role="alert" className="quote-field-error">
              {errors.company}
            </span>
          )}
        </div>

        {/* Contacto */}
        <div className="quote-field-group">
          <label htmlFor={contactId} className="quote-label">
            Contacto <span aria-hidden="true">*</span>
          </label>
          <input
            id={contactId}
            name="contact"
            type="text"
            placeholder="Nombre, email o telefono"
            value={contact}
            onChange={(e) => { setContact(e.target.value); setErrors((prev) => ({ ...prev, contact: undefined })); }}
            required
            aria-required="true"
            aria-invalid={errors.contact ? "true" : "false"}
            aria-describedby={errors.contact ? contactErrId : undefined}
            autoComplete="email"
          />
          {errors.contact && (
            <span id={contactErrId} role="alert" className="quote-field-error">
              {errors.contact}
            </span>
          )}
        </div>

        {/* Detalle técnico */}
        <div className="quote-field-group">
          <label htmlFor={detailsId} className="quote-label">
            Detalle técnico <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={detailsId}
            name="details"
            placeholder="Referencia, equipo, obra, plazo o documentacion que necesitas"
            rows={6}
            value={details}
            onChange={(e) => { setDetails(e.target.value); setErrors((prev) => ({ ...prev, details: undefined })); }}
            required
            aria-required="true"
            aria-invalid={errors.details ? "true" : "false"}
            aria-describedby={errors.details ? detailsErrId : undefined}
          />
          {errors.details && (
            <span id={detailsErrId} role="alert" className="quote-field-error">
              {errors.details}
            </span>
          )}
        </div>
      </fieldset>

      <div className="quote-form-actions">
        <button
          type="submit"
          className="button button-primary"
          aria-label="Enviar solicitud de presupuesto por email"
        >
          Enviar por email
          <Mail aria-hidden="true" size={18} />
        </button>
        <button
          className="button button-secondary"
          type="button"
          onClick={copySummary}
          aria-label={copied ? "Resumen copiado al portapapeles" : "Copiar resumen de la solicitud"}
        >
          {copied ? "Resumen copiado" : "Copiar resumen"}
          {copied
            ? <CheckCircle2 aria-hidden="true" size={18} />
            : <ClipboardCopy aria-hidden="true" size={18} />}
        </button>
      </div>

      <output
        id="resumen-solicitud"
        className="quote-summary"
        aria-label="Resumen de la solicitud"
        htmlFor={`${needId} ${companyId} ${contactId} ${detailsId}`}
      >
        {summary}
      </output>
    </form>
  );
}
