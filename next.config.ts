/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
            },
        ],
    },
    // Disable ESLint during builds for deployment
    eslint: {
        // Warning instead of error during builds
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
