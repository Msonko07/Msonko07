<template>
  <v-form>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col
          sm="12"
          lg="12"
        >
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Zone de recherche avancé
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(1)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['1']">
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="search_data.entitled"
                    label="intitulé projet"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="search_data.name"
                    label="Prénom(s) et/ou nom"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-select
                    v-model="search_data.sectors"
                    :disabled="disable_sector"
                    :items="sectors"
                    item-value="id"
                    item-text="name"
                    label="Secteur"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-select
                    v-model="search_data.subsectors"
                    :items="subsectors"
                    item-value="id"
                    item-text="name"
                    label="Sous-secteur"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                >
                  <v-select
                    v-model="search_data.region"
                    :items="regions"
                    item-value="id"
                    item-text="name"
                    label="Région"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="4"
                >
                  <v-select
                    v-model="search_data.department"
                    :items="departments"
                    item-value="id"
                    item-text="name"
                    label="Département"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="4"
                >
                  <v-select
                    v-model="search_data.town"
                    :items="towns"
                    item-value="id"
                    item-text="name"
                    label="Région"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                >
                  <v-select
                    v-model="search_data.amount_type"
                    :items="amount_types"
                    item-value="id"
                    item-text="text"
                    label="le montant est ?"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="6"
                >
                  <v-text-field
                    v-model="search_data.amount"
                    label="Montant à rechercher"
                    type="number"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="info"
                class="mx-2"
                @click="resetSearch"
              >
                <v-icon class="mr-2">
                  mdi-undo
                </v-icon>
                Réinitialiser
              </v-btn>
              <v-spacer />
              <v-btn
                color="primary"
                class="mx-2"
                :disabled="!validateSearch"
                @click="search"
              >
                <v-icon class="mr-2">
                  mdi-database-search
                </v-icon>
                Rechercher
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'SearchProject',
    props: {
      sector: {
        type: String,
        default: null,
      },
    },
    data () {
      return {
        hidden: { 1: false },
        amount_types: [
          { id: 'lt', text: 'Inférieur à' },
          { id: 'lte', text: 'Inférieur ou égal à' },
          { id: 'gt', text: 'Supérieur à' },
          { id: 'gte', text: 'Supérieur ou égal à' },
          { id: 'eq', text: 'Egal à' },
        ],
        selected: null,
        disable_sector: false,
        search_data: {
          sectors: null,
          subsectors: null,
          region: null,
          department: null,
          amount: null,
          amount_type: null,
          town: null,
          name: null,
          entitled: null,
          cid: null,
          phone: null,
        },
      }
    },
    computed: {
      sectors () {
        return this.$store.state.utilities.sectors
      },
      subsectors () {
        return this.$store.getters['utilities/subsectorsInSector'](this.search_data.sectors)
      },
      regions () {
        return this.$store.state.utilities.regions
      },
      departments () {
        return this.$store.getters['utilities/departmentsInRegion'](this.search_data.region)
      },
      towns () {
        return this.$store.getters['utilities/townsInDepartment'](this.search_data.department)
      },
      validateSearch () {
        return (this.search_data.amount && this.search_data.amount_type) || this.search_data.sectors || this.search_data.subsectors ||
          this.search_data.region || this.search_data.department || this.search_data.town || this.search_data.name || this.search_data.entitled
      },
    },
    watch: {
      sector: {
        immediate: true,
        handler (val) {
          if (val) {
            this.search_data.sectors = val
            this.disable_sector = true
          }
        },
      },
    },
    methods: {
      hide (key) {
        for (const hiddenKey in this.hidden) {
          if (parseInt(hiddenKey) === parseInt(key)) {
            this.hidden[key] = !this.hidden[key]
          } else {
            this.hidden[hiddenKey] = false
          }
        }
      },
      resetSearch () {
        Object.assign(this.search_data, {
          sectors: (this.sector) ? this.sector : null,
          subsectors: null,
          region: null,
          department: null,
          amount: null,
          amount_type: null,
          town: null,
          name: null,
          entitled: null,
          cid: null,
          phone: null,
        })
        this.$emit('resetSearchData')
      },
      search () {
        this.$emit('searchData', this.search_data)
      },
    },
  }
</script>
