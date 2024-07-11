/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // todo: remove and handle through turbo
    storyblokApiToken: process.env.SB_PREVIEW_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
};

module.exports = nextConfig;
