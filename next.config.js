const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
