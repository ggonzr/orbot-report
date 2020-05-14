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
          path: '/tables',
          name: 'tables',
          component: () => import('./views/Tables/Tables.vue'),
        },
        {
          path: '/application',
          name: 'Aplicación',
          component: () => import('./views/Application/Application.vue'),
        },
        {
          path: '/design',
          name: 'Diseño de la Aplicación',
          component: () => import('./views/Design/Design.vue'),
        },
        {
          path: '/accesibility',
          name: 'Accesibilidad',
          component: () => import('./views/Accesibility/Accesibility.vue'),
        },
        {
          path: '/analytics',
          name: 'Analitica',
          component: () => import('./views/Analytics/Analytics.vue'),
        },
        {
          path: '/debugging',
          name: 'Ejecucíon',
          component: () => import('./views/Debugging/Debugging.vue'),
        },
        {
          path: '/eventual-connectivity',
          name: 'Conectividad Eventual',
          component: () => import('./views/Eventual/Eventual.vue'),
        },
      ],
    },
  ],
});
