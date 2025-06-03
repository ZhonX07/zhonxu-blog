---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ZhonXu's Personal Blog"
  tagline: Given enough eyeballs, all bugs are shallow.
  image:
    src: /logo.png
    alt: ZhonXu Logo
  actions:
    - theme: brand
      text: "Tutorial: How To Ask Questions The Smart Way"
      link: /en/SQ
    - theme: alt
      text: "Tutorial: Getting Started with Koishi"
      link: /en/koishi-guide-install
    - theme: alt
      text: View GitHub
      link: https://github.com/ZhonX07

features:
  - icon: 📚
    title: Koishi Tutorials
    details: Comprehensive coverage of Koishi framework usage from installation to configuration
    link: /en/koishi-guide-install
  - icon: 💡
    title: Questioning Skills
    details: Learn how to ask questions efficiently and get better help
    link: /en/SQ
  - icon: 🚀
    title: Open Source Projects
    details: Share interesting open source projects and code snippets
    link: https://github.com/ZhonX07
  - icon: 🎯
    title: Useful Tools
    details: Collect and share various development tools and resources
    link: /en/ASK-GUIDE
---

## 👋 Welcome to My Blog

This is where I record my learning notes, tutorial sharing, and project experience during development.

### ⏱️ Recent Updates

- [Koishi Tutorial: Installation & Deployment](/en/koishi-guide-install)
- [Koishi Tutorial: Configuration](/en/koishi-guide-config)
- [How To Ask Questions The Smart Way](/en/SQ)

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
