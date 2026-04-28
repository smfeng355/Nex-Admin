import type { Plugin } from 'vite'
import { readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * 从 theme.css 提取主题色并注入到全局
 */
function extractPrimaryColorFromCSS(): string {
  const cssPath = resolve(__dirname, '../../src/styles/theme.css')
  const cssContent = readFileSync(cssPath, 'utf-8')

  const match = cssContent.match(/--primary-color:\s*(#[0-9a-fA-F]{3,8})/)
  if (!match) {
    throw new Error('无法从 theme.css 中提取 --primary-color')
  }

  return match[1]
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

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

export function themeInjectorPlugin(): Plugin {
  return {
    name: 'vite-plugin-theme-injector',
    configResolved() {
      const primaryColor = extractPrimaryColorFromCSS()

      const themeColors = {
        primary: primaryColor,
        primaryHover: colorMix(primaryColor, 'white', 85),
        primaryPressed: colorMix(primaryColor, 'black', 115),
        primarySuppl: primaryColor,
      }

      // 注入到全局
      ;(globalThis as any).__THEME_COLORS__ = themeColors

      // 写入环境变量
      process.env.VITE_PRIMARY_COLOR = themeColors.primary
      process.env.VITE_PRIMARY_COLOR_HOVER = themeColors.primaryHover
      process.env.VITE_PRIMARY_COLOR_PRESSED = themeColors.primaryPressed
    },
  }
}
