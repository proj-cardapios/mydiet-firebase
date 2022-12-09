<template>
  <v-container fluid class="body">
        <v-row class="row">
          <v-col cols="1"></v-col>
        <v-col cols="5" class="pt-16 ctexto">     
    <v-card-text>
      <h1 class="titulologin">Monte seu cardápio </h1>
        <h1 class="titulologin">com
         base no seu objetivo</h1>
    </v-card-text>
    <v-card-text class="subtitle1">
            <h2>quem somos?</h2>
    </v-card-text>
    <v-card-text class="subtitle">

      <h4>Este site foi criado com o objetivo de ajudar as pessoas, que não tem condições de ter um nutricionista, a alcançar seu objetivo. Aqui você pode escolher entre ganhar, manter ou perder peso e de acordo com as suas informações iremos gerar a quantidade de calorias que você pode ingerir no dia para conquistar o que deseja.</h4>
    </v-card-text>
    </v-col>
    <v-col cols="2"></v-col>
    <v-col class="text-center">
            <v-form class="login">
                    <h1 class="titlelogin">login</h1>
                    <v-text-field label="Email" v-model="user.email" outlined ></v-text-field>
                    <v-text-field label="Senha" v-model="user.password" outlined :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"></v-text-field>
                    <v-btn @click="login" color="#4DC3C8">  Login  </v-btn>
                     <h4 class="titlecadastro">Quer experimentar? Clique abaixo</h4>
                    <v-btn @click="cadastrar" color="#4DC3C8"> cadastrar </v-btn>
            </v-form>
    </v-col>
            
        </v-row>
        <div class="text-center">
        <v-dialog v-model="errologin" width="500"  >

          <v-card class="erros">
            <v-card-title class="text-h5 lighten-2">
              Erro de Autenticação
            </v-card-title>

            <v-card-text>
              Email ou senha incorretas.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#4DC3C8" text @click="errologin = false">
                tentar novamente
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="text-center">
        <v-dialog v-model="contaNexit" width="500"  >

          <v-card class="erros">
            <v-card-title class="text-h5 lighten-2">
              Erro de Autenticação
            </v-card-title>

            <v-card-text>
              Email ou senha incorretas.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#4DC3C8" text>
                Criar Conta
              </v-btn>
              <v-btn color="#4DC3C8" text @click="contaNexit = false">
                Cancelar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
export default {
 data(){
  return {
    contaNexit: false,
    errologin: false,
    show: false,
    user:{email:'', password:'',nome:'', idade:'',genero:Boolean,peso:Number,altura:Number,gluten:Boolean,lactose:Boolean,frutos:Boolean}
  }
 },
 methods: {
  async cadastrar() {
      this.$router.push({ name: "Cadastro" });
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
}
    
 }
}
</script>

<style scoped>
.subtitle1{
  text-align: start;
  padding-left: 2rem;
}
.titulologin{
  font-family:'Courier New', Courier, monospace 'Arial Narrow', Arial, sans-serif;
  font-size:xx-large;
  padding-bottom: 1rem;
}

.ctexto {
  padding-left: 3rem;
  text-align: center;
}
.bar {
  margin-bottom: 1rem;
  background: #4DC3C8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.body {
  font-family:'Arial Narrow', Arial, sans-serif;
  padding: 0;
}
.login {
  text-align: center;
  max-width: 16rem;
}
.subtitle {
  text-align: start;
}
.titlelogin {
  padding-bottom: 1rem;
}
.titlecadastro {
  padding-bottom: 1rem;
  padding-top: 2rem;
}
h3 {
  font-weight: bold;
}
img {
  max-height: 7rem;
  max-width: 7rem;
}
.row {
  margin-top: 3rem;
}
.erros {
  border: #4DC3C8 solid 2px;
}
</style>