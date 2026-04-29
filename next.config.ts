import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hornschuh.eu",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
