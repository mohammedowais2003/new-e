/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'], 
=======
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
>>>>>>> 5bef5c62bdafe7841f4a0228e7412ce84ea499f8
    },
  };
  
  export default nextConfig;
<<<<<<< HEAD
=======
  
>>>>>>> 5bef5c62bdafe7841f4a0228e7412ce84ea499f8
