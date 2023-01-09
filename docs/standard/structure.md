# 前端技术及结构手册

该手册适用于前端vue3项目模版

明确项目文件结构规范
## 技术框架
Vue3-Vite-TypeScript-Pinia-TailwindCss

### **Vue3**

  Vue (发音为 **/vjuː/**，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
  
  [前往官网](https://cn.vuejs.org/)

  [小知识阅读](/v3)
### **Vite**
  
  版本（V2）,后续考虑升级V3

  最低Node版本 👉 <Badge type="tip" text="14.18" vertical="middle" />

  Vite（法语意为 "快速的"，发音 **/vit/**，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验。

  [前往官网](https://v2.vitejs.dev/)
### **TypeScript**

  <span style="color: #f3a22b;font-size: 24px;">JavaScript的超集</span>

  TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。

  TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。

  [小知识阅读](/ts)

  [前往官网](https://www.tslang.cn/)
### **Pinia**

  Pinia（发音为 **/piːnjʌ/**，类似于英语中的“peenya”）是最接近有效包名 piña（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。

  [前往官网](https://pinia.web3doc.top/)
### **TailwindCss**

  相对于**语义化类名**，原子化Css能够快速建立现代网站。

  [前往官网](https://www.tailwindcss.cn/docs)
## 组件库
element-plus(element-ui的vue3版本)
https://element-plus.gitee.io/zh-CN/component/button.html

## 安装与使用
1. 创建git
   Project path:front/2022(2022为项目创建年份，2023年则改为2023)
   New subgroup  创建项目git组（使用串式命名，例如hubei-live）description  项目全称

2. 代码模板
   基础模板 https://hxgit.hxgis.com/front/vue3-template.git
   三维模板 https://hxgit.hxgis.com/front/2022/vite-3d-template（待完善）

3. fork模板代码
   从 [GIT](https://hxgit.hxgis.com/front/vue3-template.git) 上 `fork` (派生) 个新项目到刚建的项目子群组里, 然后进行重命名. **(注意: `Project name` 和 `Path` 都要改.)**
   Project name:使用串式命名（第一个为项目地区 例如 hubei-live-traffic）
   Project description (optional): 系统名称


4. npm install

5. npm run dev

6. 格式化配置
   IDE工具：webstorm
   设置->语言和框架->javascript->代码质量工具->ESLint
   勾选保存时运行

1. 编写REDEME.md文档
```
 项目名称👇
  湖北交通气象服务项目
 系统名称👇
 	产品显示系统

- 启动时间👇
  2022-10-17

- 开发人员👇

    - 项目经理
      候华虎
    - 前端
      余以功、黄雯、梅阳
    - 后端
      王荣翰、冯帆、周坤、袁龙飞

- swagger 地址👇
  http://10.104.95.20:8077/hbjt/doc.html#/default/%E5%A4%A9%E6%B0%94%E8%AF%A6%E6%83%85%E8%BD%AC%E5%8F%91/getWeatherByTimeRangeUsingGET

- 线上地址👇


- jenkins 地址👇


- 登录账号-密码👇

```
## 项目结构
```
--public
--src
	|--api
  |--assets
  |--components
  |--hooks
  |--i18n
  |--services
  |--store
  |--types
  |--view
  App.vue
  config.json
  env.d.ts
  main.ts
  permission.ts
  router.ts
.env.development
.env.production
.eslintignore
.eslintrc.js
.gitignore
env.d.ts
index.html
package.json
README.md
tsconfig.json
vite.config.ts
```

## 项目结构描述
### public文件夹
静态资源文件，存放的文件不会经过vite处理，存放geojson或者第三方js插件

### src文件夹

#### api 接口管理文件夹
1. 文件命名按照view模块命名，层级最多不超过2层，
1. 定义的接口函数（默认后端接口名称保持一致），如果接口名称不规范，前缀加模块名称
1. 参数type定义类型
1. 接口注释（默认与接口文档一致）
```typescript
/**
 * 获取城市地址
 * @param params
 */
export const getOnceArea = (params: {
  cityCode: string,
  dataType: string,
  dataName: string,
}) => tRequest.get({
  url: '/api/monitor/dataflow/getOnceArea',
  params
})

/**
 * 上传单张图片为ppt内容
 * @param data
 */
export const uploadImage = (data: {
  file:File
})=> {
  tRequest.post({
    url: '/ppt/pptModelConfigs/uploadImage',
    data
  })
}
```

##### 接口参数
showLoading 全屏加载动画，默认为true
useCompress 压缩响应数据
useCompressWithCache 压缩并缓存响应数据



#### assets
静态资源
1. 文件夹css、img、json、font等
1. img与json 存放位置按照view目录结构一一对应存放
1. 公共资源如预警图片单独在img根目录创建文件夹存放

#### components
1.一个组件一个文件夹
2.组件需要的静态资源存放到文件夹下（例如img）

#### hooks
> Hooks -> 钩子

- Hooks并不是全新的技术，它是一种开发思想，在hooks目录下新建模块->useXXX.ts
- 可以利用Hook函数 把相关代码剥离出去，减少冗余代码
- Hooks 函数以use开头（类似vue2 mixin $_XX_XX）小驼峰式命名：useFileHome
- 复用 **高内聚低耦合** 可塑性高

例一
```typescript
import config from '../../config.json'

export const useStorage = new class {
  private readonly _localName: string;
  constructor(localName: string) {
    this._localName = localName
  }
  getStorage() {
    return JSON.parse(window.localStorage.getItem(this._localName)) || {}
  }
  setItem(key: string, val: any) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(this._localName, JSON.stringify(storage))
  }
  clearItem(key: string) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(this._localName, JSON.stringify(storage))
  }
  clearAll() {
    window.localStorage.clear()
  }
}(config.LocalName)
// const useStorage = new UseStorage
```
--> use
```typescript
import { useStorage } from '@/hooks'

