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
    <nav
      className="quick-access"
      aria-label="Accesos rápidos a servicios"
    >
      <div className="quick-access-inner">
        {quickActions.map((item, index) => {
          const Icon = icons[index] ?? PackageSearch;
          return (
            <a
              key={item.href}
              href={item.href}
              className="quick-link"
            >
              <Icon size={22} aria-hidden="true" focusable="false" />
              <div className="quick-text">
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </div>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                focusable="false"
                className="arrow-icon"
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
