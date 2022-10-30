<template>
  <v-container fluid class="body">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="6">
        <v-card shaped>
          <div>
            <v-card color="#4DC3C8">
              <div>
                <v-card-subtitle>
                  <h2>Nome do Cardápio</h2>
                </v-card-subtitle>
              </div>
            </v-card>
            <v-card-subtitle>
              <h4>morte a dieta</h4>
            </v-card-subtitle>
            <v-divider color="#4DC3C8"></v-divider>
            <v-card-subtitle>
                  <h3>Comentários</h3>
                </v-card-subtitle>
                <v-divider color="#4DC3C8"></v-divider>
<v-card-subtitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.  
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
          <h4>Numero de refeições:</h4>
          <h4>{{ Nrefs }}/5</h4>
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-alert
          class="formcardapio"
          transition="scale-transition"
          v-show="formRefs"
          elevation="6"
          outlined
          shaped
        >
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="Campotitulo"
                    label="Nome da refeição"
                    counter
                    maxlength="20"
                  ></v-text-field>
                  <v-text-field label="Hora da refeição: XX:XX"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-btn color="#4DC3C8" @click.stop="FuncAddRefeicao">
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
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <div>
          <v-expansion-panels>
            <v-expansion-panel v-for="refeicao in Refeicoes" :key="refeicao">
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="3">
                    <v-checkbox> </v-checkbox>
                  </v-col>
                  <v-col cols="4">
                    <v-card-subtitle>
                      <h4>{{ refeicao.titulo }}</h4>
                    </v-card-subtitle>
                  </v-col>
                  <v-col cols="1">
                    <v-btn
                      color="#4DC3C8"
                      max-width="100px"
                      @click="formAlimentos = true"
                    >
                      <v-icon>mdi-pencil</v-icon>editar
                    </v-btn>
                  </v-col>
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <v-btn color="#B2DFE1" max-width="140px">
                      <v-icon>mdi-delete </v-icon>Excluir
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Para adicionar clique na opção "editar"
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="3">
                    <v-checkbox> </v-checkbox>
                  </v-col>
                  <v-col cols="4">
                    <v-card-subtitle>
                      <h4>comidinha de cria</h4>
                    </v-card-subtitle>
                  </v-col>
                  <v-col cols="1">
                    <v-btn
                      color="#4DC3C8"
                      max-width="100px"
                      @click="formAlimentos = true"
                    >
                      <v-icon>mdi-pencil</v-icon>editar
                    </v-btn>
                  </v-col>
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <v-btn color="#B2DFE1" max-width="140px">
                      <v-icon>mdi-delete </v-icon>Excluir
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="4">
                    <ul>
                      <li>Opera</li>
                    </ul>
                    <ul>
                      <li>Opera</li>
                    </ul>
                    <ul>
                      <li>Opera</li>
                    </ul>
                  </v-col>
                  <v-col cols="2">
                    sdagsgsgsg djhsdkjhsdçghsdh pdsjghslkdjgh
                  </v-col>
                  <v-col cols="3">
                    sdaggsdg çdkljgslkgj sdgkjdslgkjdsgçlsdkjgls
                  </v-col>
                  <v-col cols="3">
                    sdgdsgsdgsdgsdg sdkçjghsdkgjhsd glshjgdçlskdjhg
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
        <v-alert
          class="formcardapio"
          transition="scale-transition"
          v-show="formAlimentos"
          elevation="6"
          outlined
          shaped
        >
          <v-form>
            <v-container>
              <v-row>
                <v-col>

                    <Alimento
                      :idalimento="id"
                      v-for="id in Alimentos"
                      :key="id"
                    />
                  
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="4">
                  <v-btn color="#4DC3C8">
                    <v-icon>mdi-plus</v-icon> Adiconar Alimentos
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="1"></v-col>
                <v-col cols="12" sm="2">
                  <v-btn color="#B2DFE1" @click="formAlimentos = false">
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
import Alimento from "../components/Alimento.vue";
export default {
  props: ["titulo"],
  components: {
    Alimento,
  },
  data() {
    return {
      Alertaerro: false,
      Nrefs: 2,
      Campotitulo: "",
      formRefs: false,
      formAlimentos: false,
      dialog: false,
      Refeicoes: [
        {
          titulo: "frango e batata doce",
          id: 1,
        },
      ],
      Alimentos: [
        {
          id: 1,
          titulo: "feijão",
          peso: 50,
          calorias: 90,
          porcao: 0,
        },
        {
          id: 2,
          titulo: "arroz",
          peso: 50,
          calorias: 70,
          porcao: 0,
        },
        {
          id: 3,
          titulo: "Alface",
          peso: 40,
          calorias: 50,
          porcao: 0,
        },
        {
          id: 4,
          titulo: "batata cozida",
          peso: 50,
          calorias: 80,
          porcao: 0,
        },
        {
          id: 5,
          titulo: "Beterraba",
          peso: 50,
          calorias: 80,
          porcao: 0,
        },
        {
          id: 6,
          titulo: "cenoura cozida",
          peso: 50,
          calorias: 80,
          porcao: 0,
        },
        {
          id: 7,
          titulo: "aipim cozido",
          peso: 50,
          calorias: 80,
          porcao: 0,
        },
      ],
    };
  },
  methods: {
    async Entrarhome() {
      this.$router.push({ name: "Home" });
    },
    async Editarrefs() {
      this.$router.push({ name: "Refeicoes" });
    },
    FuncAddRefeicao() {
      this.Nrefs = this.Nrefs + 1;
      if (this.Campotitulo) {
        this.Refeicoes.push({
          titulo: this.Campotitulo,
        });
      }
      this.Campotitulo = "";
    },
    Maxrefs() {
      if ((this.Nerefs = 5)) {
        return {
          Alertaerro: true,
        };
      }
    },
  },
};
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
