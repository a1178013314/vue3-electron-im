import { createRouter, createWebHashHistory } from 'vue-router';
import publicRouters from './publicRouters'
import useRouters from './use'
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    ...useRouters
  ]
});

export default router;
