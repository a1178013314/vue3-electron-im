import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'
import 'ant-design-vue/dist/antd.min.css';
import antd from 'ant-design-vue';


createApp(App).use(routers).use(antd). mount('#app')
