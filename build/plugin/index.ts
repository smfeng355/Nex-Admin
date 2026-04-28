import vue from '@vitejs/plugin-vue'

/**
 * * 扩展setup插件，支持在script标签中使用name属性
 * usage: <script setup name="MyComp"></script>
 */
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
import type { PluginOption } from 'vite'

interface ViteEnv {
  [key: string]: any
}

export function createVitePlugins(_viteEnv: ViteEnv, isBuild: boolean): PluginOption[] {
  const plugins: PluginOption[] = [
    vue(),
    VueSetupExtend(),
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