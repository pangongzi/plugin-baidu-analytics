
import type { Router } from 'vue-router';

export interface Options {
  siteId?: string | string[]; // 站点 ID，可选
  router?: Router; // Vue Router 实例
  debug?: boolean; // 是否启用调试模式
  autoTrack?: boolean; // 是否自动跟踪页面访问
  trackLinks?: boolean; // 是否跟踪链接点击
  userId?: string; // 用户 ID，可选
  customDimensions?: Record<string, any>; // 自定义维度
}