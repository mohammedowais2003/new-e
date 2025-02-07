/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.sanity.io', // Allows images from any Sanity project
        },
      ],
    },
    env: {
      SANITY_WEBSITE: 'https://www.sanity.io', // Add this to access in your app via process.env.SANITY_WEBSITE
    },
  };
  
  export default nextConfig;
  