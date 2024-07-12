
import router from './router'
import { createApp } from 'vue'
import '../src/assets/style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'



const app = createApp(App)
app.use(router)
app.mount('#app')
