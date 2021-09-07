<template>
  <v-container
    id="register"
    class="fill-height justify-center"
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="9"
      >
        <v-slide-y-transition appear>
          <v-card
            class="pa-3 pa-md-5 mx-auto"
            light
          >
            <pages-heading class="text-center text-h2">
              Nouveau Utilisateur
            </pages-heading>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-text-field
                  v-model="user.firstname"
                  color="secondary"
                  label="Prénom(s)"
                  prepend-icon="mdi-face"
                  outlined
                  dense
                />

                <v-text-field
                  v-model="user.lastname"
                  color="secondary"
                  label="Nom"
                  prepend-icon="mdi-account-outline"
                  outlined
                  dense
                />

                <v-text-field
                  v-model="user.board.name"
                  color="secondary"
                  label="Direction"
                  prepend-icon="mdi-office-building"
                  outlined
                  dense
                />

                <v-text-field
                  v-model="user.board.tag"
                  color="secondary"
                  label="Acronyme Direction"
                  prepend-icon="mdi-office-building"
                  outlined
                  dense
                />

                <v-select
                  v-model="user.sectors"
                  class="mb-8"
                  :items="sectors"
                  item-text="name"
                  item-value="id"
                  label="Secteur(s)"
                  prepend-icon="mdi-alpha-s-box-outline"
                  outlined
                  dense
                  multiple
                />
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="text-center">
                  <v-text-field
                    v-model="user.email"
                    color="secondary"
                    label="Email"
                    prepend-icon="mdi-email"
                    outlined
                    dense
                  />

                  <v-text-field
                    v-model="user.phone.number"
                    color="secondary"
                    label="Téléphone"
                    prepend-icon="mdi-cellphone"
                    outlined
                    dense
                  />

                  <v-select
                    v-model="user.position"
                    :items="positions"
                    item-text="name"
                    item-value="id"
                    label="Role agent"
                    prepend-icon="mdi-alpha-s-box-outline"
                    outlined
                    dense
                    single-line
                  />
                  <v-text-field
                    v-model="user.role"
                    class="mb-8"
                    color="secondary"
                    label="Role"
                    prepend-icon="mdi-badge-account-outline"
                    outlined
                    dense
                  />
                  <pages-btn
                    color="success"
                    @click="register"
                  >
                    Enregistrer
                  </pages-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-slide-y-transition>
      </v-col>
    </v-row>
    <!-- Loading dialog-->
    <v-dialog
      v-model="loading"
      persistent
      width="300"
    >
      <v-card
        color="secondary"
        dark
      >
        <v-card-text class="white--text text-body-1">
          Veuillez patienter s'il vous plait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'PagesRegister',

    components: {
      PagesBtn: () => import('./components/Btn'),
      PagesHeading: () => import('./components/Heading'),
    },

    data: () => ({
      sections: [
        {
          icon: 'mdi-chart-timeline-variant',
          iconColor: 'primary',
          title: 'Marketing',
          text: 'We\'ve created the marketing campaign of the website. It was a very interesting collaboration.',
        },
        {
          icon: 'mdi-code-tags',
          iconColor: 'secondary',
          title: 'Fully Coded in HTML5',
          text: 'We\'ve developed the website with HTML5 and CSS3. The client has access to the code using GitHub.',
        },
        {
          icon: 'mdi-account-multiple',
          iconColor: 'cyan',
          title: 'Built Audience',
          text: 'There is also a Fully Customizable CMS Admin Dashboard for this product.',
        },
      ],
      socials: [
        {
          href: '#',
          icon: 'mdi-twitter',
          iconColor: '#1DA1F2',
        },
        {
          href: '#',
          icon: 'mdi-dribbble',
          iconColor: '#ea4c89',
        },
        {
          href: '#',
          icon: 'mdi-facebook',
          iconColor: '#3B5998',
        },

      ],
      positions: [
        { name: 'Analyste (Technique/financier)', id: 'analyste' },
        { name: 'Chargé de revu', id: 'review' },
        { name: 'Expert sectoriel', id: 'sectorOwner' },
        { name: 'Gestionnaire de portefeuille', id: 'portfolioOwner' },
        { name: 'Chargé de programme', id: 'programOwner' },
        { name: 'Chef de division', id: 'divisionOwner' },
        { name: 'Directeur', id: 'directionOwner' },
      ],
      user: {
        firstname: null,
        lastname: null,
        board: {
          name: null,
          tag: null,
        },
        email: null,
        sectors: [],
        position: null,
        phone: {
          callingCode: '221',
          number: null,
        },
        type: 'agent',
        role: 'AdminUser',
      },
    }),
    computed: {
      sectors () {
        return this.$store.state.utilities.sectors
      },
      loading () {
        return this.$store.state.utilities.loading
      },
    },
    methods: {
      register () {
        this.$store.dispatch('auth/register', this.user)
      },
    },
  }
</script>

<style lang="sass">
  #register
    .v-list-item__subtitle
      -webkic-line-clamp: initial
      -webkit-box-orient: initial
</style>
