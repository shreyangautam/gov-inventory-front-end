import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import VueClickAway from "vue3-click-away";

import "./index.css"


createApp(App).use(store).use(router).use(VueClickAway).mount('#app')
