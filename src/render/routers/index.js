import { createRouter, createWebHashHistory } from 'vue-router';
import publicRouters from './publicRouters'
import useRouters from './use'
import messageRouters from './message'
const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    ...useRouters,
    ...messageRouters
  ]
});

export default router;
