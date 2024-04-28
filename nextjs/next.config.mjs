/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["wallet-adapter-react", "wallet-adapter-plugin"],
  },
  output: 'export',
};

export default nextConfig;
