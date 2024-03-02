const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // browser => exclude node modules except msw/browser
      config.externals = /^(node)$/;
    }
    return config;
  },
};
module.exports = nextConfig;
