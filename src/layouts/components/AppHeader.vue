<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-29 02:18:06
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-30 01:23:19
 * @FilePath: \admin\src\layouts\components\AppHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header class="h-60 flex-shrink-0 flex items-center px-12" :style="{ borderBottom: `1px solid var(--border-color)` }">
    <div class="flex items-center gap-0">
      <MenuCollapse />
      <BreadCrumb />
    </div>
    <div class="flex items-center h-full flex-1 justify-end align-center">
      <ToggleTheme />
      <GrayscaleMode />
      <Fullscreen />
      <ThemeSetting />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuCollapse from './MenuCollapse.vue'
import BreadCrumb from './BreadCrumb.vue'
import ThemeSetting from './ThemeSetting.vue'
import ToggleTheme from './ToggleTheme.vue'
import Fullscreen from './Fullscreen.vue'
import GrayscaleMode from './GrayscaleMode.vue'
import UserAvatar from './UserAvatar.vue'
</script>
