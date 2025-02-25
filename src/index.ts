import type { Options } from './type/index'

import { App } from 'vue'

export default {
  install(app: App, options: Options = {}) {
    const siteId = options.siteId
    const router = options.router

    if (!siteId) {
      console.error('[BaiduAnalytics] 请提供 siteId')
      return
    }
    if (!router) {
      console.error('[BaiduAnalytics] 请提供 Vue Router 实例')
      return
    }

    // 插入百度统计脚本
    if (!window._hmt) {
      var hm = document.createElement('script')
      hm.src = `https://hm.baidu.com/hm.js?${siteId}`
      hm.async = true
      document.head.appendChild(hm)
    }

    // 监听页面路由变化，自动上报数据
    router.afterEach((to) => {
      if (window._hmt) {
        window._hmt.push(['_trackPageview', to.fullPath])
      }
    })

    // 添加全局方法：页面统计
    app.config.globalProperties.$trackPage = function (pageName: string) {
      if (window._hmt) {
        window._hmt.push(['_trackPageview', pageName])
      }
    }

    // 添加全局方法：自定义事件统计
    app.config.globalProperties.$trackEvent = function (
      category: string,
      action: string,
      label?: string,
      value?: number
    ) {
      if (window._hmt) {
        window._hmt.push(['_trackEvent', category, action, label, value])
      }
    }
  }
}
