import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 在每隻SFC中導入共用變數檔，樣式則放vue的根檔案或main.js
        additionalData: 
        `
        @import "@/assets/variables.scss";
        `
      }
    }
  },
})
