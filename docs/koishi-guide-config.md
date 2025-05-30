# Koishi 入门篇② —— 初步配置 Koishi

首次打开 Koishi，你会看到这样的页面：  

![首次启动 Koishi](/images/config/koi-firstopen.png)

### 同意与否并不重要，因为这不会影响你使用 Koishi 。

## 配置插件市场镜像源

在开始任意操作之前，你都应该先配置插件市场的镜像源。  
  
理由：
### 1.**Koishi 官方插件源已经 10000000000000000 年没有更新了！**
有很多插件（比如 chatluna 的 Deepseek 适配器：chatluna-deepseek-adapter）都无法从官方插件源获取。
![Koishi 官方插件源，年久失修.jpg](/images/config/official.png)
### 2.很多身处中国大陆的用户在使用官方插件源时都有遇到过“无法连接到插件市场”的情况：
![无法连接到 Koishi 官方镜像源](/images/config/cannotconnect.png)
#### （图源：[Koishi 论坛](https://forum.koishi.xyz/t/topic/3067)）

那么，如何进行配置?  

点击 Koishi 主窗口左边栏的齿轮按钮（插件配置），找到 **market** ：

![插件市场配置页](/images/config/market-config.png)

在镜像源方面，我们的选择有很多：  

### 图例

  * ⭐：该镜像较为稳定，被广泛认可，推荐使用。

  * ✅：官方源

  * 😕：该镜像并不稳定，只有在其他镜像均无法使用的情况下才应当使用。

  * 🚫：曾在以前可用，现已停止服务。

### Koishi 插件市场（search.endpoint）

| 源                                 | 提供方           | 标识 | 备注           |
| :---------------------------------: | :-------------: | :--: | :------------: |
| k-ru.itzdrli.cc             | itzdrli       | ⭐ |      中国大陆优化线路        |
| kp.itzdrli.cc               | itzdrli       | ⭐  | [Koishi 论坛帖子](https://forum.koishi.xyz/t/topic/9975) |
| registry.koishi.t4wefan.pub | t4wefan       |    | [Koishi 论坛帖子](https://forum.koishi.xyz/t/topic/2611) |
| koi.nyan.zone/registry      | Lipraty       |    | [Koishi 论坛帖子](https://forum.koishi.xyz/t/topic/3530) |
| koishi.itzdrli.cc            | itzdrli       |    | [Koishi 论坛帖子](https://forum.koishi.xyz/t/topic/7597) |
| registry.koishi.ilharper.com | Il Harper     | 😕 |              |
| registry.koishi.chat        | Koishi.js     | ✅  |              |
| koishi.mirror.us.cyans.icu   | @zhuhansan666 | 🚫 |              |

### 使用方法

在上表中任选一个镜像源，复制并替换掉插件市场配置页中 search.endpoint 的地址，点击 Koishi 窗口右上角的 **“√”** ，即 **重载插件**。