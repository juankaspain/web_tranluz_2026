import { ArrowRight, Download, FileCheck2, LifeBuoy } from "lucide-react";
import { downloads } from "@/content/home";

export function SupportBand() {
  return (
    <section className="support-band">
      <div className="support-copy">
        <p className="eyebrow">Centro tecnico</p>
        <h2>Catalogos, manuales, guias y soporte para decidir con seguridad.</h2>
        <p>
          La nueva web debe convertir la antigua zona de descarga en una base de
          conocimiento versionada, encontrable y conectada a cada producto.
        </p>
        <a className="button button-primary" href="/soporte">
          Ir a soporte
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>
      <div className="download-stack" aria-label="Descargas destacadas">
        {downloads.map((download, index) => (
          <a className="download-item" href={download.href} key={download.title}>
            {index === 0 ? (
              <Download aria-hidden="true" size={20} />
            ) : index === 1 ? (
              <FileCheck2 aria-hidden="true" size={20} />
            ) : (
              <LifeBuoy aria-hidden="true" size={20} />
            )}
            <span>
              <strong>{download.title}</strong>
              <small>
                {download.version} · {download.size}
              </small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
