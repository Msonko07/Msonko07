<template>
  <v-container
    id="recipient-infos"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Informations du promoteur"
          class="px-5 py-1"
        >
          <v-simple-table>
            <tbody>
              <tr>
                <td class="text-overline">
                  Prénom (s) & Nom
                </td>
                <td>{{ recipient.firstname }} {{ recipient.lastname }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Pays de naissance
                </td>
                <td>{{ country_of_birth.name }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Date de naissance
                </td>
                <td>{{ recipient.date_of_birth | formatDate }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Age
                </td>
                <td>{{ recipient.date_of_birth | getAge }} ans</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Lieu de naissance
                </td>
                <td>{{ recipient.birthplace }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Numéro pièce
                </td>
                <td>{{ recipient.cid.number }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Date d'expiration de la pièce
                </td>
                <td>{{ recipient.cid.issue_date | formatDate }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Type de pièce
                </td>
                <td>{{ recipient.cid.type.toUpperCase() }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Genre
                </td>
                <td>{{ gender.name }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Téléphones
                </td>
                <td>{{ recipient.phones.mobile }} / {{ recipient.phones.work }} / {{ recipient.phones.other }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Localisation
                </td>
                <td>{{ region.name }} / {{ department.name }} / {{ town.name }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Adresse
                </td>
                <td>{{ recipient.address }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Situation matrimoniale
                </td>
                <td>{{ (maritalStatus) ? maritalStatus.name : '' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Forme Juridique
                </td>
                <td>{{ (recipient.legal_form.formalized !== false) ? legalForms.find(item => item.id === recipient.legal_form.corporate.type).name : 'Non formalisé' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  N° RCCM
                </td>
                <td>{{ (recipient.legal_form.formalized !== false) ? recipient.legal_form.corporate.rccm.number : 'N/A' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Date de délivrance RCCM
                </td>
                <td>{{ (recipient.legal_form.formalized !== false) ? (recipient.legal_form.corporate.rccm.issue_date | formatDate) : 'N/A' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Lieu de délivrance RCCM
                </td>
                <td>{{ (recipient.legal_form.formalized !== false) ? recipient.legal_form.corporate.rccm.issue_place : 'N/A' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  N° NINEA
                </td>
                <td>{{ (recipient.legal_form.formalized !== false) ? recipient.legal_form.corporate.ninea.number : 'N/A' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Situation professionnelle
                </td>
                <td>{{ recipient.professional_situation }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Financements public reçu
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in recipient.public_funding_received"
                    :key="i"
                  >
                    <v-col
                      v-if="item.name"
                    >
                      <strong>Structure :</strong> {{ structures.find(structure => structure.id === item.name).name }}
                    </v-col>
                    <v-col
                      v-if="item.amount"
                    >
                      <strong>Montant :</strong> {{ item.amount | formatNumber }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Crédit en cours
                </td>
                <td>
                  <span
                    v-if="recipient.current_credits.length"
                  >
                    <v-row
                      v-for="(item,i) in recipient.current_credits"
                      :key="i"
                    >
                      <v-col>
                        <strong>Structure :</strong> {{ (structures.find(structure => structure.id === item._id)) ?structures.find(structure => structure.id === item._id).name : '' }}
                      </v-col>
                      <v-col>
                        <strong>Montant :</strong> {{ item.amount | formatNumber }}
                      </v-col>
                    </v-row>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Compte(s) bancaire
                </td>
                <td>{{ recipient.bank_accounts.map(item => item).join(' - ') }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Nivau d'expérience
                </td>
                <td>{{ recipient.experience }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Nivau d'étude
                </td>
                <td>{{ recipient.level_of_study }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Nivau d'étude
                </td>
                <td>{{ recipient.contact_language }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'RecipientInfos',
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
      formatDate (value) {
        moment.locale('fr')
        if (value) {
          return moment(String(value)).format('ll')
        }
      },
      getAge (value) {
        if (value) {
          return moment().diff(moment(value, 'YYYY-MM-DD'), 'years')
        }
      },
    },
    props: {
      recipient: {
        type: Object,
        required: true,
      },
    },
    computed: {
      country_of_birth () {
        const id = this.recipient.country_of_birth
        return this.$store.getters['utilities/country'](id)
      },
      gender () {
        const id = this.recipient.gender
        return this.$store.getters['utilities/gender'](id)
      },
      maritalStatus () {
        const id = (this.recipient && this.recipient.marital_status) ? this.recipient.marital_status.status : null
        if (id) return this.$store.getters['utilities/maritalStatus'](id)
        return null
      },
      legalForms () {
        return this.$store.state.utilities.legalForms
      },
      structures () {
        const fund = this.$store.state.utilities.publicFunding
        const banks = this.$store.state.utilities.banks
        return fund.concat(banks)
      },
      region () {
        const id = this.recipient.location.region
        return this.$store.getters['utilities/region'](id)
      },
      department () {
        const id = this.recipient.location.department
        return this.$store.getters['utilities/department'](id)
      },
      town () {
        const id = this.recipient.location.town
        return this.$store.getters['utilities/town'](id)
      },
    },
  }
</script>

<style scoped>

</style>
