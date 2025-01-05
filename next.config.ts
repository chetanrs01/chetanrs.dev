import type { NextConfig } from "next";
import { prefix } from "@/app/prefix";

const nextConfig: NextConfig = {
  basePath: prefix,
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
