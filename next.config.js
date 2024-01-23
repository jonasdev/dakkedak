/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  staticPageGenerationTimeout: 1000,
  images: { unoptimized: true },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

module.exports = nextConfig;
