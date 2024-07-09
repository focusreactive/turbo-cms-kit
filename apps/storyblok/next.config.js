/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: process.env.SB_PREVIEW_TOKEN,
  },
};

module.exports = nextConfig;
