<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 20:37:38
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-29 02:52:42
 * @FilePath: \admin\src\views\TestLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: ayunu ayunu@qq.com
 * @Date: 2026-04-28 20:37:38
 * @LastEditors: ayunu ayunu@qq.com
 * @LastEditTime: 2026-04-28 20:37:46
 * @FilePath: \admin\src\views\TestLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- src/views/TestLayout.vue -->
<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-4">测试 SideLogo 组件</h2>

    <div class="border rounded-lg overflow-hidden">
      <SideLogo :collapsed="false" />
    </div>

    <div class="mt-4 text-gray-500">
      <p>✅ 预期效果：高度 60px，宽度 220px，内容居中，显示 "Nex-Admin"</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideLogo from '@/layouts/components/SideLogo.vue'
</script>
