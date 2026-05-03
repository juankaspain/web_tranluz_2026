import {
  ArrowUpRight,
  ClipboardCheck,
  GraduationCap,
  PackageSearch,
  Wrench,
} from "lucide-react";
import { quickActions } from "@/content/home";

const icons = [PackageSearch, Wrench, ClipboardCheck, GraduationCap];

export function QuickAccessSection() {
  return (
    <section className="quick-access" aria-label="Accesos rápidos">
      <div className="quick-access-inner">
        {quickActions.map((item, index) => {
          const Icon = icons[index] ?? PackageSearch;

          return (
            <a key={item.href} href={item.href} className="quick-link">
              <Icon size={22} />

              <div className="quick-text">
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </div>

              <ArrowUpRight size={18} />
            </a>
          );
        })}
      </div>
    </section>
  );
}