<template>
    <v-app>
    <div class="bar">
      <img src="@/assets/MENU.jpg" @click="Entrarhome">
    </div>
    <router-view></router-view>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    }),
    methods: {
        async Entrarhome() {
            this.$router.push({ name: "Home" });
        },
        async Editarcards() {
          this.$router.push({name: "Cardapios"})
        },
        async Entrarperfil() {
          this.$router.push({name: "Perfil"})
        },
        async Entrarlogin() {
          this.$router.push({name: "Login"})
        },
      },
}
</script>

<style scoped>
.bar {
  margin-bottom: 1rem;
  background: #4DC3C8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
img {
  align-items: center;
  max-height: 7rem;
  max-width: 7rem;
}
.menu{
  margin-left: 2rem;
  margin-bottom: 5rem;
}
</style>