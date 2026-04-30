import Link from "next/link";
import { BookOpenText, FileText, PhoneCall } from "lucide-react";
import { brand } from "@/config/brand";

export function ActionDock() {
  return (
    <nav className="action-dock" aria-label="Acciones principales">
      <Link href="/presupuesto">
        <FileText aria-hidden="true" size={18} />
        <span>Presupuesto</span>
      </Link>
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
