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
          <h2>Producto, alquiler, servicio tecnico y formacion desde un unico partner.</h2>
        </div>
        <div className="footer-cta-actions">
          <Link className="button button-primary" href="/presupuesto">
            Solicitar presupuesto tecnico
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
          <img src={assets.footerLogo} alt="Tranluz" width="176" height="54" loading="lazy" decoding="async" />
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
        <nav aria-label="Footer productos">
          <strong>Plataforma</strong>
          <Link href="/productos">Productos</Link>
          <Link href="/alquiler">Alquiler</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/formacion">Formacion</Link>
        </nav>
        <nav aria-label="Footer soporte">
          <strong>Soporte</strong>
          <Link href="/soporte/catalogos">Catalogos</Link>
          <Link href="/soporte">Centro tecnico</Link>
          <Link href="/presupuesto">Presupuesto</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <address className="footer-contact">
          <strong>Contacto</strong>
          <span>
            <MapPin aria-hidden="true" size={17} />
            {brand.address}
          </span>
          <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>
            <PhoneCall aria-hidden="true" size={17} />
            {brand.phone}
          </a>
          <a href={`mailto:${brand.email}`}>
            <Mail aria-hidden="true" size={17} />
            {brand.email}
          </a>
        </address>
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

      <div className="footer-bottom">
        <span>© 2026 Tranluz, S.L. Todos los derechos reservados.</span>
        <nav aria-label="Footer legal">
          <Link href="/kit-digital">Kit Digital</Link>
          <Link href="/accesibilidad">Accesibilidad</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </nav>
      </div>
    </footer>
  );
}
