import { defineConfig } from 'vitepress'
const base = "/zhonxu-blog/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "ZhonXu 的个人博客",
  description: "基于 Vitepress",
  appearance: 'force-dark', // 禁用主题切换功能，并锁定为暗色模式
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
          { text: 'Koishi 新手教程：配置', link: '/koishi-guide-config' },
        ]
      }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '入门 Koishi：安装部署', link: '/koishi-guide-install' },
          { text: '入门 Koishi：配置', link: '/koishi-guide-config' },
          { text: 'Koishi 求助提问模板', link: '/ASK-GUIDE' },
          { text: "提问的智慧", link: '/SQ' }
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
