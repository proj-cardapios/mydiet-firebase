<template>
  <div class="btncard">
    <v-btn color="#4DC3C8" @click="entrarCard"><v-icon>mdi-food-apple</v-icon>{{info.Titulocard}}</v-btn>
  </div>
</template>

<script>

export default {
  props:['info'],
    methods: {
        entrarCard() {
            this.$router.push({ name: "Cardapio" });
        },
    }
}
</script>

<style scoped>
.btncard {
    margin: 5px 0;
}
</style>