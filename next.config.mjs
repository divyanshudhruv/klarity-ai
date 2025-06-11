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
    domains: [
      "bl-prod-images.azureedge.net",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "cdn.discordapp.com",
      "bing.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.azureedge.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bing.com",
        pathname: "/**",
      },
    ],
  },
};
