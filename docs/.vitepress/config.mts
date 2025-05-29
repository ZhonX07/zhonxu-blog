import { defineConfig } from 'vitepress'
const base = "/zhonxu-blog/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "ZhonXu 的个人博客",
  description: "基于 Vitepress",
  themeConfig: {
    outline: {
      label: '本页内容'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Koishi',
        items: [
          { text: 'Koishi 新手教程：安装', link: '/koishi-guide-install' },
        ]
      }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '入门 Koishi：安装部署', link: '/koishi-guide-install' },
          { text: '入门 Koishi：配置', link: '/koishi-guide-config' },
          { text: 'Koishi 求助提问模板', link: '/question-model' },
          { text: "提问的智慧", link: '/how-to-ask-a-question' }
        ]
      }
    ],

    docFooter: {
      prev: '⬅ 上一节',
      next: '➡ 下一节'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhonX07' }
    ]
  }
})
