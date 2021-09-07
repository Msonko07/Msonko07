<template>
  <v-form
    class="mt-5"
  >
    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="project.entitled"
          label="Intitulé"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-text-field
          v-model="project.description"
          label="Description"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="project.status"
          label="Statut"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-select
          v-model="project.region"
          :items="regions"
          item-text="name"
          item-value="id"
          label="Région"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-select
          v-model="project.department"
          :items="departments"
          item-text="name"
          item-value="id"
          label="Département"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-select
          v-model="project.town"
          :items="towns"
          item-text="name"
          item-value="id"
          label="Commune"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-select
          v-model="project.sectors"
          :items="sectors"
          item-text="name"
          item-value="id"
          label="Secteur(s)"
          outlined
          dense
          multiple
        />
      </v-col>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-select
          v-model="project.subsectors"
          :items="subsectors"
          item-text="name"
          item-value="id"
          label="Sous-secteur(s)"
          outlined
          dense
          multiple
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-text-field
          v-model="project.skill"
          label="Compétances"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-text-field
          v-model="project.qualification_level"
          label="Niveau de qualification"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="6"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Financements reçus dans le cadre du projet
            <v-spacer />
            <v-icon
              color="primary"
              @click="incFundingReceived"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in project.funding_received.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="project.funding_received[i].name"
                label="Nom de la structure"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="project.funding_received[i].amount"
                label="Montant reçu"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decFundingReceived(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        sm="12"
        lg="6"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Produit(s) ou Service(s)
            <v-spacer />
            <v-icon
              color="primary"
              @click="incProductOrService"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in project.product_or_service.length"
            :key="i"
          >
            <v-col
              sm="12"
              lg="12"
              class="pt-0"
            >
              <v-text-field
                v-model="project.product_or_service[i]"
                label="Produit ou service"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decProductOrService(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-text-field
          v-model="project.creation_date"
          label="Date de création"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-text-field
          v-model="project.date_of_first_activity"
          label="Date de début d'activité"
          outlined
          dense
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'Project',
    data () {
      return {
        project: {
          region: null,
          department: null,
          town: null,
          entitled: null,
          description: null,
          status: null,
          sectors: [],
          subsectors: [],
          skill: false,
          qualification_level: [null],
          funding_received: [{ name: null, amount: null }],
          product_or_service: [''],
          creation_date: null,
          date_of_first_activity: null,
        },
      }
    },
    computed: {
      regions () {
        return this.$store.state.utilities.regions
      },
      departments () {
        return this.$store.getters['utilities/departmentsInRegion'](this.project.region)
      },
      towns () {
        return this.$store.getters['utilities/townsInDepartment'](this.project.department)
      },
      sectors () {
        return this.$store.state.utilities.sectors
      },
      subsectors () {
        return this.$store.getters['utilities/subsectorsInSectors'](this.project.sectors)
      },
    },
    watch: {
      project: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('update', val)
        },
      },
      'project.region' (val) {
        this.project.department = null
      },
      'project.department' (val) {
        this.project.town = null
      },
      'project.sectors' (val) {
        this.project.subsectors = []
      },
    },
    methods: {
      incFundingReceived () {
        this.project.funding_received.push({ name: null, amount: null })
      },
      decFundingReceived (i) {
        this.project.funding_received.splice(i, 1)
      },
      incProductOrService () {
        this.project.product_or_service.push('')
      },
      decProductOrService (i) {
        this.project.product_or_service.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
