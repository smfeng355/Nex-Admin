import { createHtmlPlugin } from 'vite-plugin-html'
import type { PluginOption } from 'vite'
import type { ViteEnv } from '../types/env'

export function configHtmlPlugin(viteEnv: ViteEnv, isBuild: boolean): PluginOption {
  const { VITE_APP_TITLE } = viteEnv

  return createHtmlPlugin({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE || 'Nex-Admin',
      },
    },
  })
}
