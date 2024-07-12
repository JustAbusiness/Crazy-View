
import router from './router'
import { createApp } from 'vue'
import '../src/assets/style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'



const app = createApp(App)
app.use(router)
app.use(Notifications)
app.mount('#app')
