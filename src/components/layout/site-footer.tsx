import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Camera, Mail, MapPin, PhoneCall, PlayCircle } from "lucide-react";
import { assets } from "@/content/assets";
import { brand } from "@/config/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-label="Siguiente paso comercial">
        <div>
          <p className="eyebrow">Respuesta profesional</p>
          <h2>Producto, alquiler, servicio técnico y formación desde un único partner.</h2>
        </div>
        <div className="footer-cta-actions">
          <Link className="button button-primary" href="/presupuesto">
            Solicitar presupuesto técnico
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a className="button button-secondary" href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            Hablar con Tranluz
            <PhoneCall aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <div className="footer-main">
        <div className="footer-brand">
          <Image
            src={assets.footerLogo}
            alt="Tranluz"
            width={176}
            height={54}
            loading="lazy"
            sizes="176px"
          />
          <p>{brand.claim}</p>
          <div className="social-links">
            <a href={brand.social.linkedin} aria-label="Tranluz en LinkedIn" target="_blank" rel="noreferrer">
              <Building2 aria-hidden="true" size={18} />
            </a>
            <a href={brand.social.instagram} aria-label="Tranluz en Instagram" target="_blank" rel="noreferrer">
              <Camera aria-hidden="true" size={18} />
            </a>
            <a href={brand.social.youtube} aria-label="Tranluz en YouTube" target="_blank" rel="noreferrer">
              <PlayCircle aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
        {/* resto de columnas igual, solo tildes */}
      </div>

      <div className="footer-trust">
        <div>
          <strong>Confianza y cumplimiento</strong>
          <p>Calidad, financiación europea, accesibilidad, privacidad y criterios web para Kit Digital.</p>
        </div>
        <div className="footer-certifications" aria-label="Certificaciones y financiación">
          <Image
            src={assets.quality}
            alt="Sello de calidad AENOR Tranluz"
            width={180}
            height={72}
            loading="lazy"
            sizes="(max-width: 768px) 140px, 180px"
          />
          <Image
            src={assets.footerFunding}
            alt="Financiado por la Unión Europea NextGenerationEU"
            width={260}
            height={80}
            loading="lazy"
            sizes="(max-width: 768px) 180px, 260px"
          />
          <Image
            src={assets.footerMoves}
            alt="Programa MOVES III Andalucía"
            width={180}
            height={72}
            loading="lazy"
            sizes="(max-width: 768px) 140px, 180px"
          />
        </div>
      </div>

      {/* footer-bottom igual que ahora */}
    </footer>
  );
}
