/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

const plugins = [
  withTM({
    transpileModules: ['@monext/webby']
  })
]

const nextConfiguration = {}

module.exports = withPlugins(
  [...plugins],
  nextConfiguration
)
