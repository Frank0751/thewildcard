import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel automatically handles standalone output, but this helps with Docker/other deployments
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow preview domains during development
  allowedDevOrigins: ["*.space-z.ai", "*.vercel.app"],
};

export default nextConfig;
