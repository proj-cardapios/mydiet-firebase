<template>
  <v-container fluid class="body">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="6">
        <v-card shaped v-for="info in infosCardapios" :key="info.id">
          <div>
            <v-card color="#4DC3C8">
              <div>
                <v-card-subtitle>
                  <h2>Nome do Cardápio</h2>
                </v-card-subtitle>
              </div>
            </v-card>
            <v-card-subtitle>
              <h4>{{ info.Titulocard }}</h4>
            </v-card-subtitle>
            <v-divider color="#4DC3C8"></v-divider>
            <v-card-subtitle>
              <h3>Comentários</h3>
            </v-card-subtitle>
            <v-divider color="#4DC3C8"></v-divider>
            <v-card-subtitle>
              <p>
                {{ info.ComentarioCard }}
              </p>
            </v-card-subtitle>
          </div>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card-subtitle>
          <h3>Adicionar uma nova refeição</h3>
        </v-card-subtitle>
        <v-card-text>
          <v-btn color="#4DC3C8" @click="formRefs = true">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-subtitle>
          <div v-for="info in infosCardapios" :key="info.id">
            <h4>Numero de refeições:</h4>
            <h4>{{ info.Numrefs }}/5</h4>
          </div>
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-alert class="formcardapio" transition="scale-transition" v-show="formRefs" elevation="6" outlined shaped>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="Campotitulo" label="Nome da refeiçãoooo" counter maxlength="20"></v-text-field>
                  <v-text-field label="Hora da refeição: XX:XX" v-model="CampoHoraRef"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" v-for="info in infosCardapios" :key="info.id">
                  <v-btn color="#4DC3C8" @click="FuncAddRefeicao(info.IdCardapio, info.Numrefs)">
                    <v-icon>mdi-plus</v-icon> Criar refeição
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="1"></v-col>
                <v-col cols="12" sm="2">
                  <v-btn color="#B2DFE1" @click="formRefs = false">
                    <v-icon>mdi-cancel</v-icon>Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-alert>
        <v-alert class="formcardapio" transition="scale-transition" v-show="AvisoMaxRefs" elevation="6" outlined shaped>
          <h1>Ja atingido numero maximo de refeições</h1>
        </v-alert>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-alert transition="scale-transition" v-model="alertInvalidInfo" dismissible outlined>O campo "Nome do
          Cardapio" é obrigatório</v-alert>
        <div>
          <v-expansion-panels>
            <v-expansion-panel v-for="refeicao in Refeicoes" :key="refeicao.id">
              <v-expansion-panel-header>
                <v-row v-for="info in infosCardapios" :key="info.id">
                  <v-col cols="3">
                    <v-checkbox> </v-checkbox>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <v-card-subtitle>

                        <h4>{{ refeicao.TituloRef }}</h4>
                      </v-card-subtitle>
                    </div>
                  </v-col>
                  <v-col cols="1">
                    <v-btn color="#4DC3C8" max-width="100px" @click="AddAlimento(refeicao.idRefeicao)">
                      <v-icon>mdi-pencil</v-icon>editar
                    </v-btn>
                  </v-col>
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <v-btn color="#B2DFE1" max-width="140px" @click="excluirRefeicao(info.NumRefs, refeicao.idRefeicao)">
                      <v-icon>mdi-delete </v-icon>Excluir
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row v-for="AlimentoRef in AlimentosRefs" :key="AlimentoRef.id">
                  <div v-if="refeicao.idRefeicao == AlimentoRef.CardapioRefeiçãoAliment"></div>
                  <v-col cols="4">
                    <ul>
                      
                      <li>{{ AlimentoRef.NomeAlimento }} ({{ AlimentoRef.PorcaoAlimento }})</li>

                    </ul>
                  </v-col>
                  <v-col cols="2">
                    {{ AlimentoRef.PesoAlimento }}
                  </v-col>
                  <v-col cols="3">
                    {{ AlimentoRef.CaloriasAlimento }}
                  </v-col>
                  <v-col cols="3">
                    {{ AlimentoRef.CaloriasAlimento }}
                    {{ AlimentoRef.CaloriasAlimento }}
                    {{ AlimentoRef.CaloriasAlimento }}
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col cols="1"></v-col>

      <v-col col="1"></v-col>
      <v-col cols="10">
        <v-alert class="formcardapio" transition="scale-transition" v-model="formAlimentos" elevation="6" outlined
          shaped>
          <v-form>
            <v-container>
              <v-row>
                <v-col>

                  <div v-for="info in infosCardapios" :key="info.id">
                    <v-card v-for="alimento in Alimentos" :key="alimento.id" shaped>
                      <v-row class="infoalimentos">
                        <v-col cols="3">
                          <v-card-subtitle>
                            <h2 class="alimentocard">{{ alimento.titulo }}</h2>
                          </v-card-subtitle>
                          <v-card-subtitle>
                            Peso/Porção: {{ alimento.peso }} gramas
                          </v-card-subtitle>
                          <v-card-subtitle>
                            Caloria: {{ alimento.calorias }} cal
                          </v-card-subtitle>
                        </v-col>
                        <v-col cols="4">
                          <v-card-subtitle>
                            <h4>Porções:</h4>
                          </v-card-subtitle>
                          <v-card-subtitle>
                            <v-btn color="#B2DFE1" text @click="TirarAlimentoEspecif(alimento,info.IdCardapio)">
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            <v-btn text>{{ alimento.porcao }}</v-btn>
                            <v-btn color="#4DC3C8" text @click="AddAlimentoEspecif(alimento,info.IdCardapio)">
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


                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4">
                  <v-btn color="#4DC3C8" @click="puxaralimentosref()">
                    <v-icon>mdi-plus</v-icon> Adiconar Alimentos
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="1"></v-col>
                <v-col cols="12" sm="2">
                  <v-btn color="#B2DFE1" @click="excluirAlimentosall()">
                    <v-icon>mdi-cancel</v-icon>Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-alert>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase';
