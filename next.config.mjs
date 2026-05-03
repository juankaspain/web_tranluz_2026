/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Imágenes optimizadas ────────────────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "www.tranluz.es" },
      { protocol: "https", hostname: "deepskyblue-eel-381189.hostingersite.com" },
      { protocol: "https", hostname: "image.pollinations.ai" },
    ],
  },

  // ── Rendimiento ───────────────────────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // ── Experimental ────────────────────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-accordion",
    ],
    optimizeCss: false,
  },

  // ── Logging en desarrollo ────────────────────────────────────────────────────────────
  logging: {
    fetches: { fullUrl: true },
  },

  // ── Redirects SEO canónicos ───────────────────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },

  // ── Headers de seguridad y caché ─────────────────────────────────────────────────────
  async headers() {
    return [
      // Cache estáticos inmutables
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cabeceras de seguridad globales
      {
        source: "/(.*)",
        headers: [
          // Prevenir MIME-sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referer mínimo seguro
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // HSTS 2 años con preload
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Permisos de API del navegador
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), browsing-topics=()",
          },
          // Antijacking: solo mismo origen puede encuadrar la web
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // DNS prefetch para rendimiento
          { key: "X-DNS-Prefetch-Control", value: "on" },
          // COOP: aislar el contexto de navegación
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          // CORP: permitir carga de recursos cross-origin (fonts, CDN)
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
          // Bloquear carga en Adobe/Flash cross-domain
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          // CSP — Actualizada con connect-src para GA4 consent mode
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + inline (Next.js hydration) + Google Tag Manager (consentimiento previo)
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              // Estilos: self + inline (Tailwind/CSS-in-JS) + Google Fonts + Fontshare
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
              // Fuentes: self + Google Fonts CDN + Fontshare
              "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://api.fontshare.com data:",
              // Imágenes: self + CDNs conocidos + logos de partners
              [
                "img-src 'self' data: blob:",
                "https://www.tranluz.es",
                "https://deepskyblue-eel-381189.hostingersite.com",
                "https://image.pollinations.ai",
                "https://www.tesmec.com",
                "https://www.plumettaz.com",
                "https://www.aenor.com",
                "https://www.acelerapyme.gob.es",
                "https://commission.europa.eu",
                "https://www.googletagmanager.com",
              ].join(" "),
              // Conexiones API: self + GA4 + GTM
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com",
              // Workers, manifesto y frames
              "worker-src 'self' blob:",
              "manifest-src 'self'",
              "frame-src https://www.youtube.com https://player.vimeo.com",
              // Anti-embedding
              "frame-ancestors 'self'",
              // Restricciones de base y formularios
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
              // Forzar HTTPS
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
