import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'

window?window.require = function(){
  return {}
}:null

createApp(App).use(routers). mount('#app')
