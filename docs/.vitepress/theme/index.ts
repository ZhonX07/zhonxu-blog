import DefaultTheme from 'vitepress/theme'
import './styles/no-select.css' // 引入禁用文本选择的样式

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册组件或其他应用级增强
  }
}
