<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 01:26:56
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:12:36
 * @FilePath: \admin\src\layouts\layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-container">
    <aside class="side-aside" :class="{ collapsed: appStore.collapsed }">
      <SideLogo :collapsed="appStore.collapsed" />
      <SideMenu />
    </aside>

    <article class="content-area">
      <AppHeader />
      <div class="tabs-wrapper">
        <TabBar class="tabs-bar" />
      </div>
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <keep-alive :include="cachedViews">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </main>
      <Footer />
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useTabStore } from '@/stores/tab'
import { SideLogo, SideMenu, AppHeader, TabBar, Footer } from './components'

const route = useRoute()
const appStore = useAppStore()
const tabStore = useTabStore()
const cachedViews = ref<string[]>([])

watch(
  () => route.name,
  () => {
    tabStore.addTab(route)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.layout-container {
  @apply w-full h-full flex;
}

.side-aside {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: width 300ms;
  border-right: 1px solid var(--border-color);

  &.collapsed {
    width: 64px;
  }

  &:not(.collapsed) {
    width: 220px;
  }
}

.content-area {
  width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tabs-bar {
  @apply flex-shrink-0 h-60 p-12;
}

.main-content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

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
