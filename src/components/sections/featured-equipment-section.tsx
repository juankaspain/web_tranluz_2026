import { ArrowRight, Gauge, Ruler, Settings2 } from "lucide-react";
import { featuredEquipment } from "@/content/home";

export function FeaturedEquipmentSection() {
  return (
    <section className="section equipment-section">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">Rent Puller</p>
          <h2>Equipos de alquiler presentados como fichas tecnicas accionables.</h2>
        </div>
        <a className="button button-secondary" href="/alquiler">
          Ver alquiler
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>
      <div className="equipment-grid">
        {featuredEquipment.map((equipment) => (
          <a className="equipment-card" href={equipment.href} key={equipment.name}>
            <div className="equipment-card-head">
              <span>{equipment.meta}</span>
              <Gauge aria-hidden="true" size={20} />
            </div>
            <h3>{equipment.name}</h3>
            <ul>
              {equipment.specs.map((spec, index) => (
                <li key={spec}>
                  {index === 0 ? (
                    <Settings2 aria-hidden="true" size={15} />
                  ) : (
                    <Ruler aria-hidden="true" size={15} />
                  )}
                  {spec}
                </li>
              ))}
            </ul>
            <strong>
              Solicitar
              <ArrowRight aria-hidden="true" size={16} />
            </strong>
          </a>
        ))}
      </div>
    </section>
  );
}

