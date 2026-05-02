import { ArrowUpRight, ClipboardCheck, GraduationCap, PackageSearch, Wrench } from "lucide-react";
import { quickActions } from "@/content/home";

const icons = [PackageSearch, Wrench, ClipboardCheck, GraduationCap];

export function QuickAccessSection() {
  return (
    <section className="section quick-access" aria-label="Accesos rápidos">
      {quickActions.map((item, index) => {
        const Icon = icons[index] ?? PackageSearch;
        return (
        <a className="quick-link" href={item.href} key={item.href}>
          <small className="quick-kicker">{String(index + 1).padStart(2, "0")}</small>
          <Icon aria-hidden="true" size={22} />
          <span>
            <strong>{item.title}</strong>
            <small>{item.summary}</small>
          </span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </a>
        );
      })}
    </section>
  );
}
