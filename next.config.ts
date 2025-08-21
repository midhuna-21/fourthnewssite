import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {NextConfig} */
const nextConfig: NextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: false,
  output: "export",
  compress: true,
  trailingSlash: true,

  images: {
    unoptimized: true, 
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
});

export default nextConfig;