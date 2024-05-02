const { composePlugins, withNx } = require('@nx/webpack');
const { ProvidePlugin } = require('webpack');

module.exports = composePlugins(withNx({ target: 'node' }), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  // Add a fallback for the 'buffer' module
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      "buffer": require.resolve("buffer/"),
    },
  };

  // Add the ProvidePlugin to automatically load modules instead of having to import or require them everywhere
  config.plugins.push(
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
});