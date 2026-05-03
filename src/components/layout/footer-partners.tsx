"use client";

import { useState } from "react";

const partners = [
  { name: "Tesmec",      logo: "https://www.tesmec.com/themes/custom/tesmec/logo.svg",                                                          href: "https://www.tesmec.com/es",              fallback: "Tesmec" },
  { name: "Plumettaz",  logo: "https://www.plumettaz.com/sites/default/files/plumettaz-logo.svg",                                              href: "https://www.plumettaz.com",             fallback: "Plumettaz" },
  { name: "AENOR",      logo: "https://www.aenor.com/recursos/image/logos/logo-aenor.svg",                                                    href: "https://www.aenor.com",                 fallback: "AENOR" },
  { name: "Kit Digital",logo: "https://www.acelerapyme.gob.es/sites/acelerapyme/files/2022-01/Kit_Digital_transparente.png",                  href: "https://www.acelerapyme.gob.es/kit-digital", fallback: "Kit Digital" },
  { name: "NextGen EU", logo: "https://commission.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-11/nextgeneu_logo_0.png", href: "https://next-generation-eu.europa.eu", fallback: "NextGen EU" },
];

function PartnerLogo({ name, logo, fallback, href }: { name: string; logo: string; fallback: string; href: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo-chip"
      aria-label={name}
    >
      {failed ? (
        <span className="partner-logo-fallback">{fallback}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          className="partner-logo-img"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </a>
  );
}

export function FooterPartners() {
  return (
    <div className="footer-partners-strip" aria-label="Partners y acreditaciones">
      <span className="footer-partners-label">Partners oficiales</span>
      <div className="footer-partners-logos">
        {partners.map((p) => (
          <PartnerLogo key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}
