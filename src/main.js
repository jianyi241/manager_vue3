import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.scss'
// plugins
import Loading from './components/plugin/Loading'
import Message from './components/plugin/Message'
import Confirm from './components/plugin/Confirm'
const app = createApp(App)
app.use(store).use(router).use(Loading).use(Message).use(Confirm).mount('#app')
