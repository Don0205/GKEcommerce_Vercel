// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {// 新增這行來優化 Vercel 部署，解決數據收集問題
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
  forceSwcTransforms: true, // 試用 SWC 優化
},
  // experimental: {
  //   ppr: true,
  // },
};

export default withPlaiceholder(nextConfig);