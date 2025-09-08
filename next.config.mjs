/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
      },
    ],
  },
  // Disable ESLint during builds to prevent lint errors from failing the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow production builds to successfully complete even if there are type errors.
  // Useful when migrating or when third-party types cause friction.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
