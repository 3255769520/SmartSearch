import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 👈 确认这里是 @vitejs/plugin-vue
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})