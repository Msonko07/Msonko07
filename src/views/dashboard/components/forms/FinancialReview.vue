<template>
  <v-form
    :disabled="tag !== 'di'"
  >
    <v-container fluid>
      <v-row align="center">
        <v-col
          sm="12"
          lg="12"
        >
          <v-card
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Revue projet
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(1)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['1']">
              <!-- start review section -->
              <v-row>
                <!-- -10M & +10M -->
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  KYC promoteur(CNI, certificat de résidence)
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.kyc.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.kyc.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row
                v-if="amount > minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Informations (si société), Statuts,NINEA, états financiers(si disponibles)
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.society.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.society.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M & +10M -->
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Factures proforma, devis estimatifs (si besoin)
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.billings.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.billings.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M & +10M -->
              <v-row>
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Visite terrain effectuée
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.site_visit.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.site_visit.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- End up to 10M -->
              <!-- -10M exclut -->
              <v-row
                v-if="amount <= minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que Le profil du(es) promoteur(s)(fomations, expériences) est  adéquat par rapport au projet?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.profile.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.profile.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M exclut -->
              <v-row
                v-if="amount <= minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que les besoins de financement sont détaillés?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.financial_requirement.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.financial_requirement.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M exclut -->
              <v-row
                v-if="amount <= minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est ce que la présentation du projet est faite?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.presentation.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.presentation.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M exclut -->
              <v-row
                v-if="amount <= minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Est-ce que le marché existe ?
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.market.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.market.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- -10M exclut -->
              <v-row
                v-if="amount <= minAmount"
              >
                <v-col
                  cols="5"
                  class="text-right grey--text text-body-2"
                >
                  Caractéristiques du prêt (montant, taux, durée, différé, garantie)
                </v-col>
                <v-col
                  cols="2"
                >
                  <v-select
                    v-model="review.loan.value"
                    :items="['OK', 'NOK']"
                    label="Check"
                    outlined
                    dense
                  />
                </v-col>
                <v-col
                  cols="5"
                >
                  <v-text-field
                    v-model="review.loan.comments"
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <!-- End review section -->
            </v-card-text>
          </v-card>
          <v-row
            v-if="amount <= minAmount"
          >
            <v-col>
              <v-select
                v-model="review.financial_approbation"
                :items="advices"
                item-value="id"
                item-text="value"
                outlined
                dense
                label="Avis"
              />
              <v-textarea
                v-model="review.financial_advice"
                label="Avis projet"
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-card
            v-if="amount > minAmount"
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Entreprise et personnes clés
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(2)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['2']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Actionnariat (Répartition du capital)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.shareholding"
                    rows="2"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Présentation équipe dirigeante (formation et expérience dans le domaine d'activité et en gestion)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.management_team"
                    rows="2"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Accompagnement sur le projet (structure d'appui, conseiller externe, consultant, autres appuis.)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.project_support"
                    rows="2"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Implication du promoteur dans la gestion du projet et implication financière
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.promoter_involvement"
                    rows="2"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Engagements de l'entreprise et du promoteur (Dettes de l'entreprise et/ou dettes personnelles)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.promoter_commitment"
                    rows="2"
                    outlined
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- activity -->
          <v-card
            v-if="amount > minAmount"
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Activité
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(3)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['3']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Présentation de l'activité et du projet
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.activity_presentation"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Analyse du secteur
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.sector_analysis"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Description des produits et services - Avantage concurrentiel - Compétivité
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.product_or_service"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Marché visé (Cible)
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.target_market"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Stratégie commerciale - Canal de distribution
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.commercial_strategy"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Fournisseurs (aspects dépendance, conditions de règlement, disponibilité des intrants)
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.suppliers"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Clientèle (aspects concentration, solvabilité, pouvoir de négociation)
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.customers"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Concurrence directe et indirecte
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.competitors"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Analyse de l'historique (CA, RN, ratios…)
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.historical_analysis"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  "Analyse des données prévisionnelles
                  (Hypothèses, Modèle de revenus, Marges, Evolution de l'activité, …)"
                </v-col>
                <v-col>
                  <v-textarea
                    v-model="review.forecast_data"
                    rows="2"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card
            class="px-5 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Avis financier
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(4)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['4']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Avis motivé
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-select
                    v-model="review.financial_approbation"
                    :items="advices"
                    item-value="id"
                    item-text="value"
                    outlined
                    dense
                    label="Avis"
                  />
                  <v-textarea
                    v-model="review.financial_advice"
                    rows="3"
                    outlined
                    label="Avis projet"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Montant (XOF)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="review.amount"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Taux d'intérêt
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="review.interest_rate"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Durée (mois)
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="review.duration"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Échéance
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="review.deadline"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Différé (en mois)
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="review.deferred"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Garanties
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-model="review.guarantees"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Plan de décaissement
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-text-field
                    v-for="(item,i) in review.disbursement_plan.length"
                    :key="i"
                    v-model="review.disbursement_plan[i]"
                    class="pt-2"
                    :label="`Décaissement ${i + 1}`"
                    rows="2"
                    outlined
                    dense
                    :append-outer-icon="`${(item > 1) ? 'mdi-close-box' : 'mdi-plus-box'}`"
                    @click:append-outer="`${(item > 1) ? decPlan(i) : incPlan(i)}`"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Risques identifiés
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.identified_risk"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Mitigation des risques
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.mitigation_of_risks"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Conditions suspensives
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.conditions_precedent"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Recommandations
                </v-col>
                <v-col
                  cols="8"
                >
                  <v-textarea
                    v-model="review.recommendation"
                    rows="3"
                    outlined
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'FinancialReview',
    props: {
      amount: {
        type: Number,
        required: true,
      },
      reviewValue: {
        type: Object,
        default: null,
      },
      tag: {
        type: String,
        required: true,
      },
    },
    data () {
      return {
        minAmount: 10000000,
        hidden: { 1: false, 2: false, 3: false, 4: false },
        advices: [
          { id: 'approved', value: 'Avis favorable' },
          { id: 'rejected', value: 'Avis défavorable' },
          { id: 'waiting', value: 'Avis représenter' },
        ],
        review: {
          kyc: {
            value: null,
            comments: null,
          },
          society: {
            value: null,
            comments: null,
          },
          billings: {
            value: null,
            comments: null,
          },
          site_visit: {
            value: null,
            comments: null,
          },
          profile: {
            value: null,
            comments: null,
          },
          financial_requirement: {
            value: null,
            comments: null,
          },
          presentation: {
            value: null,
            comments: null,
          },
          market: {
            value: null,
            comments: null,
          },
          loan: {
            value: null,
            comments: null,
          },
          shareholding: null,
          management_team: null,
          project_support: null,
          promoter_involvement: null,
          promoter_commitment: null,
          activity_presentation: null,
          sector_analysis: null,
          product_or_service: null,
          target_market: null,
          commercial_strategy: null,
          suppliers: null,
          customers: null,
          competitors: null,
          historical_analysis: null,
          forecast_data: null,
          financial_advice: null,
          financial_approbation: null,
          amount: null,
          interest_rate: null,
          duration: null,
          deadline: null,
          deferred: null,
          guarantees: null,
          disbursement_plan: [],
          identified_risk: null,
          mitigation_of_risks: null,
          conditions_precedent: null,
          recommendation: null,
        },
      }
    },
    watch: {
      reviewValue: {
        immediate: true,
        deep: true,
        handler (val) {
          if (val !== null && val instanceof Object && Object.keys(val).length) {
            this.review = val
          }
        },
      },
      review: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('reviewUpdate', val)
        },
      },
      'review.disbursement_plan': {
        immediate: true,
        handler (val) {
          if (!val.length) {
            this.review.disbursement_plan.push('')
          }
        },
      },
      'review.amount': {
        immediate: true,
        handler (val) {
          if (!val) {
            this.review.amount = this.amount
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
      incPlan () {
        this.review.disbursement_plan.push('')
      },
      decPlan (i) {
        this.review.disbursement_plan.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
