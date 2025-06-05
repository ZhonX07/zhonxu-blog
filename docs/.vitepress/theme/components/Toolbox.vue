<script setup>
const tools = [
  {
    name: "JSON 格式化器",
    description: "格式化 / 压缩 JSON 数据",
    link: "https://jsonformatter.org",
    icon: "https://img.icons8.com/fluency/48/json.png"
  },
  {
    name: "Base64 编码解码",
    description: "在线 Base64 工具",
    link: "https://base64.guru/converter/decode",
    icon: "https://img.icons8.com/color/48/base64.png"
  },
  {
    name: "MDN 文档",
    description: "JavaScript / HTML / CSS API 文档",
    link: "https://developer.mozilla.org/zh-CN",
    icon: "https://img.icons8.com/color/48/mdn.png"
  },
  {
    name: "Can I Use",
    description: "查看浏览器兼容性",
    link: "https://caniuse.com",
    icon: "https://img.icons8.com/ios-filled/50/worldwide-location.png"
  },
  {
    name: "Regex101",
    description: "正则表达式测试工具",
    link: "https://regex101.com",
    icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-online-regex-tester-and-debugger-for-javascript-python-php-and-golang-logo-filled-tal-revivo.png"
  }
]
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4 text-white">ZhonXu 的前端工具箱 🧰</h1>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <a v-for="tool in tools" :key="tool.name" :href="tool.link" target="_blank" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl transition shadow-lg flex items-start space-x-4">
        <img :src="tool.icon" alt="icon" class="w-12 h-12" />
        <div>
          <h2 class="text-xl font-semibold text-cyan-300">{{ tool.name }}</h2>
          <p class="text-slate-400 text-sm">{{ tool.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #0f172a;
}
</style>
<script setup>
const tools = [
  {
    name: "JSON 格式化器",
    description: "格式化 / 压缩 JSON 数据",
    link: "https://jsonformatter.org",
    icon: "https://img.icons8.com/fluency/48/json.png"
  },
  {
    name: "Base64 编码解码",
    description: "在线 Base64 工具",
    link: "https://base64.guru/converter/decode",
    icon: "https://img.icons8.com/color/48/base64.png"
  },
  {
    name: "MDN 文档",
    description: "JavaScript / HTML / CSS API 文档",
    link: "https://developer.mozilla.org/zh-CN",
    icon: "https://img.icons8.com/color/48/mdn.png"
  },
  {
    name: "Can I Use",
    description: "查看浏览器兼容性",
    link: "https://caniuse.com",
    icon: "https://img.icons8.com/ios-filled/50/worldwide-location.png"
  },
  {
    name: "Regex101",
    description: "正则表达式测试工具",
    link: "https://regex101.com",
    icon: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-online-regex-tester-and-debugger-for-javascript-python-php-and-golang-logo-filled-tal-revivo.png"
  }
]
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4 text-white">ZhonXu 的前端工具箱 🧰</h1>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <a v-for="tool in tools" :key="tool.name" :href="tool.link" target="_blank" class="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl transition shadow-lg flex items-start space-x-4">
        <img :src="tool.icon" alt="icon" class="w-12 h-12" />
        <div>
          <h2 class="text-xl font-semibold text-cyan-300">{{ tool.name }}</h2>
          <p class="text-slate-400 text-sm">{{ tool.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #0f172a;
}
</style>
