/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname:'cdn.jsdeliver.net'
      }
    ]
  }
};

export default nextConfig;
