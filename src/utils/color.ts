/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 03:01:26
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:29:27
 * @FilePath: \admin\src\utils\color.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 颜色工具函数
 * 从全局变量读取主题色（由 Vite 插件注入）
 */

// 从全局变量读取（由 Vite 插件在构建时注入）
declare global {
  interface Window {
    __THEME_COLORS__?: {
      primary: string
      primaryHover: string
      primaryPressed: string
      primarySuppl: string
    }
  }
}

/**
 * 将 hex 颜色转换为 RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

/**
 * 将 RGB 转换为 hex
 */
function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = Math.max(0, Math.min(255, Math.round(x))).toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}

/**
 * 混合颜色（模拟 CSS color-mix）
 */
function colorMix(hex: string, mixWith: 'white' | 'black', percentage: number): string {
  const { r, g, b } = hexToRgb(hex)
  const mixRatio = percentage / 100

  if (mixWith === 'white') {
    return rgbToHex(
      r * mixRatio + 255 * (1 - mixRatio),
      g * mixRatio + 255 * (1 - mixRatio),
      b * mixRatio + 255 * (1 - mixRatio)
    )
  } else {
    return rgbToHex(r * mixRatio, g * mixRatio, b * mixRatio)
  }
}

/**
 * 生成完整的主题色配置
 */
export function getThemeColors() {
  // 尝试从全局变量读取（构建时注入）
  const globalColors = (globalThis as any).__THEME_COLORS__

  if (globalColors) {
    return globalColors
  }

  // 开发环境默认值 - 与 theme.css 保持一致
  const primaryColor = '#316c72'

  return {
    primary: primaryColor,
    primaryHover: colorMix(primaryColor, 'white', 85),
    primaryPressed: colorMix(primaryColor, 'black', 115),
    primarySuppl: primaryColor,
  }
}
