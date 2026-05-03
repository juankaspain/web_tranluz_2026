"use client";

import Link from "next/link";

const partners = [
  { name: "Tesmec",    logo: "https://www.tesmec.com/themes/custom/tesmec/logo.svg",                                                  href: "https://www.tesmec.com/es",                    fallback: "TM" },
  { name: "Plumett",   logo: "https://www.plumettaz.com/sites/default/files/plumettaz-logo.svg",                                       href: "https://www.plumettaz.com",                    fallback: "PL" },
  { name: "AENOR",     logo: "https://www.aenor.com/recursos/image/logos/logo-aenor.svg",                                              href: "https://www.aenor.com",                        fallback: "AE" },
  { name: "Kit Digital", logo: "https://www.acelerapyme.gob.es/sites/acelerapyme/files/2022-01/Kit_Digital_transparente.png",           href: "https://www.acelerapyme.gob.es/kit-digital",   fallback: "KD" },
  { name: "NextGen EU", logo: "https://commission.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-11/nextgeneu_logo_0.png", href: "https://next-generation-eu.europa.eu", fallback: "NG" },
];

export function FooterPartners() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}
      aria-label="Logos de partners y certificaciones"
    >
      {partners.map((p) => (
        <Link
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={p.name}
          style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              borderRadius: "8px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "80px",
              height: "40px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.logo}
              alt={p.name}
              style={{
                maxHeight: "22px",
                maxWidth: "90px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.7,
              }}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.innerHTML = `<span style="color:rgba(238,243,245,0.6);font-weight:700;font-size:0.75rem;letter-spacing:0.05em">${p.fallback}</span>`;
                }
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
