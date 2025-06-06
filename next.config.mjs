/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default {
  ...nextConfig,
  images: {
    domains: ['bl-prod-images.azureedge.net'],
  },
};
