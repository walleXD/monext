module.exports = function(api) {
  api.cache(true)

  const presets = [
    'backpack-core/babel',
    '@babel/typescript'
  ]
  const plugins = []

  return {
    presets,
    plugins
  }
}
