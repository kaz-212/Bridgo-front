module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // location of the global confiig variables etc.
        prependData: '@import "@/styles/base.scss";'
      }
    }
  }
}
