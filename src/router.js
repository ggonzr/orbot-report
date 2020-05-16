import Vue from 'vue';
import Router from 'vue-router';
import DashboardLayout from '@/layout/DashboardLayout';
Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'application',
      component: DashboardLayout,
      children: [
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
          path: '/fragmentation',
          name: 'Ejecucíon',
          component: () => import('./views/Fragmentation/Fragmentation.vue'),
        },
        {
          path: '/eventual-connectivity',
          name: 'Conectividad Eventual',
          component: () => import('./views/Eventual/Eventual.vue'),
        },

        {
          path: '/permissions',
          name: 'Permisos',
          component: () => import('./views/Permissions/Permissions.vue'),
        },
        {
          path: '/integration',
          name: 'Integración',
          component: () => import('./views/Integration/Integration.vue'),
        },
        {
          path: '/performance',
          name: 'Performance',
          component: () => import('./views/Performance/Performance.vue'),
        },
        {
          path: '/code',
          name: 'Codigo y Micro-Optimizacion',
          component: () => import('./views/Code/Code.vue'),
        },
        {
          path: '/repo',
          name: 'Repositorio',
          component: () => import('./views/Repo/Repo.vue'),
        },
      ],
    },
  ],
});
