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
  script.setAttribute('data-repo-id', 'R_kgDOMQfyGw')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOMQfyG84CjKZI')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
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
