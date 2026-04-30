"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ClipboardCopy, Mail, ShieldCheck } from "lucide-react";
import { brand } from "@/config/brand";

const needs = [
  "Comprar producto",
  "Alquilar equipo",
  "Revision o certificacion",
  "Formacion",
  "Soporte tecnico"
];

export function QuoteForm() {
  const [need, setNeed] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

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

  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
      <div className="quote-form-status" aria-live="polite">
        <ShieldCheck aria-hidden="true" size={18} />
        <span>{ready ? "Solicitud lista para enviar" : "Completa los campos clave"}</span>
      </div>
      <label>
        Necesidad
        <select name="need" value={need} onChange={(event) => setNeed(event.target.value)} required>
          <option value="" disabled>
            Selecciona una opcion
          </option>
          {needs.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Empresa
        <input
          name="company"
          placeholder="Nombre de empresa"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          required
        />
      </label>
      <label>
        Contacto
        <input
          name="contact"
          placeholder="Nombre, email o telefono"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          required
        />
      </label>
      <label>
        Detalle tecnico
        <textarea
          name="details"
          placeholder="Referencia, equipo, obra, plazo o documentacion que necesitas"
          rows={6}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          required
        />
      </label>
      <div className="quote-form-actions">
        <a className={`button button-primary ${ready ? "" : "is-disabled"}`} href={ready ? mailto : "#resumen-solicitud"}>
          Enviar por email
          <Mail aria-hidden="true" size={18} />
        </a>
        <button className="button button-secondary" type="button" onClick={copySummary}>
          {copied ? "Resumen copiado" : "Copiar resumen"}
          {copied ? <CheckCircle2 aria-hidden="true" size={18} /> : <ClipboardCopy aria-hidden="true" size={18} />}
        </button>
      </div>
      <output id="resumen-solicitud" className="quote-summary">
        {summary}
      </output>
    </form>
  );
}
