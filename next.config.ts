import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // 👈 สำหรับรูปบทความ
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', // 👈 สำหรับรูป Author
        port: '',
        pathname: '/api/**',
      },
    ],
  },
};

export default nextConfig;
