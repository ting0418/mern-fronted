/** @type {import('next').NextConfig} */

const nextConfig = {
  //output: 'export', // don't use with next start or api route
  //distDir: 'dist',
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["via.placeholder.com", "localhost"],
  },
  // avoid cors with proxy
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "https://mern-api-fzml.onrender.com/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
