import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

const pathSrc = path.resolve(__dirname, 'src')

export default (): UserConfigExport => {
  return defineConfig({
    base: './',
    plugins: [vue()],
  })
}
