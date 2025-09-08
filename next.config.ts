  // import type { NextConfig } from "next";

  // const withBundleAnalyzer = require('@next/bundle-analyzer')({
  //   enabled: process.env.ANALYZE === 'true',
  // });

  // const nextConfig: NextConfig = withBundleAnalyzer({
  //   productionBrowserSourceMaps: true,
  //   output: "export",
  //   trailingSlash: true,
  //   images: { unoptimized: true },
    
  // });

  // export default nextConfig;




  import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: true,
  output: "export",
  compress: true, 
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    optimizeCss: true,
  },
});

export default nextConfig;


// import type { NextConfig } from "next";
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {NextConfig} */
// const nextConfig: NextConfig = withBundleAnalyzer({
//   productionBrowserSourceMaps: false,
//   output: "export",
//   compress: true,
//   trailingSlash: true,

//   images: {
//     unoptimized: true, 
//   },

//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//   },
// });

// export default nextConfig;


// import type { NextConfig } from "next";
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {NextConfig} */
// const nextConfig: NextConfig = withBundleAnalyzer({
//   // Enable source maps only in development
//   productionBrowserSourceMaps: false,
  
//   // Static export configuration
//   output: "export",
//   compress: true,
//   trailingSlash: true,

//   // Image optimization
//   images: {
//     unoptimized: true,
//     formats: ['image/webp', 'image/avif'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },

//   // Enhanced modular imports for better tree shaking
//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//     "@mui/material": {
//       transform: "@mui/material/{{member}}",
//     },
//     "@mui/icons-material": {
//       transform: "@mui/icons-material/{{member}}",
//     },
//     "react-icons": {
//       transform: "react-icons/{{dirname}}/{{member}}",
//     },
//   },

//   // Webpack optimizations
//   webpack: (config, { dev, isServer }) => {
//     // Production optimizations
//     if (!dev && !isServer) {
//       // Enable aggressive splitting for better caching
//       config.optimization = {
//         ...config.optimization,
//         splitChunks: {
//           chunks: 'all',
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name: 'vendors',
//               chunks: 'all',
//               priority: 10,
//             },
//             common: {
//               name: 'common',
//               minChunks: 2,
//               chunks: 'all',
//               priority: 5,
//               reuseExistingChunk: true,
//             },
//           },
//         },
//         // Enable module concatenation
//         concatenateModules: true,
//         // Remove duplicate modules
//         mergeDuplicateChunks: true,
//       };

//       // Tree shaking improvements
//       config.optimization.usedExports = true;
//       config.optimization.sideEffects = false;
//     }

//     // Resolve extensions for better module resolution
//     config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

//     // Cache configuration for faster rebuilds
//     config.cache = {
//       type: 'filesystem',
//       buildDependencies: {
//         config: [__filename],
//       },
//     };

//     return config;
//   },

//   // Experimental features for performance
//   experimental: {
//     // Enable modern JavaScript for smaller bundles
//     esmExternals: true,
//     // Optimize CSS
//     optimizeCss: true,
//     // Enable SWC minification (faster than Terser)
//     swcMinify: true,
//   },

//   // Compiler optimizations
//   compiler: {
//     // Remove console.log in production
//     removeConsole: process.env.NODE_ENV === 'production',
//     // Remove React dev tools in production
//     reactRemoveProperties: process.env.NODE_ENV === 'production',
//   },

//   // Headers for better caching
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block',
//           },
//         ],
//       },
//       // Cache static assets aggressively
//       {
//         source: '/(.*)\\.(js|css|woff|woff2|eot|ttf|otf|png|jpg|jpeg|gif|svg|ico)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },

//   // PoweredByHeader removal for slight performance gain
//   poweredByHeader: false,

//   // Enable gzip compression
//   compress: true,

//   // Optimize fonts
//   optimizeFonts: true,
// });

// export default nextConfig;




// import type { NextConfig } from "next";
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {NextConfig} */
// const nextConfig: NextConfig = withBundleAnalyzer({
//   productionBrowserSourceMaps: false,
//   output: "export",
//   compress: true,
//   trailingSlash: true,

//   images: {
//     unoptimized: true, 
//   },

//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//   },
// });


// export default nextConfig;



// import type { NextConfig } from "next";
// import type { Configuration } from "webpack";

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig: NextConfig = withBundleAnalyzer({
//   productionBrowserSourceMaps: false,
//   output: "export", 
//   compress: true,
//   trailingSlash: true,

//   images: {
//     unoptimized: true,
//     formats: ["image/webp", "image/avif"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },

//   modularizeImports: {
//     lodash: { transform: "lodash/{{member}}" },
//     "date-fns": { transform: "date-fns/{{member}}" },
//     "@mui/material": { transform: "@mui/material/{{member}}" },
//     "@mui/icons-material": { transform: "@mui/icons-material/{{member}}" },
//     "react-icons": { transform: "react-icons/{{dirname}}/{{member}}" },
//   },

//   webpack: (
//     config: Configuration,
//     options: { dev: boolean; isServer: boolean }
//   ) => {
//     const { dev, isServer } = options;

//     if (!dev && !isServer) {
//       config.optimization = {
//         ...config.optimization,
//         splitChunks: {
//           chunks: "all",
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name: "vendors",
//               chunks: "all",
//               priority: 10,
//             },
//             common: {
//               name: "common",
//               minChunks: 2,
//               chunks: "all",
//               priority: 5,
//               reuseExistingChunk: true,
//             },
//           },
//         },
//         concatenateModules: true,
//         mergeDuplicateChunks: true,
//         usedExports: true,
//         sideEffects: false,
//       };
//     }

//     config.resolve = {
//       ...config.resolve,
//       extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
//     };

//     config.cache = {
//       type: "filesystem",
//       buildDependencies: { config: [__filename] },
//     };

//     return config;
//   },

//   experimental: {
//     esmExternals: true,
//     optimizeCss: true, 
//   },

//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//     reactRemoveProperties: process.env.NODE_ENV === "production",
//   },
//   poweredByHeader: false,
// });

// export default nextConfig;
