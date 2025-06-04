import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { toRefs, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import './styles/index.css'
import './styles/no-select.css'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

const theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {

    // 注册组件或其他应用级增强
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }
  },
  setup() {
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    giscusTalk({
      repo: 'ZhonX07/zhonxu-blog',
      repoId: 'R_kgDOOyofNQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOOyofNc4Cqx6A',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      lightTheme: 'noborder_dark',
      darkTheme: 'noborder_dark',
    }, {
      frontmatter,
      route
    }, true);
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
