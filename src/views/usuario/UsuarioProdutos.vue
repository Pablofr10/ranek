<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="produto in usuario_produtos" :key="produto.id">
        <ProdutoItem :produto="produto">
          <p>{{ produto.descricao }}</p>
          <button class="deletar" @click="deletarProduto(produto.id)">
            Deletar
          </button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapActions, mapState } from "vuex";
import { api } from "@/services.js";
export default {
  name: "UsuarioProduto",
  components: {
    ProdutoAdicionar,
    ProdutoItem,
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"]),
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id) {
      const confirmar = window.confirm("Deseja realmente deletar este item?");
      if (confirmar) {
        api
          .delete(`produto/${id}`)
          .then(() => {
            this.getUsuarioProdutos();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },

  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  },
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
