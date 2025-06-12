
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // Removed for Node.js server deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Kept to simplify image deployment, can be changed later
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com', // Added for your profile image
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
