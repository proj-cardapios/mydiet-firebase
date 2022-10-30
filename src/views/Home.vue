<template>
  <v-container fluid class="body">
    <div>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10" class="saiba">
          <v-card elevation="6" shaped class="vcards">
            <v-card-title aling-self="center">
              <h2>Quer saber mais sobre o projeto?</h2>
            </v-card-title>
            <v-card-title>
              <v-btn color="#4DC3C8" @click.stop="saibamais = !saibamais">Clique aqui</v-btn>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-card elevation="6">
    <v-alert transition="scale-transition" v-model="saibamais"  elevation="6" color="#4DC3C8">
          <Saibacard></Saibacard>
    </v-alert>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-divider color="#4DC3C8"></v-divider>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row>

        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-card class="vcards" elevation="6" outlined shaped>
            <v-card-title>
              <h2>Cardápios</h2>
            </v-card-title>
            <v-card-text>
              <Btncard :titulo="id" v-for="id in Cardapios" :key="id"></Btncard>
            </v-card-text>
            <v-card-text>
              <v-btn color="#4DC3C8" @click.stop="formcard = !formcard">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col cols="1"></v-col>



      </v-row>
      <v-row>
        <v-col cols="1"></v-col>

        <v-col cols="10">
          <v-divider color="#4DC3C8" v-show="formcard"></v-divider>
          <v-alert class="formcardapio" transition="scale-transition" v-show="formcard" elevation="6" outlined shaped>
            <v-form>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field v-model="Campotitulo" :rules="[rules.required, rules.counter]"
                      label="Nome do cardápio" counter maxlength="20"></v-text-field>
                    <v-text-field v-model="Comentario" label="Comentário" counter maxlength="80"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-btn color="#4DC3C8" @click.stop="FuncAddCardapio">
                      <v-icon>mdi-plus</v-icon> Criar cardápio
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1"></v-col>
                  <v-col cols="12" sm="2">
                    <v-btn color="#B2DFE1" @click.stop="formcard = !formcard">
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
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-divider color="#4DC3C8"></v-divider>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10" class="saiba">

          <h1>dkjhgfsdjkh{{infos.nome}}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-divider color="#4DC3C8"></v-divider>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>

import Btncard from "@/components/btncard.vue";
import PrfilCard from "../components/PrfilCard.vue";
import Saibacard from "../components/saibacard.vue";
import * as fb from '@/plugins/firebase';
import { getAuth} from "firebase/auth";


export default {
  data() {
    return {
      dialog: false,
      Comentario: "",
      Campotitulo: "",
      formcard: false,
      saibamais: false,
      infos:[{
      }],
      Cardapios: [
        {
          id: 1,
          titulo: "morte a dieta",
        },
        {
          id: 2,
          titulo: "era so uma fritura",
        },
      ],
      rules: {
        required: (value) => !!value || "obrigatório",
        counter: (value) => value.length <= 20 || "Max 20 caracteres",
        refeicoescounter: (Number) =>
          value.length <= 5 || "Maximo de 5 refeições",
      },
    };
  },
mounted(){
  this.puxaruser();
},
  methods: {
    async puxaruser(){
      const auth = getAuth();
      this.uid = auth.currentUser.uid;
      const Perfil = await fb.PerfilCollection.where("owner","==",this.uid).get();
      const user = auth.currentUser;
      const email = user.email;
      for ( const doc of Perfil.docs) {
        this.infos.push({
          nomeuser: doc.data().Nome,
          email: email,
  })
}

      
      },
    
    Editarperfil() {
      this.$router.push({ name: "Cadastro" });
    },
    Desconectar() {
      this.$router.push({ name: "Login" });
    },
    entrarCard() {
      this.$router.push({ name: "Cardapio" });
    },
    FuncAddCardapio() {
      if (this.Campotitulo) {
        this.Cardapios.push({
          titulo: this.Campotitulo,
        });
      }
      this.Campotitulo = "";
      this.Comentario = "";
    },
    
  },
  components: { Btncard, PrfilCard, Saibacard },
};
</script>

<style scoped>
.cardapios {
  margin-top: 2rem;
}

.formcardapio {
  margin-top: 2rem;
}

.body {
  font-family: 'Arial Narrow', Arial, sans-serif;
  padding: 0;
  text-align: center;
}

.bar {
  margin-bottom: 1rem;
  background: #4dc3c8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.alunos {
  padding: 0 3px;
  border-radius: 18px;
}

.saiba {
  margin-top: 2rem;
}

.icondevs {
  min-width: 3rem;
  min-height: 2rem;
}

.vcards {
  border: #B2DFE1 solid 1px
}
</style>