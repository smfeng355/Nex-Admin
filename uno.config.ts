import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
import { getThemeColors } from './src/utils/color'

// 获取主题色
const themeColors = getThemeColors()

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      mode: 'mask',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        carbon: () => import('@iconify-json/carbon').then(i => i.default),
        mdi: () => import('@iconify-json/mdi').then(i => i.default),
      },
    }),
  ],
  theme: {
    colors: {
      primary: themeColors.primary,
      'primary-hover': themeColors.primaryHover,
      'primary-pressed': themeColors.primaryPressed,
    },
  },
  shortcuts: {
    icon: 'inline-flex items-center justify-center',
    'icon-base': 'icon w-1em h-1em',
  },
  safelist: ['i-carbon:dashboard', 'i-carbon:settings', 'i-carbon:user-role', 'i-carbon:security', 'i-carbon:code'],
})
