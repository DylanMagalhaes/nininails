import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_REVIEW_KEY: process.env.NEXT_PUBLIC_REVIEW_KEY,
    NEXT_PUBLIC_PLACE_ID: process.env.NEXT_PUBLIC_PLACE_ID,
  },
};

export default nextConfig;
