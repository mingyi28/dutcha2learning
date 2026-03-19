import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initWords } from './data/words'

// 预加载单词数据
initWords().then(() => {
  createApp(App).use(router).mount('#app')
}).catch(error => {
  console.error('Failed to initialize words:', error)
  // 即使加载失败也启动应用（会使用fallback数据）
  createApp(App).use(router).mount('#app')
})