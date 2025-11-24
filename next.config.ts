import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const baseNextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false,
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

// Initialize the next-intl plugin
const configWithPlugins = createNextIntlPlugin()(baseNextConfig);

const nextConfig = configWithPlugins;
export default nextConfig;
