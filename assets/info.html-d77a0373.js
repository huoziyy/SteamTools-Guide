import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as n,b as e,d as o,e as i,w as s,f as t}from"./app-c3963437.js";const u={},h=e("h1",{id:"网络加速",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#网络加速","aria-hidden":"true"},"#"),o(" 网络加速")],-1),p=t("<li><p>实现对 <code>Steam</code> <code>Discord</code> <code>Twitch</code> <code>Origin</code> <code>Uplay</code> <code>GitHub</code> <code>Microsoft Store</code> <code>谷歌验证码</code> <code>Pixiv</code> 等国内难以访问的网页正常访问，防止网络被干扰</p></li>",1),_={href:"https://www.dogfight360.com/blog/686/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/justcoding121/Titanium-Web-Proxy",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/microsoft/reverse-proxy",target:"_blank",rel:"noopener noreferrer"},x=t("<li><p>有<code>Host代理模式</code>和<code>系统代理模式</code>两种方式可以选择，第一次使用前需要确认安装证书文件</p></li><li><p>还能解除 <strong>Steam 商店</strong>的<strong>访问限制</strong>，包括但不限于：<code>您所在的地区目前不提供此物品</code> <code>此游戏标记为“仅限成人”。您看到此游戏是因为您 已将偏好设置为允许此类内容。</code></p></li>",2),b=t('<details class="hint-container details"><summary>[点击展开]-常见问题</summary><blockquote><p>Q: hosts 正在由另一进程使用，因此该进程无法访问此文件？</p><p>A: hosts 文件被其它程序占用了导致本程序无法正常读写，使用 <code>资源监视器</code> 在 <code>关联的句柄</code> 中搜索 hosts 找到占用的进程，结束掉该进 程即可。</p><p>Q: 社区加速里的脚本启用了无效，为什么脚本前面的勾选框不会被保存？</p><p>A: 脚本需要对应的加速服务开启才能生效，同时也必须启用了加速功能后启用脚本才有效，例如 <code>Steam 商店史低查询</code> 脚本必须要启用 <code>Steam 商店加速服务</code> 才能生效。</p><p>Q: 使用加速提示证书安装失败？</p><p>A: 一般是系统相关文件丢失导致，可以尝试手动安装程序目录 <code>AppData</code> 文件夹下的 <code>SteamTools.Certificate.pfx</code> 证书文件，安装到受 信任 的根证书区域，区域一定要选择正确，不然安装成功也无效，密码留空不填直接确定即可。</p></blockquote></details><h2 id="加速方式" tabindex="-1"><a class="header-anchor" href="#加速方式" aria-hidden="true">#</a> 加速方式</h2><ul><li>Dns 驱动拦截模式 <ul><li>未实装</li></ul></li><li>Hosts 代理模式 <ul><li>效果不错，但有些人会遇到问题不便使用</li></ul></li><li>PAC 代理模式 <ul><li>未实装</li></ul></li><li>系统代理模式 <ul><li>有时加速效果不佳，但基本都能使用</li></ul></li></ul><h2 id="加速类目" tabindex="-1"><a class="header-anchor" href="#加速类目" aria-hidden="true">#</a> 加速类目</h2><p>简略展示常用的可加速站点</p><ul><li>Steam 服务 <ul><li>常规社区加速</li><li>商店解锁访问限制</li><li>讨论组/聊天(仅ipv6)</li></ul></li><li>Discord 语音聊天</li><li>Twitch 直播</li><li>Origin</li><li>Uplay</li><li>公共 CDN</li><li>国外验证码平台 <ul><li>Arkoselabs</li><li>hCaptcha</li><li>Recaptcha(Goole)</li></ul></li><li>Github</li><li>Microsoft Store</li><li>网盘服务 <ul><li>OneDrive</li><li>MEGA</li><li>DropBox</li></ul></li><li>其他网站 <ul><li>Pinterest</li><li>Artstation</li><li>V2ex</li><li>Imgur 图床</li><li>Pixiv</li></ul></li></ul><h2 id="修复" tabindex="-1"><a class="header-anchor" href="#修复" aria-hidden="true">#</a> 修复</h2><p>点击网络加速右上角的更多 <code>···</code></p><p><code>移除证书</code> 并 <code>重置 Hosts 文件</code></p>',9),g=e("p",null,"参考：",-1);function k(A,S){const l=c("ExternalLinkIcon"),r=c("RouterLink");return d(),n("div",null,[h,e("ul",null,[p,e("li",null,[e("p",null,[o("功能类似 "),e("a",_,[o("Steamcommunity 302"),i(l)]),o("，使用 "),e("a",m,[o("Titanium-Web-Proxy"),i(l)]),o(" 和 "),e("a",f,[o("YARP.ReverseProxy"),i(l)]),o(" 开源项目进行本地反代来支持更快的访问游戏网站。")])]),x]),b,e("ul",null,[e("li",null,[g,e("ul",null,[e("li",null,[i(r,{to:"/zh/document/FAQ/%E7%BD%91%E7%BB%9C.html"},{default:s(()=>[o("常见问题 > 网络加速问题")]),_:1})])])])])])}const D=a(u,[["render",k],["__file","info.html.vue"]]);export{D as default};
