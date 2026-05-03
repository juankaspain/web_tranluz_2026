import { brand } from "@/config/brand";

export function AuthoritySection() {
  return (
    <section className="authority-section">
      <div className="container">
        <h2>Empresas eléctricas confían en Tranluz para obra crítica</h2>

        <div className="authority-metrics">
          <div>
            <strong>+38 años</strong>
            <span>en el sector eléctrico</span>
          </div>
          <div>
            <strong>Distribuidor oficial</strong>
            <span>Tesmec y Plumettaz</span>
          </div>
          <div>
            <strong>B2B especializado</strong>
            <span>infraestructura eléctrica y telecom</span>
          </div>
        </div>

        <div className="authority-brands">
          {brand.partners.map((p) => (
            <a key={p.name} href={p.href} target="_blank">
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
