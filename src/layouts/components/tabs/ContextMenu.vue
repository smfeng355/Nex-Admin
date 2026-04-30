<template>
  <n-dropdown
    :show="show"
    :options="options"
    :x="x"
    :y="y"
    placement="bottom-start"
    @clickoutside="handleHideDropdown"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute } from 'vue-router'
import { useTabStore } from '@/stores/tab'

const props = defineProps<{
  show: boolean
  currentPath: string
  x: number
  y: number
}>()

const emit = defineEmits(['update:show'])

const tabStore = useTabStore()
const route = useRoute()

const options = computed(() => [
  {
    label: '重新加载',
    key: 'reload',
    disabled: props.currentPath !== tabStore.activeTab,
    icon: () => h('i', { class: 'i-mdi:refresh text-14' }),
  },
  {
    label: '关闭',
    key: 'close',
    disabled: tabStore.tabs.length <= 1,
    icon: () => h('i', { class: 'i-mdi:close text-14' }),
  },
  {
    label: '关闭其他',
    key: 'close-other',
    disabled: tabStore.tabs.length <= 1,
    icon: () => h('i', { class: 'i-mdi:arrow-expand-horizontal text-14' }),
  },
  {
    label: '关闭左侧',
    key: 'close-left',
    disabled: tabStore.tabs.length <= 1 || props.currentPath === tabStore.tabs[0].path,
    icon: () => h('i', { class: 'i-mdi:arrow-expand-left text-14' }),
  },
  {
    label: '关闭右侧',
    key: 'close-right',
    disabled: tabStore.tabs.length <= 1 || props.currentPath === tabStore.tabs[tabStore.tabs.length - 1].path,
    icon: () => h('i', { class: 'i-mdi:arrow-expand-right text-14' }),
  },
  {
    label: '关闭全部',
    key: 'close-all',
    disabled: tabStore.tabs.length <= 1,
    icon: () => h('i', { class: 'i-mdi:close-circle text-14' }),
  },
])

const actionMap = new Map([
  [
    'reload',
    () => {
      tabStore.reloadTab(route.fullPath, Boolean(route.meta?.keepAlive))
    },
  ],
  [
    'close',
    () => {
      tabStore.removeTab(props.currentPath)
    },
  ],
  [
    'close-other',
    () => {
      tabStore.removeOther(props.currentPath)
    },
  ],
  [
    'close-left',
    () => {
      tabStore.removeLeft(props.currentPath)
    },
  ],
  [
    'close-right',
    () => {
      tabStore.removeRight(props.currentPath)
    },
  ],
  [
    'close-all',
    () => {
      tabStore.removeAll()
    },
  ],
])

function handleHideDropdown() {
  emit('update:show', false)
}

function handleSelect(key: string) {
  const actionFn = actionMap.get(key)
  if (typeof actionFn === 'function') actionFn()
  handleHideDropdown()
}
</script>
