import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boocyowagrgdiuaclmnk.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "aurastore.ng",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aurastore.ng",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;