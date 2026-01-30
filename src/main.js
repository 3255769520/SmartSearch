import { createApp } from 'vue'
import './style.css' // 👈 必须有这一行！它是连接 Tailwind 和 Vue 的桥梁
import App from './App.vue'

createApp(App).mount('#app')