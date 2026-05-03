import { brand } from "@/config/brand";

const metrics = [
  { value: "+38", label: "Años en el sector eléctrico" },
  { value: "Oficial", label: "Distribuidor Tesmec y Plumettaz" },
  { value: "B2B", label: "Infraestructura eléctrica y telecom" },
];

export function AuthoritySection() {
  return (
    <section className="authority-section" aria-labelledby="authority-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Confianza industrial</p>
          <h2 id="authority-heading">Empresas eléctricas confían en Tranluz para obra crítica</h2>
        </div>

        <ul className="authority-metrics" role="list">
          {metrics.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>

        <ul
          className="authority-brands"
          aria-label="Marcas asociadas"
          role="list"
        >
          {brand.partners.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
