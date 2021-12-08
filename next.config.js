/** @type {import('next').NextConfig} */
const withImages = require("next-images");

module.exports = withImages({
  webpack(config) {
    return config;
  },
  images: {
    disableStaticImages: true
  },
  reactStrictMode: true,
})
