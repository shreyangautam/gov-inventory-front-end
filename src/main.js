import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

createApp(App).use(store).use(router).use(FontAwesomeIcon).mount('#app')
