import { port } from './config/dev.base.config'

module.exports = {
  baseUrl: '/',

  // 打包后的输出目录
  outputDir: 'dist',

  // 保存时是不是用eslint-loader 来lint 代码
  lintOnSave: false,

  // 使用runtime-only 还是 in-browser compiller
  compiler: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack 配置~
  chainWebpack: () => {},
  configureWebpack: () => {},

  // vue-loader options
  // https://vue-loader.vuejs.org/en/options.html
  // vue-loader 配置
  vueLoader: {},

  // 生产环境的sourceMap 要不要？
  productionSourceMap: true,

  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    extract: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    // 用不用 css Modules 啊？
    modules: false
  },

  // 使用多线程否？
  parallel: require('os').cpus().length > 1,

  // split vendors using autoDLLPlugin?
  // can also be an explicit Array of dependencies to include in the DLL chunk.
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // 用不用 autoDLLPlugin，厉害了
  dll: false,

  // options for the PWA plugin.
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // pwa 相关
  pwa: {},

  // Webpack dev server
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: port,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {}
  },

  // options for 3rd party plugins
  pluginOptions: {
    // ...
  }
}
