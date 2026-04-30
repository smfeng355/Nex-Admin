<template>
  <span class="icon" :class="className" :style="customStyle">
    <Icon v-if="isIconifyIcon" :icon="iconName" :width="iconSize" :height="iconSize" :color="iconColor" />
    <i v-else-if="icon && !isCustomSvg" :class="icon"></i>
    <svg v-else-if="isCustomSvg" viewBox="0 0 24 24" fill="currentColor" v-html="icon"></svg>
    <span v-else class="icon-placeholder"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
  icon?: string
  size?: number | string
  color?: string
  class?: string
  style?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  size: 16,
  color: '',
  class: '',
})

const isCustomSvg = computed(() => {
  return props.icon?.startsWith('<svg') || props.icon?.includes('path')
})

const isIconifyIcon = computed(() => {
  if (!props.icon || isCustomSvg.value) return false
  // 支持两种格式：'fe:wordpress' 或 'i-fe:wordpress'
  const cleanIcon = props.icon.replace(/^i-/, '')
  return cleanIcon.includes(':')
})

const iconName = computed(() => {
  // 去掉 i- 前缀
  return props.icon.replace(/^i-/, '')
})

const iconSize = computed(() => {
  return typeof props.size === 'number' ? props.size : parseInt(props.size as string) || 16
})

const iconColor = computed(() => props.color || 'currentColor')

const className = computed(() => {
  const classes = ['icon-base']
  if (props.class) {
    classes.push(props.class)
  }
  return classes.join(' ')
})

const customStyle = computed(() => {
  const style: Record<string, any> = {}

  if (props.size) {
    const size = typeof props.size === 'number' ? `${props.size}px` : props.size
    style.width = size
    style.height = size
    style.fontSize = size
  }

  if (props.color) {
    style.color = props.color
  }

  return { ...style, ...props.style }
})
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.icon i {
  display: inline-block;
  width: 1em;
  height: 1em;
}

.icon-placeholder {
  opacity: 0.3;
}
</style>