useStorage.setItem('userinfo', data)
useStorage.clearAll()
```

例二
```typescript
import { computed, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => (vm.proxy?.$props as any)[name] ?? undefined)
}
```
--> use
```typescript
import { useProp } from '@/hooks'

const props = withDefaults(defineProps<{
  button: string
}>(), {
  button: ''
})
const button = useProp<string>('button')
```

更多工具hooks请访问 --> [VueUse](https://vueuse.org/)

#### types ts类型定义
文件名称与view目录一致，目录结构不超过两层，按照路由目录创建
最终统一在index.ts中暴露
在其他项目中 import引入使用

typescript的目的是提升代码质量，提升可维护性
```typescript
export interface LoginType {
  username?: string,
  password?: string
}
```

> 注意

vue3 prop 暂不支持 外部引入type

错误示例
```typescript
import { LoginType } from 'types'

const props = withDefaults(defineProps<LoginType>(), {
  username: '章三',
  passwoard: '123'
})

// or

const props = defineProps<LoginType>({
  username: '章三',
  passwoard: '123'
})

/** 
[@vue/compiler-sfc] type argument passed to defineProps() must be a literal type, or a reference to an interface or literal type.
**/
```

正确示例
```typescript
interface LoginType {
  username?: string,
  password?: string
}

const props = withDefaults(defineProps<LoginType>(), {
  username: '章三',
  passwoard: '123'
})

// or

const props = withDefaults(defineProps<{
  username?: string,
  passwoard: string
}>(), {
  username: '章三',
  passwoard: '123'
})


// 注：请使用withDefaults来进行props传值
```

学习如何使用TypeScript? --> [TypeScript](https://www.tslang.cn/)

#### store
使用pinia插件 https://pinia.web3doc.top/
目录结构按照view目录创建

#### i18n 国际化
->数据字典定义
数据字典按照页面模块划分（例如home\monitor2个模块）
```typescript
// 中文语言包：\src\i18n\lang\zh-cn.ts
export default {
  home: {
    name: '这是首页'
  },
  monitor: {
    name: '这是监测'
  }
}
// 英文语言包：\src\i18n\lang\en.ts
export default {
  home: {
    name: 'this is home'
  }
}
```
->使用
```typescript
import { useI18n } from 'vue-i18n'// 要在js中使用国际化
const { t } = useI18n()
 t('home.name')
```
->中英文切换
```typescript
import i18n from ’@/i18n‘
i18n.locale = 'zhCn' //中文
i18n.locale = 'en' //英文
```


#### view 用于存放所有的页面
1. 文件夹命名规范 串式命名 monitor-radar
1. 文件夹下index.vue以及子模块
1. index.vue dom模板创建
```typescript
<template>

</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">

</style>

#### router.ts 页面路由
  
```typescript
export const routeList: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('./view/home/index.vue')
  }, {
    path: '/suntray',
    name: '控制台',
    component: () => import('@/view/control/index.vue'),
    redirect: '/suntray/my-apply',
    children: [
      {
        path: 'my-apply',
        name: '我的应用',
        component: () => import('@/view/control/my-apply/index.vue')
      },
      {
        path: 'my-service',
        name: '我的服务',
        component: () => import('@/view/control/my-service/index.vue')
      }
    ]
  },]
```

### .env.development与.env.production
开发环境与生产环境
使用全局变量
.env.development
```typescript
VITE_NODE_ENV = 'development'
VITE_APP_MAP_IP = ''
```
.env.production
```typescript
VITE_NODE_ENV = 'production'
VITE_APP_MAP_IP = '10.104.192.14'
```
->使用
```typescript
import.meta.env.VITE_APP_MAP_IP 
```

### vite.config.js
1. server.proxy 配置代理
```typescript
//代理
'/data': {
  target: 'http://10.104.235.42:9990',
  changeOrigin: true,
  ws: true
}
  ```
1. base 开发或生产环境服务的公共基础路径
```typescript
//文件中添加配置
base: '/hbweb/typhoon/'
//打包后的文件
<link rel="stylesheet" href="/hbweb/typhoon/assets/index.7676276e.css">
  ```


## 相关链接
源配置：http://wiki.hxgis.com/zh/public/docs/hxlc-ui/new-page
前端开发规范：http://wiki.hxgis.com/zh/public/docs/web-development-guide
组件通信：https://juejin.cn/post/7161718828970278949
pinia中文文档：https://pinia.web3doc.top/
vue3中文文档：https://cn.vuejs.org/
vue3生命周期：http://wiki.hxgis.com/zh/public/docs/new-page






 







