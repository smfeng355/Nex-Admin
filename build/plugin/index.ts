import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import visualizer from 'rollup-plugin-visualizer'
import { configHtmlPlugin } from './html'
import { unocss } from './unocss'
import { themeInjectorPlugin } from './theme-injector'
import type { PluginOption } from 'vite'
import type { ViteEnv } from '../types/env'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean): PluginOption[] {
  const plugins: PluginOption[] = [
    vue(),
    VueSetupExtend(),
    themeInjectorPlugin(), // 添加主题注入插件
    configHtmlPlugin(viteEnv, isBuild),
    unocss(),
  ]

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return plugins
}
