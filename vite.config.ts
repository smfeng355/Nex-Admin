import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import { wrapperEnv, createProxy } from './build/utils'
import { createVitePlugins } from './build/plugin'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT = 5173, VITE_PUBLIC_PATH = '/', VITE_PROXY } = viteEnv || {}

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/styles/variables.scss' as *;`,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY || []),
    },
  }
})
