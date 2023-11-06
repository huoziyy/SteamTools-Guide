import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as a,b as e,d as t,e as o,a as c}from"./app-c3963437.js";const h={},_=e("h1",{id:"什么是asf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是asf","aria-hidden":"true"},"#"),t(" 什么是ASF")],-1),l=e("p",null,"ASF (ArchiSteamFarm) 主要目的是同时从多个账户中自动获取 Steam 集换式卡牌的软件，不过除了本功能还有自动进行交易报价等操作",-1),A={class:"hint-container tip"},d=e("p",{class:"hint-container-title"},"提示",-1),u={href:"https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Home-zh-CN",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/JustArchiNET/ArchiSteamFarm/wiki",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"ASF 是一个控制台应用程序，这意味着，至少在一开始，它没有提供一个您熟悉的友好 GUI 界面。",-1),m=e("p",null,"ASF 主要应该在服务器上运行，所以它更像是一个服务（守护进程）而不是一个桌面应用。",-1),p=e("p",null,"ASF 的功能特别多，不过因为本指南是使用的 Watt Toolkit 内置的 ASF ，并非挂载在服务器上",-1),f=e("p",null,[t("不过社区开发了一个 WebUi 的 GUI 界面，现在下载 ASF 的发行版都内置了 WebUi 的 GUI 控制台"),e("br"),t(" 位于 ASF-win-x64/UI.html")],-1),I=e("h2",{id:"asf-ui",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#asf-ui","aria-hidden":"true"},"#"),t(" ASF-ui")],-1),b=e("p",null,"ASF-ui 是一个社区项目，主要为最终用户提供了一个用户友好的图形界面 Web 接口。 为了达成这一目的，它被设计为 ASF API 的前端，使您可以轻松操作 ASF。 这是 ASF 自带的默认 UI。",-1),k={href:"https://github.com/JustArchiNET/ASF-ui",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"您可以使用 ASF-ui 对 ASF 进行常规管理。 例如管理机器人、修改设置、发送命令，以及 ASF 提供的各种其他功能。",-1);function N(g,C){const n=r("ExternalLinkIcon");return s(),a("div",null,[_,l,e("div",A,[d,e("p",null,[t("官方WIKI："),e("a",u,[t("中文"),o(n)]),t(" , "),e("a",S,[t("English"),o(n)])])]),F,m,p,f,c(` ASF-ui 配置
我们的 ASF-ui IPC 接口同样支持配置 ASF，并且特别适合在第一次配置之后修改配置内容，因为与在线配置文件生成器总是生成新文件不同，ASF-ui 可以在原地直接编辑配置文件。

要使用 ASF-ui，首先您需要启用 IPC 接口本身。 自 ASF V5.1.0.0 版本开始，IPC 已默认启用，因此只要您没有手动禁用它，就可以直接开始访问。

程序启动后，直接访问 ASF 的 IPC 地址。 如果一切都正常工作，您也可以在这里更改 ASF 配置。 `),I,b,e("p",null,[t("如上所述，ASF-ui 是一个社区项目，并非由 ASF 核心开发者维护。 它遵循自己的开发流程，所有相关的问题、讨论、漏洞报告和建议都应该发表于 "),e("a",k,[t("ASF-ui 仓库"),o(n)]),t("。")]),x])}const P=i(h,[["render",N],["__file","ASF.html.vue"]]);export{P as default};