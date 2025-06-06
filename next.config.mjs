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
    domains: ["bl-prod-images.azureedge.net"],
  },
};
