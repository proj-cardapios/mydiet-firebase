<template>
  <div>
    <v-card v-for="alimento in idalimento.Alimento" :key="alimento.id"  shaped>
    <v-row class="infoalimentos">
      <v-col cols="3">
        <v-card-subtitle>
          <h2 class="alimentocard">{{alimento.titulo}}</h2>
        </v-card-subtitle>
        <v-card-subtitle>
          Peso/Porção: {{alimento.peso}} gramas
        </v-card-subtitle>
        <v-card-subtitle>
          Caloria: {{alimento.calorias}} cal
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
          <v-btn text>{{alimento.porcao}}</v-btn>
          <v-btn color="#4DC3C8" text @click="AddAlimento(alimento,idalimento.idAlimentosAll)">
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
import * as fb from '@/plugins/firebase';

export default {
  props:['idalimento'],
  data() {
    return{
      Refeicoes:[{}],
    }
  },
  mounted(){
    this.puxarrefeicoes();
  },
  methods: {
    async puxarrefeicoes(){
        this.Refeicoes = [];
        this.uid = fb.auth.currentUser.uid;
        const RefsUser = await fb.RefeicaoCollection.where("DonoRefeicao","==",this.uid).get();
        for(const doc of RefsUser.docs){
          this.Refeicoes.push({
            idCardrefeicao: doc.data().idCardrefeicao,
            idRefeicao: doc.data().idRefeicao
          })
        }
      },
    async AddAlimentoEspecif(alimento,idAlimentosAll) {
      this.uid = fb.auth.currentUser.uid;
      if (alimento.porcao == 0 ){
        const res = await fb.AlimentoCollection.doc(this.idalimento.idAlimentosAll).update({
          alimento: [{
        NomeAlimento: alimento.titulo,
        PesoAlimento: alimento.peso,
        CaloriasAlimento: alimento.calorias,
        ProeinasAlimento:alimento.proteinas,
        CarboidratosAlimento:alimento.carboidratos,
        GorduraAlimento:alimento.gorduras,
        PorcaoAlimento: alimento.porcao + 1,
        Id: alimento.id          
        }]
        })
        alimento.porcao = alimento.porcao + 1
      }
      if(alimento.porcao > 0) {

      }
    },
    async Addporcao() {
      this.Alimentos.porcao = this.Alimentos.porcao + 1
    },
    async Tirarporcao() {
      this.Alimentos.porcao = this.Alimentos.porcao - 1
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

