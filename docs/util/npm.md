
# NPM基本操作

## 源配置

### 查看当前源设置
```shell
npm config get registry
```

### 配置新的源
```shell
npm config set registry https://registry.npm.taobao.org
```

### 指定源安装
```shell
npm --registry https://registry.npm.taobao.org install <package-name>
```

> 所有的npm源如下，切换不同源安装

:::: code-group
::: code-group-item NPM官方源
```shell
npm config set registry https://registry.npmjs.org
```
:::
::: code-group-item 淘宝镜像源
```shell
npm config set registry https://registry.npm.taobao.org
```
:::
::: code-group-item HXLC镜像源
```shell
npm config set registry http://repo.hxgis.com/repository/npm-group
```
:::
::: code-group-item 天镜源配置(需代理)
```shell
// 本地
npm config set registry http://111.205.114.127:7001/
// 正式
npm config set registry 10.0.86.50:7001
```
:::
::::


## 基本操作

### 升级npm
```shell
npm install npm -g
```

### 查看

> Node && NPM版本号
```shell
node -v 
// or
node --version 

npm -v
//or
npm --version
```

> 检查模块是否需要更新
```shell
# 检查所有模块(会列出模块名 当前版本号 期望版本号 最新版本号)
npm outdated

# 检查指定模块是否需要更新
npm outdated <package-name>
# PS: npm outdated vuex
# 如果已经安装了最新版本则不提示, 如果当前模块不是最新模块则会提示
```

> 使用列表列出所有的模块和依赖, 可以运行ls、 la、 ll
```shell
# 当前项目中安装的模块
npm ls 

# 查看安装在全局环境中的包
npm ls -g
```

> 了解更多npm的安装信息
```shell
# 下面列出npm的配置信息:
npm config list

# 获取更详细的配置信息
npm config ls -l
```

### 安装

> 项目依赖
```shell
# 安装项目依赖
npm install <package-name>
npm install <package-name> --save
npm install <package-name> -S
```

> 开发依赖
```shell
# 安装开发依赖
npm install <package-name> --save-dev
npm install <package-name> -D
```
> 单独安装
```shell
// 读取项目pakage.json并安装到node_modules中
npm i
// 单独安装
npm i <package-name>
```
> 安装多个
```shell
npm i <package-name1> <package-name2> <package-name3> ...
```

> 全局安装
```shell
npm i <package-name> -g
```

> 安装指定版本
```shell
npm i <package-name>@version
```

> 安装最新版本
```shell
npm i <package-name>@latest
```
