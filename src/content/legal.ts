export const legalPages = {
  "aviso-legal": {
    eyebrow: "Información legal",
    title: "Aviso legal",
    intro: "Información identificativa de Tranluz, S.L. y condiciones básicas de uso del sitio corporativo.",
    sections: [
      { title: "Datos legales", text: "Titular: Tranluz, S.L. CIF B41277229. Domicilio social: Polígono Industrial Calonge, C/Oro 2, 41007 Sevilla, España." },
      { title: "Datos registrales", text: "Inscrita en el Registro Mercantil de Sevilla, Tomo 1088, Libro 207 de la Sección 2, Folio 210, Hoja 9305, Inscripción 1." },
      { title: "Contacto y uso", text: "Teléfono +34 954 367 290 y correo info@tranluz.com. El sitio se ofrece para información, contacto y consulta profesional sobre productos y servicios Tranluz." },
      { title: "Mejora detectada", text: "La web original ofuscaba el email y mezclaba aviso legal y privacidad en una misma página. La nueva versión separa contenidos, mejora lectura y mantiene datos legales visibles." }
    ]
  },
  privacidad: {
    eyebrow: "Protección de datos",
    title: "Política de privacidad",
    intro: "Información profesional sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
    sections: [
      { title: "Responsable", text: "El responsable del tratamiento es Tranluz, S.L., con domicilio en Polígono Industrial Calonge, C/Oro 2, 41007 Sevilla, España." },
      { title: "Datos y finalidad", text: "Los datos de nombre, empresa, teléfono, email, IP y datos de navegación pueden tratarse para responder consultas, gestionar solicitudes, prestar servicios, cumplir obligaciones legales y realizar comunicaciones comerciales cuando proceda." },
      { title: "Derechos", text: "El usuario puede ejercer acceso, rectificación, supresión, oposición, limitación, portabilidad y no ser objeto de decisiones automatizadas por los canales de contacto oficiales." },
      { title: "Mejora detectada", text: "El texto original citaba una razón social ajena en un párrafo. La nueva versión debe revisarse jurídicamente para confirmar denominación, DPO, base legitimadora y plazos de conservación." }
    ]
  },
  cookies: {
    eyebrow: "Privacidad",
    title: "Política de cookies",
    intro: "Información sobre cookies técnicas y de terceros tomando como base la política histórica de Tranluz.",
    sections: [
      { title: "Cookies informadas", text: "La política original declaraba Google Analytics (_ga, _gat_gtag_UA_, _gid), Cloudflare (__cfduid), Hotjar (_hjIncludedInSample), PHPSESSID y cookieconsent_status." },
      { title: "Gestión del consentimiento", text: "El usuario debe poder aceptar, rechazar o configurar cookies no técnicas antes de su carga, y modificar su decisión posteriormente desde la web." },
      { title: "Mejora detectada", text: "__cfduid está obsoleta y la política original mencionaba cookieconsent_status asociado a otro dominio. Conviene auditar cookies reales antes de publicar el banner definitivo." }
    ]
  },
  accesibilidad: {
    eyebrow: "Accesibilidad",
    title: "Declaración de accesibilidad",
    intro: "La interfaz se ha construido con HTML semántico, foco visible, contraste validado, navegación por teclado y responsive real.",
    sections: [
      { title: "Criterios aplicados", text: "Estructura por landmarks, enlaces descriptivos, estados focus-visible, textos escalables, contrastes AA y soporte para prefers-reduced-motion." },
      { title: "Compatibilidad", text: "La web está preparada para navegadores modernos, lectura móvil y dispositivos de escritorio sin depender de interacciones solo visuales." },
      { title: "Mejora continua", text: "Las futuras cargas de catálogo, documentos PDF y contenidos externos deben revisarse para mantener la accesibilidad global." }
    ]
  },
  "kit-digital": {
    eyebrow: "Kit Digital",
    title: "Criterios web orientados a la subvención Kit Digital",
    intro: "La nueva web se orienta a los criterios de presencia en internet del programa Kit Digital para empresas en España.",
    sections: [
      { title: "Presencia básica y SEO", text: "Dominio corporativo, estructura responsive, páginas indexables, sitemap, robots, metadatos, Open Graph, datos estructurados y arquitectura preparada para posicionamiento básico." },
      { title: "Accesibilidad y multidioma", text: "Interfaz responsive, foco visible, contraste validado, selector de idioma y detección automática ES/EN/DE/IT/FR según país, navegador o preferencia guardada." },
      { title: "Legalidad y medición", text: "Aviso legal, privacidad, cookies, declaración de accesibilidad, cabeceras de seguridad y base preparada para analítica con consentimiento y mantenimiento evolutivo." }
    ]
  }
};

export type LegalPageKey = keyof typeof legalPages;
