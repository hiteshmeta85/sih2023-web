/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "pbxt.replicate.delivery"],
  },
};

module.exports = nextConfig;
