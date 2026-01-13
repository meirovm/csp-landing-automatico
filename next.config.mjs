/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
  },
  compiler: {
    // Remove console logs in production environments
    removeConsole: process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
  },
};

export default nextConfig;
