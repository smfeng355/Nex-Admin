// src/plugins/index.ts
import type { App } from 'vue'
import { setupNaive } from './naive'

/**
 * 注册所有插件
 * 统一管理第三方库的初始化
 */
export function setupPlugins(app: App) {
  // 注册 Naive UI
  setupNaive(app)

  // 后续可以在这里添加其他插件
  // setupRouter(app)
  // setupI18n(app)
  // setupDirectives(app)
}
