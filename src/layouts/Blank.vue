<template>
  <v-app>
    <div class="bar">
      <img src="@/assets/MENU.jpg">
    </div>
    <router-view>   </router-view>
</v-app>
</template>

<script>
export default {

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
  max-height: 7rem;
  max-width: 7rem;
}
</style>