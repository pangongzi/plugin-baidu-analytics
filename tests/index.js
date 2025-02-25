// import BaiduAnalytics from "baidu-analytics";
// const app = createApp(App);
// app.use(BaiduAnalytics, { siteId: "你的统计ID", router }); // 直接传入 router

// 手动上报访问
// const trackCustomPage = () => {
//   instance.appContext.config.globalProperties.$trackPage("/custom-page");
// };
export default {
  install (app, options = {}) {
    const { siteId, router } = options;
    if (!siteId) {
      console.error("[BaiduAnalytics] 请提供 siteId");
      return;
    }
    if (!router) {
      console.error("[BaiduAnalytics] 请提供 Vue Router 实例");
      return;
    }

    function loadBaiduAnalytics () {
      if (window._hmt) return;
      var hm = document.createElement("script");
      hm.src = `https://hm.baidu.com/hm.js?${siteId}`;
      hm.async = true;
      document.head.appendChild(hm);
    }

    // 监听页面路由变化，自动上报数据
    router.afterEach((to) => {
      if (window._hmt) {
        window._hmt.push(["_trackPageview", to.fullPath]);
      }
    });


    // 给 Vue 实例添加全局方法
    app.config.globalProperties.$trackPage = (path) => {
      if (window._hmt) {
        window._hmt.push(["_trackPageview", path]);
      }
    };


    loadBaiduAnalytics();
  },
};
