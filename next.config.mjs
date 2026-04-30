/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.tranluz.es" }]
  },
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
