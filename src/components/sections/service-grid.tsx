import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { homeServices } from "@/content/home";

export function ServiceGrid() {
  return (
    <section className="section section-contrast">
      <div className="section-heading">
        <p className="eyebrow">Servicios diferenciales</p>
        <h2>Más que suministro: soporte durante todo el ciclo de vida del equipo.</h2>
        <p>
          ITS, Revisa, Rent Puller y Formación son servicios de alto valor,
          medibles y contratables directamente desde esta página.
        </p>
      </div>
      <div className="service-showcase">
        {homeServices.map((service) => (
          <a className="service-card" href={service.href} key={service.href}>
            <div className="service-card-media" aria-hidden="true">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1120px) 45vw, 28vw"
              />
            </div>
            <div className="service-card-body">
              <span>{service.kicker}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 aria-hidden="true" size={16} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <strong>
                Contratar servicio
                <ArrowRight aria-hidden="true" size={16} />
              </strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
