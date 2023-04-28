/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hitech.mn',
        port: '',
        pathname: '/uploads/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
