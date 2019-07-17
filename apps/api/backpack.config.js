/* eslint-disable @typescript-eslint/no-var-requires */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const monkeyPatchBabelLoader = config => {
  const babelConfig = config.module.rules[0]
  babelConfig.test = /\.(ts|js)x?$/
  babelConfig.use = [
    {
      loader: require.resolve('thread-loader'),
      options: {
        poolTimeout: Infinity // keep workers alive for more effective watch mode
      }
    },
    {
      loader: babelConfig.loader,
      options: babelConfig.options
    }
  ]

  delete babelConfig.loader
  delete babelConfig.options
}

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./src/index.ts']

    config.plugins.push(new ForkTsCheckerWebpackPlugin())

    config.resolve.extensions = [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json'
    ]

    return config
  }
}
