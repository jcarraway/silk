const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-transpile-modules');

const nextConfig = {
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // '@silk/common': require.resolve('@silk/common'),
      'react-native$': 'react-native-web',
      // 'react-native$': require.resolve('react-native-web'),
    };
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['@amaze/common'],
      },
    ],
    withTypescript,
  ],
  nextConfig
);
