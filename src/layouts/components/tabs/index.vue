<template>
  <div id="top-tab" class="tabs-container">
    <n-tabs
      :value="tabStore.activeTab"
      :closable="tabStore.tabs.length > 1"
      type="card"
      @close="path => tabStore.removeTab(path)"
    >
      <n-tab
        v-for="item in tabStore.tabs"
        :key="item.path"
        :name="item.path"
        @click="handleItemClick(item.path)"
        @contextmenu.prevent="handleContextMenu($event, item.path)"
        class="tab-item"
      >
        {{ item.title }}
      </n-tab>
    </n-tabs>
    <ContextMenu
      v-if="contextMenuOption.show"
      v-model:show="contextMenuOption.show"
      :current-path="contextMenuOption.currentPath"
      :x="contextMenuOption.x"
      :y="contextMenuOption.y"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTabStore } from '@/stores/tab'
import ContextMenu from './ContextMenu.vue'

const router = useRouter()
const tabStore = useTabStore()

const contextMenuOption = reactive({
  show: false,
  x: 0,
  y: 0,
  currentPath: '',
})

function handleItemClick(path: string) {
  tabStore.setActiveTab(path)
  router.push(path)
}

async function handleContextMenu(e: MouseEvent, path: string) {
  const { clientX, clientY } = e
  contextMenuOption.show = false
  contextMenuOption.x = clientX
  contextMenuOption.y = clientY
  contextMenuOption.currentPath = path

  await nextTick()
  contextMenuOption.show = true
}

// 监听 activeTab 变化，自动跳转路由
watch(
  () => tabStore.activeTab,
  newPath => {
    if (newPath && router.currentRoute.value.path !== newPath) {
      router.push(newPath)
    }
  }
)
</script>

<style scoped>
.tabs-container {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 1px solid var(--border-color);
}

/* 隐藏滚动条但保持滚动功能 */
.tabs-container::-webkit-scrollbar {
  height: 0;
}

.tabs-container::-webkit-scrollbar-thumb {
  background: transparent;
}

:deep(.n-tabs) {
  flex: 1;
  min-width: 0;
}

:deep(.n-tabs-bar) {
  display: none;
}

:deep(.n-tabs-tab) {
  box-sizing: border-box;
  background: transparent !important;
  border-radius: 4px !important;
  margin-right: 4px;
  border: 1px solid var(--border-color) !important;
  padding: 8px 16px !important;
  height: 36px !important;
  font-size: 14px;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border: 1px solid var(--primary-color) !important;
  }
}

:deep(.n-tabs-tab--active) {
  color: var(--primary-color) !important;
  border: 1px solid var(--primary-color) !important;
  background-color: var(--primary-color-light) !important;
}

:deep(.n-tabs-pad),
:deep(.n-tabs-tab-pad),
:deep(.n-tabs-scroll-padding) {
  border: none !important;
}
</style>
