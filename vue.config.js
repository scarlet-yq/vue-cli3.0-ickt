module.exports = {
    lintOnSave: true,
    // 解决路由懒加载失败
    chainWebpack: config => {
      config.plugins.delete('prefetch')
    }
}