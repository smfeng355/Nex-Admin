<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 22:27:56
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-28 22:28:07
 * @FilePath: \admin\src\components\Icon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <span class="icon" :class="className" :style="customStyle">
    <i v-if="icon && !isCustomSvg" :class="icon"></i>
    <svg v-else-if="isCustomSvg" viewBox="0 0 24 24" fill="currentColor" v-html="icon"></svg>
    <span v-else class="icon-placeholder"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
