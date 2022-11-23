<template>
  <v-card elevation="6" shaped class="vcards">
    <v-card-title>
      <h2>Perfil</h2>
    </v-card-title>
    <v-row v-for="info in infos" :key="info.id">
      <v-col  >
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
         <h3> Nome: {{info.nomeuser}}</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Email: {{info.email}} </h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Idade: {{(new Date().getFullYear() - info.idade.split("-")[0])}} anos</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Gênero: {{info.genero}} </h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
      </v-col>
      <v-col >
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Peso: {{info.peso}} kg</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Altura: {{info.altura}} cm</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle class="editcont">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#4DC3C8" v-bind="attrs" v-on="on">Editar Perfil</v-btn> 
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              <h2>Edite sua conta</h2>
            </v-card-title>

            <v-card-text>
              <v-container fluid class="body">
  <v-row>

  <v-col >
    <div class="cad" v-for="info in infos" :key="info.id">

    <v-form   >
      <v-text-field label="Nome" outlined v-model="info.nomeuser">{{info.nomeuser}}</v-text-field>
      <v-text-field label="Email" outlined v-model="info.email"></v-text-field>
      <v-text-field label="Senh a" outlined :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              v-model="user.password"></v-text-field>
      
    </v-form>
    <h3>informações necessárias</h3>
    <v-form class="form">
      <v-text-field label="Ano de Nascimento (Ex = 2004)" type="date" outlined v-model="info.idade"></v-text-field>
      <v-text-field label="Gênero" outlined v-model="info.genero"></v-text-field>
      <v-text-field label="Peso" outlined v-model="info.peso"></v-text-field>
      <v-text-field label="Altura" outlined v-model="info.altura"></v-text-field>
    </v-form>
    <h3>Alergias</h3>
    <v-checkbox
      v-model="info.gluten"
      :label="`Gluten`"
    ></v-checkbox>
    <v-checkbox
      v-model="info.lactose"
      :label="`Lactose`"
    ></v-checkbox>
    <v-checkbox
      v-model="info.frutos"
      :label="`Frutos do Mar`"
    ></v-checkbox>
        <v-btn color="#4DC3C8" @click="EditarPerfil(info)">Salvar Perfil</v-btn>

  
  </div>
    <v-row class="botoes">
      <v-col >
        <v-btn color="#B2DFE1" @click.stop="dialog= !dialog" >Cancelar</v-btn>
      </v-col>
    </v-row>
            <v-alert
              transition="scale-transition"
              v-model="alertInvalidInfo"
              dismissible
              outlined
            >Preencha todos os campos.</v-alert>
  </v-col>

  </v-row>
</v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-subtitle>
        
        <v-card-subtitile>
          <v-btn color="#B2DFE1" @click="Desconectar">Desconectar Conta</v-btn>
        </v-card-subtitile>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="11">
            <v-divider color="#B2DFE1"></v-divider>
            <v-card-subtitle>
              <h2>Calcule seu IMC</h2>
            </v-card-subtitle>
            <p>
                Com base nos dados do Usuario, o sistema calcula de forma
                automatica o deu indice de massa corporal
              </p>
            <v-divider color="#B2DFE1"></v-divider>
            <v-row class="IMCcalc">
              <v-col cols="3">
                <v-btn color="#4DC3C8" class="btncalc">Calcular</v-btn>
                
              </v-col>
              <v-col cols="9">

                <v-card-subtitle>
                  <imcresultado></imcresultado>
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import imcresultado from "./IMC_resultado.vue";
import * as fb from '@/plugins/firebase'
import { getAuth} from "firebase/auth";
import { doc } from "@firebase/firestore";

export default {
  components: { imcresultado },
  data() {
    return {
      dialog: false,
      infos:[],
      show: false,
      alertInvalidInfo: false,
      invalidInfo:false,
      user:{email:'', password:'',nome:'',genero:'',idade:'' ,peso:'',altura:'',gluten:Boolean,lactose:Boolean,frutos:Boolean}
    };
  },
  mounted(){
      this.puxaruser();
    },
  methods: {
    EditarPerfil() {
      ;
    },
    Desconectar() {
      this.$router.push({ name: "Login" });
    },
    async puxaruser(){
      this.infos = [];
      this.uid = fb.auth.currentUser.uid;
        const logPerfilUser = await fb.PerfilCollection.where("owner","==",this.uid).get();
        const auth = getAuth();
        const user = auth.currentUser;
        const email = user.email;
        for (const doc of logPerfilUser.docs) {
          this.infos.push({
            nomeuser: doc.data().Nome,
            genero: doc.data().Genero,
            email: email,
            peso: doc.data().Peso,
            altura: doc.data().altura,
            idade: doc.data().Data_nasc,
            gluten: doc.data().gluten,
            lactose: doc.data().Lactose,
            frutos: doc.data().Frutos,
            idPerfil: doc.data().idPerfil
          });
        }       
      },
      async EditarPerfil(info) {
      const idperfil = info.idPerfil
     // await fb.PerfilCollection.doc(info.idPerfil).update({
     const collection = await fb.PerfilCollection.doc(idperfil).update({
          Nome: info.nomeuser,
          Genero: info.genero,
          Data_nasc: info.idade,
          Peso: info.peso,
          altura: info.altura,
          gluten: info.gluten,
          Lactose: info.lactose,
          Frutos: info.frutos
          })
        this.puxaruser();

    },
    }
  };
</script>

<style scoped>
.editcont {
  margin: 1px 0 0 0;
}
.IMCcalc {
  margin: 1px 0 0 0;
}
.btncalc {
  margin: 1rem 0 0 0;
}
.botoes {
  padding-top: 1rem;
}
</style>
