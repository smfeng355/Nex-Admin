import type { App } from 'vue'
import naive from 'naive-ui'

/**
 * 注册 Naive UI 组件
 *
 * 说明：
 * - 开发环境：使用全量引入 app.use(naive)，方便开发调试
 * - 生产环境：可以使用 unplugin-vue-components 实现自动按需引入
 */
export function setupNaive(app: App) {
  app.use(naive)
}
