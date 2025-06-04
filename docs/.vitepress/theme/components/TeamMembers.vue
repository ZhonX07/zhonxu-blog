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
            <a v-for="link in member.links" :key="link.link" :href="link.link" target="_blank" class="link-item">
              <svg v-if="link.icon === 'github'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span v-else>{{ link.icon }}</span>
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
  text-decoration: none;
}

.link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.links a:hover {
  color: #58a6ff; /* GitHub 风格蓝 */
}

/* optional hover effect */
.member-card:hover {
  background: #2a2a2a;
}
</style>

