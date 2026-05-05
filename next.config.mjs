// next.config.mjs — Tranluz
// Fix 1.6: Security Headers HTTP
// Fix 4.3: Optimización de bundle e imágenes

/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  // CSP básico — ampliar cuando se integren servicios de terceros
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-inline necesario para Next.js dev
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  // Fix 1.6: Security headers en todas las rutas
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Fix 4.3: Imágenes en formatos modernos
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
  },

  // Compresión
  compress: true,

  // NOTA: optimizePackageImports eliminado intencionalmente.
  // Next.js 15 + React 19: esta opción experimental reescribe los imports
  // de paquetes listados y puede generar una referencia duplicada de React
  // en chunks SSR sin "use client", produciendo el error:
  //   TypeError: f.useState is not a function
  // durante el prerendering estático (ej. /privacidad, /cookies, /aviso-legal).
  // Webpack nativo hace tree-shaking de lucide-react sin necesitar este flag.
  experimental: {},
};

export default nextConfig;
