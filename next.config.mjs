/** @type {import('next').NextConfig} */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'self'",
  "img-src 'self' https://www.tranluz.es data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "connect-src 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests"
].join("; ");

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.tranluz.es" }]
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    instrumentationHook: false
  },
  async headers() {
    // En produccion solo se aplican los headers de seguridad
    const isDev = process.env.NODE_ENV === "development";
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), browsing-topics=()" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        // CSP se desactiva en desarrollo para no interferir con HMR/Turbopack
        ...(!isDev ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : [])
      ]
    }];
  }
};

export default nextConfig;
