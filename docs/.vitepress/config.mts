import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
const base = "/zhonxu-blog/"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "ZhonXu 的个人博客",
  description: "基于 Vitepress",
  appearance: 'force-dark', // 禁用主题切换功能，并锁定为暗色模式
  
  // 禁用死链检测
  ignoreDeadLinks: true,
  vite:{
    plugins:[pagefindPlugin()],
  },
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
    notFound: {
      title: 'U picked the wrong house fool!',
      quote: `"你进错屋子了，蠢货！"——Big Smoke`,
      linkLabel: '大斯莫克！是我，卡尔！冷静！冷静！',
      linkText: '大斯莫克！是我，卡尔！冷静！冷静！',
      code: '404'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhonX07' }
    ]
  },
})
