import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress output
  compress: true,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    // Extended sizes to support large hero images at HD/4K screens
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 86400, // 24 hours
  },

  // Reduce build output
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@react-three/drei",
    ],
  },

  // Headers for better caching
  async headers() {
    return [
      {
        source: "/Photos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.glb",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=3600" }],
      },
    ];
  },
};

export default nextConfig;
