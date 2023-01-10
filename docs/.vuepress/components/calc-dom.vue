<script setup lang="ts">
import {ref} from 'vue'
import { ElMessage } from 'element-plus'

interface PgwBound {
  minLon: number
  maxLon: number
  minLat: number
  maxLat: number
}

interface Point {
  x: number
  y: number
}

const textarea = ref<any>('')
const domWidth = ref<any>(null)
const domHeight = ref<any>(null)
const pgw = ref<any>('')
const crsEnum = ref<string>('EPSG_4326')

const getPgwBound = (imgWidth: number, imgHeight: number, pgwArray: number[]) => {
  const bound: PgwBound = {
    minLon: 0,
    maxLon: 0,
    minLat: 0,
    maxLat: 0
  }
  bound.minLon = pgwArray[4]
  bound.maxLon = pgwArray[4] + imgWidth * pgwArray[0]
  bound.minLat = pgwArray[5] + imgHeight * pgwArray[3]
  bound.maxLat = pgwArray[5]
  console.log(bound)
  if (crsEnum.value === 'EPSG_3857') {
    const minLonLat = mercator2LonLat(bound.minLon, bound.minLat)
    const maxLonLat = mercator2LonLat(bound.maxLon, bound.maxLat)
    bound.minLon = minLonLat.x
    bound.minLat = minLonLat.y
    bound.maxLon = maxLonLat.x
    bound.maxLat = maxLonLat.y
  }
  return bound
}
const mercator2LonLat = (x: number, y: number): Point => {
  const point: Point = {
    x: 0,
    y: 0
  }
  point.x = x / 20037508.34 * 180
  point.y = y / 20037508.34 * 180
  point.y = 180 / Math.PI * (2 * Math.atan(Math.exp(point.y * Math.PI / 180)) - Math.PI / 2)
  return point
}
const getPgw = () => {
  try {
    const width = domWidth.value * 1
    const height = domHeight.value * 1
    const arr = textarea.value.split('\n').map((item: any) => item * 1)
    const {minLon, maxLon, minLat, maxLat} = getPgwBound(width, height, arr)
    pgw.value = `[[${minLat}, ${minLon}], [${maxLat}, ${maxLon}]]`
  } catch (e) {
    ElMessage.error(`${e}`)
  }
}

</script>

<template>
  <div class="input" style="width: 80%">
    <el-select v-model="crsEnum" style="float: left;margin-bottom: 1%" class="my-2">
      <el-option label="EPSG_4326" value="EPSG_4326"></el-option>
      <el-option label="EPSG_3857" value="EPSG_3857"></el-option>
    </el-select>
    <el-input
      v-model="textarea"
      :rows="8"
      type="textarea"
      placeholder="请将输入pgw文件"
    />
    <el-input v-model="domWidth" placeholder="请输入长度" type="number" style="margin: 5px 0;"/>
    <el-input v-model="domHeight" placeholder="请输入宽度" type="number" style="margin: 5px 0;"/>
    <div style="margin-top: 1%;display: flex;align-items: center">
      <el-button type="primary" plain style="margin-right: 1%" @click="getPgw" size="small">导出</el-button>
      <el-input v-model="pgw"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  margin: 0 auto;
  padding-top: 2%;
  width: 30%;

  :deep(.el-button) {
    //background: transparent;
    padding: 0 10px;
    height: 32px;
  }
}
</style>
