<template>
<v-container fluid class="body">
  <v-row>
  <v-col cols="4"></v-col>
  <v-col cols="4">
    <div class="cad">
    <h2>Crie uma nova conta</h2>
    <v-form class="form">
      <v-text-field label="Nome" outlined v-model="user.nome"></v-text-field>
      <v-text-field label="Email" outlined v-model="user.email"></v-text-field>
      <v-text-field label="Senh a" outlined :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              v-model="user.password"></v-text-field>
      
    </v-form>
    <h3>informações necessárias</h3>
    <v-form class="form">
      <v-text-field label="Ano de Nascimento (Ex = 2004)" type="date" outlined v-model="user.idade"></v-text-field>
      <v-text-field label="Gênero" outlined v-model="user.genero"></v-text-field>
      <v-text-field label="Peso" outlined v-model="user.peso"></v-text-field>
      <v-text-field label="Altura" outlined v-model="user.altura"></v-text-field>
    </v-form>
    <h3>Alergias</h3>
    <v-checkbox
      v-model="user.gluten"
      :label="`Gluten`"
    ></v-checkbox>
    <v-checkbox
      v-model="user.lactose"
      :label="`Lactose`"
    ></v-checkbox>
    <v-checkbox
      v-model="user.frutos"
      :label="`Frutos do Mar`"
    ></v-checkbox>
    </div>
    <v-row class="botoes">
      <v-col cols="3">
        <v-btn color="#4DC3C8" @click="criarNovaConta">Cadastrar-se</v-btn>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="3">
        <v-btn color="#B2DFE1" @click="VoltarLogin">Cancelar</v-btn>
      </v-col>
    </v-row>
    <v-alert
              transition="scale-transition"
              v-model="userExiste"
              dismissible
              outlined
            >Este email já está em uso.</v-alert>
            <v-alert
              transition="scale-transition"
              v-model="alertInvalidInfo"
              dismissible
              outlined
            >Preencha todos os campos.</v-alert>
  </v-col>
  <v-col cols="4"></v-col>
  </v-row>
</v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
import { createUserWithEmailAndPassword , getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


export default {
    data () {
      return {
        Gluten: false,
        Lactose: false,
        Frutos: false,
        show: false,
        alertInvalidInfo: false,
        invalidInfo:false,
        userExiste: false,
        user:{email:'', password:'',nome:'',genero:'',idade:'' ,peso:'',altura:'',gluten:Boolean,lactose:Boolean,frutos:Boolean}
      }
      
    },
      rules: {
        required: (value) => !!value || "obrigatório",
        counter: (value) => value.length <= 20 || "Max 20 caracteres",
        datapadrao: (Number) =>
          value.length <= 5 || "Maximo de 5 refeições",
      },
    methods: {
    VoltarLogin() {
      this.$router.push({ name: "Login" });
    },
    async criarNovaConta() {
    try{
      if(this.user.nome == null || this.user.nome == ''||this.user.idade == null || this.user.idade == '' || this.user.email == null || this.user.email == '' || this.user.genero == null || this.user.genero == '' || this.user.peso == null || this.user.peso == '' || this.user.altura == null || this.user.altura == '' || this.user.password == null || this.user.password == ''){
        this.invalidInfo = false
        this.alertInvalidInfo = true
      }
      else{
        this.invalidInfo = true
      }
      if(this.invalidInfo == true){
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );      
      this.registrarPerfil();
      this.login();
      }
      else{
        this.alertInvalidInfo = true
      }
      }catch (error){
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/invalid-email":
            this.emailInvalid = true;
            this.user = {};
            break;
          case "auth/email-already-in-use":
            this.userExiste = true;
            this.user = {};
            break;
          default:
            this.userExiste = true;
            break;
        }
      }
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.email,
          this.user.password,
        );
        this.$router.push({ name: "Home" });
      }
      catch (error) {
        this.errologin = true;
      }
},
    async registrarPerfil(){
      this.uid = fb.auth.currentUser.uid;
      const res = await fb.PerfilCollection.add({            
        owner: this.uid,
        Nome: this.user.nome,
        Genero: this.user.genero,
        Data_nasc: this.user.idade,
        Peso: this.user.peso,
        altura: this.user.altura,
        gluten: this.user.gluten,
        Lactose: this.user.lactose,
        Frutos: this.user.frutos
        });
        const idPerfil = res.id
        await fb.PerfilCollection.doc(idPerfil).update({
          idPerfil: idPerfil
        })
      },    },
  }
</script>

<style scoped>
.botoes {
  margin-top: 1rem;
}
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
.body {
  font-family:Helvetica, sans-serif;
  padding: 0;
}
.cad {
  text-align: center;
  margin-top: 1rem;
}
.form {
  margin-top: 2rem;
}
</style>