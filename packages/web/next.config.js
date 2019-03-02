const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins([withTypescript], {
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
});
