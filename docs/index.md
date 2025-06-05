---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZhonXu 的个人博客"
  tagline: Given enough eyeballs, all bugs are shallow.
  actions:
    - theme: brand
      text: 教程：提问的智慧
      link: /SQ
    - theme: alt
      text: 教程：新人上手 Koishi
      link: /koishi-guide-install
    - theme: alt
      text: 查看作者的 GitHub
      link: https://github.com/ZhonX07

features:
  - title: Koishi 教程
    details: 详细的 Koishi 机器人框架安装和配置指南
  - title: 技术分享
    details: 分享前端开发、工具使用等技术内容，偶尔也会分享点冲浪时发现的好东西
  - title: 持续更新
    details: 不定期更新内容，记录学习和开发过程
---

<div class="home-content">
  <div class="content-section">
    <h2>👋 欢迎来到我的博客</h2>
    <p>这里记录了我在开发过程中的学习笔记、教程分享和项目经验。</p>
    <h3>⏱️ 最近更新</h3>
    <ul class="recent-updates">
      <li><a href="/koishi-guide-install">Koishi 新手教程：安装部署</a></li>
      <li><a href="/koishi-guide-config">Koishi 新手教程：配置</a></li>
      <li><a href="/blog">使用 Github Pages 部署你的 Vitepress Blog</a></li>
      <li><a href="/tools">前端工具箱</a></li>
    </ul>
    
  </div>
  
  <div class="team-section">
    <h2>关于项目维护者</h2>
    <TeamMembers />
  </div>
</div>

<style scoped>
.home-content {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  align-items: flex-start;
}

.content-section {
  flex: 1;
}

.recent-updates {
  padding-left: 1.2em;
  margin: 1em 0;
}

.recent-updates li {
  margin-bottom: 0.5em;
}

.team-section {
  flex: 1;
}

@media (max-width: 768px) {
  .home-content {
    flex-direction: column;
  }
}
</style>


