// next.config.js
require('dotenv').config();
const withImages = require('next-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  ...withImages(),
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_EMAIL: process.env.SENDGRID_EMAIL,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap');
    }

    return config;
  },
};
