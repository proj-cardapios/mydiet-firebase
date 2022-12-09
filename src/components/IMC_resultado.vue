<template>
  <v-row>
    <v-col cols="4">
      <v-btn color="#4DC3C8" class="btncalc" @click="calcularIMC()">Calcular</v-btn>
    </v-col>
    <v-col cols="8">

        <h4 class="h4cals">índice de massa: {{Caloriasuser}} , ( {{mensagemimc}} )</h4>

    </v-col>

  </v-row>
</template>

<script>
import * as fb from '@/plugins/firebase'

export default {
  data() {
    return {
      infos:[{}],
      dialog: false,
      Caloriasuser:"valor do ídice corporal",
      pesolog:"",
      alturalog2:"",
      mensagemimc:"estado atual",
    }; 
  },
  mounted() {
    
    this.puxaruser();
 
  },
 
  methods: {
    async calcularIMC() {
     this.alturalog2 = this.alturalog2 / 100;
     const result = this.pesolog / (this.alturalog2 * this.alturalog2);
      this.Caloriasuser = result.toFixed(1);
      this.verificarIMC()
},
  async verificarIMC() {
  if (this.Caloriasuser < 17) {
    this.mensagemimc = ("Muito abaixo do peso")
  } else if (this.Caloriasuser > 17 && this.Caloriasuser <= 18.49){
    this.mensagemimc = ("Abaixo do peso")
  } else if (this.Caloriasuser >= 18.5 && this.Caloriasuser <= 24.99){
    this.mensagemimc = ("Peso normal")
  } else if (this.Caloriasuser >= 25 && this.Caloriasuser <= 29.99){
    this.mensagemimc = ("Acima do peso")
  } else if (this.Caloriasuser >= 30 && this.Caloriasuser <= 34.99){
    this.mensagemimc = ("Obesidade I")
  } else {
    this.mensagemimc = ("Obesidade II")
  }
},
  async puxaruser(){
      this.infos = [];
      this.uid = fb.auth.currentUser.uid;
        const logPerfilUser = await fb.PerfilCollection.where("owner","==",this.uid).get();
        logPerfilUser.forEach(doc => {
          this.pesolog = doc.data().Peso
          this.alturalog2 = doc.data().altura
        console.log(this.pesolog, this.alturalog2)  
      });
    }
  }
}
</script>

<style>
.h4cals{
  text-align: left;
  margin: 6px 0 0 0
}
</style>