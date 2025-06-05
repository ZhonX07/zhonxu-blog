import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { toRefs, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import './styles/index.css'
import TeamMembers from './components/TeamMembers.vue'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router ,siteData }) {
    // 调用默认主题的enhanceApp
    DefaultTheme.enhanceApp({ app, router, siteData })
    
    // 注册团队成员组件
    app.component('TeamMembers', TeamMembers)
    // 注册图片查看器组件
    app.component('vImageViewer', vImageViewer)
    
    // 注册组件或其他应用级增强
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/zhonxu-blog/'),
        { immediate: true },
      )
    }
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // 启用图片查看器插件
    imageViewer(route);

    // 更新 Giscus 配置，确保仓库信息正确
    giscusTalk({
      repo: 'ZhonX07/zhonxu-blog',
      repoId: 'R_kgDOOyofNQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOOyofNc4Cqx6A',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      // 修复主题配置
      lightTheme: 'dark',
      darkTheme: 'dark',
      // 添加加载配置
      loading: 'lazy'
    }, {
      frontmatter,
      route
    }, 
    // 确保启用评论
    true);
  }
}

export default theme

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
