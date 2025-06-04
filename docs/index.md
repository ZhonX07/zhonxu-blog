---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZhonXu 的个人博客"
  tagline: Given enough eyeballs, all bugs are shallow.
  image:
    src: /logo.png
    alt: ZhonXu Logo
  actions:
    - theme: brand
      text: 教程：提问的智慧
      link: /SQ
    - theme: alt
      text: 教程：新人上手 Koishi
      link: /koishi-guide-install
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/ZhonX07

features:
  - title: Koishi 教程
    details: 详细的 Koishi 机器人框架安装和配置指南
  - title: 技术分享
    details: 分享前端开发、工具使用等技术内容，偶尔也会分享点冲浪时发现的好东西
  - title: 持续更新
    details: 不定期更新内容，记录学习和开发过程
---

## 👋 欢迎来到我的博客

这里记录了我在开发过程中的学习笔记、教程分享和项目经验。

### ⏱️ 最近更新

- [Koishi 新手教程：安装部署](/koishi-guide-install)
- [Koishi 新手教程：配置](/koishi-guide-config)
- [提问的智慧](/SQ)

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>


