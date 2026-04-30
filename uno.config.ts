import { defineConfig, presetUno, presetAttributify } from 'unocss'
import { getThemeColors } from './src/utils/color'

// 获取主题色
const themeColors = getThemeColors()

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
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
})
