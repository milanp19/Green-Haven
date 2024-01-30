/** @type {import('next').NextConfig} */
const nextConfig = {
  disableExperimentalFeaturesWarning: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "greenhaven-bucket.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
