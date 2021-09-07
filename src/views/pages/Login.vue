<template>
  <v-container
    id="login"
    class="fill-height justify-center"
    tag="section"
  >
    <v-row justify="center">
      <v-slide-y-transition appear>
        <base-material-card
          color="primary"
          light
          max-width="100%"
          width="400"
          class="px-5 py-3"
        >
          <base-material-alert
            v-if="errorMessage"
            color="error"
            dark
            dismissible
          >
            <span
              class="text-uppercase"
              v-text="error"
            /> — {{ errorMessage }}
          </base-material-alert>
          <template v-slot:heading>
            <div class="text-center">
              <h1 class="text-h3 font-weight-bold mb-2">
                Connexion
              </h1>
              <div class="text-center text-body-1 font-weight-light">
                DER/FJ SENEGAL
              </div>
            </div>
          </template>

          <v-card-text class="text-center">
            <div class="text-center grey--text text-body-1 font-weight-light">
              Vos Identifiants
            </div>

            <!--<v-text-field
              color="secondary"
              label="First Name..."
              prepend-icon="mdi-face"
              class="mt-10"
            />-->

            <v-text-field
              v-model="email"
              color="primary"
              label="Email..."
              prepend-icon="mdi-email"
              class="mt-10"
            />

            <v-text-field
              v-model="password"
              class="mb-8"
              color="primary"
              label="Mot de passe..."
              type="password"
              prepend-icon="mdi-lock-outline"
            />

            <pages-btn
              large
              color=""
              :loading="loading"
              :disabled="loading"
              depressed
              class="v-btn--text success--text"
              @click="authenticate"
            >
              Se Connecter
            </pages-btn>
          </v-card-text>
        </base-material-card>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PagesLogin',

    components: {
      PagesBtn: () => import('./components/Btn'),
    },

    data: () => ({
      error: 'error',
      email: null,
      password: null,
    }),
    computed: {
      errorMessage () {
        return this.$store.getters['utilities/getError']
      },
      loading () {
        return this.$store.getters['utilities/getLoading']
      },
    },
    methods: {
      authenticate () {
        this.$store.dispatch('auth/authenticate', { email: this.email, password: this.password })
      },
    },
  }
</script>
