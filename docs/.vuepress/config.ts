import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  // default lang
  lang: 'zh-CN',
  // default value
  base: '/',
  title: 'Vue3 Study Book',
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
            link: '',
          },
          {
            text: '前端代码格式化规范',
            link: '',
          },
          {
            text: '项目结构',
            link: '',
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
      ],
    },
    repo: 'https://github.com/2537178246/vue3-study-book.git',
  }),
})
