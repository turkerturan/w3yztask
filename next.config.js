/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.w3yz.com',
        port: '',
        pathname: '/images/host2000/**',
      },
    ],
  },
}