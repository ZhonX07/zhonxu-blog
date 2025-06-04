<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/ZhonX07.png',
    name: 'ZhonXu',
    title: 'Blog Author',
    links: [
      { icon: 'github', link: 'https://github.com/ZhonX07' }
    ]
  }
]
</script>

<template>
  <div class="team-section">
    <h3>Our Team</h3>
    <p>Say hello to our awesome team.</p>
    <VPTeamMembers size="medium" :members="members" />
  </div>
</template>

<style scoped>
.team-section {
  margin: 2rem 0;
}
</style>