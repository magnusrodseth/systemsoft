module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
