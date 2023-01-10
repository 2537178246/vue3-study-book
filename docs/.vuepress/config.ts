import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  // default lang
  lang: 'zh-CN',
  // default value
  base: '/vue3StudyBook/',
  title: 'Vue3 Study Book',
  head: [],
  description: 'Vue3 下一代web开发方式，更快，更轻，易维护，更多的原生支持',
  theme: defaultTheme({
    // 头部
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'vue3',
        link: '/v3/preface.html',
      },
      {
        text: '代码规范',
        children: [
          {
            text: '前端开发规范',
            link: '/standard/dev.html',
          },
          {
            text: '前端代码格式化规范',
            link: '/standard/format.html',
          },
          {
            text: '前端技术及结构手册',
            link: '/standard/structure.html',
          },
        ],
      },
    ],
    // 侧边栏数组
    sidebar: {
      '/': [],
      '/v3': [
        {
          text: '前言',
          collapsible: true,
          link: '/v3/preface.html',
        },
        {
          text: '前置知识',
          collapsible: true,
          link: '',
        },
        {
          text: '响应式系统',
          collapsible: true,
          link: '',
        },
      ],
      '/standard': [
        {
          text: '前端开发规范',
          collapsible: true,
          link: '/standard/dev.html',
        },
        {
          text: '前端代码格式化规范',
          collapsible: true,
          link: '/standard/format.html',
        },
        {
          text: '前端技术及结构手册',
          collapsible: true,
          link: '/standard/structure.html',
        },
      ],
    },
    repo: 'https://github.com/2537178246/vue3-study-book.git',
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}
