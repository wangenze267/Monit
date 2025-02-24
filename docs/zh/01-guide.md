<!--
 * @Author: fzf404
 * @Date: 2022-09-23 20:37:31
 * @LastEditors: fzf404 me@fzf404.art
 * @LastEditTime: 2022-12-19 21:56:43
 * @Description: 使用指南
-->

`Monit` 的基本单位是插件，每个插件都作为一个独立窗口，可拖动至任意位置。

启动应用，托盘中会出现 `Moint` 图标，可右键单击此图标，对应用进行基本操作。

建议点击 `插件设置` 选项，打开 `setting` 插件进行操作，以获得更好的使用体验。

## 👏 welcome - 欢迎

> 用户指引、插件开启

这是一个引导插件，用户可以点击 `⚙️` 按钮打开 `config` 插件。

## 🎈 menu - 导航

> 插件关闭、插件最小化、插件置顶、断网提示、布局切换、主题切换、设置开启

所有插件顶部都有导航栏，导航栏包含了窗口控制器和状态控制器。

窗口控制器用来控制插件的关闭 `✕` 、最小化 `—` 、置顶 `△`，

状态控制器用来控制断网提示 `📶`、布局 `⚽`、主题 `🌞` 、设置 `⚙️`。

## ⚙️ config - 配置

> 插件开启、插件自启、应用自启

这是一个配置插件，页面中列出了所有可用的插件，插件列表可上下滚动，用户可以点击开启或自启动插件。

可以点击右上角的 `⚙️` 图标打开插件设置，可以配置自启动、重启和重置应用。

## 🐈 github - 监控

> 监控 follower、star、fork 改变、查看 repo 信息

这是一个用于监控 Github 信息的插件。

插件首次启动时会自动打开设置，需要用户填入 `github` 用户名。

当监控信息改变时，对应的数字会改变，点击改变的数字即可同步最新值。

如果开启消息通知，监控信息变动时会推送至系统通知，此时，点击改变的数字即可跳转到浏览器查看变动的详细信息。

右侧的仓库列表可任意方向滚动，使用触控板将会获得良好体验，使用鼠标时可单击鼠标中键，松开后进行移动。

## 🏅 juejin - 监控

> 监控关注、点赞、阅读、掘力改变、查看文章信息

这是一个用于监控 Juejin 信息的插件。

前往自己的 [掘金主页](https://juejin.cn/)，查看浏览器地址栏， `https://juejin.cn/user/` 后面的数字，即为自己的 `用户ID`。

其他使用方式均与 [github](#🐈-github-监控) 相同。

## 🎵 music - 音乐

> 网易云音乐、歌曲切换、循环播放、随机播放、音乐下载、歌单切换

这是一个用于播放 `网易云音乐` 的插件。

本插件依赖 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)，由 [imsyy](https://api-music.imsyy.top/) 部署的版本，如不可用，请自行部署。

首次开启插件，默认加载的歌单来自 [Monit](https://music.163.com/#/playlist?id=7667645628)。

可以点击右上角的 `⚙️` 图标打开插件设置，点击 `登录` 按钮，扫码登陆，登陆完成后可以在设置窗口中选择个人歌单。

## 📝 todo - 代办

> 代办事项管理、代办事项添加、代办事项删除

这是一个用于管理待办事项的插件。

点击插件底部的输入框，输入待办事项内容，按下回车键即可添加待办事项。

点击待办事项左侧的 `✅` 按钮可将标记待办事项为已完成。

点击待办事项右侧的 `❌` 按钮，可删除待办事项。

按住待办事项右侧的 `#` 按钮，可拖动调整待办事项顺序。

当代办数量超过屏幕范围时，可上下滚动查看。

## ⏱️ clock - 时钟

> 时钟信息、时间记录

这是一个时钟插件，点击 `⏱️` 即可开始计时，点击 `🕒` 回到时钟模式。

## 🏞️ image - 图像

> 本地、远程图像展示

这是一个用于展示图像的插件，可以在设置中填写图像网址或使用本地图像。

## 📷 camera - 相机

> 拍照、录像、角色跟踪

这是一个相机插件。

可点击下方的 `📷` 按钮进行拍照，点击 `🎥` 按钮进行录像。

可以在设置中选择开启视频镜像、是否显示控制器、是否开启角色跟踪、切换设备。

## 🎨 count - 计数器

> 计数器

这是一个计数器插件，为开发者提供的入门插件，可在设置中设置初始值及步长。
