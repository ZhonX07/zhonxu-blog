<script setup>
const members = [
  {
    avatar: 'https://www.github.com/ZhonX07.png',
    name: 'ZhonXu',
    title: '博客作者 / 项目维护者',
    signature: '勇者よ、光が貴方と共にあらんことを。',
    links: [
      { icon: 'github', link: 'https://github.com/ZhonX07' }
    ]
  },
  // 可以继续添加更多成员
]
</script>

<template>
  <div class="team-section">
    <p>在此列出本项目的主要维护/贡献者。</p>
    <div class="team-members">
      <div class="member-card" v-for="(member, index) in members" :key="index">
        <img class="avatar" :src="member.avatar" :alt="member.name" />
        <div class="member-info">
          <h3>{{ member.name }}</h3>
          <p class="title">{{ member.title }}</p>
          <p class="signature">"{{ member.signature }}"</p>
          <div class="links">
            <a v-for="link in member.links" :key="link.link" :href="link.link" target="_blank">
              <i :class="`icon-${link.icon}`"></i> <!-- 这里可用 iconify 或 fontawesome 替代 -->
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-members {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.member-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #444; /* 深色边框 */
  border-radius: 12px;
  background: #1e1e1e; /* 深色背景 */
  transition: background 0.3s ease;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #333;
}

.member-info {
  flex: 1;
}

.title {
  font-size: 0.95rem;
  color: #aaa;
  margin-top: -0.3rem;
}

.signature {
  font-style: italic;
  margin: 0.5rem 0;
  color: #ccc;
}

.links a {
  margin-right: 0.6rem;
  color: #999;
  transition: color 0.3s;
}

.links a:hover {
  color: #58a6ff; /* GitHub 风格蓝 */
}

/* optional hover effect */
.member-card:hover {
  background: #2a2a2a;
}
</style>

