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
  - icon: 📚
    title: Koishi 教程
    details: 从安装到配置，全面覆盖 Koishi 框架的使用方法
    link: /koishi-guide-install
  - icon: 💡
    title: 提问技巧
    details: 学会如何高效地提问，获得更好的帮助
    link: /SQ
  - icon: 🚀
    title: 开源项目
    details: 分享一些有趣的开源项目和代码片段
    link: https://github.com/ZhonX07
  - icon: 🎯
    title: 实用工具
    details: 收集和分享各种开发工具和资源
    link: /ASK-GUIDE
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


