/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{
      source: '/:all*(svg|jpg|png|webp|woff2)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    }]
  }
}
module.exports = nextConfig
