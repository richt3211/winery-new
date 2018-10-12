import Vue from 'vue';
import Router from 'vue-router';
import Claim from './views/Claim.vue';
import Upgrade from './views/Upgrade.vue';
import Admin from './views/Admin.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/claim',
      name: 'claim',
      component: Claim,
    },
    {
      path: '/upgrade',
      name: 'upgrade',
      component: Upgrade,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ],
});
