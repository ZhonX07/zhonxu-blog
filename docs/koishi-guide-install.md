# Koishi 入门篇① —— 安装 Koishi

## 安装Koishi

Koishi 支持包括`MacOS`、`Windows`、`Linux`、`Docker`、`模板项目`以及`Android`（不建议）在内的部署方式。
:::info 使用 Docker 部署须知
*Docker 等容器化软件是以服务生产环境而开发的应用平台，在使用此类软件部署之时，我们相信你已经掌握了运维一台服务器所必须的知识，同时也理解了容器化的概念与相关软件的基础操作。如若不然，在除路由器或 NAS 等特殊环境外，请 [选择其他安装方式](https://koishi.chat/zh-CN/manual/starter/)。*
:::
> [!caution] 为何不建议使用 Koishi On Android ？
> 此项目仍在早期开发中，部分功能可能不可用或存在 bug 。


首先，前往 [Koishi 官网](https://koishi.chat) 下载适合你版本的 Koishi，以 Windows 11 为例。  

[![在 Windows 机器上部署 Koishi 的方式](/images/install/koi-windows.png)](https://koishi.chat/zh-CN/manual/starter/windows.html)  

选择 `安装包 (.msi)` ，下载 Koishi 的 msi 安装包。

![安装 Koishi ](https://koishi.chat/manual/windows/msi-installer-light.webp)

一路点击 下一步/Next 即可。

## 须知：程序兼容性
Koishi 不兼容 Windows 7 及更早，同时部分兼容 Windows 8 / Windows 10 版本，完全兼容 Windows 11 。  

兼容情况如下（摘自 koishi.chat）：

---

### Windows 支持情况表

**Windows 8.1**
| 产品                                  |  核心 |  窗口 |  增强 |
| ----------------------------------- | :-: | :-: | :-: |
| Windows 8.1                         |  ✅  |  ✅  |  ❌  |
| Windows Server 2012 R2              |  ✅  |  ✅  |  ❌  |
| Hyper-V Server 2012 R2              |  ❌  |  ❌  |  ❌  |
| Windows Storage Server 2012 R2      |  ❌  |  ❌  |  ❌  |
| Windows Embedded 8.1 Pro            |  ❌  |  ❌  |  ❌  |
| Windows Embedded 8.1 Industry       |  ❌  |  ❌  |  ❌  |

**Windows 10**
| 产品                                  |  核心 |  窗口 |  增强 |
| ----------------------------------- | :-: | :-: | :-: |
| Version 1507                        |  ❌  |  ❌  |  ❌  |
| Version 1511                        |  ❌  |  ❌  |  ❌  |
| Version 1607                        |  ❌  |  ❌  |  ❌  |
| Version 1703                        |  ❌  |  ❌  |  ❌  |
| Version 1709                        |  ❌  |  ✅  |  ❌  |
| Version 1803                        |  ❌  |  ✅  |  ❌  |
| Version 1809                        |  ❌  |  ✅  |  ✅  |
| Version 1903                        |  ❌  |  ✅  |  ✅  |
| Version 1909                        |  ❌  |  ✅  |  ✅  |
| Version 2004                        |  ❌  |  ✅  |  ✅  |
| Version 20H2                        |  ❌  |  ✅  |  ✅  |
| Version 21H1                        |  ❌  |  ✅  |  ✅  |
| Version 21H2                        |  ✅  |  ✅  |  ✅  |
| Version 22H2                        |  ✅  |  ✅  |  ✅  |
| Windows 10 2015 LTSB                |  ✅  |  ❌  |  ❌  |
| Windows 10 2016 LTSB                |  ✅  |  ❌  |  ❌  |
| Windows 10 Enterprise 2015 LTSC     |  ✅  |  ✅  |  ❌  |
| Windows 10 Enterprise 2016 LTSC     |  ✅  |  ✅  |  ❌  |
| Windows 10 Enterprise LTSC 2019     |  ✅  |  ✅  |  ✅  |
| Windows 10 Enterprise LTSC 2021     |  ✅  |  ✅  |  ✅  |
| Windows 10 Enterprise multi-session |  ✅  |  ✅  |  ❌  |
| Windows Server 2016                 |  ✅  |  ✅  |  ❌  |
| Hyper-V Server 2016                 |  ❌  |  ❌  |  ❌  |
| Windows Storage Server 2016         |  ❌  |  ❌  |  ❌  |
| Windows Server 2019                 |  ✅  |  ✅  |  ❌  |
| Hyper-V Server 2019                 |  ❌  |  ❌  |  ❌  |
| Windows Server 2022                 |  ✅  |  ✅  |  ❌  |
| Windows 10 IoT Core                 |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Core Services        |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Core LTSC            |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT LTSC 2019 Core       |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise           |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise 2019      |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise LTSB 2015 |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise LTSB 2016 |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise LTSC 2019 |  ❌  |  ❌  |  ❌  |
| Windows 10 IoT Enterprise LTSC 2021 |  ❌  |  ❌  |  ❌  |
| Windows Server IoT 2019             |  ❌  |  ❌  |  ❌  |
| Windows Server IoT 2019 for Storage |  ❌  |  ❌  |  ❌  |
| Windows Server IoT 2022             |  ❌  |  ❌  |  ❌  |

**Windows 11**
| 产品                                  |  核心 |  窗口 |  增强 |
| ----------------------------------- | :-: | :-: | :-: |
| Version 21H2                        |  ✅  |  ✅  |  ✅  |
| Version 22H2                        |  ✅  |  ✅  |  ✅  |
| Windows 365                         |  ✅  |  ✅  |  ✅  |

---

:::info 
**如何查看我的系统版本？**
:::
A.按下 `Win+R` 输入 `winver` ，回车。  
B.   
``` bash
systeminfo | findstr /B /C:"OS 名称" /C:"OS 版本"

```
C.
```powershell
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion, OsBuildNumber

```
:::info
图为查看 Windows 系统版本的三个常用方法。左为B，右为C，中间靠左的窗口为A。
:::
![查看 Windows 系统版本的三个常用方法](/images/install/osver.png)