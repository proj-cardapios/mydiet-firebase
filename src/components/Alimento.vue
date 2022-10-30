<template>
  <div>
    <v-card shaped>
    <v-row class="infoalimentos">
      <v-col cols="3">
        <v-card-subtitle>
          <h2 class="alimentocard">{{idalimento.titulo}}</h2>
        </v-card-subtitle>
        <v-card-subtitle>
          Peso/Porção: {{idalimento.peso}} gramas
        </v-card-subtitle>
        <v-card-subtitle>
          Caloria: {{idalimento.calorias}} cal
        </v-card-subtitle>
      </v-col>
      <v-col cols="4">
        <v-card-subtitle>
          <h4>Porções:</h4>
        </v-card-subtitle>
        <v-card-subtitle>
          <v-btn color="#B2DFE1" text @click="Tirarporcao">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn text>{{idalimento.porcao}}</v-btn>
          <v-btn color="#4DC3C8" text @click="Addporcao">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-subtitle>
      </v-col>
      <v-col cols="3">
        <v-card-subtitle>
          Gorduras:
        </v-card-subtitle>
        <v-card-subtitle>
          Proteínas:
        </v-card-subtitle>
        <v-card-subtitle>
          Carboidratos:
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
  </div>
</template>

<script>
export default {
  props: ['idalimento'],
  data() {
  },
  methods: {
    async Addporcao() {
      this.idalimento.porcao = this.idalimento.porcao + 1
    },
    async Tirarporcao() {
      this.idalimento.porcao = this.idalimento.porcao - 1
    },
  }
}
</script>

<style scoped>
.infoalimentos {
  margin: 4px 0;
  padding-top: 2px;
  border:1px solid #4DC3C8;
}

</style>

