<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const giscusContainer = ref<HTMLElement>()

onMounted(() => {
  // 创建 Giscus 评论脚本
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'ZhonX07/zhonxu-blog')
  script.setAttribute('data-repo-id', 'R_kgDOOyofNQ')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOOyofNc4Cqx6A')
  script.setAttribute('data-mapping', 'pathname') // 改为 pathname 以匹配你的原始配置
  script.setAttribute('data-strict', '1') // 改为 1 以匹配你的原始配置
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'noborder_dark')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  if (giscusContainer.value) {
    giscusContainer.value.appendChild(script)
  }
})
</script>

<template>
  <div ref="giscusContainer" class="giscus-container"></div>
</template>

<style scoped>
.giscus-container {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
