const publicPath = 'use'

const routes = [
  {
    path: '/',
    name: 'RouterDemoOne',
    component: import('../views/users/Login.vue')
  },
];
export default routes;