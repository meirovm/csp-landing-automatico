/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
  },
  compiler: {
    // Remove console logs in production environments
    removeConsole: process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
  },
};

export default nextConfig;
