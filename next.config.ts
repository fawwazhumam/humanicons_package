import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.1.3', 'localhost:3000', '192.168.1.4'],
};

export default nextConfig;
