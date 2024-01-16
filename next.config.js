/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  staticPageGenerationTimeout: 1000,
  images: { unoptimized: true },
};

module.exports = nextConfig;
