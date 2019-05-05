module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: ' https://www.easy-mock.com',
        pathRewrite: {
          '^/api': '/mock/5cbddb946286e713dd39c7ea'
        },
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
  }
}
