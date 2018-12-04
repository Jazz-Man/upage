const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  distDir: '../../dist/functions/next',
  webpack(config, options) {
    return config
  }
})