exports.webpack = function(config, env) {
  if (!env.production) {
    config.devServer.proxy = {
      '/api/pkg': {
        target: 'https://pkg.nyc',
        changeOrigin: true
      },
      '/api/login': {
        target: 'https://pkg.nyc',
        changeOrigin: true
      }
    }
  }
}