import { db,doc, deleteDoc, collection, where, getDocs, query} from "firebase/firestore";
import Alimento from "../components/Alimento.vue";
export default {
  props: ["titulo"],
  components: {
    Alimento,
  },
  data() {
    return {
      infoAlimentosall:[{}],
      AlimentosRefs: [{}],
      Alertaerro: false,
      Nrefs: 2,
      Campotitulo: "",
      formRefs: false,
      formAlimentos: false,
      dialog: false,
      alertInvalidInfo: false,
      invalidInfo: false,
      CampoHoraRef: "",
      AvisoMaxRefs: false,
      idAlimentosAll: "",
      idcardapiolog:"",
      idRefeicaolog:"",
      idAlimentolog: "",
      infosCardapios: [{
      }],
      Refeicoes: [
        {
        }
      ],
      Alimentos: [
        {
          id: 1,
          titulo: "feijão",
          peso: 50,
          calorias: 90,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 2,
          titulo: "arroz",
          peso: 50,
          calorias: 70,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 3,
          titulo: "Alface",
          peso: 40,
          calorias: 50,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 4,
          titulo: "batata cozida",
          peso: 50,
          calorias: 80,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 5,
          titulo: "Beterraba",
          peso: 50,
          calorias: 80,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 6,
          titulo: "cenoura cozida",
          peso: 50,
          calorias: 80,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
        {
          id: 7,
          titulo: "aipim cozido",
          peso: 50,
          calorias: 80,
          porcao: 0,
          proteinas: 50,
          carboidratos: 339,
          gorduras: 86,
        },
      ],


    };
  },
  mounted() {
    
    this.puxarrefeicoes();
    this.puxaralimentosref ();
    this.puxarcardapio();
 
  },
  methods: {
    async puxarcardapio() {
      this.infosCardapios = [],
        this.uid = fb.auth.currentUser.uid;
      const CardsUser = await fb.CardapioCollection.where("DonoCardapio", "==", this.uid).where("Estaativo", "==", true).get();
      CardsUser.forEach(doc => {

          this.infosCardapios.push({
          Titulocard: doc.data().NomeCardapio,
          ComentarioCard: doc.data().ComentarioCardapio,
          IdCardapio: doc.data().idCardapio,
          EstaAtivo: doc.data().Estaativo,
          Numrefs: doc.data().NumeroRefs,
        })
        })
    },
    async puxarrefeicoes() {
      this.Refeicoes = [],
      this.uid = fb.auth.currentUser.uid;
      const CardsUser = await fb.CardapioCollection.where("DonoCardapio", "==", this.uid).where("Estaativo", "==", true).get();
      CardsUser.forEach(doc => {
        this.idcardapiolog = doc.data().idCardapio
        console.log(this.idcardapiolog)

        });
     const refscard =  await fb.CardapioCollection.doc(this.idcardapiolog).collection("Refeicoes").get();
     refscard.forEach((doc)=>{
          console.log(`${doc.id} => ${doc.data().NomeRefeicao} `);

          this.Refeicoes.push({
            TituloRef: doc.data().NomeRefeicao,
            idRefeicao: doc.data().idRefeicao
          })
        })

    },
    async puxaralimentosref (){
      this.AlimentosRefs = [];
      const CardsUser = await fb.CardapioCollection.where("DonoCardapio", "==", this.uid).where("Estaativo", "==", true).get();
      CardsUser.forEach(doc => {
        this.idcardapiolog = doc.data().idCardapio
        console.log(this.idcardapiolog)

        });
     const refscard =  await fb.CardapioCollection.doc(this.idcardapiolog).collection("Refeicoes").get();
     refscard.forEach((doc)=>{
      this.idRefeicaolog = doc.data().idRefeicao
        console.log(this.idRefeicaolog)
        });
        await fb.CardapioCollection.doc(this.idcardapiolog).collection("Refeicoes").doc(this.idRefeicaolog).collection("Alimentoseparado").get().then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
          console.log(`${doc.id} => ${doc.data().NomeAlimento},${doc.data().CardapioRefeiçãoAliment}`);
          this.AlimentosRefs.push({
            NomeAlimento: doc.data().NomeAlimento,
            AlimentoRefeicaoDono: doc.data().AlimentoRefeicaoDono,
            PorcaoAlimento: doc.data().PorcaoAlimento,
            CardapioRefeiçãoAliment: doc.data().CardapioRefeiçãoAliment,
          })
        })
      })
    },
    async FuncAddRefeicao(IdCardapio, NumRefs) {
      if (this.Campotitulo == null || this.Campotitulo == '') {
        this.invalidInfo = false
        this.alertInvalidInfo = true
      }
      else {
        this.invalidInfo = true
      }
      if (this.invalidInfo == true) {

        this.uid = fb.auth.currentUser.uid;
        const res = await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").add({
          DonoRefeicao: this.uid,
          NomeRefeicao: this.Campotitulo,
          HorarioRefeicao: this.CampoHoraRef,
          idCardrefeicao: IdCardapio,
        });
        const idRefeicao = res.id
        await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").doc(idRefeicao).update({
          idRefeicao: idRefeicao
        });
        await fb.CardapioCollection.doc(IdCardapio).update({
          NumeroRefs: NumRefs + 1
        })
      }
      NumRefs = NumRefs + 1;
      this.puxarrefeicoes();
      this.puxarcardapio();
      this.Campotitulo = "";
      this.CampoHoraRef = "";
      this.formRefs = false;

    },
    async AddAlimento(idRefeicao) {
      this.idRefeicaolog = idRefeicao
      this.formAlimentos = true
      console.log(this.idRefeicaolog)
    },
    Maxrefs() {
      if ((this.Nerefs = 5)) {
        return {
          Alertaerro: true,
        };
      }
    },
    async excluirAlimentosall() {
      this.formAlimentos = false
    },
    async excluirRefeicao(NumRefs, idRefeicao) {
    await deleteDoc(doc(fb.CardapioCollection.doc(this.idcardapiolog).collection("Refeicoes"), idRefeicao));
    if(NumRefs = 1){
          await fb.CardapioCollection.doc(this.idcardapiolog).update({
          NumeroRefs: 0
        });
    } else;
     
     if(NumRefs = 2){
          await fb.CardapioCollection.doc(this.idcardapiolog).update({
          NumeroRefs: 2 - 1
        });   
     } else;
      
     if(NumRefs = 3){
          await fb.CardapioCollection.doc(this.idcardapiolog).update({
          NumeroRefs: 3 - 1
        });     
    } else; 
     
     if(NumRefs = 4){
          await fb.CardapioCollection.doc(this.idcardapiolog).update({
          NumeroRefs: 4 -1
        });     
    } else; 
     
    if(NumRefs = 5){
          await fb.CardapioCollection.doc(this.idcardapiolog).update({
          NumeroRefs: 5 -1
        });


        
    }
    this.puxarcardapio();
    this.puxarrefeicoes();
    },
    async puxaralimentosall(){
      this.infoAlimentosall = [],
      this.uid = fb.auth.currentUser.uid;
      const alimentoUser = await fb.AlimentoCollection.where("DonoAlimento","==",this.uid).get();
      for(const doc of alimentoUser.docs) {
        this.infoAlimentosall.push({
            Donoalimento: doc.data().DonoAlimento,
            idalimentosAll:doc.data().idAlimentosAll,            
            idaefeicaoALimento: doc.data().idRefeicaoALimento,
        })
        this.idAlimentosAll = doc.data().idAlimentosAll
      }
    },
    async AddAlimentoEspecif(alimento,IdCardapio) {
      this.uid = fb.auth.currentUser.uid;
      if (alimento.porcao == 0) {
        const res = await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").doc(this.idRefeicaolog).collection("Alimentoseparado").add({
            DonoAlimento: this.uid,
            NomeAlimento: alimento.titulo,
            PesoAlimento: alimento.peso,
            CaloriasAlimento: alimento.calorias,
            ProeinasAlimento: alimento.proteinas,
            CarboidratosAlimento: alimento.carboidratos,
            GorduraAlimento: alimento.gorduras,
            PorcaoAlimento: (alimento.porcao = 1),
            Id: alimento.id,

            CardapioRefeiçãoAliment: IdCardapio
        })
        const idAlimento = res.id
        await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").doc(this.idRefeicaolog).collection("Alimentoseparado").doc(idAlimento).set({
          idAlimento: idAlimento,
          DonoAlimento: this.uid,
            NomeAlimento: alimento.titulo,
            PesoAlimento: alimento.peso,
            CaloriasAlimento: alimento.calorias,
            ProeinasAlimento: alimento.proteinas,
            CarboidratosAlimento: alimento.carboidratos,
            GorduraAlimento: alimento.gorduras,
            PorcaoAlimento: (alimento.porcao = 1),
            Id: alimento.id,

            CardapioRefeiçãoAliment: IdCardapio
        })
        this.idAlimentolog = idAlimento
      }
      else {
        await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").doc(this.idRefeicaolog).collection("Alimentoseparado").doc(this.idAlimentolog).set({
          idAlimento: this.idAlimentolog,
          DonoAlimento: this.uid,
            NomeAlimento: alimento.titulo,
            PesoAlimento: alimento.peso,
            CaloriasAlimento: alimento.calorias,
            ProeinasAlimento: alimento.proteinas,
            CarboidratosAlimento: alimento.carboidratos,
            GorduraAlimento: alimento.gorduras,
            PorcaoAlimento: (alimento.porcao + 1),
            Id: alimento.id,
            AlimentoRefeicaoDono: this.idRefeicaolog,
            CardapioRefeiçãoAliment: IdCardapio
        })

          alimento.porcao = alimento.porcao + 1

      }
    },
    async TirarAlimentoEspecif(alimento,IdCardapio) {
      await fb.CardapioCollection.doc(IdCardapio).collection("Refeicoes").collection("Alimentoseparado").doc(this.idAlimentolog).set({
          idAlimento: this.idAlimentolog,
          DonoAlimento: this.uid,
            NomeAlimento: alimento.titulo,
            PesoAlimento: alimento.peso,
            CaloriasAlimento: alimento.calorias,
            ProeinasAlimento: alimento.proteinas,
            CarboidratosAlimento: alimento.carboidratos,
            GorduraAlimento: alimento.gorduras,
            PorcaoAlimento: (alimento.porcao - 1),
            Id: alimento.id,
            AlimentoRefeicaoDono: this.idRefeicaolog,
            CardapioRefeiçãoAliment: IdCardapio
        })

          alimento.porcao = alimento.porcao - 1
    },

}
}
</script>

<style>
.infocard {
  text-align: center;
}

.porcoes {
  text-decoration-color: #4dc3c8;
}

.body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  text-align: center;
}
</style>
