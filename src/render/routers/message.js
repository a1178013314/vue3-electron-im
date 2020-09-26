const publicPath = '/message'

const routes = [
  {
    path: `${publicPath}`,
    component: () =>import('../views/information/Message.vue')
  },
];
export default routes;