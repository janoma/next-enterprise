import withBundleAnalyzer from "@next/bundle-analyzer";
const withPlugins = require("next-compose-plugins");

import { env } from "./env.mjs";

const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  experimental: {},
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  rewrites() {
    return [
      { destination: "/api/health", source: "/healthz" },
      { destination: "/api/health", source: "/api/healthz" },
      { destination: "/api/health", source: "/health" },
      { destination: "/api/health", source: "/ping" },
    ];
  },
});

export default config;
