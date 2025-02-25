# Vue Baidu Analytics

A simple Vue 3 plugin for integrating Baidu Analytics.

## Installation

```bash
npm install vue-baidu-analytics

Usage

In your main.js or main.ts:

import { createApp } from 'vue'
import App from './App.vue'
import BaiduAnalytics from 'vue-baidu-analytics'

const app = createApp(App)

// 使用百度统计插件
app.use(BaiduAnalytics)

app.mount('#app')

Methods
	•	$trackPage(pageName) - Track page view
	•	$trackEvent(category, action, label, value) - Track custom event