<template>
  <section>
    <h2>Crie a sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn criar" @click="criar = true">
        Criar Conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
export default {
  name: "LoginCriar",
  components: {
    UsuarioForm,
  },
  data() {
    return {
      criar: false,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.btn-from {
  max-width: 100%;
}
</style>
