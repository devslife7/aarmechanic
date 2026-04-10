import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/designs/option-h-sleek-blue.html",
      },
    ];
  },
};

export default nextConfig;
