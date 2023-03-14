/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
