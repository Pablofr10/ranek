<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="nome" />
    <label for="email">Email</label>
    <input id="email" name="email" type="text" v-model="nome" />
    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" v-model="nome" />
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="nome" />
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="nome" />
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="nome" />
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="nome" />
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="nome" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "usuarioForm",
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.button {
  margin-top: 10px;
  grid-column: 2;
}
</style>
