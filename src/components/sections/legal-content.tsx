import { CheckCircle2 } from "lucide-react";
import { legalPages, type LegalPageKey } from "@/content/legal";

export function LegalContent({ page }: { page: LegalPageKey }) {
  const content = legalPages[page];

  return (
    <section className="section legal-page">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </div>
      <div className="legal-grid">
        {content.sections.map((section) => (
          <article className="legal-card" key={section.title}>
            <CheckCircle2 aria-hidden="true" size={20} />
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
