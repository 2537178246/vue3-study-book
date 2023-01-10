<template>
  <template v-for="(l, i) in arr" :key="'zj-' + i">
    <h3 :id="l.label" tabindex="-1">
      <a class="header-anchor" :href="'#' + l.label" aria-hidden="true">#</a>
      {{ l.label }}
    </h3>
    <div>{{l.desc}}</div>
  </template>
</template>

<script lang="ts" setup>
const arr = [
  {
    label: 'element-plus',
    icon: 'https://element-plus.org/images/element-plus-logo.svg',
    href: 'https://element-plus.org/zh-CN/',
    desc: '基于 Vue 3，面向设计师和开发者的组件库'
  }
]
</script>
