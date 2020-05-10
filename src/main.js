import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import OrbotDashboard from './plugins/orbot-dashboard';

Vue.config.productionTip = false;

Vue.use(OrbotDashboard);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
