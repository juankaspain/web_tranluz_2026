export const legalPages = {
  "aviso-legal": {
    eyebrow: "Informacion legal",
    title: "Aviso legal",
    intro:
      "Informacion identificativa de Tranluz, S.L. y condiciones basicas de uso del sitio corporativo.",
    sections: [
      {
        title: "Datos legales",
        text: "Titular: Tranluz, S.L. CIF B41277229. Domicilio social: Poligono Industrial Calonge, C/Oro 2, 41007 Sevilla, Espana."
      },
      {
        title: "Datos registrales",
        text: "Inscrita en el Registro Mercantil de Sevilla, Tomo 1088, Libro 207 de la Seccion 2, Folio 210, Hoja 9305, Inscripcion 1."
      },
      {
        title: "Contacto y uso",
        text: "Telefono +34 954 367 290 y correo info@tranluz.com. El sitio se ofrece para informacion, contacto y consulta profesional sobre productos y servicios Tranluz."
      },
      {
        title: "Mejora detectada",
        text: "La web original ofuscaba el email y mezclaba aviso legal y privacidad en una misma pagina. La nueva version separa contenidos, mejora lectura y mantiene datos legales visibles."
      }
    ]
  },
  privacidad: {
    eyebrow: "Proteccion de datos",
    title: "Politica de privacidad",
    intro:
      "Informacion profesional sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
    sections: [
      {
        title: "Responsable",
        text: "El responsable del tratamiento es Tranluz, S.L., con domicilio en Poligono Industrial Calonge, C/Oro 2, 41007 Sevilla, Espana."
      },
      {
        title: "Datos y finalidad",
        text: "Los datos de nombre, empresa, telefono, email, IP y datos de navegacion pueden tratarse para responder consultas, gestionar solicitudes, prestar servicios, cumplir obligaciones legales y realizar comunicaciones comerciales cuando proceda."
      },
      {
        title: "Derechos",
        text: "El usuario puede ejercer acceso, rectificacion, supresion, oposicion, limitacion, portabilidad y no ser objeto de decisiones automatizadas por los canales de contacto oficiales."
      },
      {
        title: "Mejora detectada",
        text: "El texto original citaba una razon social ajena en un parrafo. La nueva version debe revisarse juridicamente para confirmar denominacion, DPO, base legitimadora y plazos de conservacion."
      }
    ]
  },
  cookies: {
    eyebrow: "Privacidad",
    title: "Politica de cookies",
    intro:
      "Informacion sobre cookies tecnicas y de terceros tomando como base la politica historica de Tranluz.",
    sections: [
      {
        title: "Cookies informadas",
        text: "La politica original declaraba Google Analytics (_ga, _gat_gtag_UA_, _gid), Cloudflare (__cfduid), Hotjar (_hjIncludedInSample), PHPSESSID y cookieconsent_status."
      },
      {
        title: "Gestion del consentimiento",
        text: "El usuario debe poder aceptar, rechazar o configurar cookies no tecnicas antes de su carga, y modificar su decision posteriormente desde la web."
      },
      {
        title: "Mejora detectada",
        text: "__cfduid esta obsoleta y la politica original mencionaba cookieconsent_status asociado a otro dominio. Conviene auditar cookies reales antes de publicar el banner definitivo."
      }
    ]
  },
  accesibilidad: {
    eyebrow: "Accesibilidad",
    title: "Declaracion de accesibilidad",
    intro:
      "La interfaz se ha construido con HTML semantico, foco visible, contraste validado, navegacion por teclado y responsive real.",
    sections: [
      {
        title: "Criterios aplicados",
        text: "Estructura por landmarks, enlaces descriptivos, estados focus-visible, textos escalables, contrastes AA y soporte para prefers-reduced-motion."
      },
      {
        title: "Compatibilidad",
        text: "La web esta preparada para navegadores modernos, lectura movil y dispositivos de escritorio sin depender de interacciones solo visuales."
      },
      {
        title: "Mejora continua",
        text: "Las futuras cargas de catalogo, documentos PDF y contenidos externos deben revisarse para mantener la accesibilidad global."
      }
    ]
  },
  "kit-digital": {
    eyebrow: "Kit Digital",
    title: "Criterios web orientados a la subvencion Kit Digital",
    intro:
      "La nueva web se orienta a los criterios de presencia en internet del programa Kit Digital para empresas en Espana.",
    sections: [
      {
        title: "Presencia basica y SEO",
        text: "Dominio corporativo, estructura responsive, paginas indexables, sitemap, robots, metadatos, Open Graph, datos estructurados y arquitectura preparada para posicionamiento basico."
      },
      {
        title: "Accesibilidad y multidioma",
        text: "Interfaz responsive, foco visible, contraste validado, selector de idioma y deteccion automatica ES/EN/DE/IT/FR segun pais, navegador o preferencia guardada."
      },
      {
        title: "Legalidad y medicion",
        text: "Aviso legal, privacidad, cookies, declaracion de accesibilidad, cabeceras de seguridad y base preparada para analitica con consentimiento y mantenimiento evolutivo."
      }
    ]
  }
};

export type LegalPageKey = keyof typeof legalPages;
