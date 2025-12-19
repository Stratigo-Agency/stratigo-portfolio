import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './style.css'

// Initialize Vercel Analytics
inject()

createApp(App).use(router).use(i18n).mount('#app') 