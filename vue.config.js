const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // location of the global confiig variables etc.
        prependData: '@import "@/styles/base.scss";'
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000' // adds this before /api in dev mode
  //     }
  //   }
  // },
  // npm run build into server so can serve static files from there
  outputDir: path.resolve(__dirname, '../server/public')
}
