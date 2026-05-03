import Link from "next/link";
import { BookOpenText, Mail, Phone, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

export function ActionDock() {
  return (
    <nav className="action-dock" aria-label="Acciones principales">
      <a
        href={`tel:${brand.phone.replaceAll(" ", "")}`}
        className="action-dock__phone"
        aria-label={`Llamar al ${brand.phone}`}
      >
        <Phone aria-hidden="true" size={18} />
        <span className="action-dock__tooltip">{brand.phone}</span>
        <span className="action-dock__label">Teléfono</span>
      </a>
      <a
        href="/contacto#formulario"
        aria-label="Enviar email"
      >
        <Mail aria-hidden="true" size={18} />
        <span>Email</span>
      </a>
      <a href={`tel:${brand.phone.replaceAll(" ", "")}`}>
        <PhoneCall aria-hidden="true" size={18} />
        <span>Llamar</span>
      </a>
      <Link href="/soporte/catalogos">
        <BookOpenText aria-hidden="true" size={18} />
        <span>Catalogos</span>
      </Link>
    </nav>
  );
}
