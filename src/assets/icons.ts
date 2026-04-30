/*
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 21:44:46
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 21:51:40
 * @FilePath: \admin\src\assets\icons.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 项目图标库
 * 使用 Iconify 图标集
 * 格式: 图标集:图标名
 * 常用图标集:
 * - feather: Feather Icons
 * - mdi: Material Design Icons
 * - carbon: Carbon Design System
 */

export const ICONS = {
  // 导航图标
  NAV_DASHBOARD: 'feather:grid',
  NAV_USER: 'feather:users',
  NAV_ROLE: 'feather:user-check',
  NAV_MENU: 'feather:menu',
  NAV_SETTING: 'feather:settings',

  // 操作图标
  ACTION_ADD: 'feather:plus',
  ACTION_DELETE: 'feather:trash-2',
  ACTION_EDIT: 'feather:edit-2',
  ACTION_SEARCH: 'feather:search',
  ACTION_REFRESH: 'feather:refresh-cw',
  ACTION_DOWNLOAD: 'feather:download',
  ACTION_UPLOAD: 'feather:upload',
  ACTION_EXPORT: 'feather:external-link',

  // 状态图标
  STATUS_SUCCESS: 'feather:check-circle',
  STATUS_WARNING: 'feather:alert-triangle',
  STATUS_ERROR: 'feather:x-circle',
  STATUS_INFO: 'feather:info',

  // 主题图标
  THEME_LIGHT: 'mdi:weather-sunny',
  THEME_DARK: 'mdi:weather-night',

  // 全屏图标
  FULLSCREEN_ENTER: 'feather:maximize',
  FULLSCREEN_EXIT: 'mdi:fullscreen-exit',

  // 菜单折叠图标
  MENU_COLLAPSE: 'line-md:menu-fold-left',
  MENU_EXPAND: 'line-md:menu-fold-right',

  // 通用图标
  CLOSE: 'feather:x',
  MORE: 'feather:more-horizontal',
  FILE: 'feather:file',
  FOLDER: 'feather:folder',
  CODE: 'carbon:code',
} as const

export type IconKey = keyof typeof ICONS
export type IconValue = (typeof ICONS)[IconKey]
