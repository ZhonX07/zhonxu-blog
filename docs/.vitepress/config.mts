import { defineConfig } from 'vitepress'
const base = "/zhonxu-blog/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "ZhonXu 的个人博客",
  description: "基于 Vitepress",
  appearance: 'force-dark', // 禁用主题切换功能，并锁定为暗色模式
  
  // 禁用死链检测
  ignoreDeadLinks: true,
  
  // 国际化配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "ZhonXu 的个人博客",
      description: "基于 Vitepress",
      themeConfig: {
        outline: {
          label: '本页内容'
        },
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
              { text: 'Koishi 求助提问指北', link: '/ASK-GUIDE' },
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
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "ZhonXu's Personal Blog",
      description: "Based on Vitepress",
      themeConfig: {
        outline: {
          label: 'On this page'
        },
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Koishi',
            items: [
              { text: 'Koishi Guide: Installation', link: '/en/koishi-guide-install' },
              { text: 'Koishi Guide: Configuration', link: '/en/koishi-guide-config' },
            ]
          }
        ],
        sidebar: [
          {
            text: 'Tutorials',
            items: [
              { text: 'Getting Started with Koishi: Installation', link: '/en/koishi-guide-install' },
              { text: 'Getting Started with Koishi: Configuration', link: '/en/koishi-guide-config' },
              { text: 'Koishi Help Guide', link: '/en/ASK-GUIDE' },
              { text: "How To Ask Questions The Smart Way", link: '/en/SQ' }
            ]
          }
        ],
        docFooter: {
          prev: '⬅ Previous',
          next: '➡ Next'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ZhonX07' }
        ]
      }
    }
  },
})
