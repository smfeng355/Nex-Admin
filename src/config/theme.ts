import type { GlobalThemeOverrides } from 'naive-ui'
import { getThemeColors } from '@/utils/color'

// 从 color.ts 读取主题色
const themeColors = getThemeColors()

export const primaryColor = themeColors.primary
export const primaryColorHover = themeColors.primaryHover
export const primaryColorPressed = themeColors.primaryPressed
export const primaryColorSuppl = themeColors.primarySuppl

// 主题覆盖配置
export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    primaryColorSuppl,

    // 圆角
    borderRadius: '6px',
    borderRadiusSmall: '4px',

    // 阴影
    boxShadow1: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    boxShadow2: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    boxShadow3: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',

    // 边框
    dividerColor: '#f0f0f0',

    // 字体
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontFamilyMono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },

  // 按钮
  Button: {
    borderRadiusMedium: '6px',
    borderRadiusSmall: '4px',
    fontSizeMedium: '14px',
    fontWeightMedium: '500',
    paddingMedium: '0 16px',
    heightMedium: '36px',
  },

  // 输入框
  Input: {
    borderRadius: '6px',
    borderHover: '1px solid #c2c2c2',
    borderFocus: `1px solid ${primaryColor}`,
  },

  // 下拉菜单
  Dropdown: {
    borderRadius: '8px',
    padding: '8px 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  // 卡片
  Card: {
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },

  // 表格
  DataTable: {
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    thPaddingMedium: '12px 16px',
    tdPaddingMedium: '12px 16px',
  },

  // 模态框
  Modal: {
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },

  // 抽屉
  Drawer: {
    borderRadius: '0',
    boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.1)',
  },

  // 菜单
  Menu: {
    borderRadius: '8px',
    itemBorderRadius: '6px',
    itemHeightMedium: '40px',
    itemPadding: '0 12px',
    itemIconSizeMedium: '18px',
    itemFontSizeMedium: '14px',
  },

  // 标签页
  Tabs: {
    tabPaddingMedium: '0 20px',
    tabHeightMedium: '40px',
    tabBorderRadius: '6px 6px 0 0',
  },

  // 通知
  Notification: {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  // 消息
  Message: {
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  // 弹出确认
  Popconfirm: {
    borderRadius: '8px',
    padding: '16px',
  },

  // 分页
  Pagination: {
    itemBorderRadius: '6px',
  },

  // 日期选择器
  DatePicker: {
    panelBorderRadius: '8px',
  },

  // 选择器
  Select: {
    peers: {
      InternalSelection: {
        borderRadius: '6px',
      },
    },
  },
}

// 深色主题覆盖
export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    dividerColor: '#2d2d2d',
    boxShadow1: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    boxShadow2: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
    boxShadow3: '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
  },
}
