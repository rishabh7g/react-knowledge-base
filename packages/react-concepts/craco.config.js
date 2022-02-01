const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const packages = [];
packages.push(path.join(__dirname, '../reusable-inventory/src'));

/**
 * Why are we using this file:
 * You may need an additional loader to handle the result of these loaders.
 *
 * Solution:
 * CRA has its own webpack config which has specific loaders that we need to override
 */
module.exports = {
  webpack: {
    configure: (webpackConfig, args) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(packages);
        return webpackConfig;
      }
    },
  },
};
