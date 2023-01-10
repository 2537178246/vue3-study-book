import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return defineConfig({
    base: './',
    plugins: [vue()],
  })
}
