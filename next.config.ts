import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
