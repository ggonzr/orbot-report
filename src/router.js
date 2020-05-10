import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '@/layout/DashboardLayout';
Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/Dashboard/Dashboard.vue'),
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import('./views/Icons.vue'),
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import('./views/Tables/Tables.vue'),
        },
      ],
    },
  ],
});
