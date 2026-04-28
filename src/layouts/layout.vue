<template>
  <div class="layout-container w-full h-full flex">
    <!-- 左侧边栏 -->
    <aside
      class="side-aside"
      :class="appStore.collapsed ? 'collapsed' : 'expanded'"
      :style="{ borderRight: `1px solid var(--border-color)` }"
    >
      <SideLogo :collapsed="appStore.collapsed" />
      <SideMenu />
    </aside>

    <!-- 右侧内容区 -->
    <article class="content-area">
      <!-- 顶部导航 -->
      <AppHeader />

      <!-- 标签页 -->
      <div class="tabs">
        <div>Tab</div>
      </div>

      <!-- 主内容区 -->
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <keep-alive :include="cachedViews">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </main>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

// 统一导入所有布局组件
import { SideLogo, SideMenu, AppHeader } from './components'

const route = useRoute()
const appStore = useAppStore()

// 缓存的视图
const cachedViews = ref<string[]>([])

// 监听路由变化，添加缓存
watch(
  () => route.name,
  newName => {
    if (newName) {
      const viewName = newName as string
      if (!cachedViews.value.includes(viewName)) {
        cachedViews.value.push(viewName)
      }
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
.side-aside {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: width 300ms;

  &.collapsed {
    width: 64px;
  }

  &.expanded {
    width: 220px;
  }
}

.content-area {
  width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.header {
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #e4e7ed;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tabs {
  padding: 0 12px;
  border-bottom: 1px solid #e4e7ed;
}

.main-content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

// 路由过渡动画
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
