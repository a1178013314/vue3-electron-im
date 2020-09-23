import { createRouter, createWebHashHistory } from 'vue-router';
import publicRouters from './publicRouters'
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    ...publicRouters
  ]
});

export default router;
