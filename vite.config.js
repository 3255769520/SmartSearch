import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 作用：告诉 Vite，这个网站是部署在 /SmartSearch/ 这个子路径下的
  // 这样网页才能正确找到 CSS 和 JS 文件
  base: '/SmartSearch/', 
  plugins: [
    vue(),
    tailwindcss(),
  ],
})