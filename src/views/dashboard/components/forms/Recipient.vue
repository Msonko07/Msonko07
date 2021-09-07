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
          v-model="recipient.firstname"
          label="Prénom(s)"
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
          v-model="recipient.lastname"
          label="Nom"
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
          v-model="recipient.date_of_birth"
          label="Date de naissance"
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
          v-model="recipient.birthplace"
          label="Lieu de naissance"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.email"
          label="Email"
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
          v-model="recipient.phones.mobile"
          label="Téléphone personnel"
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
          v-model="recipient.phones.work"
          label="Téléphone bureau"
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
          v-model="recipient.phones.other"
          label="Autre numéro de téléphone"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.cid.type"
          label="Type de pièce"
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
          v-model="recipient.cid.number"
          label="Numéro pièce"
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
          v-model="recipient.cid.issue_date"
          label="Date de délivrance"
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
          v-model="recipient.cid.expire_date"
          label="Date d'expiration"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-select
          v-model="recipient.country_of_birth"
          :items="countries"
          item-text="name"
          item-value="id"
          label="Pays de naissance"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-select
          v-model="recipient.gender"
          :items="genders"
          item-text="name"
          item-value="id"
          label="Genre"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-select
          v-model="recipient.professional_situation"
          :items="professionalSituations"
          item-text="name"
          item-value="id"
          label="Situation professionelle"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-select
          v-model="recipient.experience"
          :items="['sans expérience', 'moins de 2 ans', 'de 2 à 5 ans', 'plus de 5 ans']"
          label="Expérience"
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
          v-model="recipient.marital_status.status"
          :items="maritalStatus"
          item-text="name"
          item-value="id"
          label="Situation matrimoniale"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.marital_status.number_of_wife"
          label="Nombre de femme(s)"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.marital_status.number_of_children"
          label="Nombre d'enfant(s)"
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
          v-model="recipient.region"
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
          v-model="recipient.department"
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
          v-model="recipient.town"
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
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.address"
          label="Adresse"
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
        <v-text-field
          v-model="recipient.legal_form.type"
          label="Est-il?"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="6"
        class="pt-0"
      >
        <v-select
          v-model="recipient.legal_form.corporate.type"
          :items="legalForms"
          item-text="name"
          item-value="id"
          label="Forme Juridique"
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
        <v-text-field
          v-model="recipient.legal_form.corporate.ninea.number"
          label="NINEA"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.legal_form.corporate.ninea.issue_date"
          label="Date de délivrance"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.legal_form.corporate.ninea.expire_date"
          label="Date de d'expiration"
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
        <v-text-field
          v-model="recipient.legal_form.corporate.rccm.number"
          label="RCCM"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.legal_form.corporate.rccm.issue_date"
          label="Date de délivrance"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="4"
        class="pt-0"
      >
        <v-text-field
          v-model="recipient.legal_form.corporate.rccm.issue_place"
          label="Lieu de délivrance"
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
            Financements public reçus
            <v-spacer />
            <v-icon
              color="primary"
              @click="incPublicFundingReceived"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item, i) in recipient.public_funding_received.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="recipient.public_funding_received[i].name"
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
                v-model="recipient.public_funding_received[i].amount"
                label="Montant reçu"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decPublicFundingReceived(i) : '' }`"
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
            Crédits en cours
            <v-spacer />
            <v-icon
              color="primary"
              @click="incCurrentCredits"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item, i) in recipient.current_credits.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="recipient.current_credits[i].name"
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
                v-model="recipient.current_credits[i].amount"
                label="Montant dû"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decCurrentCredits(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
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
            Compte(s) bancaire(s)
            <v-spacer />
            <v-icon
              color="primary"
              @click="incBankAccounts"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item, i) in recipient.bank_accounts.length"
            :key="i"
          >
            <v-col
              sm="12"
              lg="12"
              class="pt-0"
            >
              <v-text-field
                v-model="recipient.bank_accounts[i]"
                label="Banque"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decBankAccounts(i) : ''}`"
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
            Handicap ?
            <v-spacer />
            <v-icon
              color="primary"
              @click="incHandicaps"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item, i) in recipient.handicaps.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="recipient.handicaps[i].handicapped"
                label="Souffre t'il d'un handicap?"
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
                v-model="recipient.handicaps[i].type"
                label="Type d'handicap"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decHandicaps(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'Recipient',
    data () {
      return {
        recipient: {
          firstname: null,
          lastname: null,
          country_of_birth: null,
          date_of_birth: null,
          birthplace: null,
          cid: {
            number: null,
            issue_date: null,
            expire_date: null,
            type: null,
          },
          gender: null,
          phones: {
            mobile: null,
            work: null,
            other: null,
          },
          region: null,
          department: null,
          town: null,
          address: null,
          marital_status: {
            status: null,
            number_of_wife: null,
            number_of_children: null,
          },
          legal_form: {
            type: null,
            corporate: {
              type: null,
              ninea: {
                number: null,
                issue_date: null,
                expire_date: null,
              },
              rccm: {
                number: null,
                issue_date: null,
                issue_place: null,
              },
            },
          },
          professional_situation: null,
          bank_accounts: [''],
          public_funding_received: [{ name: null, amount: null }],
          current_credits: [{ name: null, amount: null }],
          handicaps: [{ handicapped: null, type: null }],
          experience: null,
        },
      }
    },
    computed: {
      countries () {
        return this.$store.state.utilities.countries
      },
      regions () {
        return this.$store.state.utilities.regions
      },
      departments () {
        return this.$store.getters['utilities/departmentsInRegion'](this.recipient.region)
      },
      towns () {
        return this.$store.getters['utilities/townsInDepartment'](this.recipient.department)
      },
      genders () {
        return this.$store.state.utilities.genders
      },
      professionalSituations () {
        return this.$store.state.utilities.professionalSituations
      },
      maritalStatus () {
        return this.$store.state.utilities.maritalStatuses
      },
      legalForms () {
        return this.$store.state.utilities.legalForms
      },
    },
    watch: {
      recipient: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('update', val)
        },
      },
      'recipient.region' (val) {
        this.recipient.department = null
      },
      'recipient.department' (val) {
        this.recipient.town = null
      },
    },
    methods: {
      incPublicFundingReceived () {
        this.recipient.public_funding_received.push({ name: null, amount: null })
      },
      decPublicFundingReceived (i) {
        this.recipient.public_funding_received.splice(i, 1)
      },
      incCurrentCredits () {
        this.recipient.current_credits.push({ name: null, amount: null })
      },
      decCurrentCredits (i) {
        this.recipient.current_credits.splice(i, 1)
      },
      incBankAccounts () {
        this.recipient.bank_accounts.push('')
      },
      decBankAccounts (i) {
        this.recipient.bank_accounts.splice(i, 1)
      },
      incHandicaps () {
        this.recipient.handicaps.push({ handicapped: null, type: null })
      },
      decHandicaps (i) {
        this.recipient.handicaps.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
