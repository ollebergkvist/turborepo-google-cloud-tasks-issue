/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    outputFileTracingIncludes: {
      "/": ["../../node_modules/@google-cloud/tasks/build/esm/src/**/*.json"],
    },
  },
};

module.exports = nextConfig;
