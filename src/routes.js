import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Produto from '@/views/Produto.vue';
import Login from '@/views/Login.vue';
import Usuario from '@/views/usuario/Usuario.vue';
import UsuarioProduto from '@/views/usuario/UsuarioProdutos.vue';
import UsuarioVendas from '@/views/usuario/UsuarioVendas.vue';
import UsuarioEditar from '@/views/usuario/UsuarioEditar.vue';
import UsuarioCompras from '@/views/usuario/UsuarioCompras.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: Produto,
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/usuario',
      component: Usuario,
      children: [
        {
          path: '',
          name: 'usuario',
          component: UsuarioProduto,
        },
        {
          path: 'compras',
          name: 'compras',
          component: UsuarioCompras,
        },
        {
          path: 'vendas',
          name: 'vendas',
          component: UsuarioVendas,
        },
        {
          path: 'editar',
          name: 'usuario-editar',
          component: UsuarioEditar,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});
