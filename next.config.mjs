/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [{
      hostname: 'res.cloudinary.com',
      port: '',
    }]
  },
  
};

export default nextConfig;
