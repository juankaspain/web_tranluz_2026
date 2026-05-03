/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Imágenes optimizadas ────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400,
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "www.tranluz.es" },
      { protocol: "https", hostname: "deepskyblue-eel-381189.hostingersite.com" },
      { protocol: "https", hostname: "image.pollinations.ai" },
    ],
  },

  // ── Rendimiento ───────────────────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // ── Experimental ──────────────────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-accordion",
    ],
    optimizeCss: false,
  },

  // ── Logging en desarrollo ───────────────────────────────────────────────────────────
  logging: {
    fetches: { fullUrl: true },
  },

  // ── Redirects SEO canónicos ─────────────────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },

  // ── Headers de seguridad ───────────────────────────────────────────────────────────
  async headers() {
    return [
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
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), browsing-topics=()",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Fonts: Google Fonts + Fontshare + self
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
              "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com data:",
              // Imágenes: self + tranluz.es + hostinger + pollinations + partners logos
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
              ].join(" "),
              "connect-src 'self'",
              "worker-src 'self' blob:",
              "manifest-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
