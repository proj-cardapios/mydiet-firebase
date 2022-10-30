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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card color="#B2DFE1" class="alunos">
              <v-card-subtitle><img src="@/assets/amanda_perfil.png" /></v-card-subtitle>
              <h3>Amanda Vincenzi</h3>
              <h6>Araquari</h6>
              <h6>Santa Catarina</h6>
              <p>
                ksjdfggsjkfhsfhwpikehfwkehfwkiefhwkjfhwkefhijhfskjhvkjhskjhffhskjhfsdfhjhwuhcanjcajfhakjfhakjfhkfhakfckjnawcihfaakjfchuh
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
                ksjdfggsjkfhsfhwpikehfwkehfwkiefhwkjfhwkefhijhfskjhvkjhskjhffhskjhfsdfhjhwuhcanjcajfhakjfhakjfhkfhakfckjnawcihfaakjfchuh
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-divider color="#B2DFE1"></v-divider>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-card-subtitle>
              <h2>Como foi desenvolvido?</h2>
            </v-card-subtitle>
            <v-row>
              <v-col cols="6">
                <v-card color="#B2DFE1" class="alunos">
                  <v-card-subtitle>
                    <h3> Fron-end</h3>
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                  </v-card-subtitle>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card color="#B2DFE1" class="alunos">
                  <v-card-subtitle>
                    <h3> Back-end</h3>
                  </v-card-subtitle>
                  <v-card-subtitle>
                    <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>

          </v-col>
          <v-col cols="1"></v-col>
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

