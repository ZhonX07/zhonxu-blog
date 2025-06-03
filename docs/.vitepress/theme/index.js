import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { toRefs } from 'vue'
import { useData, useRoute } from 'vitepress'

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
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
    },
    // 使用注入插槽的包装组件覆盖 Layout
    Layout: MyLayout
}