/** @type {import('next').NextConfig} */
const path = require("path");

const { version } = require("./package.json");

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  env: {
    PUBLIC_URL: "/",
  },
  generateBuildId: async () => {
    if (process.env.COMMIT_SHA) {
      return `${version}-${process.env.COMMIT_SHA}`;
    }

    return version;
  },
  webpack: (config) => {
    config.resolve.alias["public"] = path.resolve(__dirname, "./public");

    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                titleProp: true,
                dimensions: false,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
