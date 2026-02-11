import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nanodrill.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

