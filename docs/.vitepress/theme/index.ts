import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { toRefs } from 'vue'
import { useData, useRoute } from 'vitepress'
import './styles/no-select.css' // 引入禁用文本选择的样式

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件或其他应用级增强
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
