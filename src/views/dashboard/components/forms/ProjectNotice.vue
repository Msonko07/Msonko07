<template>
  <v-container
    id="project-notice"
    fluid
    tag="section"
  >
    <v-row>
      <!-- entreprise et personne clés -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Entreprise et personnes clés"
          class="px-5 py-1"
        >
          <v-simple-table height="750">
            <tbody>
              <tr>
                <td class="text-overline">
                  Intitulé du projet
                </td>
                <td>{{ qualitative.projectEntitled }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Objet de la demande
                </td>
                <td>{{ qualitative.subjectOfTheRequest }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Montant de la demande
                </td>
                <td>{{ qualitative.amountRequest }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Forme Juridique
                </td>
                <td>{{ (project.recipient.legal_form.formalized) ? project.recipient.legal_form.corporate.type : 'Non formalisé' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Promoteur
                </td>
                <td>{{ project.recipient.firstname }} {{ project.recipient.lastname }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Age du promoteur
                </td>
                <td>{{ project.recipient.date_of_birth | getAge }} ans</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Capital
                </td>
                <td>{{ qualitative.capital }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Actionnariat (Répartition du capital)
                </td>
                <td>{{ qualitative.shareholding }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Présentation équipe dirigeante
                </td>
                <td>{{ review.management_team }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Accompagnement sur le projet
                </td>
                <td>{{ review.project_support }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Implication du promoteur dans la gestion du projet et implication financière
                </td>
                <td>{{ review.promoter_involvement }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Engagements de l'entreprise et du promoteur
                </td>
                <td>{{ review.promoter_commitment }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Nombre d'emplois actuels
                </td>
                <td>{{ numberOfEmployees }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Création d'emplois
                </td>
                <td>{{ qualitative.numberOfJobsToBeCreated }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Visite et / ou entretien effectué
                </td>
                <td>{{ qualitative.siteVisit }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
      <!-- Activité -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Activité"
          class="px-5 py-1"
        >
          <v-simple-table height="750">
            <tbody>
              <tr>
                <td class="text-overline">
                  Présentation de l'activité et du projet
                </td>
                <td>{{ review.activity_presentation }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Analyse du secteur
                </td>
                <td>{{ review.sector_analysis }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Produits et services proposés
                </td>
                <td>{{ review.product_or_service }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Clientèle
                </td>
                <td>{{ review.customers }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Stratégie commerciale
                </td>
                <td>{{ review.commercial_strategy }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Fournisseurs
                </td>
                <td>{{ review.suppliers }}</td>
              </tr>
              <!--<tr>
                <td class="overline">
                  Commercialisation
                </td>
                <td>{{}}</td>
              </tr>-->
              <tr>
                <td class="text-overline">
                  Concurrence
                </td>
                <td>{{ review.competitors }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Analyse de l'historique
                </td>
                <td>{{ review.historical_analysis }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- programme et plan -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Programme d'investissement et Plan de financement"
          class="px-5 py-1"
        >
          <v-simple-table height="500">
            <tbody>
              <tr>
                <td class="text-overline">
                  Montant des investissements déjà réalisés
                </td>
                <td>{{ qualitative.amountInvestmentsMade }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Raison du redimensionnement des investissements
                </td>
                <td>{{ resizingDetails }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Raison du redimensionnement des coûts
                </td>
                <td>{{ costResizingDetails }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Investissements proposés
                </td>
                <td>{{ investments }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  BFR proposé
                </td>
                <td>{{ totalBfrToFinance }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Coût du projet
                </td>
                <td>{{ investments + totalBfrToFinance }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Apport
                </td>
                <td>{{ totalContributionAmount }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Emprunt
                </td>
                <td>{{ totalLoan }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Garanties
                </td>
                <td>{{ qualitative.guarantees }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Plan de décaissement
                </td>
                <td>
                  <span
                    v-for="(item, i) in qualitative.disbursementPlan"
                    :key="i"
                  >
                    <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Total
                </td>
                <td>{{ totalContributionAmount + totalLoan | formatNumber }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
      <!-- compte d'explotation -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Compte d'exploitation prévisionnel"
          class="px-5 py-1"
        >
          <v-simple-table height="500">
            <tbody>
              <tr>
                <td class="text-overline">
                  Chiffre d'affaires (année 1)
                </td>
                <td>{{ turnoverIncomes.year_1 | formatNumber }} XOF</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Excédent Brut d'Exploitation (année 1)
                </td>
                <td>{{ grossOperatingSurplus.year_1 | formatNumber }} XOF</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Résultat Net (année 1)
                </td>
                <td>{{ netIncome.year_1 | formatNumber }} XOF</td>
              </tr>
              <tr>
                <td class="text-overline">
                  CAF (année 1)
                </td>
                <td>{{ caf.year_1 | formatNumber }} XOF</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Analyse des données prévisionnelles
                </td>
                <td>{{ review.forecast_data | formatNumber }} XOF</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row>
      <!-- Avis financier -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Avis DI"
          class="px-5 py-1"
        >
          <v-simple-table height="500">
            <tbody>
              <tr>
                <td class="text-overline">
                  Avis motivé
                </td>
                <td>{{ review.financial_advice }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Montant (XOF)
                </td>
                <td>{{ review.amount | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Taux d'intérêt
                </td>
                <td>{{ review.interest_rate }}%</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Durée (mois)
                </td>
                <td>{{ review.duration }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Échéance
                </td>
                <td>{{ review.deadline }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Différé (en mois)
                </td>
                <td>{{ review.deferred }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Garanties
                </td>
                <td>{{ review.guarantees }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Plan de décaissement
                </td>
                <td>
                  <span
                    v-for="(item, i) in review.disbursement_plan"
                    :key="i"
                  >
                    <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Risques identifiés
                </td>
                <td>{{ review.identified_risk }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Mitigation des riques
                </td>
                <td>{{ review.mitigation_of_risks }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Conditions suspensives
                </td>
                <td>{{ review.conditions_precedent }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Recommandations
                </td>
                <td>{{ review.recommendation }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
      <!-- avis risque -->
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Avis DRE"
          class="px-5 py-1"
        >
          <v-simple-table height="500">
            <tbody>
              <tr>
                <td class="text-overline">
                  Avis motivé
                </td>
                <td>{{ riskReview.risk_advice }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Montant (XOF)
                </td>
                <td>{{ riskReview.amount | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Taux d'intérêt
                </td>
                <td>{{ riskReview.interest_rate }} %</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Durée (mois)
                </td>
                <td>{{ riskReview.duration }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Échéance
                </td>
                <td>{{ riskReview.deadline }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Différé (en mois)
                </td>
                <td>{{ riskReview.deferred }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Garanties
                </td>
                <td>{{ riskReview.guarantees }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Plan de décaissement
                </td>
                <td>
                  <span
                    v-for="(item, i) in riskReview.disbursement_plan"
                    :key="i"
                  >
                    <strong v-if="item">{{ i + 1 }} : </strong> {{ item }} <br>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Risques identifiés
                </td>
                <td>{{ riskReview.identified_risk }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Mitigation des riques
                </td>
                <td>{{ riskReview.mitigation_of_risks }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Conditions suspensives
                </td>
                <td>{{ riskReview.conditions_precedent }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Recommandations
                </td>
                <td>{{ riskReview.recommendation }}</td>
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
    name: 'ProjectNotice',
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
      project: {
        type: Object,
        required: true,
      },
      qualitative: {
        type: Object,
        required: true,
      },
      review: {
        type: Object,
        required: true,
      },
      riskReview: {
        type: Object,
        default: null,
      },
      resizingDetails: {
        type: String,
        default: '',
      },
      costResizingDetails: {
        type: String,
        default: '',
      },
      totalLoan: {
        type: Number,
        required: true,
      },
      totalCost: {
        type: Number,
        required: true,
      },
      totalContributionAmount: {
        type: Number,
        required: true,
      },
      interestRate: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      deadline: {
        type: Number,
        required: true,
      },
      deferred: {
        type: Number,
        required: true,
      },
      investments: {
        type: Number,
        required: true,
      },
      totalBfrToFinance: {
        type: Number,
        required: true,
      },
      totalMonthlyPersonal: {
        type: Number,
        required: true,
      },
      totalMonthlyExternal: {
        type: Number,
        required: true,
      },
      numberOfEmployees: {
        type: Number,
        default: 0,
      },
      turnoverIncomes: {
        type: Object,
        required: true,
      },
      grossOperatingSurplus: {
        type: Object,
        required: true,
      },
      netIncome: {
        type: Object,
        required: true,
      },
      caf: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        guarantee: null,
        disbursement_plan: [
          '',
        ],
      }
    },
    computed: {
      resized_investments () {
        return this.investments.year_1 + this.investments.year_2 + this.investments.year_3 + this.investments.year_4 + this.investments.year_5
      },
      town () {
        const id = this.project.town
        return this.$store.getters['utilities/town'](id)
      },
    },
    watch: {
      guarantee: {
        immediate: true,
        handler (val) {
          this.$emit('guaranteeUpdate', val)
        },
      },
      disbursement_plan: {
        immediate: true,
        handler (val) {
          this.$emit('disbursementPlanUpdate', val)
        },
      },
    },
    methods: {
      incPlan () {
        this.disbursement_plan.push('')
      },
      decPlan (i) {
        this.disbursement_plan.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
