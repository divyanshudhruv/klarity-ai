/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default {
  ...nextConfig,
  images: {
    domains: ["bl-prod-images.azureedge.net", "lh3.googleusercontent.com","avatars.githubusercontent.com", "cdn.discordapp.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bl-prod-images.azureedge.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bing.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};
