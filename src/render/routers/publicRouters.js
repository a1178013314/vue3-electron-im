import RouterDemoOne from '../views/RouterDemoOne.vue'
import RouterDemoTwo from '../views/RouterDemoTwo.vue'

const routes = [
  {
    path: '/',
    name: 'RouterDemoOne',
    component: RouterDemoOne,
  },
  {
    path: '/routerDemoTwo',
    name: 'RouterDemoTwo',
    component: RouterDemoTwo,
  }
];
export default routes;