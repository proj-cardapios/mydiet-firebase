<template>
  <span>
        <v-card-subtitle>
          <v-icon class="icondevs" large>mdi-account</v-icon>
          <h2>Alunos / Devs</h2>
        </v-card-subtitle>
        <v-row>
          <v-col cols="4">
            <v-card color="#B2DFE1" class="alunos">
              <v-card-subtitle><img src="@/assets/imagem_jorge2.png" /></v-card-subtitle>
              <h3>Jorge Luis Zanela</h3>
              <h6>Joinville</h6>
              <h6>Santa Catarina</h6>
              <p>
                Aluno responsavel pela grande parte da programção do site, tanto na parte front-end quanto no beck-end deselvonvendo todas as funções ncessárias para um melhor funcionamento do sistema.  
              </p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#B2DFE1" class="alunos">
              <v-card-subtitle><img src="@/assets/amanda_perfil.png" /></v-card-subtitle>
              <h3>Amanda Vincenzi</h3>
              <h6>Araquari</h6>
              <h6>Santa Catarina</h6>
              <p>
                Responsavel princilmente pela prototipação e de telas e pela parte documentada sobre o projeto, com grande relação com a engenharia do sistema.
              </p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#B2DFE1" class="alunos">
              <v-card-subtitle><img src="@/assets/maria_perfil.png" /></v-card-subtitle>
              <h3>Maria Eduarda</h3>
              <h6>Joinville</h6>
              <h6>Santa Catarina</h6>
              <p>
                Aluna que teve como foco durante o desenvolvimento do sistema todas as fases relacionadas ao banco de dados e engenharia do site. Tendo sua identidade tembame nas fases de desenvolvimentodas telas apresentadas.
              </p>
            </v-card>
          </v-col>
        </v-row>
        
      </span>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  max-height: 18rem;
  max-width: 15rem;
  border: 3px solid #4dc3c8;
  border-radius: 18px;
}

.alunos {
  padding: 0 3px;
  border-radius: 18px;
}
</style>

