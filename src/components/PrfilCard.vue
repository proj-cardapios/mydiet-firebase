<template>
  <v-card elevation="6" shaped class="vcards">
    <v-card-title>
      <h2>Perfil</h2>
    </v-card-title>
    <v-row>
      <v-col cols="3">
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          Nome: dsfdsg
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Email: {{infos}} </h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Idade: anos</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Gênero: </h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
      </v-col>
      <v-col cols="3">
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Peso: kg</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Altura: cm</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle class="editcont">
          <v-btn color="#4DC3C8" @click="Editarperfil">Editar Conta</v-btn>
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
                <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
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
import { getAuth} from "firebase/auth";
import * as fb from '@/plugins/firebase'
export default {
  components: { imcresultado },
  data() {
    return {
      dialog: false,
      infos:[],
    };
  },
  mounted(){
      this.puxaruser();
    },
  methods: {
    Editarperfil() {
      this.$router.push({ name: "Cadastro" });
    },
    Desconectar() {
      this.$router.push({ name: "Login" });
    },
    async puxaruser(){
      this.infos = [];
      const auth = getAuth();
      this.uid = auth.currentUser.uid;
      const Perfil = await fb.PerfilCollection.where("owner","==",this.uid).get();
      const user = auth.currentUser;
      const email = user.email;
      
    for ( const doc of Perfil) {
  // The user object has basic properties such as display name, email, etc.
  this.infos.push({
    nomeuser: doc.data().Nome,
    email: email,
  })
}
      
      }
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
</style>
