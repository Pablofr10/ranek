<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].alt"
      />
      <p>{{ produto.preco }}</p>
      <h2>{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    getProdutos() {
      fetch("http://localhost:3000/produto")
        .then((res) => res.json())
        .then((j) => {
          this.produtos = j;
        });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
</style>
