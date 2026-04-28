import '@/styles/index.scss'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { setupPlugins } from './plugins'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setupPlugins(app)

app.mount('#app')
