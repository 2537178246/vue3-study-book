# 华信联创入职流程

## 申请Git账号

- 你需要一个邮箱地址
- 找技术总监`徐延`登记你的邮箱
- 打开[GitLab](https://hxgit.hxgis.com/)
- 登录及修改个人信息

## 网络申请

- 找到自己电脑的Mac地址
- 找技术总监`徐延`申请一个ip号，并登记`ip`及`Mac`

> MacBook 电脑

- 1、打开网络偏好设置
- 2、选择宽带链接（一般为USB XX LAN）
- 3、填入分配好的IP地址
- 4、填写子网掩码 `255.255.0.0`
- 5、DNS -> 首选: `114.114.114.114` 次选: `8.8.8.8`

> Windows 电脑

- 1、打开控制面板
- 2、网络连接
- 3、选择你的网络 右键 -> 属性
- 4、找到Internet 协议版本4（TCP/IPv4） 双击进入
- 5、填写相关信息

## 加入工作群

- 钉钉 -> 运营组
- 微信 -> 对应小组经理
- QQ  -> 对应小组经理

## 前端环境搭建

> MacBook 电脑

- 打开终端 下载brew
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 下载Node && Npm && Git
```shell
# node version mast > 14.18
brew install node@14.18
# 你可以用 brew 下载你想下载的包
brew install git
```

[还有那些包，前往搜索](https://brew.sh/)

> Windows 电脑

- 下载对应Node和Npm软件

[NodeJs下载官网](https://nodejs.org/en/)

[Git下载官网](https://git-scm.com)

- 安装，在系统环境中添加环境
- 查看是否安装成功

```shell
# Node
node -v
# Npm
npm -v
```

::: warning 注意
安装Node会自动安装Npm
:::

> WebStorm

统一使用开发工具为 `WebStorm` [前往下载](https://www.jetbrains.com.cn/webstorm/promo/?utm_source=sogou&utm_medium=cpc&utm_campaign=cn-sogou-br-webstorm-ex-pc&utm_content=webstorm-pure&utm_term=webstorm)

::: warning 注意
2021.3.2版本及以下 可以通过reset插件无限续用

\>2021.3.2版本 只能通过`账号购买` 或者 `激活码` 激活使用
:::

## 阅读开发规范

- [开发规范](./dev.md)
- [格式化规范](./format.md)
- [技术与结构手册](./structure.md)
