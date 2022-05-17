# 苹果手机导入令牌

## 已越狱

此方案引用并修改自[Steam++ issues #95](https://github.com/SteamTools-Team/SteamTools/issues/95)

用 **Filza** 打开`/var/mobile/Containers/Data/Application/{字符串}`，数字串位置为Steam 数据文件夹，可能不一样，Filza会显示为“Steam”
用文本方式打开`/Documents/Steamguard-xxxxxxxxxxxxxxxx`，到最下面找到 otpauth 那一栏粘贴到 Steam++
用文本方式打开`/Library/Preferences/com.valvesoftware.Steam`，并找到`<string>/var/mobile/Containers/Data/Application/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/Library/Caches</string>`，复制`XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`并在最前面添加`android:`并粘贴到 Watt Toolkit

## 未越狱，可能有暂挂

iOS的令牌导出可参考：

>[越狱IOS设备无损导入Steam令牌至Steam++](https://keylol.com/t728973-1-1)
>
>[高版本的iOS导出Steam手机令牌教程](https://keylol.com/t696543-1-1)
>
>[2021未越狱iOS设备提取Steam令牌导入ASF的方法](https://keylol.com/t703874-1-1)
>
>[\[云挂卡\]未越狱iOS设备也可以使用ASF 2FA功能了](https://keylol.com/t245711-1-1)

简单步骤：

1. 解绑Steam令牌
2. 卸载并安装`iTunes旧版`
3. 使用 `iOS旧版应用下载` 下载`旧版本Steam`
4. `提取ipa`并使用`爱思助手等工具`安装
5. 绑定令牌并备份数据