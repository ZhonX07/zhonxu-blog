<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/ZhonX07.png',
    name: 'ZhonXu',
    title: '博客作者/项目维护者',
    links: [
      { icon: 'github', link: 'https://github.com/ZhonX07' }
    ]
  }
]
</script>

<template>
  <div class="team-section">
    <h3>项目维护者</h3>
    <p>在此列出本项目的主要维护/贡献者。</p>
    <VPTeamMembers size="medium" :members="members" />
  </div>
</template>

<style scoped>
.team-section {
  margin: 2rem 0;
}
</style>