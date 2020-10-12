import Vue from 'vue';
import App from './App.vue';
import router from '@/routes.js';
import PaginaCarregando from '@/components/PaginaCarregando.vue';

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
